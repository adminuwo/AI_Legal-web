// AI LEGAL™ — Arbitration, Mediation & Alternative Dispute Resolution Terms
// Comprehensive 14-Section Deep Jurisprudence Schema

export const ARBITRATION_ADR_TERMS = [
  {
    id: "dict-kompetenz-kompetenz",
    term: "Principle of Kompetenz-Kompetenz",
    alternativeSpellings: ["Kompetenz-Kompetenz", "Competence-Competence", "Jurisdiction of Arbitral Tribunal"],
    category: "Arbitration, Mediation & Alternative Dispute Resolution",
    subcategory: "Arbitral Tribunal Jurisdiction & Powers",
    jurisdiction: "India (Arbitration and Conciliation Act, 1996)",
    language: "German / English",
    pronunciation: "/kɔmpəˈtɛnts kɔmpəˈtɛnts/",
    grammaticalForm: "Noun phrase (German: competence on competence)",
    difficultyLevel: "Advanced",
    tags: ["arbitration-adr", "arbitration-act-1996", "kompetenz-kompetenz", "substantive-doctrines", "section-16"],

    conciseDefinition:
      "A fundamental principle of international and domestic arbitration jurisprudence providing that an arbitral tribunal has the legal power and competence to rule on its own jurisdiction, including ruling on any objections with respect to the existence or validity of the arbitration agreement.",

    detailedLegalMeaning:
      "Codified in Section 16 of the Arbitration and Conciliation Act, 1996 (modeled on Article 16 of the UNCITRAL Model Law), the doctrine of Kompetenz-Kompetenz embodies two intertwined rules: (1) an arbitration clause forming part of a contract is treated as an agreement independent of the other terms of the contract (the Doctrine of Separability), and (2) a decision by the arbitral tribunal that the contract is null and void does not entail ipso jure the invalidity of the arbitration clause. Under Section 16, pleas regarding lack of jurisdiction or exceeding authority must be raised not later than the submission of the statement of defence. If the tribunal rejects the jurisdictional challenge, it continues arbitral proceedings and renders an award, which the aggrieved party may only challenge at the post-award stage under Section 34.",

    hindiExplanation:
      "सक्षमता का सिद्धांत (Principle of Kompetenz-Kompetenz) मध्यस्थता एवं सुलह अधिनियम, 1996 की धारा 16 में स्थापित है। इस सिद्धांत के अनुसार मध्यस्थ अधिकरण (Arbitral Tribunal) को अपने स्वयं के क्षेत्राधिकार और अधिकार-सीमा पर निर्णय लेने की पूर्ण शक्ति प्राप्त है, जिसमें मध्यस्थता समझौते के अस्तित्व या वैधता से संबंधित आपत्तियों पर निर्णय लेना भी शामिल है। इसके तहत मध्यस्थता खंड को मूल अनुबंध से स्वतंत्र माना जाता है (Doctrine of Separability)। यदि मुख्य अनुबंध अवैध भी घोषित हो जाए, तो भी मध्यस्थता खंड जीवित रहता है।",

    legalOriginAndHistory:
      "Originating in German administrative and constitutional law, the doctrine was adopted into international commercial arbitration through the 1958 New York Convention and the 1985 UNCITRAL Model Law on International Commercial Arbitration. In India, under the old Arbitration Act of 1940, courts routinely intervened to determine jurisdictional questions. The 1996 Act fundamentally changed this by enacting Section 16 to minimize judicial intervention (Section 5) and empower arbitral tribunals as first-instance deciders of their own competence.",

    statutoryBasis: [
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 16",
        description: "Competence of arbitral tribunal to rule on its jurisdiction — embeds separability and powers to decide jurisdictional challenges."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 5",
        description: "Extent of judicial intervention — explicitly bars court intervention except where specifically provided in Part I."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 11(6A)",
        description: "Examination of the existence of an arbitration agreement by courts at the referral stage."
      }
    ],

    essentialElements: [
      "The arbitral tribunal is empowered to rule on its own jurisdiction at the threshold.",
      "The tribunal can decide challenges regarding the existence, validity, or scope of the arbitration agreement.",
      "Doctrine of Separability: The arbitration clause is treated as an independent agreement separable from the underlying commercial contract.",
      "The invalidity or termination of the main contract does not automatically invalidate the arbitration clause.",
      "Mandatory stage for objection: Jurisdictional objections must be raised no later than the submission of the statement of defence."
    ],

    practicalApplicationAndExamples: [
      {
        scenario: "Allegation of fraudulent contract inducement",
        facts: "Company A signs a software licensing contract with Company B containing an ICC arbitration clause. Company B defaults and Company A initiates arbitration. Company B files a civil suit arguing the contract was induced by fraud and therefore the arbitration clause is dead.",
        application: "Under Section 16 and the Kompetenz-Kompetenz doctrine, the arbitral tribunal alone has the competence to adjudicate whether fraud voided the contract, because the arbitration clause survives separately. Civil courts must refer the parties to arbitration under Section 8 or 11."
      },
      {
        scenario: "Section 16 plea rejection",
        facts: "Respondent argues before the arbitrator that the claimant's claims are time-barred under the Limitation Act and therefore outside the tribunal's jurisdiction. The arbitrator rejects the Section 16 plea.",
        application: "Under Section 16(5), the arbitrator does not stay proceedings; the tribunal continues the arbitration and passes the final award. Respondent cannot file an interlocutory appeal against the rejection; they must challenge the rejection along with the final award under Section 34."
      }
    ],

    landmarkJudgments: [
      {
        caseName: "SBP & Co. v. Patel Engineering Ltd.",
        citation: "(2005) 8 SCC 618",
        court: "Supreme Court of India (7-Judge Constitution Bench)",
        year: 2005,
        ratioDecidendi: "Historically examined Section 16 powers versus Section 11 judicial powers. Held that once an arbitral tribunal is constituted, Section 16 gives it full power to decide jurisdiction, but Section 11 court appointment involves a judicial determination."
      },
      {
        caseName: "Vidya Drolia & Ors. v. Durga Trading Corporation",
        citation: "(2021) 2 SCC 1",
        court: "Supreme Court of India (3-Judge Bench)",
        year: 2021,
        ratioDecidendi: "Formulated the four-fold test of non-arbitrability and firmly reaffirmed Kompetenz-Kompetenz. Held that the referral court under Section 11 must exercise a 'prima facie' review only; when in doubt, the court must refer disputes to arbitration, leaving full jurisdictional review to the arbitral tribunal under Section 16."
      },
      {
        caseName: "In Re: Interplay Between Arbitration Agreements and the Indian Stamp Act, 1899",
        citation: "(2024) 6 SCC 1",
        court: "Supreme Court of India (7-Judge Constitution Bench)",
        year: 2024,
        ratioDecidendi: "Overruled N.N. Global (2023). Unanimously held that non-stamping or insufficient stamping of an underlying contract does not render the arbitration agreement void ab initio. The issue of stamping and impounding falls squarely within the competence of the arbitral tribunal under Section 16 and the principle of Kompetenz-Kompetenz."
      }
    ],

    exceptionsAndLimitations: [
      "Negative Kompetenz-Kompetenz is not absolute in India: Referral courts under Section 8 or 11 conduct a prima facie review to verify the formal existence of the arbitration agreement.",
      "Non-arbitrable subject matters: Disputes involving criminal offences, insolvency proceedings, matrimonial disputes, and tenancy disputes governed by special welfare rent control statutes cannot be arbitrated.",
      "If the tribunal accepts a Section 16 plea and holds it has no jurisdiction, an immediate appeal lies to the court under Section 37(2)(a). But if it rejects the plea, no immediate appeal lies; challenge is deferred to Section 34."
    ],

    practicalLitigationNotes: [
      "Drafting Section 16 Application: The application challenging jurisdiction must be filed before or at the time of filing the Statement of Defence. Taking part in proceedings without reserving rights waives the objection under Section 4.",
      "Stamp Duty Pleas post-2024: Do not raise contract impounding objections before the Section 11 High Court bench; reserve all stamp duty and admissibility objections for the Section 16 hearing before the appointed arbitrator.",
      "Appeal Strategy: If the tribunal decides it has jurisdiction, do not rush to file an Article 227 writ petition before the High Court; the Supreme Court in Deep Industries (2020) held that High Courts should rarely entertain writ petitions against Section 16 orders."
    ],

    relatedTerms: [
      "dict-seat-vs-venue",
      "dict-patent-illegality",
      "dict-interim-measures-arbitration",
      "dict-res-judicata"
    ],

    faqsAndExamNotes: [
      {
        question: "What happens if an arbitral tribunal rejects a challenge to its jurisdiction under Section 16?",
        answer: "Under Section 16(5), the tribunal continues arbitral proceedings and makes an arbitral award. The aggrieved party cannot immediately appeal under Section 37; they must challenge the decision as part of a Section 34 petition to set aside the final award."
      },
      {
        question: "Can an arbitral tribunal rule on whether the underlying contract was void for non-stamping?",
        answer: "Yes. In the 7-judge Constitution Bench ruling of 2024 (In Re: Interplay), the Supreme Court ruled that questions of stamping and deficiency must be decided by the arbitral tribunal under Section 16, not by the referral court under Section 11."
      }
    ],

    sourceProvenance: {
      authoritativeSource: "Section 16, Arbitration and Conciliation Act, 1996; UNCITRAL Model Law Art 16; Vidya Drolia (2021); 7-Judge Stamp Act Bench (2024).",
      editorialStatus: "Verified Complete",
      lastReviewed: "2026-10-10"
    }
  },
  {
    id: "dict-seat-vs-venue",
    term: "Seat vs. Venue in Arbitration",
    alternativeSpellings: ["Seat versus Venue", "Juridical Seat of Arbitration", "Place of Arbitration", "Shashoua Principle"],
    category: "Arbitration, Mediation & Alternative Dispute Resolution",
    subcategory: "Arbitration Agreements & Choice of Law",
    jurisdiction: "India (Arbitration and Conciliation Act, 1996)",
    language: "English",
    pronunciation: "/siːt ˈvɜː.səs ˈvɛn.juː/",
    grammaticalForm: "Noun phrase",
    difficultyLevel: "Advanced",
    tags: ["arbitration-adr", "arbitration-act-1996", "seat-vs-venue", "jurisdiction", "section-20"],

    conciseDefinition:
      "A vital jurisdictional distinction in arbitration law where the 'Seat' (juridical place) determines the governing procedural law (lex arbitri) and exclusive supervisory jurisdiction of courts, whereas the 'Venue' (place of hearings) refers merely to the physical geographic location chosen for convenience of sittings.",

    detailedLegalMeaning:
      "Under Section 20 of the Arbitration and Conciliation Act, 1996, the term 'place of arbitration' encompasses both the juridical seat and the geographical venue. Determining the seat is critical because the courts of the seat exercise exclusive supervisory jurisdiction to appoint arbitrators (Section 11), grant interim relief (Section 9), and hear challenges to set aside arbitral awards (Section 34). By contrast, the venue is merely the physical forum where hearings, meetings, or witness examinations take place for logistical convenience. Under the 'Shashoua Principle' adopted by the Supreme Court of India, where an agreement specifies a 'place of arbitration' combined with institutional rules and without any contrary indication, that designated place is presumed to be the juridical seat.",

    hindiExplanation:
      "मध्यस्थता में 'सीट' (Seat) और 'वेन्यू' (Venue) का अंतर एक महत्वपूर्ण क्षेत्राधिकार संबंधी भेद है। 'सीट' (न्यायिक मुख्यालय / Juridical Seat) वह स्थान है जिसके न्यायालयों को मध्यस्थता की कार्यवाही पर विशेष पर्यवेक्षी क्षेत्राधिकार (supervisory jurisdiction) प्राप्त होता है, जैसे मध्यस्थ नियुक्त करना (धारा 11), अंतरिम राहत देना (धारा 9), और पंचाट को निरस्त करना (धारा 34)। इसके विपरीत, 'वेन्यू' केवल बैठकों या सुनवाई की भौतिक जगह (convenience location) होती है। यदि अनुबंध में किसी शहर को केवल सुनवाई के लिए चुना गया है, तो वह सीट नहीं बन जाता।",

    legalOriginAndHistory:
      "Developed in English commercial arbitration and crystalized by Cooke J. in Roger Shashoua v. Mukesh Sharma [2009] EWHC 957 (Comm). In India, the distinction was formally affirmed and embedded into Indian law by the landmark 5-judge Constitution Bench in Bharat Aluminium Co. (BALCO) v. Kaiser Aluminium Technical Services Inc. (2012), which overruled Bhatia International and established that the seat fixes supervisory court jurisdiction.",

    statutoryBasis: [
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 20",
        description: "Place of arbitration — parties are free to agree on the place; failing agreement, determined by the tribunal having regard to convenience."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 2(1)(e)",
        description: "Definition of 'Court' having jurisdiction over arbitral proceedings."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 42",
        description: "Jurisdiction — where an application is made to a court, that court alone has jurisdiction over subsequent proceedings."
      }
    ],

    essentialElements: [
      "The Seat of arbitration anchors the lex arbitri (procedural law) and identifies the courts possessing exclusive supervisory jurisdiction.",
      "Selection of a seat operates like an exclusive forum selection clause, ousting jurisdiction of all other courts.",
      "The Venue is merely the geographic place of convenience for conducting hearings, taking evidence, or deliberations.",
      "Shashoua Principle: Designation of a place as the arbitration venue, combined with a supranational body of rules, amounts to designation of the seat in the absence of contrary language.",
      "Parties can conduct hearings at different venues across the world without changing the juridical seat."
    ],

    practicalApplicationAndExamples: [
      {
        scenario: "Contract executed in Delhi, seat in Mumbai",
        facts: "Parties execute a supply agreement in New Delhi. The contract provides: 'The seat of arbitration shall be Mumbai, and hearings may be conducted at Delhi or Bengaluru.' A dispute arises and Claimant files a Section 9 petition in Delhi High Court.",
        application: "Delhi High Court will dismiss the petition for lack of jurisdiction. The designation of Mumbai as the seat confers exclusive supervisory jurisdiction on the High Court of Bombay. The fact that hearings can be held at Delhi is merely a venue arrangement of convenience."
      },
      {
        scenario: "Ambiguous 'Venue' clause with exclusive jurisdiction",
        facts: "Agreement provides: 'Venue of arbitration shall be New Delhi. The courts at Kolkata shall have exclusive jurisdiction over all matters arising out of this contract.'",
        application: "Under the BGS SGS SOMA ruling, when a venue is named and combined with an arbitration clause, New Delhi is considered the seat unless there are clear contrary indicators. However, where an express clause gives exclusive jurisdiction to Kolkata, courts reconcile the clauses by examining party intent."
      }
    ],

    landmarkJudgments: [
      {
        caseName: "Bharat Aluminium Co. (BALCO) v. Kaiser Aluminium Technical Services Inc.",
        citation: "(2012) 9 SCC 552",
        court: "Supreme Court of India (5-Judge Constitution Bench)",
        year: 2012,
        ratioDecidendi: "Established the seat-centric approach. Held that Part I of the 1996 Act applies only when the seat of arbitration is in India. Once the seat is outside India, Indian courts have no supervisory jurisdiction under Part I to entertain Section 9 or Section 34 petitions."
      },
      {
        caseName: "BGS SGS SOMA JV v. NHPC Ltd.",
        citation: "(2020) 4 SCC 234",
        court: "Supreme Court of India (3-Judge Bench)",
        year: 2020,
        ratioDecidendi: "Reaffirmed the Shashoua Principle. Held that whenever there is the designation of a place of arbitration in an arbitration clause as venue, coupled with no contrary indicia, that venue is actually the juridical seat of arbitration."
      },
      {
        caseName: "Mankastu Impex Pvt. Ltd. v. Airvisual Ltd.",
        citation: "(2020) 5 SCC 399",
        court: "Supreme Court of India (3-Judge Bench)",
        year: 2020,
        ratioDecidendi: "Held that mere use of the expression 'place of arbitration' or 'venue' will not make it the seat unless there is intention to anchor supervisory jurisdiction there. Where the clause stated 'place of arbitration will be Hong Kong' and administered by HKICAC, Hong Kong was held to be the seat."
      }
    ],

    exceptionsAndLimitations: [
      "Ambiguity in drafting: Where an agreement mentions one city as 'venue' but assigns 'exclusive jurisdiction' to another city's courts, judicial interpretation depends on whether the venue clause contains contrary indicia.",
      "International Commercial Arbitrations: If foreign seat is chosen, Indian courts have no jurisdiction to set aside the award under Section 34; only post-award enforcement under Part II (New York Convention) is permitted.",
      "Interim relief under Section 9 in foreign seated arbitrations: Allowed post-2015 amendment unless expressly excluded by parties in the agreement."
    ],

    practicalLitigationNotes: [
      "Drafting Precision: Never use the word 'venue' when meaning 'seat'. Best practice drafting: 'The seat and juridical place of arbitration shall be New Delhi, India. The arbitral tribunal may conduct hearings at any convenient venue.'",
      "Section 34 Filings: Always file the challenge petition in the Principal Civil Court or High Court having territorial jurisdiction over the Seat. Filing at the place of cause of action when a different seat is specified will lead to return of the plaint for lack of jurisdiction.",
      "Section 11 Applications: If the agreed seat is Chennai, the Section 11 petition for appointment of an arbitrator must be filed before the Madras High Court, not the High Court where the contract was signed."
    ],

    relatedTerms: [
      "dict-kompetenz-kompetenz",
      "dict-patent-illegality",
      "dict-interim-measures-arbitration",
      "dict-res-sub-judice"
    ],

    faqsAndExamNotes: [
      {
        question: "Can an arbitration have its seat in London and hearings held in Mumbai?",
        answer: "Yes. The seat will remain London (English procedural law and English court supervision), while Mumbai will serve solely as the physical venue of convenience for witness examination and oral arguments."
      },
      {
        question: "Does the designation of a seat oust the jurisdiction of courts where the cause of action arose?",
        answer: "Yes. In Indus Mobile (2017) and BGS SGS SOMA (2020), the Supreme Court ruled that fixing the seat is akin to an exclusive jurisdiction clause, ousting all other courts even if causes of action arose elsewhere."
      }
    ],

    sourceProvenance: {
      authoritativeSource: "Section 20, Arbitration and Conciliation Act, 1996; BALCO (2012); BGS SGS SOMA (2020); Shashoua (2009).",
      editorialStatus: "Verified Complete",
      lastReviewed: "2026-10-10"
    }
  },
  {
    id: "dict-patent-illegality",
    term: "Doctrine of Patent Illegality",
    alternativeSpellings: ["Patent Illegality", "Patent Illegality on the Face of the Award", "Section 34(2A)"],
    category: "Arbitration, Mediation & Alternative Dispute Resolution",
    subcategory: "Setting Aside Arbitral Awards & Judicial Review",
    jurisdiction: "India (Arbitration and Conciliation Act, 1996)",
    language: "English",
    pronunciation: "/ˈpeɪ.tənt ɪ.lɪˈɡæl.ɪ.ti/",
    grammaticalForm: "Noun phrase",
    difficultyLevel: "Advanced",
    tags: ["arbitration-adr", "arbitration-act-1996", "patent-illegality", "section-34", "award-challenge"],

    conciseDefinition:
      "A statutory ground under Section 34(2A) of the Arbitration and Conciliation Act, 1996 for setting aside a domestic arbitral award if the award is vitiated by patent illegality appearing on the face of the award, provided it goes to the root of the matter and is not based on mere erroneous application of the law or re-appreciation of evidence.",

    detailedLegalMeaning:
      "Patent illegality refers to a serious, glaring legal error evident on the face of the arbitral award that goes to the very root of the dispute. Introduced as a distinct statutory ground by the Arbitration and Conciliation (Amendment) Act, 2015 via Section 34(2A) following the Law Commission's 246th Report, the doctrine applies exclusively to domestic arbitral awards (awards arising out of arbitrations other than international commercial arbitrations). An award is patently illegal if: (a) it contravenes the substantive law of India, (b) it contravenes the terms of the contract or ignores vital evidence, (c) the arbitrator takes an impossible view that no reasonable person could have taken, or (d) the award lacks reasons or exhibits perverse reasoning. Importantly, Section 34(2A) explicitly proscribes setting aside an award merely on the ground of an erroneous application of the law or by re-appreciating evidence.",

    hindiExplanation:
      "प्रत्यक्ष अवैधता का सिद्धांत (Doctrine of Patent Illegality) मध्यस्थता एवं सुलह अधिनियम, 1996 की धारा 34(2A) के अंतर्गत घरेलू मध्यस्थता पंचाट (Domestic Arbitral Award) को निरस्त करने का एक वैधानिक आधार है। इसका तात्पर्य पंचाट के पृष्ठ पर स्पष्ट दिखने वाली ऐसी गंभीर अवैधता से है जो विवाद की जड़ पर प्रहार करती हो (जैसे अनुबंध की स्पष्ट शर्तों का उल्लंघन करना, बिना किसी साक्ष्य के निर्णय देना, या ऐसा मनमाना निष्कर्ष निकालना जिसे कोई विवेकशील व्यक्ति नहीं निकाल सकता)। साक्ष्य का पुनर्मूल्यांकन या कानून की साधारण व्याख्या संबंधी त्रुटि प्रत्यक्ष अवैधता नहीं मानी जाती।",

    legalOriginAndHistory:
      "First introduced judicially by the Supreme Court in Oil & Natural Gas Corporation Ltd. v. Saw Pipes Ltd. (2003) 5 SCC 705 by expanding the definition of 'public policy of India' under Section 34(2)(b)(ii). Because Saw Pipes led to excessive court interference, the 2015 Amendment removed patent illegality from 'public policy' and created an independent subsection 34(2A) with strict statutory provisos prohibiting merits review and evidence re-appreciation.",

    statutoryBasis: [
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 34(2A)",
        description: "Provides that an arbitral award arising out of arbitrations other than international commercial arbitrations may be set aside if vitiated by patent illegality appearing on the face of the award."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 34(2)(b)(ii)",
        description: "Setting aside awards in conflict with the public policy of India (fundamental policy of Indian law, justice, or morality)."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 28(3)",
        description: "Mandates that arbitral tribunal shall take into account the terms of the contract and trade usages."
      }
    ],

    essentialElements: [
      "Applies exclusively to domestic arbitrations; expressly unavailable in International Commercial Arbitrations.",
      "The illegality must appear on the face of the award without roving inquiry into original records.",
      "The error must go to the very root of the matter and not be a trivial or minor procedural irregularity.",
      "Cannot be based on a mere erroneous application of the law.",
      "The court is strictly barred from re-appreciating evidence or substituting its own view for a plausible view taken by the arbitrator."
    ],

    practicalApplicationAndExamples: [
      {
        scenario: "Arbitrator rewriting explicit contract terms",
        facts: "A construction contract between NHAI and Contractor expressly states: 'No price escalation or interest shall be payable under any circumstances.' The sole arbitrator awards ₹10 Crores towards price escalation and 18% interest, stating fairness demands it.",
        application: "The award is vitiated by patent illegality under Section 34(2A). An arbitrator is a creature of the contract and cannot rewrite the contract or award claims expressly prohibited by the parties' agreement (Section 28(3))."
      },
      {
        scenario: "Plausible interpretation of ambiguous clause",
        facts: "A dispute hinges on whether a 60-day notice clause was directory or mandatory. The arbitrator considers evidence, cites relevant commercial context, and interprets the clause as directory. The losing party challenges this as patent illegality.",
        application: "The challenge will fail. If the arbitrator's interpretation is a plausible construction of the contract, the Section 34 court cannot substitute its own view even if another interpretation is possible (Associate Builders / Ssangyong)."
      }
    ],

    landmarkJudgments: [
      {
        caseName: "Associate Builders v. Delhi Development Authority",
        citation: "(2015) 3 SCC 49",
        court: "Supreme Court of India",
        year: 2015,
        ratioDecidendi: "Comprehensive breakdown of grounds under Section 34. Held that an award is perverse and patently illegal if it is arrived at without any evidence, ignores vital evidence, or takes a view that no reasonable person could possibly take (Wednesbury unreasonableness)."
      },
      {
        caseName: "Ssangyong Engineering & Construction Co. Ltd. v. NHAI",
        citation: "(2019) 15 SCC 131",
        court: "Supreme Court of India",
        year: 2019,
        ratioDecidendi: "Interpreted post-2015 Section 34(2A). Clarified that patent illegality is available only in purely domestic arbitrations and must be illegality appearing on the face of the award. Re-appreciation of evidence is strictly impermissible under the guise of patent illegality."
      },
      {
        caseName: "Delhi Airport Metro Express Pvt. Ltd. v. DMRC Ltd.",
        citation: "(2022) 1 SCC 131",
        court: "Supreme Court of India",
        year: 2022,
        ratioDecidendi: "Reiterated judicial restraint. Held that courts cannot sit in appeal over arbitral awards. Every error of law committed by an arbitral tribunal does not fall within the ambit of patent illegality; the error must be so gross that it goes to the root of the matter."
      }
    ],

    exceptionsAndLimitations: [
      "Not available in International Commercial Arbitrations: Foreign seated awards or domestic arbitrations involving a foreign party are immune from challenges on patent illegality.",
      "Cannot be invoked to re-weigh the sufficiency or quality of evidence adduced before the tribunal.",
      "An erroneous finding of fact cannot be challenged unless it is totally perverse or unsupported by any evidence on record.",
      "If the arbitrator's view is a possible and plausible view, the court has no jurisdiction to interfere."
    ],

    practicalLitigationNotes: [
      "Drafting Section 34 Petition: Strictly delineate between grounds of 'Fundamental Policy of Indian Law' under Section 34(2)(b)(ii) and 'Patent Illegality' under Section 34(2A). Do not merge them into a single vague ground.",
      "Evidence Citations: Avoid requesting the court to re-read witness depositions. Pinpoint the exact paragraph where the arbitrator ignored an express contract clause or acted contrary to a binding statutory mandate.",
      "Limitation Strictness: Section 34 petitions must be filed within 3 months, extendable by only 30 days under the proviso upon showing sufficient cause. Section 5 of the Limitation Act cannot condone delay beyond 30 days (Simplex Infrastructure)."
    ],

    relatedTerms: [
      "dict-kompetenz-kompetenz",
      "dict-seat-vs-venue",
      "dict-interim-measures-arbitration",
      "dict-res-judicata"
    ],

    faqsAndExamNotes: [
      {
        question: "Is patent illegality a ground to challenge an international commercial arbitration award in India?",
        answer: "No. Section 34(2A) explicitly restricts the ground of patent illegality to arbitral awards 'arising out of arbitrations other than international commercial arbitrations'."
      },
      {
        question: "Can an arbitral award be set aside for patent illegality due to re-appreciation of evidence?",
        answer: "No. The proviso to Section 34(2A) expressly states: 'Provided that an award shall not be set aside merely on the ground of an erroneous application of the law or by reappreciation of evidence'."
      }
    ],

    sourceProvenance: {
      authoritativeSource: "Section 34(2A), Arbitration and Conciliation Act, 1996; Law Commission 246th Report; Ssangyong (2019); DMRC (2022).",
      editorialStatus: "Verified Complete",
      lastReviewed: "2026-10-10"
    }
  },
  {
    id: "dict-interim-measures-arbitration",
    term: "Interim Measures: Section 9 vs. Section 17",
    alternativeSpellings: ["Interim Relief in Arbitration", "Section 9 vs Section 17", "Interim Injunctions Arbitration"],
    category: "Arbitration, Mediation & Alternative Dispute Resolution",
    subcategory: "Interim Relief & Protective Orders",
    jurisdiction: "India (Arbitration and Conciliation Act, 1996)",
    language: "English",
    pronunciation: "/ˈɪn.tə.rɪm ˈmɛʒ.əz/",
    grammaticalForm: "Noun phrase",
    difficultyLevel: "Intermediate",
    tags: ["arbitration-adr", "arbitration-act-1996", "interim-measures", "section-9", "section-17"],

    conciseDefinition:
      "A dual statutory framework under the Arbitration and Conciliation Act, 1996 for granting preservative, injunctive, or securement relief, whereby Section 9 empowers civil courts to grant interim relief before, during, or after arbitration, while Section 17 empowers the arbitral tribunal to grant identical interim relief during the arbitral proceedings with the full force of a civil court order.",

    detailedLegalMeaning:
      "The 1996 Act provides a coordinated mechanism for preserving the subject-matter of disputes. Prior to the 2015 amendments, parties routinely bypassed arbitral tribunals to seek interim orders from courts under Section 9 because Section 17 orders lacked teeth. The 2015 Amendment fundamentally revamped both provisions: Section 17(1) now gives the arbitral tribunal powers co-extensive with a civil court under Section 9; Section 17(2) declares that any order issued by an arbitral tribunal under Section 17 shall be deemed to be an order of the court and enforceable under the CPC in the same manner as if it were a court order. Simultaneously, Section 9(3) was inserted, mandating that once the arbitral tribunal has been constituted, the court shall not entertain a Section 9 application unless it finds that circumstances exist which may not render the remedy provided under Section 17 efficacious.",

    hindiExplanation:
      "मध्यस्थता में अंतरिम राहत (Interim Measures) अधिनियम की धारा 9 और 17 के तहत प्रदान की जाती है। धारा 9 न्यायालय को मध्यस्थता से पहले, उसके दौरान, या पंचाट आने के बाद अंतरिम आदेश पारित करने की शक्ति देती है। धारा 17 मध्यस्थ अधिकरण (Arbitral Tribunal) को कार्यवाही के दौरान वैसी ही पूर्ण अंतरिम राहत देने का अधिकार देती है। 2015 के संशोधन के बाद, धारा 17 के तहत मध्यस्थ द्वारा दिए गए आदेश को सिविल कोर्ट के आदेश के समान लागू (enforce) कराया जा सकता है। धारा 9(3) के अनुसार, यदि मध्यस्थ अधिकरण गठित हो चुका है, तो न्यायालय धारा 9 की अर्जी स्वीकार नहीं करेगा जब तक कि धारा 17 अप्रभावी न सिद्ध हो।",

    legalOriginAndHistory:
      "Modeled after Articles 9 and 17 of the UNCITRAL Model Law 1985. The enforcement gap of Section 17 was addressed after the Supreme Court's ruling in MD Army Welfare Housing Organisation v. Sumangal Services (2004), which held that Section 17 orders could not be enforced as court orders. The Law Commission's 246th Report recommended complete parity, leading to the 2015 legislative amendment introducing Section 17(2) and Section 9(3).",

    statutoryBasis: [
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 9",
        description: "Interim measures by Court — appointment of guardian, custody of goods, preservation of property, interim injunctions, and securing amounts in dispute."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 17",
        description: "Interim measures ordered by arbitral tribunal — powers co-extensive with Section 9; orders deemed orders of the Court under Section 17(2)."
      },
      {
        statute: "Arbitration and Conciliation Act, 1996",
        provision: "Section 37(1)(b) & 37(2)(b)",
        description: "Appeals against orders granting or refusing interim measures under Section 9 and Section 17."
      }
    ],

    essentialElements: [
      "Section 9 court relief is available at three stages: (1) before arbitral proceedings, (2) during proceedings, and (3) after the award but prior to enforcement.",
      "If Section 9 relief is granted before arbitration, arbitral proceedings must commence within 90 days (Section 9(2)).",
      "Section 17 relief is available only during the pendency of proceedings before the arbitral tribunal.",
      "Section 9(3) statutory bar: Courts cannot entertain Section 9 petitions after tribunal constitution unless Section 17 is inefficacious.",
      "Section 17(2) deems tribunal interim orders as court decrees enforceable under Order XXI of the CPC."
    ],

    practicalApplicationAndExamples: [
      {
        scenario: "Pre-arbitration emergency asset freezing",
        facts: "Partner A discovers that Partner B is surreptitiously liquidating joint business bank accounts and transferring assets abroad before arbitration notice can be served.",
        application: "Partner A can immediately file an urgent application under Section 9 before the Commercial Court/High Court seeking an ex-parte injunction restraining bank withdrawals. Under Section 9(2), Partner A must commence arbitration within 90 days of obtaining relief."
      },
      {
        scenario: "Application under Section 9 when tribunal is active",
        facts: "Tribunal is actively hearing a construction dispute. Claimant files a fresh Section 9 petition in the High Court seeking bank guarantee encashment stay.",
        application: "Barred under Section 9(3). The High Court will direct the Claimant to file an application under Section 17 before the arbitral tribunal, because the tribunal is fully empowered to grant the identical relief and its orders are enforceable as court decrees under Section 17(2)."
      }
    ],

    landmarkJudgments: [
      {
        caseName: "Sundaram Finance Ltd. v. NEPC India Ltd.",
        citation: "(1999) 2 SCC 479",
        court: "Supreme Court of India",
        year: 1999,
        ratioDecidendi: "Held that a party can approach the court under Section 9 even before the commencement of arbitral proceedings, provided there is a manifest intention to arbitrate."
      },
      {
        caseName: "Amazon.com NV Investment Holdings LLC v. Future Retail Ltd.",
        citation: "(2022) 1 SCC 209",
        court: "Supreme Court of India",
        year: 2022,
        ratioDecidendi: "Held that an order passed by an Emergency Arbitrator under institutional rules is an order of an arbitral tribunal under Section 17(1) and is enforceable under Section 17(2) of the Arbitration Act."
      },
      {
        caseName: "ArcelorMittal Nippon Steel India Ltd. v. Essar Bulk Terminal Ltd.",
        citation: "(2022) 1 SCC 712",
        court: "Supreme Court of India",
        year: 2022,
        ratioDecidendi: "Interpreted Section 9(3). Held that if the court has already applied its mind and heard arguments on a Section 9 application prior to the constitution of the arbitral tribunal, the court is not precluded from passing final orders on that Section 9 application."
      }
    ],

    exceptionsAndLimitations: [
      "Section 17 orders can only bind parties to the arbitration agreement; arbitral tribunals cannot issue orders against non-signatory third parties (such as banks holding disputed funds).",
      "If relief against third parties (e.g., garnishee or attachment of third-party property) is required, the party must approach the civil court under Section 9.",
      "Section 9 cannot be invoked after the arbitral award has been enforced; its post-award availability ends once the award is satisfied."
    ],

    practicalLitigationNotes: [
      "90-Day Rule Vigilance: When obtaining pre-arbitration ex-parte relief under Section 9, diarize the 90-day deadline under Section 9(2) to issue the notice invoking arbitration under Section 21; failure to do so will automatically vacate the interim order.",
      "Enforcing Section 17 Orders: To execute a Section 17 order passed by an arbitrator, file an execution petition under Section 17(2) read with Order XXI CPC directly before the competent civil court having territorial jurisdiction.",
      "Appeals: Both Section 9 and Section 17 orders (granting or refusing relief) are appealable before the High Court under Section 37(1)(b) and Section 37(2)(b) respectively."
    ],

    relatedTerms: [
      "dict-kompetenz-kompetenz",
      "dict-seat-vs-venue",
      "dict-garnishee-order-cpc",
      "dict-interlocutory-application-ia"
    ],

    faqsAndExamNotes: [
      {
        question: "Can an arbitral tribunal issue an interim order against a bank or third party?",
        answer: "No. Arbitral tribunals derive authority solely from the arbitration agreement and cannot bind third parties. Relief against third parties (e.g., restraining a bank from honoring a letter of credit) must be sought from a civil court under Section 9."
      },
      {
        question: "How is an interim order of an arbitral tribunal enforced in India?",
        answer: "Under Section 17(2), an order of an arbitral tribunal is deemed to be an order of the court and is enforceable under the Code of Civil Procedure, 1908 in the same manner as a civil court decree."
      }
    ],

    sourceProvenance: {
      authoritativeSource: "Sections 9, 17, 37, Arbitration and Conciliation Act, 1996; 2015 Amendment Act; Amazon v. Future Retail (2022); ArcelorMittal (2022).",
      editorialStatus: "Verified Complete",
      lastReviewed: "2026-10-10"
    }
  },
  {
    id: "dict-mediation-confidentiality",
    term: "Mediation Confidentiality & Without-Prejudice Privilege",
    alternativeSpellings: ["Mediation Confidentiality", "Without-Prejudice Rule in ADR", "Mediation Privilege"],
    category: "Arbitration, Mediation & Alternative Dispute Resolution",
    subcategory: "Mediation Act, 2023 & Settlement Procedures",
    jurisdiction: "India (Mediation Act, 2023)",
    language: "English",
    pronunciation: "/ˌmiː.diˈeɪ.ʃən ˌkɒn.fɪˌdɛn.ʃiˈæl.ə.ti/",
    grammaticalForm: "Noun phrase",
    difficultyLevel: "Intermediate",
    tags: ["arbitration-adr", "mediation-act-2023", "confidentiality", "without-prejudice", "adr-remedies"],

    conciseDefinition:
      "A statutory and evidentiary rule codified in the Mediation Act, 2023 providing that all statements, admissions, proposals, documents, and communications generated during mediation proceedings are strictly confidential and inadmissible in any court, arbitral tribunal, or other legal forum.",

    detailedLegalMeaning:
      "Confidentiality is the bedrock of mediation. Without absolute confidentiality, parties would be unwilling to make concessions, disclose vulnerabilities, or explore commercial trade-offs. Codified primarily in Sections 22 and 23 of the Mediation Act, 2023, the doctrine prohibits mediators, parties, participants, experts, and legal counsel from disclosing or relying upon any proposals, admissions, or documents prepared solely for the mediation in any subsequent litigation or arbitration. This statutory privilege reinforces the common-law 'without-prejudice' rule (and Section 23 of the Indian Evidence Act / BSA) by explicitly barring the mediator from being compelled as a witness in any judicial or administrative proceeding regarding the mediation.",

    hindiExplanation:
      "मध्यस्थता गोपनीयता एवं पूर्वाग्रह-रहित विशेषाधिकार (Mediation Confidentiality) मध्यस्थता अधिनियम, 2023 की धारा 22 और 23 के तहत एक वैधानिक सुरक्षा है। इसके अनुसार मध्यस्थता (Mediation) की कार्यवाही के दौरान की गई कोई भी बातचीत, रियायत, प्रस्ताव, स्वीकारोक्ति या प्रस्तुत दस्तावेज पूर्णतः गोपनीय रहते हैं। इन्हें भविष्य में किसी भी अदालत या मध्यस्थ अधिकरण में साक्ष्य के रूप में प्रस्तुत या उपयोग नहीं किया जा सकता। मध्यस्थ को भी न्यायालय में गवाह बनने के लिए बाध्य नहीं किया जा सकता।",

    legalOriginAndHistory:
      "Rooted in the common law doctrine of 'without prejudice' communications established to encourage out-of-court settlement of disputes (Cutts v. Head [1984] Ch 290). In India, previously guided by Section 89 of the CPC (Afcons Infrastructure, 2010), the principle achieved comprehensive statutory backing with the enactment of the standalone Mediation Act, 2023 (Act No. 32 of 2023) aligning India with the UN Convention on International Settlement Agreements Resulting from Mediation (Singapore Convention on Mediation).",

    statutoryBasis: [
      {
        statute: "Mediation Act, 2023",
        provision: "Section 22",
        description: "Confidentiality of mediation proceedings — imposes explicit duty on mediator, parties, and participants to maintain strict confidentiality."
      },
      {
        statute: "Mediation Act, 2023",
        provision: "Section 23",
        description: "Privilege against disclosure and inadmissibility of information in subsequent legal proceedings."
      },
      {
        statute: "Bharatiya Sakshya Adhiniyam, 2023",
        provision: "Section 20 (formerly Sec 23 IEA)",
        description: "Admissions in civil cases when relevant — protects without prejudice settlement communications."
      }
    ],

    essentialElements: [
      "All communications, settlement proposals, admissions, and views expressed during mediation are protected.",
      "The protection extends to the mediator, parties, advocates, experts, and any observers.",
      "Inadmissibility: No party can rely on or introduce mediation communications as evidence in any court or arbitral tribunal.",
      "Witness Immunity: The mediator cannot be summoned as a witness in any court to testify about what transpired in mediation.",
      "Mediated Settlement Agreements (MSA) are registered and enforceable as court judgments under Section 27 of the 2023 Act."
    ],

    practicalApplicationAndExamples: [
      {
        scenario: "Attempt to use mediation admission in court",
        facts: "During commercial mediation, Defendant admits: 'We owe ₹2 Crores, but can only pay ₹1 Crore right now.' The mediation fails. In subsequent summary suit, Plaintiff attaches the mediator's session notes containing Defendant's admission.",
        application: "The court must strike out the mediator's notes and reject the evidence under Section 23 of the Mediation Act, 2023. Admissions made in mediation are privileged and inadmissible."
      },
      {
        scenario: "Summoning mediator as witness",
        facts: "Losing party in a partnership dissolution attempts to summon the court-appointed mediator to prove that the opposing partner was lying during caucuses.",
        application: "The subpoena will be quashed. Section 23 explicitly grants mediators immunity from being summoned or compelled to give testimony regarding mediation proceedings."
      }
    ],

    landmarkJudgments: [
      {
        caseName: "Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. Pvt. Ltd.",
        citation: "(2010) 8 SCC 24",
        court: "Supreme Court of India",
        year: 2010,
        ratioDecidendi: "Landmark ruling explaining the scope of Section 89 CPC and ADR mechanisms. Highlighted that confidentiality is the lifeblood of mediation and that court-annexed mediation must guarantee non-disclosure to the presiding judge."
      },
      {
        caseName: "Moti Ram (Dead) Tr. LRs. v. Ashok Kumar & Anr.",
        citation: "(2011) 1 SCC 466",
        court: "Supreme Court of India",
        year: 2011,
        ratioDecidendi: "Held that mediators must submit only a one-line report to the referral court: either 'Mediation Successful' (with signed settlement terms) or 'Mediation Unsuccessful'. Mediators should never state why mediation failed or what parties discussed."
      },
      {
        caseName: "Perry v. Neupert",
        citation: "[2019] EWHC 2275 (Ch)",
        court: "High Court of England and Wales",
        year: 2019,
        ratioDecidendi: "Reaffirmed the strict sanctity of without-prejudice negotiations and held that courts will fiercely guard against disclosure of mediation papers unless unambiguous waiver is established."
      }
    ],

    exceptionsAndLimitations: [
      "Evidence otherwise discoverable: Documents that exist independently of mediation (e.g., pre-existing invoices, contracts) do not become confidential merely because they were shown during mediation.",
      "Threat to commit a crime: Confidentiality does not protect statements involving threats to commit bodily harm or felony.",
      "Enforcement of settlement: Disclosure is permitted to the limited extent necessary to prove the execution and enforcement of the Mediated Settlement Agreement (MSA).",
      "Child abuse allegations: Disclosures regarding child welfare or sexual harassment cannot be shielded under mediation privilege."
    ],

    practicalLitigationNotes: [
      "Mediator's Report: Ensure the mediator files only the standard outcome report. If the mediator improperly submits confidential minutes or blames one party for intransigence, immediately move an application to redact the report.",
      "Execution of MSA: Under Section 20 of the Mediation Act 2023, the mediated settlement agreement must be reduced to writing and authenticated by the mediator to become enforceable under Section 27.",
      "Without Prejudice Label: Always header settlement offers and draft mediation agreements with 'WITHOUT PREJUDICE — PRIVILEGED UNDER MEDIATION ACT 2023'."
    ],

    relatedTerms: [
      "dict-kompetenz-kompetenz",
      "dict-interim-measures-arbitration",
      "dict-estoppel-doctrine",
      "dict-res-judicata"
    ],

    faqsAndExamNotes: [
      {
        question: "Can an admission made during mediation be cited as evidence in an ongoing arbitration?",
        answer: "No. Section 23 of the Mediation Act, 2023 strictly prohibits the disclosure or introduction of any admission or communication made in mediation as evidence in any subsequent arbitral or court proceedings."
      },
      {
        question: "How is a Mediated Settlement Agreement (MSA) enforced under the Mediation Act, 2023?",
        answer: "Under Section 27 of the Mediation Act, 2023, an authenticated MSA is enforceable in the same manner as a judgment or decree passed by a civil court under the Code of Civil Procedure, 1908."
      }
    ],

    sourceProvenance: {
      authoritativeSource: "Sections 22, 23, 27, Mediation Act, 2023; Afcons Infrastructure (2010); Moti Ram (2011); Singapore Convention on Mediation.",
      editorialStatus: "Verified Complete",
      lastReviewed: "2026-10-10"
    }
  }
];
