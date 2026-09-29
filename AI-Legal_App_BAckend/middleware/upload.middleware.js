import { upload } from '../services/cloudinary.service.js';
import logger from '../utils/logger.js';

const uploadMiddleware = (req, res, next) => {
    // Support 'file', 'document', or any field name seamlessly
    const uploader = upload.any();

    uploader(req, res, (err) => {
        if (err) {
            logger.error(`Upload Error: ${err.message}`);
            return res.status(400).json({
                success: false,
                message: err.message || 'File upload failed'
            });
        }
        // Normalize req.file so downstream controllers get the file regardless of field name
        if (req.files && req.files.length > 0) {
            req.file = req.files.find(f => f.fieldname === 'file') ||
                       req.files.find(f => f.fieldname === 'document') ||
                       req.files[0];
        }
        next();
    });
};

export default uploadMiddleware;
