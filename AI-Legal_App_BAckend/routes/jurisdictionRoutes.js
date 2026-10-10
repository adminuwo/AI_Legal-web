import express from 'express';
import { verifyToken } from '../middleware/authorization.js';
import User from '../models/User.js';
import { runJurisdictionSandboxTest } from '../services/jurisdictionSandboxService.js';
import { getStatesForCountry, INDIAN_STATES_LIST, NEPAL_PROVINCES } from '../constants/jurisdictionConstants.js';
import { jurisdictionManager } from '../services/jurisdictionManager.js';
import { jurisdictionContentService } from '../services/jurisdictionContentService.js';
import logger from '../utils/logger.js';

const router = express.Router();

/**
 * @route   GET /api/jurisdictions/states
 * @desc    Get states / provinces for a given country name or code
 * @query   country (e.g. India, Nepal, IN, NP)
 */
router.get('/states', (req, res) => {
    try {
        const country = req.query.country || req.query.countryCode || 'India';
        const states = getStatesForCountry(country);
        return res.json({
            success: true,
            country,
            count: states.length,
            states
        });
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Failed to get states: ${err.message}`);
        return res.status(500).json({ success: false, message: 'Failed to retrieve states list.' });
    }
});

/**
 * @route   GET /api/jurisdictions/countries/:countryCode/states
 * @desc    Get states for a specific country code parameter
 */
router.get('/countries/:countryCode/states', (req, res) => {
    try {
        const { countryCode } = req.params;
        const states = getStatesForCountry(countryCode);
        return res.json({
            success: true,
            countryCode,
            count: states.length,
            states
        });
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Failed to get states for ${req.params.countryCode}: ${err.message}`);
        return res.status(500).json({ success: false, message: 'Failed to retrieve states list.' });
    }
});

/**
 * @route   POST /api/jurisdictions/test
 * @desc    Run an isolated jurisdiction test without mutating any user account
 * @body    { query, country, state, model }
 */
router.post('/test', async (req, res) => {
    try {
        const { query, country, state, model } = req.body;
        if (!query || !query.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Test query is required.'
            });
        }

        const result = await runJurisdictionSandboxTest({
            query,
            country: country || 'India',
            state: state || '',
            userId: req.user?.id || 'mobile_sandbox',
            model: model || 'gemini-3.5-flash'
        });

        return res.json(result);
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Sandbox test failed: ${err.message}`);
        return res.status(500).json({
            success: false,
            message: err.message || 'Jurisdiction test execution failed.'
        });
    }
});

/**
 * @route   GET /api/jurisdictions/my-jurisdiction
 * @desc    Retrieve the logged-in user's active legal jurisdiction
 */
router.get('/my-jurisdiction', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('country countryCode state jurisdiction legalJurisdiction personalizations');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const activeJurisdiction = user.legalJurisdiction?.country ? user.legalJurisdiction : {
            country: user.country || user.personalizations?.general?.country || user.jurisdiction || 'India',
            countryCode: user.countryCode || user.personalizations?.general?.countryCode || 'IN',
            state: user.state !== undefined ? user.state : (user.personalizations?.general?.state || ''),
            jurisdictionType: (user.state || user.personalizations?.general?.state) ? 'state' : 'national',
            savedAt: user.updatedAt,
            source: 'profile_default'
        };

        return res.json({
            success: true,
            jurisdiction: activeJurisdiction
        });
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Get my jurisdiction failed: ${err.message}`);
        return res.status(500).json({ success: false, message: 'Failed to retrieve user jurisdiction.' });
    }
});

/**
 * @route   PUT /api/jurisdictions/my-jurisdiction
 * @desc    Save the user's permanent legal jurisdiction
 * @body    { country, countryCode, state, jurisdictionType }
 */
router.put('/my-jurisdiction', verifyToken, async (req, res) => {
    try {
        const { country, countryCode, state, jurisdictionType } = req.body;
        if (!country || !country.trim()) {
            return res.status(400).json({ success: false, message: 'Country is required.' });
        }

        const cleanCountry = country.trim();
        const cleanState = (state || '').trim();
        const cleanCode = (countryCode || '').trim();

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const resolvedCode = cleanCode || (cleanCountry.toLowerCase() === 'nepal' ? 'NP' : (cleanCountry.toLowerCase() === 'india' ? 'IN' : 'GLOBAL'));

        // Update top-level country, state, and jurisdiction fields for backwards compatibility
        user.country = cleanCountry;
        user.countryCode = resolvedCode;
        user.jurisdiction = cleanCountry;
        user.state = cleanState;

        // Update dedicated legalJurisdiction subdocument
        user.legalJurisdiction = {
            country: cleanCountry,
            countryCode: resolvedCode,
            state: cleanState,
            jurisdictionType: jurisdictionType || (cleanState ? 'state' : 'national'),
            savedAt: new Date(),
            source: 'user_settings'
        };

        // Also sync personalizations.general if present
        if (!user.personalizations) user.personalizations = {};
        if (!user.personalizations.general) user.personalizations.general = {};
        user.personalizations.general.country = cleanCountry;
        user.personalizations.general.countryCode = resolvedCode;
        user.personalizations.general.jurisdiction = cleanCountry;
        user.personalizations.general.state = cleanState;
        user.markModified('personalizations');

        await user.save();
        logger.info(`[JurisdictionRoutes] Saved legal jurisdiction for user ${user._id}: ${cleanState ? cleanState + ', ' : ''}${cleanCountry}`);

        return res.json({
            success: true,
            message: 'Legal jurisdiction saved successfully.',
            jurisdiction: user.legalJurisdiction,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                country: user.country,
                countryCode: user.countryCode,
                jurisdiction: user.jurisdiction,
                state: user.state,
                legalJurisdiction: user.legalJurisdiction,
                personalizations: user.personalizations
            }
        });
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Save jurisdiction failed: ${err.message}`);
        return res.status(500).json({ success: false, message: 'Failed to save legal jurisdiction.' });
    }
});

/**
 * @route   GET /api/jurisdictions/content/articles
 * @desc    Get articles and guides strictly isolated by jurisdiction
 * @query   countryCode, country, subject, search
 */
router.get('/content/articles', (req, res) => {
    try {
        const { countryCode, country, subject, search } = req.query;
        const targetCode = countryCode || (country && country.toLowerCase() === 'nepal' ? 'NP' : 'IN');
        const result = jurisdictionContentService.getArticles({
            countryCode: targetCode,
            subject,
            search
        });
        return res.json(result);
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Get content articles failed: ${err.message}`);
        return res.status(500).json({ success: false, message: 'Failed to retrieve jurisdiction articles.' });
    }
});

/**
 * @route   GET /api/jurisdictions/content/articles/:id
 * @desc    Get single article with strict cross-jurisdiction access validation
 * @query   countryCode
 */
router.get('/content/articles/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { countryCode, country } = req.query;
        const targetCode = countryCode || (country && country.toLowerCase() === 'nepal' ? 'NP' : 'IN');
        
        const result = jurisdictionContentService.getArticleById(id, targetCode);
        if (!result.success) {
            return res.status(result.status || 400).json(result);
        }
        return res.json(result);
    } catch (err) {
        logger.error(`[JurisdictionRoutes] Get article detail failed: ${err.message}`);
        return res.status(500).json({ success: false, message: 'Failed to retrieve article details.' });
    }
});

export default router;
