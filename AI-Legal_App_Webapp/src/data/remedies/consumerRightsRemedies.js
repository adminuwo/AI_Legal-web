// ─── CONSUMER RIGHTS & FORUM GRIEVANCE REMEDIES ─────────────────────────────
// Authoritative consumer remedies under Consumer Protection Act, 2019 & E-Commerce Rules

export const CONSUMER_RIGHTS_REMEDIES = [
  {
    id: 'rem-consumer-e-daakhil',
    slug: 'consumer-deficiency-refund-e-daakhil-remedy-cpa-2019',
    title: 'Consumer Grievance Redressal: E-Daakhil Filing for Refunds, Deficiency & Product Liability',
    category: 'Consumer Rights & Forum Grievance',
    remedyType: 'Statutory Compensation & Product Liability Order',
    urgencyLevel: 'Standard Litigation (Within 2 Years)',
    forum: 'District Consumer Disputes Redressal Commission / State Commission / NCDRC',
    summary: 'Direct quasi-judicial remedy for consumers seeking replacement of defective goods, refund with interest for deficient services, compensation for mental agony, and damages for product liability under the Consumer Protection Act, 2019.',
    whenToUse: 'When an electronics brand refuses warranty repair, an airline cancels flights without refund, a bank deducts unauthorized charges, or a vehicle has a manufacturing defect.',
    overview: 'The Consumer Protection Act, 2019 (CPA 2019) provides a robust, pro-consumer three-tier dispute resolution machinery designed to eliminate procedural complexities. Under Section 35, an aggrieved consumer can institute a complaint before the District Commission within whose local limits the consumer resides or personally works for gain (Section 34(2)(d)). The Act introduced the revolutionary concept of "Product Liability" (Sections 82–87), holding manufacturers, service providers, and sellers strictly liable for harm caused by defective products. Filing is facilitated seamlessly through the nationwide online portal "e-Daakhil".',
    statutoryBasis: 'Consumer Protection Act, 2019 — Section 2(7) (Definition of Consumer), Section 2(10) (Defect), Section 2(11) (Deficiency), Section 2(47) (Unfair Trade Practice), Section 35 (Manner of complaint), Section 38 (Procedure on admission), and Sections 82–87 (Product Liability); read with Consumer Protection (Consumer Disputes Redressal Commissions) Rules, 2020.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any person who buys goods or hires/avails any services for consideration, whether online or offline; voluntary consumer associations; or legal heirs of a deceased consumer.',
      commercialExclusion: 'Does not include a person who obtains goods for resale or for any commercial purpose (except when goods are bought exclusively for earning livelihood by means of self-employment under Section 2(7) Explanation).',
      pecuniaryJurisdiction: 'District Commission: Value of goods/services paid as consideration up to ₹50 Lakhs; State Commission: ₹50 Lakhs to ₹2 Crores; NCDRC: Exceeding ₹2 Crores (as amended by 2021 Pecuniary Rules).'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Automobile Manufacturer Refusing to Replace a Vehicle with Engine Defect',
        facts: 'A consumer purchased a new car for ₹18 Lakhs. Within two weeks, the engine stalled repeatedly on highways. The service center failed to rectify the defect after four attempts and refused replacement.',
        legalViolation: 'Manufacturing defect under Section 2(10) and deficiency of service under Section 2(11); attracts product liability under Section 84 CPA 2019.',
        applicableRemedy: 'Filing a Consumer Complaint on e-Daakhil seeking full refund of ₹18 Lakhs with 12% interest, or brand-new vehicle replacement plus ₹2 Lakhs compensation for harassment.'
      },
      {
        scenarioTitle: 'Health Insurance Company Wrongfully Repudiating a Valid Hospitalization Claim',
        facts: 'A policyholder was hospitalized for emergency cardiac surgery costing ₹8 Lakhs. The insurer repudiated the cashless claim citing vague "pre-existing disease" clauses despite a 5-year continuous policy.',
        legalViolation: 'Unfair trade practice and gross deficiency in insurance services contrary to IRDAI Protection of Policyholders Regulations.',
        applicableRemedy: 'Filing a complaint before the District Consumer Commission praying for reimbursement of ₹8 Lakhs with interest and exemplary punitive damages.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Issuance of 15-Day Statutory Legal Notice',
        action: 'Draft and serve a formal 15-day Demand Notice on the seller, manufacturer, or service provider via Registered Post AD and email, setting out the defect and demanding refund or replacement within 15 days.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Registration & Account Creation on e-Daakhil Portal',
        action: 'Visit edaakhil.nic.in. Register as a consumer, verify Aadhaar/mobile OTP, and select the competent District Commission based on consumer residence under Section 34(2)(d).'
      },
      {
        stageNumber: 3,
        stageTitle: 'Drafting Complaint & Uploading Digital Dossier',
        action: 'Upload the formal complaint in bookmarked PDF format, supported by an Affidavit of Verification. Annex purchase invoice, warranty card, expert technical inspection report (if applicable), and postal proofs.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Online Fee Payment via Bharatkosh Gateway',
        action: 'Pay statutory court fees online through the integrated Bharatkosh payment portal (Fee is Nil for claims up to ₹5 Lakhs; ₹200–₹1,000 for claims up to ₹50 Lakhs).'
      },
      {
        stageNumber: 5,
        stageTitle: 'Admission Scrutiny & Issue of Notice (21-Day Mandate)',
        action: 'The Commission scrutinizes admissibility under Section 36. If not decided within 21 days, the complaint is deemed admitted. Commission issues notice to opposite party returnable in 30 days.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Mandatory 45-Day Reply Hard Cap by Opposite Party',
        action: 'Under Section 38(2)(a) and the 5-Judge Constitution Bench ruling in New India Assurance, the opposite party must file its written version within 30 days (extendable by max 15 days); after 45 days, the right of defense is forfeited.'
      },
      {
        stageNumber: 7,
        stageTitle: 'Summary Adjudication & Enforcement of Award',
        action: 'Both parties submit evidence by affidavit. Commission passes final award. If the opposite party fails to comply, execute under Section 71 (attachment like civil decree) or Section 72 (criminal penalty with jail up to 3 years).'
      }
    ],
    documentsAndEvidence: [
      'Original Retail Invoice / Cash Memo / Booking Voucher.',
      'Warranty / Guarantee Card and Product Literature.',
      'Bank Account Statement / Credit Card Slip proving payment of consideration.',
      'Email correspondence, WhatsApp chats, and Customer Care ticket logs.',
      'Office copy of the 15-day Legal Notice with India Post delivery tracking report.',
      'Expert Technical Analysis Report under Section 38(2)(c) (in complex mechanical/chemical defects).',
      'Affidavit of Verification of the Complainant.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'District Consumer Disputes Redressal Commission (DCDRC) having jurisdiction where complainant resides or works.',
      appellateForum: 'State Consumer Disputes Redressal Commission (SCDRC) under Section 41 within 45 days.',
      nationalForum: 'National Consumer Disputes Redressal Commission (NCDRC), New Delhi under Section 51.',
      executionForum: 'Same Consumer Commission under Sections 71 & 72 CPA 2019.'
    },
    limitationAndDeadlines: '2 years from the date on which the cause of action arose under Section 69 CPA 2019. Delay condonable under Section 69(2) if sufficient cause is demonstrated.',
    possibleOutcomes: [
      'Direction to remove the defect in goods or deficiency in services.',
      'Order directing refund of the entire price paid along with 9% to 12% interest.',
      'Direction to replace the defective product with a new defect-free item.',
      'Award of compensation for mental agony, harassment, and litigation costs (₹25,000 to ₹5,00,000).',
      'Punitive damages directed to be credited to the Consumer Welfare Fund.'
    ],
    landmarkJudgments: [
      {
        title: 'New India Assurance Co. Ltd. v. Hilli Multipurpose Cold Storage Pvt. Ltd.',
        citation: '(2020) 5 SCC 757 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'The Consumer Commission has no power to extend the time for filing the response/written version beyond the period of 15 days beyond 30 days as prescribed in the Act; the 45-day period is an absolute and mandatory statutory limitation.'
      },
      {
        title: 'Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor',
        citation: '(2022) SCC OnLine SC 478',
        court: 'Supreme Court of India',
        holding: 'Consumer Commission has the power to award refund of the entire amount paid by a consumer with just and reasonable interest; 9% interest from the date of each deposit is fair and compensatory.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Verify that pecuniary jurisdiction is calculated on the actual consideration paid (not the compensation claimed) pursuant to the 2021 Pecuniary Rules (Neena Aneja ruling).',
      commonPitfalls: 'Failing to serve a formal pre-litigation legal notice; while not strictly mandatory under the text of CPA 2019, it establishes the seller refusal and strengthens claims for mental agony.',
      tacticalAdvice: 'If the opposite party fails to file their written version within 45 days from notice service, immediately move an application to strike off defense and proceed ex-parte under Hilli Multipurpose.'
    },
    hindiExplanation: 'उपभोक्ता संरक्षण अधिकार (E-Daakhil पोर्टल): यदि आपने कोई सामान खरीदा है या सेवा ली है और उसमें कोई खराबी (Defect) या सेवा में कमी (Deficiency) निकलती है, तो आप उपभोक्ता संरक्षण कानून 2019 के तहत अपने जिले के उपभोक्ता आयोग में घर बैठे ई-दाखिल पोर्टल (edaakhil.nic.in) पर ऑनलाइन शिकायत दर्ज कर सकते हैं। ₹5 लाख तक के दावों पर कोई कोर्ट फीस नहीं है। आयोग कंपनी को पूरा पैसा ब्याज सहित वापस करने, नया सामान देने और मानसिक प्रताड़ना का हर्जाना देने का आदेश देता है।',
    faqs: [
      {
        q: 'Can a consumer file a complaint from their home city if the company is in another state?',
        a: 'Yes. Under Section 34(2)(d) of CPA 2019, a complaint can be instituted in the District Commission within whose local limits the complainant resides or personally works for gain, eliminating the need to travel.'
      },
      {
        q: 'What happens if a company refuses to comply with a Consumer Commission order?',
        a: 'Under Section 72 CPA 2019, the Commission can initiate criminal proceedings and punish the company directors with imprisonment up to 3 years and/or fine up to ₹1 Lakh.'
      }
    ],
    tags: ['consumer-grievance', 'e-daakhil', 'cpa 2019', 'refund', 'deficiency in service', 'product liability', 'district commission', 'hilli multipurpose']
  },

  {
    id: 'rem-ecommerce-unfair-trade-practices',
    slug: 'ecommerce-fraud-dark-patterns-non-refund-remedies',
    title: 'E-Commerce Consumer Protections: Remedies Against Dark Patterns, Fake Reviews & Non-Refunds',
    category: 'Consumer Rights & Forum Grievance',
    remedyType: 'Regulatory Enforcement & Consumer Compensation',
    urgencyLevel: 'Standard (Within 30 Days of Order Default)',
    forum: 'Central Consumer Protection Authority (CCPA) / District Consumer Commission / NCH',
    summary: 'Comprehensive legal redress against online shopping scams, deceptive delivery of fake/damaged goods, drip pricing, forced subscription traps (Dark Patterns), and algorithmic refusal of contractual return/refund policies.',
    whenToUse: 'When an online marketplace delivers a fake or used product, refuses a return within the promised window, charges hidden checkout fees, or cancels an order unilaterally.',
    overview: 'The Consumer Protection (E-Commerce) Rules, 2020 and the Guidelines for Prevention and Regulation of Dark Patterns, 2023 established a stringent regulatory regime for online marketplaces and direct-to-consumer platforms. Marketplaces are strictly prohibited from manipulating search results, hosting fake user reviews, or imposing "dark patterns" (such as false urgency, basket sneaking, confirm shaming, and forced continuity). Under Section 10 of CPA 2019, the Central Consumer Protection Authority (CCPA) exercises suo motu powers to penalize misleading platforms, order class-action recalls, and enforce unconditional consumer refunds.',
    statutoryBasis: 'Consumer Protection Act, 2019 — Sections 10–27 (CCPA), Section 2(47) (Unfair Trade Practice); Consumer Protection (E-Commerce) Rules, 2020; and Guidelines for Prevention and Regulation of Dark Patterns, 2023 issued by Ministry of Consumer Affairs.',
    scopeAndEligibility: {
      whoCanInvoke: 'Every digital consumer purchasing goods or digital services from e-commerce platforms (Amazon, Flipkart, food delivery apps, quick-commerce, travel booking portals).',
      againstWhom: 'E-commerce marketplace entities, inventory-based e-commerce entities, online sellers, and digital payment gateways.',
      statutoryExceptions: 'Platforms acting as pure intermediaries under Section 79 of the IT Act are not exempted from liability if they participate in warehousing, logistics, or endorsement of the product.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Counterfeit Luxury Perfume Delivered with "No Return" Policy',
        facts: 'A consumer ordered a branded luxury watch worth ₹35,000 on an e-commerce platform. A cheap plastic knockoff was delivered. When the consumer raised a ticket, the platform rejected the return citing an arbitrary "non-returnable item" policy.',
        legalViolation: 'Unfair trade practice under Section 2(47) and violation of Rule 5(3)(a) of E-Commerce Rules 2020 which mandates acceptance of return for defective/counterfeit goods.',
        applicableRemedy: 'Filing a formal complaint on the National Consumer Helpline (NCH) and initiating a claim before the District Commission for refund and punitive compensation.'
      },
      {
        scenarioTitle: 'Dark Pattern: Basket Sneaking of Unwanted Travel Insurance',
        facts: 'While booking a flight ticket online, an airline portal auto-checked a ₹750 travel insurance box and convenience charges that could not be unselected without navigating through 4 misleading screens.',
        legalViolation: 'Explicitly prohibited as a "Dark Pattern" (Basket Sneaking & Interface Interference) under 2023 CCPA Guidelines.',
        applicableRemedy: 'Class-action complaint submitted to the CCPA praying for withdrawal of the deceptive interface and refund of all unauthorized deductions.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Evidence Preservation (Unboxing Video & Order Logs)',
        action: 'Preserve continuous unboxing video of the delivery, parcel shipping label showing AWB tracking, invoice copy, return request ticket screenshots, and customer support chat transcripts.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Escalation to Platform Resident Grievance Officer (RGO)',
        action: 'Under Rule 5(4) of E-Commerce Rules 2020, every platform must appoint a Grievance Officer. Send an email detailing the defect and AWB number. The officer is legally mandated to acknowledge within 48 hours and resolve within 1 month.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Lodging Complaint on National Consumer Helpline (NCH - 1915)',
        action: 'Call National Consumer Helpline 1915 or register on consumerhelpline.gov.in / INGRAM portal. State the platform order ID and upload unboxing photos. NCH directly intercedes with the e-commerce corporate desk.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Filing Class Action Complaint before CCPA (ccpa-moca@gov.in)',
        action: 'If the platform engages in systematic dark patterns or widespread counterfeit sales, submit a petition to the Chief Commissioner, CCPA, Krishi Bhawan, New Delhi for initiation of an investigation by the Director General.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Consumer Commission Complaint via e-Daakhil for Damages',
        action: 'If the platform refuses refund, file a Consumer Complaint on e-Daakhil against both the marketplace and the registered seller claiming refund of purchase amount with 18% interest and ₹50,000 compensation.'
      }
    ],
    documentsAndEvidence: [
      'Order Confirmation Email and Digital Tax Invoice with Seller GSTIN.',
      'Photographs and continuous Video of opening the sealed delivery package.',
      'Shipping Label showing courier Airway Bill (AWB) number and weight.',
      'Customer support chat logs, rejection emails, and Grievance Officer correspondence.',
      'Screenshot of product page showing return/refund terms at the time of purchase.'
    ],
    authoritiesAndJurisdiction: {
      primaryAdministrativeForum: 'National Consumer Helpline (NCH - 1915) & INGRAM portal.',
      regulatoryInvestigativeForum: 'Central Consumer Protection Authority (CCPA), New Delhi.',
      judicialAdjudicatoryForum: 'District Consumer Disputes Redressal Commission under Section 35 CPA 2019.'
    },
    limitationAndDeadlines: 'Platform Grievance Officer must acknowledge within 48 hours and resolve within 1 month. Formal consumer complaint must be filed within 2 years from delivery date.',
    possibleOutcomes: [
      'Immediate refund credited to bank account / original payment source via NCH mediation.',
      'District Commission award directing refund with interest and ₹25,000–₹1,00,000 compensation.',
      'CCPA penalty of up to ₹10 Lakhs on the platform for deceptive dark patterns under Section 21.',
      'Mandatory product recall and cessation of misleading commercial practices.'
    ],
    landmarkJudgments: [
      {
        title: 'Amazon Seller Services Pvt. Ltd. v. Amway India Enterprises',
        citation: '2020 SCC OnLine Del 454',
        court: 'Delhi High Court',
        holding: 'E-commerce platforms are not passive conduits; when they control warehousing, packaging, and logistics, their safe-harbor immunity under Section 79 IT Act is curtailed if they fail to observe due diligence against counterfeit goods.'
      },
      {
        title: 'In Re: Unfair Trade Practices by Food Delivery Apps',
        citation: 'CCPA Order No. 12/2023',
        court: 'Central Consumer Protection Authority',
        holding: 'Directed leading food-delivery platforms to dismantle dark patterns, eliminate hidden convenience charges, and provide itemized pricing with clear opt-out options.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Always make both the E-Commerce Marketplace (e.g. Amazon/Flipkart) and the Third-Party Seller co-respondents in the complaint; marketplaces frequently try to shift entire liability to untraceable third-party sellers.',
      commonPitfalls: 'Failing to record a continuous unboxing video; online sellers routinely defend by claiming that the customer swapped the original item with a duplicate.',
      tacticalAdvice: 'Invoke Rule 5 of the 2020 E-Commerce Rules: marketplaces are legally barred from refusing returns if the product delivered is defective, counterfeit, or differs from the displayed description.'
    },
    hindiExplanation: 'ई-कॉमर्स और ऑनलाइन शॉपिंग में उपभोक्ता अधिकार: यदि किसी ऑनलाइन शॉपिंग ऐप (Amazon, Flipkart आदि) से मंगाया गया सामान नकली, टूटा या अलग निकलता है और कंपनी रिटर्न लेने या पैसे वापस करने से मना करती है, तो यह ई-कॉमर्स नियम 2020 के तहत अवैध है। उपभोक्ता राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 पर शिकायत कर सकता है या ई-दाखिल पर केस दर्ज कर सकता है। इसके अलावा, छिपे हुए चार्ज लगाना या जबरन सब्सक्रिप्शन जोड़ना (डार्क पैटर्न्स) कानूनन प्रतिबंधित है।',
    faqs: [
      {
        q: 'Can an e-commerce website refuse refund by saying "Return Policy Closed"?',
        a: 'No. If a product delivered is counterfeit, defective, or fundamentally different from the advertised description, contractual return windows cannot override statutory rights against unfair trade practices under CPA 2019.'
      },
      {
        q: 'What are "Dark Patterns" in online shopping?',
        a: 'Dark patterns are deceptive design tricks used in apps and websites to manipulate users into doing things they did not intend to do (e.g. auto-adding insurance to cart, hiding cancel buttons, or creating fake countdown timers).'
      }
    ],
    tags: ['consumer-grievance', 'ecommerce fraud', 'dark patterns', 'nch 1915', 'ccpa', 'fake goods', 'online shopping refund', 'cpa 2019']
  },

  {
    id: 'rem-builder-delay-flat-possession',
    slug: 'homebuyer-remedies-builder-delay-flat-possession-cpa-rera',
    title: 'Homebuyer Remedies Against Builder Delay: Refund with Interest under CPA 2019 & RERA Section 18',
    category: 'Consumer Rights & Forum Grievance',
    remedyType: 'Statutory Real Estate Recovery & Compensation',
    urgencyLevel: 'High Priority (Upon Expiry of Possession Date)',
    forum: 'State / National Consumer Commission (CPA 2019) OR Real Estate Regulatory Authority (RERA)',
    summary: 'Powerful statutory rights empowering homebuyers to claim full refund of all amounts deposited along with 9% to 12% compound interest and compensation, or monthly delayed possession interest, when a real estate promoter fails to deliver flat possession on time.',
    whenToUse: 'When a real estate developer delays flat possession beyond the agreement date, demands illegal escalation charges, or fails to obtain the Occupancy Certificate (OC).',
    overview: 'Homebuyers subjected to indefinite delays by real estate builders possess concurrent statutory remedies. In the landmark Pioneer Urban Land & Infrastructure v. Govindan Raghavan and Imperia Structures v. Anil Patni decisions, the Supreme Court held that the remedies available to homebuyers under the Consumer Protection Act and RERA are concurrent and cumulative. A buyer cannot be compelled to accept delayed possession years after the promised date and is entitled to an immediate refund of the entire deposited sum with compensatory interest under Section 18 of RERA or Section 39 of CPA 2019.',
    statutoryBasis: 'Consumer Protection Act, 2019 — Sections 35, 39, 47 & 58; Real Estate (Regulation and Development) Act, 2016 (RERA) — Section 18 (Return of amount and compensation), Section 19 (Rights of allottees); read with Supreme Court Pioneer Urban doctrine.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any individual homebuyer, group of allottees, or registered association of allottees who booked a residential flat or commercial plot.',
      againstWhom: 'Real estate builders, developers, promoter companies, and housing project directors.',
      forumChoiceDoctrine: 'Homebuyer has complete freedom to choose between RERA and Consumer Commission (Imperia Structures); however, simultaneous complaints in both forums for identical relief are barred.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Builder Delaying Possession by 4 Years with 95% Amount Paid',
        facts: 'A homebuyer paid ₹85 Lakhs (95% of total cost) for a 3-BHK apartment in Gurugram promised in December 2020. In 2024, the tower was incomplete and the builder demanded an additional ₹10 Lakhs as "cost escalation".',
        legalViolation: 'Breach of Section 18 RERA and deficiency in service under CPA 2019; one-sided builder-buyer agreement clauses are unfair trade practices (Pioneer Urban).',
        applicableRemedy: 'Filing a Consumer Complaint before the State/National Consumer Commission claiming full refund of ₹85 Lakhs with 9% interest from date of each deposit and ₹5 Lakhs compensation.'
      },
      {
        scenarioTitle: 'Offer of Possession Without Mandatory Occupancy Certificate (OC)',
        facts: 'A developer offered "fit-out possession" to homebuyers and forced them to pay maintenance charges while the municipal Occupancy Certificate had not been granted by local authorities.',
        legalViolation: 'Offering possession without a valid Occupancy Certificate is illegal under RERA and local municipal bylaws; buyer is entitled to refuse possession until valid OC is obtained.',
        applicableRemedy: 'Filing an application before RERA under Section 18 seeking monthly delay compensation until complete legal OC is procured.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Verification of Builder-Buyer Agreement (BBA) Possession Clause',
        action: 'Examine Clause 10/14 of the BBA detailing the promised possession date and grace period (typically 36 months + 6 months grace). Calculate the exact default delay date.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Strategic Choice of Forum: RERA vs Consumer Commission',
        action: 'Evaluate relief: (a) If buyer wants to stay in the project and only wants monthly delay interest, choose State RERA; (b) If buyer wants 100% money back with 9%–12% interest and compensation, choose State/National Consumer Commission.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Service of Final Notice of Termination & Demand for Refund',
        action: 'Serve a formal legal notice terminating the booking for incurable delay and demanding refund of all deposited amounts with interest under Pioneer Urban doctrine within 15 days.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Filing Complaint on e-Daakhil (Consumer) or RERA Portal',
        action: 'File complaint online annexing the BBA, all bank payment receipts, account statement, site progress photographs, and termination notice. Pay court fee.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Adjudication & Passing of Final Refund Decree',
        action: 'Commission/RERA hears arguments. Applying Pioneer Urban and Wing Commander Arifur Rahman, court orders builder to refund principal amount with interest from date of each deposit within 60 days.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Execution via Recovery Certificate & Asset Attachment',
        action: 'If the builder defaults on payment, apply for a Recovery Certificate (RC) issued to the District Magistrate for recovery as arrears of land revenue, or attach builder bank accounts under Section 71 CPA 2019.'
      }
    ],
    documentsAndEvidence: [
      'Original Builder-Buyer Agreement (BBA) / Allotment Letter.',
      'Bank Account Statements and Builder Receipts proving every payment made.',
      'Home Loan Sanction Letter and Interest Amortization Schedule (from bank).',
      'Recent Date-Stamped Site Photographs showing unfinished construction.',
      'RTI reply or municipal letter confirming project has no Occupancy Certificate.',
      'Office copy of Legal Notice demanding refund with postal delivery tracking.'
    ],
    authoritiesAndJurisdiction: {
      primaryConsumerForum: 'State Consumer Commission (Claims ₹50L to ₹2Cr) / NCDRC (Claims exceeding ₹2Cr).',
      reraForum: 'State Real Estate Regulatory Authority (RERA) / RERA Adjudicating Officer.',
      appellateForum: 'RERA Appellate Tribunal / Supreme Court under Section 23 of CPA 2019.'
    },
    limitationAndDeadlines: 'Continuous cause of action: limitation does not expire so long as the builder has not delivered lawful possession with an Occupancy Certificate (Meerut Development Authority v. Mukesh Kumar Gupta).',
    possibleOutcomes: [
      'Order directing 100% refund of deposited amounts along with 9% to 12% compound interest.',
      'Direction to builder to pay monthly delayed possession interest (SBI MCLR + 2%) until physical delivery.',
      'Award of ₹2 Lakhs to ₹5 Lakhs compensation for mental agony and litigation expenses.',
      'Execution of award through attachment of builder escrow accounts and personal properties.'
    ],
    landmarkJudgments: [
      {
        title: 'Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan',
        citation: '(2019) 5 SCC 725',
        court: 'Supreme Court of India',
        holding: 'A homebuyer cannot be compelled to accept delayed possession of an apartment after inordinate delay; one-sided builder clauses imposing unfair terms are null and void; the buyer is entitled to an immediate refund with interest.'
      },
      {
        title: 'Imperia Structures Ltd. v. Anil Patni',
        citation: '(2020) 10 SCC 783',
        court: 'Supreme Court of India',
        holding: 'Remedies under the Consumer Protection Act and RERA are concurrent and cumulative; the enactment of RERA does not bar a consumer from approaching the Consumer Commission directly.'
      },
      {
        title: 'Wg. Cdr. Arifur Rahman Khan v. DLF Southern Homes Pvt. Ltd.',
        citation: '(2020) 16 SCC 512',
        court: 'Supreme Court of India',
        holding: 'Developers must pay delay compensation calculated at 6% simple interest per annum from the promised date of possession until delivery, in addition to contractual penalties.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Check whether the builder has declared insolvency under the Insolvency and Bankruptcy Code (IBC); if an interim resolution professional (IRP) is appointed and moratorium under Section 14 is active, file claims with the IRP rather than filing a new consumer suit.',
      commonPitfalls: 'Accepting "key handover" or fit-out possession before the Occupancy Certificate is issued, which extinguishes delay claims and makes occupation illegal.',
      tacticalAdvice: 'In claims exceeding ₹2 Crores, approach NCDRC directly on e-Daakhil; NCDRC orders have national enforcement authority and routinely freeze builder escrow accounts.'
    },
    hindiExplanation: 'बिल्डर द्वारा फ्लैट देने में देरी पर घर खरीदारों के कानूनी अधिकार: यदि किसी बिल्डर ने तय समय पर फ्लैट का पजेशन नहीं दिया है, तो सुप्रीम कोर्ट (Pioneer Urban केस) के अनुसार खरीदार को पूरा पैसा 9% से 12% ब्याज सहित वापस लेने का पूरा अधिकार है। खरीदार को सालों बाद देर से फ्लैट लेने के लिए मजबूर नहीं किया जा सकता। खरीदार RERA या उपभोक्ता आयोग (e-Daakhil) में केस दर्ज करके अपने पूरे पैसे की वसूली और हर्जाना हासिल कर सकता है।',
    faqs: [
      {
        q: 'Can a homebuyer seek both possession and delay compensation together?',
        a: 'Yes. A buyer who wishes to keep the flat can claim monthly delayed possession interest from the promised date until the actual date of delivery with an Occupancy Certificate.'
      },
      {
        q: 'Is an agreement clause stating "only ₹5 per sq ft delay penalty" binding on the buyer?',
        a: 'No. The Supreme Court in Pioneer Urban held that one-sided penalty clauses (where builder charges 18% for buyer default but pays only ₹5 for its own delay) are unfair trade practices and are not binding.'
      }
    ],
    tags: ['consumer-grievance', 'builder delay', 'rera section 18', 'flat possession', 'pioneer urban', 'imperia structures', 'homebuyer rights', 'ncdrc']
  },

  {
    id: 'rem-medical-negligence-consumer',
    slug: 'medical-negligence-hospital-deficiency-claims-cpa-2019',
    title: 'Medical Negligence Claims & Hospital Deficiency Redressal under CPA 2019',
    category: 'Consumer Rights & Forum Grievance',
    remedyType: 'Tortious & Statutory Consumer Compensation',
    urgencyLevel: 'Standard (Within 2 Years of Injury / Death)',
    forum: 'District / State / National Consumer Commission (based on treatment cost paid)',
    summary: 'Actionable legal remedy for patients and bereaved families seeking substantial monetary compensation against private hospitals, surgical nursing homes, and doctors for surgical blunders, diagnostic negligence, and treatment deficiency.',
    whenToUse: 'When a patient suffers permanent disability, organ damage, surgical instrument retention, wrong medication, or death due to gross medical carelessness or lack of informed consent.',
    overview: 'Medical services rendered by private hospitals, nursing homes, and medical practitioners for consideration are recognized as "services" under Section 2(42) of the Consumer Protection Act, 2019 (Indian Medical Association v. V.P. Shantha). Medical negligence requires proof of three elements: (1) Existence of a duty of care; (2) Breach of that duty falling below the standard of an ordinary skilled practitioner (Bolam Test); and (3) Resultant injury or death directly caused by the breach. The doctrine of Res Ipsa Loquitur ("the thing speaks for itself") applies where instruments are left inside a patient abdomen or wrong limbs are operated upon (Jacob Mathew & Nizam Institute of Medical Sciences).',
    statutoryBasis: 'Consumer Protection Act, 2019 — Section 2(11) (Deficiency), Section 2(42) (Service), Section 35, 47 & 58; read with National Medical Commission (NMC) Professional Conduct Regulations; and Indian Medical Association v. V.P. Shantha (1995) 6 SCC 651.',
    scopeAndEligibility: {
      whoCanInvoke: 'The patient who suffered injury, or legal heirs/dependents in case of patient death, or parents in case of a minor child.',
      againstWhom: 'Operating surgeons, consulting physicians, anesthesiologists, and private hospitals/nursing homes (vicariously liable for staff actions).',
      statutoryExceptions: 'Treatment rendered completely free of charge in government general hospitals to all patients without consideration does not fall under CPA (V.P. Shantha exception); however, paid rooms in government hospitals are covered.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Surgical Mop Left Inside Abdomen Leading to Septicemia',
        facts: 'Following a gallbladder laparoscopy at a private specialty hospital, the patient developed excruciating abdominal pain. An independent CT scan 4 weeks later revealed a surgical gauze mop left inside the peritoneal cavity, requiring emergency bowel resection.',
        legalViolation: 'Gross surgical negligence; attracts the doctrine of Res Ipsa Loquitur; hospital and surgical team are jointly and severally liable.',
        applicableRemedy: 'Filing a Consumer Complaint before the State Commission claiming ₹60 Lakhs for additional surgeries, permanent organ impairment, and trauma.'
      },
      {
        scenarioTitle: 'Administering Known Allergic Drug Despite Clear Chart Warning',
        facts: 'A patient informed the hospital of a severe penicillin allergy, which was marked in red on the admission chart. The night resident doctor injected a penicillin derivative, inducing anaphylactic shock and hypoxic brain injury.',
        legalViolation: 'Breach of elementary duty of care; complete institutional failure and medical deficiency under Section 2(11) CPA 2019.',
        applicableRemedy: 'Consumer Complaint before NCDRC claiming ₹3 Crores lifetime nursing care and medical compensation.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Procurement of Complete Indoor Case Record (ICR)',
        action: 'Under NMC Code of Medical Ethics Regulation 1.3.2, every hospital is legally bound to furnish complete certified copies of the Indoor Case Record (ICR), operation notes, anesthesia charts, and nursing sheets within 72 hours of request.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Independent Medical Expert Opinion Procurement',
        action: 'Consult an independent senior specialist or obtain an evaluation report from a government medical board (AIIMS / PGI) establishing that the treatment departed from standard medical protocols.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Service of Comprehensive Legal Notice to Hospital & Doctors',
        action: 'Serve a formal legal notice setting out the medical chronology, protocol deviations, and claiming quantifiable compensation within 15 days.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Filing Complaint on e-Daakhil before Consumer Commission',
        action: 'File consumer complaint annexing all hospital bills, operation records, discharge summary, death summary (if applicable), expert opinion, and compensation calculation based on the multiplier method (Sarla Verma doctrine).'
      },
      {
        stageNumber: 5,
        stageTitle: 'Commission Reference to Government Medical Board',
        action: 'Under Section 38(2)(c) CPA 2019 and Jacob Mathew guidelines, the Commission refers the case sheets to an independent Medical Board of a government hospital for a sealed expert opinion.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Final Hearing & Award of Substantial Medical Compensation',
        action: 'Commission hears arguments on the medical board report. Upon establishing negligence, the court passes an award against the hospital and its indemnity insurance company.'
      }
    ],
    documentsAndEvidence: [
      'Certified Copy of Complete Indoor Case Record (ICR) with Nurses Daily Chart.',
      'Pre-operative Informed Consent Form (to check for fraud or blank consent).',
      'Diagnostic Test Reports, Biopsies, X-rays, MRI scans, and Pathology slides.',
      'Itemized Hospital Invoices and Pharmacy Bills.',
      'Independent Medical Expert Opinion / Government Medical Board Report.',
      'Income tax returns and salary slips of the victim (to compute loss of dependency).'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'District / State / National Consumer Commission based on total treatment cost paid.',
      ethicalRegulatoryForum: 'State Medical Council / National Medical Commission (NMC) for suspension of doctor medical license.',
      criminalForum: 'Police complaint under Section 106 BNS (death by negligence) in cases of gross recklessness (Jacob Mathew test).'
    },
    limitationAndDeadlines: '2 years from the date on which the negligence or death occurred (or date of discovery of foreign body) under Section 69 CPA 2019.',
    possibleOutcomes: [
      'Substantial monetary compensation awarded covering past and future medical care and loss of income.',
      'Hospital and operating doctor held jointly and severally liable.',
      'Order directing hospital to refund all treatment expenses with interest.',
      'Suspension of doctor medical practice registration by State Medical Council for professional misconduct.'
    ],
    landmarkJudgments: [
      {
        title: 'Jacob Mathew v. State of Punjab',
        citation: '(2005) 6 SCC 1 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Laid down the test for medical negligence: a professional is not liable merely because a better alternative treatment existed or because an error of judgment occurred; negligence requires proof that the doctor lacked requisite skill or failed to exercise reasonable competence (Bolam Test).'
      },
      {
        title: 'Nizam Institute of Medical Sciences v. Prashant S. Dhananka',
        citation: '(2009) 6 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Awarded landmark compensation of ₹1 Crore (upheld by SC) for paralysis caused by negligent tumor excision; held that compensation must be realistic and cover lifetime medical expenses and loss of dignity.'
      },
      {
        title: 'Samira Kohli v. Dr. Prabha Manchanda',
        citation: '(2008) 2 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Consent given for diagnostic laparoscopy does not authorize the surgeon to perform a hysterectomy (removal of uterus); operating without real and informed consent constitutes medical battery and deficiency in service.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Immediately demand the complete Indoor Case Record under Regulation 1.3.2 of the Medical Council Regulations; if delayed, hospitals often tamper with nurse notes and anesthesia monitoring logs.',
      commonPitfalls: 'Filing without an independent medical expert opinion; consumer commissions will not decide complex medical disputes purely on advocate oral arguments.',
      tacticalAdvice: 'Calculate compensation using the multiplier method from motor accident claims, adding claims for future nursing care, loss of career growth, and emotional distress.'
    },
    hindiExplanation: 'चिकित्सीय लापरवाही (Medical Negligence) पर कानूनी अधिकार: यदि किसी निजी अस्पताल या डॉक्टर की गंभीर लापरवाही, गलत सर्जरी, गलत दवा देने या मरीज के पेट में सर्जिकल उपकरण छूट जाने से मरीज की मौत या विकलांगता होती है, तो यह उपभोक्ता संरक्षण कानून के तहत सेवा में गंभीर कमी है। मरीज या उसके परिवार वाले उपभोक्ता अदालत में करोड़ों रुपये के मुआवजे का दावा कर सकते हैं। इसके अलावा राज्य मेडिकल काउंसिल में शिकायत दर्ज करके डॉक्टर का मेडिकल लाइसेंस भी रद्द कराया जा सकता है।',
    faqs: [
      {
        q: 'Can a hospital refuse to provide medical records to the patient family?',
        a: 'No. Under National Medical Commission regulations, hospitals are legally mandated to provide complete certified copies of all indoor case records within 72 hours of receiving a written request.'
      },
      {
        q: 'What is the doctrine of "Res Ipsa Loquitur" in medical negligence?',
        a: 'It means "the thing speaks for itself". In obvious blunders (such as leaving a sponge inside the body or amputating the wrong leg), the patient does not need expert testimony; the burden shifts to the doctor to prove how it occurred.'
      }
    ],
    tags: ['consumer-grievance', 'medical negligence', 'hospital deficiency', 'jacob mathew', 'res ipsa loquitur', 'patient rights', 'informed consent', 'ncdrc']
  },

  {
    id: 'rem-misleading-advertisement-ccpa',
    slug: 'misleading-advertisement-ccpa-class-action-remedies',
    title: 'Class Action & CCPA Complaints Against Misleading Advertisements & Celebrity Endorsements',
    category: 'Consumer Rights & Forum Grievance',
    remedyType: 'Regulatory Class Action & Penal Sanctions',
    urgencyLevel: 'Standard Public Grievance',
    forum: 'Central Consumer Protection Authority (CCPA), Ministry of Consumer Affairs, New Delhi',
    summary: 'Powerful administrative class-action mechanism under Section 10 of CPA 2019 to report, investigate, ban, and penalize false commercial advertisements, deceptive health claims, and celebrity endorsers who deceive consumers.',
    whenToUse: 'When a brand falsely advertises "100% cure for cancer/baldness", misleads public regarding product origin, promotes surrogate alcohol/tobacco ads, or conceals vital health risks.',
    overview: 'The Consumer Protection Act, 2019 created the Central Consumer Protection Authority (CCPA) as an apex statutory regulator equipped with an independent Investigation Wing headed by a Director-General. Under Section 10 and 21 of the Act, the CCPA has the statutory authority to recall unsafe goods, order reimbursement of the price, and impose heavy financial penalties of up to ₹10 Lakhs (and up to ₹50 Lakhs for repeat violations) on manufacturers, traders, and celebrity endorsers who publish misleading advertisements. Under the 2022 Guidelines for Prevention of Misleading Advertisements, celebrity endorsers are required to exercise genuine due diligence before promoting any claims.',
    statutoryBasis: 'Consumer Protection Act, 2019 — Section 2(28) (Misleading Advertisement), Section 10 (Establishment of CCPA), Section 18 (Powers of CCPA), Section 21 (Power to issue directions and penalties); and Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any consumer, group of consumers, recognized consumer organization, or the CCPA acting suo motu on media reports.',
      againstWhom: 'Manufacturers, service providers, advertising agencies, e-commerce platforms, television broadcasters, and celebrity/influencer endorsers.',
      statutoryExceptions: 'Endorsers can escape penalty if they establish that they conducted bona fide due diligence and verified scientific lab test certificates before endorsing the product.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'False Coaching Institute Advertisements Claiming Rank 1 Across 5 Centers',
        facts: 'A national competitive exam coaching institute published front-page newspaper advertisements claiming that the All India Rank 1 student studied full-time in their classroom program, whereas the student was only registered for a free mock interview.',
        legalViolation: 'Deceptive and misleading advertisement under Section 2(28) CPA 2019, inducing parents to pay lakhs in fees based on false representations.',
        applicableRemedy: 'Filing a formal complaint before the CCPA seeking an inquiry by the DG Investigation, imposition of ₹50 Lakhs penalty, and a ban on future misleading ads.'
      },
      {
        scenarioTitle: 'Celebrity Endorsement of Health Supplement Claiming "Instant Height Growth"',
        facts: 'A popular Bollywood actor endorsed an Ayurvedic nutritional drink claiming that consuming it guarantees 3 inches of height growth in adolescents without clinical trial proof.',
        legalViolation: 'Violation of 2022 Endorsement Guidelines; endorsers are strictly prohibited from endorsing claims that lack scientific validation.',
        applicableRemedy: 'Public complaint to the CCPA praying for suspension of the advertisement and a 1-year ban on the celebrity endorser under Section 21(2).'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Evidence Collection & Screenshot Capture',
        action: 'Preserve physical newspaper clippings, TV commercial video clips, YouTube influencer videos, sponsored Instagram posts, and packaging labels showing the misleading claim.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Drafting Formal Representation to CCPA',
        action: 'Draft petition addressed to the Chief Commissioner, Central Consumer Protection Authority, Krishi Bhawan, New Delhi. Highlight specific violations of Section 2(28) and the 2022 Guidelines.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Submission via Official Email (ccpa-moca@gov.in)',
        action: 'Submit complaint electronically to the CCPA along with video links, print copies, and scientific literature disproving the advertised claim.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Inquiry by Director General (Investigation Wing)',
        action: 'Under Section 19 CPA 2019, the CCPA directs the DG Investigation to conduct a nationwide preliminary inquiry, summon company executives, and examine scientific research files.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Issuance of Cease-and-Desist Order & Monetary Penalties',
        action: 'Under Section 21, the CCPA passes an order directing immediate withdrawal of the advertisement, imposes penalties up to ₹10 Lakhs (extendable to ₹50 Lakhs), and may ban the celebrity endorser for up to 1 year.'
      }
    ],
    documentsAndEvidence: [
      'Certified newspaper tear-sheet or digital recording of the commercial advertisement.',
      'Scientific or laboratory report disproving the advertised efficacy claim.',
      'Proof of financial loss or deception suffered by consumers.',
      'Copy of ASCI (Advertising Standards Council of India) advisory, if previously issued.',
      'Formal petition signed by the complainant or consumer forum.'
    ],
    authoritiesAndJurisdiction: {
      primaryRegulatoryForum: 'Central Consumer Protection Authority (CCPA), New Delhi.',
      selfRegulatoryBody: 'Advertising Standards Council of India (ASCI) (handles industry code violations).',
      appellateForum: 'National Consumer Disputes Redressal Commission (NCDRC) under Section 24 CPA 2019 within 30 days.'
    },
    limitationAndDeadlines: 'Can be initiated at any time while the advertisement is broadcast or within 2 years of dissemination.',
    possibleOutcomes: [
      'Immediate ban and withdrawal of the misleading advertisement from television and social media.',
      'Imposition of financial penalties up to ₹10 Lakhs on manufacturer and advertising agency.',
      'Disqualification and ban on the celebrity endorser from endorsing any product for 1 to 3 years.',
      'Direction to publish a corrective advertisement in identical fonts and size to undo public deception.'
    ],
    landmarkJudgments: [
      {
        title: 'CCPA v. GlaxoSmithKline Consumer Healthcare Ltd.',
        citation: 'CCPA Order No. 04/2022',
        court: 'Central Consumer Protection Authority',
        holding: 'Ordered withdrawal of advertisements claiming Sensodyne toothpaste is recommended by 9 out of 10 dentists worldwide without adequate scientific survey; imposed ₹10 Lakhs penalty.'
      },
      {
        title: 'Dabur India Ltd. v. Emami Ltd.',
        citation: '2019 SCC OnLine Del 9034',
        court: 'Delhi High Court',
        holding: 'Comparative advertisements cannot disparage competitor goods or make unverified health claims; truth in advertising is an integral facet of consumer protection.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Check whether the advertisement violates specific statutory bans, such as the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 which completely prohibits advertising cures for diabetes, baldness, or sexual disorders.',
      commonPitfalls: 'Filing complaints on ASCI portal alone; ASCI is a voluntary industry body whose orders lack statutory contempt teeth; always file directly before the statutory CCPA.',
      tacticalAdvice: 'In coaching institute or consumer product scams, pray for "corrective advertisements" at company expense; this inflicts severe brand accountability.'
    },
    hindiExplanation: 'भ्रामक विज्ञापनों और सेलिब्रिटी प्रचार के खिलाफ अधिकार: यदि कोई कंपनी टीवी, अखबार या सोशल मीडिया पर झूठा विज्ञापन देती है (जैसे 7 दिन में गोरापन, बिना पढ़े परीक्षा में टॉप, या बीमारी का जादुई इलाज) या कोई फिल्म स्टार/क्रिकेटर बिना जांचे झूठा प्रचार करता है, तो उपभोक्ता संरक्षण कानून 2019 के तहत केंद्रीय उपभोक्ता प्राधिकरण (CCPA) में शिकायत की जा सकती है। CCPA ऐसे विज्ञापनों पर तुरंत रोक लगा सकता है, कंपनी पर ₹50 लाख तक का जुर्माना लगा सकता है, और सेलिब्रिटी को 1 से 3 साल के लिए विज्ञापन करने से बैन कर सकता है।',
    faqs: [
      {
        q: 'Can a social media influencer be penalized for promoting a product on Instagram?',
        a: 'Yes. Under the 2022 CCPA Guidelines, social media influencers are legally recognized as endorsers and must clearly disclose material connections (e.g. #PaidAd or #Sponsored) and can be fined up to ₹10 Lakhs for false claims.'
      },
      {
        q: 'Does an aggrieved consumer get compensation from a CCPA proceeding?',
        a: 'The CCPA primarily imposes regulatory penalties and product recalls; to obtain personal compensation for financial loss, the consumer should simultaneously file on e-Daakhil before the District Commission.'
      }
    ],
    tags: ['consumer-grievance', 'misleading ads', 'ccpa', 'celebrity endorsement', 'dark patterns', 'false claims', 'consumer protection', 'class action']
  }
];
