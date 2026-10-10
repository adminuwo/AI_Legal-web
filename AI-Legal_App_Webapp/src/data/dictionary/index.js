// AI LEGAL™ — Complete Legal Dictionary & Jurisprudence Knowledge Engine
// Master Aggregator with 14-Section Deep Jurisprudence Schema & Backward Compatibility

import { LATIN_MAXIMS_TERMS } from './latinMaxims.js';
import { CONSTITUTIONAL_DOCTRINES_TERMS } from './constitutionalDoctrines.js';
import { CRIMINAL_LAW_TERMS } from './criminalLawTerms.js';
import { CRIMINAL_PROCEDURE_TERMS } from './criminalProcedureTerms.js';
import { CIVIL_PROCEDURE_TERMS } from './civilProcedureTerms.js';
import { EVIDENCE_LAW_TERMS } from './evidenceLawTerms.js';
import { COMMERCIAL_CONTRACT_TERMS } from './commercialContractTerms.js';
import { TORT_LIABILITY_TERMS } from './tortLiabilityTerms.js';
import { PROPERTY_LAND_TERMS } from './propertyLandTerms.js';
import { ARBITRATION_ADR_TERMS } from './arbitrationAdrTerms.js';
import { JURISPRUDENCE_DOCTRINES } from './jurisprudenceDoctrines.js';
import { NEPAL_LEGAL_TERMS } from './nepalTerms.js';
import { US_LEGAL_TERMS } from './usTerms.js';
import { UK_LEGAL_TERMS } from './ukTerms.js';
import { INTERNATIONAL_LEGAL_TERMS } from './internationalTerms.js';

export const LATIN_MAXIMS = LATIN_MAXIMS_TERMS;
export const CONSTITUTIONAL_DOCTRINES = CONSTITUTIONAL_DOCTRINES_TERMS;

export {
  LATIN_MAXIMS_TERMS,
  CONSTITUTIONAL_DOCTRINES_TERMS,
  CRIMINAL_LAW_TERMS,
  CRIMINAL_PROCEDURE_TERMS,
  CIVIL_PROCEDURE_TERMS,
  EVIDENCE_LAW_TERMS,
  COMMERCIAL_CONTRACT_TERMS,
  TORT_LIABILITY_TERMS,
  PROPERTY_LAND_TERMS,
  ARBITRATION_ADR_TERMS,
  JURISPRUDENCE_DOCTRINES,
  NEPAL_LEGAL_TERMS,
  US_LEGAL_TERMS,
  UK_LEGAL_TERMS,
  INTERNATIONAL_LEGAL_TERMS
};

export const DICTIONARY_DOMAINS = [
  { id: "all", label: "All Terms & Maxims", badge: "70 Terms" },
  { id: "latin-maxims", label: "Latin Maxims & Legal Canons", badge: "10 Maxims", subtag: "latin-maxims" },
  { id: "constitutional-law", label: "Constitutional Law & Doctrines", badge: "8 Doctrines", subtag: "constitutional-law" },
  { id: "criminal-law-bns", label: "Criminal Law — BNS 2023", badge: "6 Terms", subtag: "criminal-law-bns" },
  { id: "criminal-procedure-bnss", label: "Criminal Procedure — BNSS 2023", badge: "6 Procedures", subtag: "criminal-procedure-bnss" },
  { id: "civil-procedure-cpc", label: "Civil Procedure — CPC 1908", badge: "6 Terms", subtag: "civil-procedure-cpc" },
  { id: "law-of-evidence-bsa", label: "Law of Evidence — BSA 2023", badge: "6 Rules", subtag: "law-of-evidence-bsa" },
  { id: "contract-commercial-law", label: "Contract & Commercial Law", badge: "6 Doctrines", subtag: "contract-commercial-law" },
  { id: "tort-civil-liability", label: "Tort Law & Civil Liability", badge: "6 Doctrines", subtag: "tort-civil-liability" },
  { id: "property-land-law", label: "Property, Land & Registration Law", badge: "5 Terms", subtag: "property-land-law" },
  { id: "arbitration-adr", label: "Arbitration & ADR (Mediation Act)", badge: "5 Principles", subtag: "arbitration-adr" },
  { id: "jurisprudence-philosophy", label: "Jurisprudence & Statutory Interpretation", badge: "6 Canons", subtag: "jurisprudence-philosophy" }
];

const RAW_TERMS = [
  ...LATIN_MAXIMS_TERMS,
  ...CONSTITUTIONAL_DOCTRINES_TERMS,
  ...CRIMINAL_LAW_TERMS,
  ...CRIMINAL_PROCEDURE_TERMS,
  ...CIVIL_PROCEDURE_TERMS,
  ...EVIDENCE_LAW_TERMS,
  ...COMMERCIAL_CONTRACT_TERMS,
  ...TORT_LIABILITY_TERMS,
  ...PROPERTY_LAND_TERMS,
  ...ARBITRATION_ADR_TERMS,
  ...JURISPRUDENCE_DOCTRINES
];

// Enrich each term with uniform accessors across all 14 sections and legacy backwards compatibility
export const normalizeDictionaryTerm = (item) => {
  if (!item) return null;
  const subcategory = item.subcategory || item.subCategory || item.category;
  const difficultyLevel = item.difficultyLevel || 'Intermediate';
  const conciseDefinition = item.conciseDefinition || item.plainMeaning || "";
  const detailedLegalMeaning = item.detailedLegalMeaning || item.detailedMeaning || item.judicialInterpretation || "";
  const legalOriginAndHistory = item.legalOriginAndHistory || item.etymologyAndHistory || "";
  
  // Normalize statutory basis into an array of { statute, provision, description }
  let statutoryBasis = item.statutoryBasis || [];
  if (typeof statutoryBasis === 'string') {
    const parts = statutoryBasis.split(';').map(p => p.trim()).filter(Boolean);
    statutoryBasis = parts.map(part => {
      const dashIdx = part.indexOf('—');
      if (dashIdx !== -1) {
        return {
          statute: part.slice(0, dashIdx).trim(),
          provision: part.slice(dashIdx + 1).trim(),
          description: part.trim()
        };
      }
      return {
        statute: part,
        provision: "Statutory Reference",
        description: part
      };
    });
  } else if (!Array.isArray(statutoryBasis)) {
    statutoryBasis = [];
  }

  // Normalize practical scenarios
  let practicalApplicationAndExamples = item.practicalApplicationAndExamples || item.practicalScenarios || [];
  if (!Array.isArray(practicalApplicationAndExamples)) {
    practicalApplicationAndExamples = [practicalApplicationAndExamples].filter(Boolean);
  }

  // Normalize exceptions
  let exceptionsAndLimitations = item.exceptionsAndLimitations || item.exceptionsAndMisconceptions || [];
  if (!Array.isArray(exceptionsAndLimitations)) {
    exceptionsAndLimitations = [exceptionsAndLimitations].filter(Boolean);
  }

  // Normalize litigation notes
  let practicalLitigationNotes = item.practicalLitigationNotes || item.litigationApplication || [];
  if (!Array.isArray(practicalLitigationNotes)) {
    practicalLitigationNotes = [practicalLitigationNotes].filter(Boolean);
  }

  // Normalize FAQs and exam notes
  let faqsAndExamNotes = item.faqsAndExamNotes || item.faqs || [];
  if (item.examNotes && !item.faqsAndExamNotes) {
    const examNoteText = typeof item.examNotes === 'string' ? item.examNotes : JSON.stringify(item.examNotes);
    faqsAndExamNotes = [...faqsAndExamNotes, { question: "Judiciary & Exam Takeaway", answer: examNoteText }];
  }

  // Normalize essential elements
  let essentialElements = item.essentialElements || [];
  if (!Array.isArray(essentialElements)) {
    essentialElements = [essentialElements].filter(Boolean);
  }

  // Normalize related terms
  let relatedTerms = item.relatedTerms || [];
  if (!Array.isArray(relatedTerms)) {
    relatedTerms = [relatedTerms].filter(Boolean);
  }

  // Normalize landmark judgments
  let landmarkJudgments = item.landmarkJudgments || [];
  if (!Array.isArray(landmarkJudgments)) {
    landmarkJudgments = [];
  }

  // Legacy formatting helpers
  const primaryJudgment = landmarkJudgments.length > 0
    ? `${landmarkJudgments[0].caseName || landmarkJudgments[0].title || ''} (${landmarkJudgments[0].citation || landmarkJudgments[0].year || ''}): ${landmarkJudgments[0].ratioDecidendi || ''}`
    : (item.landmarkPrecedent || "");

  const primaryStatutory = Array.isArray(statutoryBasis) && statutoryBasis.length > 0
    ? statutoryBasis.map(s => `${s.statute} (${s.provision}): ${s.description}`).join('; ')
    : (item.statutoryCrossReference || "");

  const primaryExample = practicalApplicationAndExamples.length > 0
    ? `${practicalApplicationAndExamples[0].scenario || 'Practical Application'}: ${practicalApplicationAndExamples[0].application || practicalApplicationAndExamples[0].facts || ''}`
    : (item.practicalExample || "");

  return {
    ...item,
    subcategory,
    subCategory: subcategory,
    difficultyLevel,
    conciseDefinition,
    detailedLegalMeaning,
    detailedMeaning: detailedLegalMeaning,
    legalOriginAndHistory,
    etymologyAndHistory: legalOriginAndHistory,
    statutoryBasis,
    essentialElements,
    relatedTerms,
    landmarkJudgments,
    practicalApplicationAndExamples,
    practicalScenarios: practicalApplicationAndExamples,
    exceptionsAndLimitations,
    exceptionsAndMisconceptions: exceptionsAndLimitations,
    practicalLitigationNotes,
    litigationApplication: practicalLitigationNotes,
    faqsAndExamNotes,
    faqs: faqsAndExamNotes,

    // Legacy fields for backward compatibility
    literalTranslation: item.literalTranslation || (item.pronunciation ? `${item.pronunciation} — [${item.language || 'English'}]` : (item.grammaticalForm || "")),
    plainMeaning: conciseDefinition,
    judicialInterpretation: detailedLegalMeaning,
    landmarkPrecedent: primaryJudgment,
    statutoryCrossReference: primaryStatutory,
    practicalExample: primaryExample,
    tags: Array.isArray(item.tags) ? item.tags : []
  };
};

export const ALL_DICTIONARY_TERMS = RAW_TERMS.map(item => normalizeDictionaryTerm(item));

export const getDictionaryTermById = (id) => {
  return ALL_DICTIONARY_TERMS.find(term => term.id === id) || null;
};

/**
 * Authoritative Jurisdiction-Isolated Dictionary Resolver
 * When Nepal is active: returns Nepal statutory terms + universal Latin maxims & doctrines.
 */
export const getDictionaryForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  let list = ALL_DICTIONARY_TERMS;
  if (norm === 'NP' || norm === 'NEPAL') {
    list = [
      ...NEPAL_LEGAL_TERMS,
      ...LATIN_MAXIMS_TERMS,
      ...JURISPRUDENCE_DOCTRINES
    ];
  } else if (norm === 'US' || norm === 'USA') {
    list = [
      ...US_LEGAL_TERMS,
      ...LATIN_MAXIMS_TERMS,
      ...JURISPRUDENCE_DOCTRINES
    ];
  } else if (norm === 'GB' || norm === 'UK') {
    list = [
      ...UK_LEGAL_TERMS,
      ...LATIN_MAXIMS_TERMS,
      ...JURISPRUDENCE_DOCTRINES
    ];
  } else if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    list = [
      ...INTERNATIONAL_LEGAL_TERMS,
      ...LATIN_MAXIMS_TERMS,
      ...JURISPRUDENCE_DOCTRINES
    ];
  } else {
    return ALL_DICTIONARY_TERMS;
  }
  return list.map(item => normalizeDictionaryTerm(item));
};
