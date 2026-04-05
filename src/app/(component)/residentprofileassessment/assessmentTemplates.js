// All assessment template definitions
export const ASSESSMENT_TYPES = [
  "Client Assessment", "Care Plan", "Risk Assessment", "Daily Notes",
  "MAR Chart", "Incident Report", "CARE PROVIDER", "Client Consent Form",
  "Support Worker Visit Log", "Home Environment Checklist",
  "Incident Reporting Form", "Lessons Learned", "Monthly Audit Summary",
  "Care Plan v2", "Risk Assessment v2", "Medication Error Log",
  "Initial Assessment", "Training Matrix"
];

export const TEMPLATE_FIELDS = {
  "Client Assessment": {
    key: "clientAssessment",
    sections: [
      { title: "Client Details", fields: [
        { name: "fullName", label: "Full Name" },
        { name: "dateOfBirth", label: "Date of Birth", type: "date" },
        { name: "address", label: "Address", textarea: true },
        { name: "contactNumber", label: "Contact Number" },
        { name: "nextOfKin", label: "Next of Kin" },
        { name: "gpDoctor", label: "GP/Doctor" },
      ]},
      { title: "Initial Assessment Areas", table: true, areas: [
        "personalCare", "mobility", "medication", "nutrition",
        "communication", "mentalHealth", "behaviour", "environment"
      ], areaLabels: {
        personalCare: "Personal Care", mobility: "Mobility", medication: "Medication",
        nutrition: "Nutrition", communication: "Communication", mentalHealth: "Mental Health",
        behaviour: "Behaviour", environment: "Environment"
      }},
      { title: "Sign Off", fields: [
        { name: "assessorName", label: "Assessor Name" },
        { name: "signature", label: "Signature" },
        { name: "date", label: "Date", type: "date" },
      ]}
    ]
  },
  "Care Plan": {
    key: "carePlanTemplate",
    sections: [
      { title: "Section 1: Personal Profile", fields: [
        { name: "preferredName", label: "Preferred Name" },
        { name: "culturalReligiousNeeds", label: "Cultural/Religious Needs", textarea: true },
        { name: "communicationStyle", label: "Communication Style" },
        { name: "likesDislikes", label: "Likes/Dislikes", textarea: true },
      ]},
      { title: "Section 2: Health Information", fields: [
        { name: "diagnoses", label: "Diagnoses", textarea: true },
        { name: "allergies", label: "Allergies" },
        { name: "medication", label: "Medication", textarea: true },
        { name: "mobilityNeeds", label: "Mobility Needs" },
      ]},
      { title: "Section 3: Daily Support", fields: [
        { name: "personalCare", label: "Personal Care", textarea: true },
        { name: "mealsHydration", label: "Meals & Hydration", textarea: true },
        { name: "mobility", label: "Mobility", textarea: true },
        { name: "socialActivities", label: "Social Activities", textarea: true },
        { name: "emotionalSupport", label: "Emotional Support", textarea: true },
      ]},
      { title: "Section 5: Emergency Instructions", fields: [
        { name: "emergencyContacts", label: "Emergency Contacts", textarea: true },
        { name: "medicalAlerts", label: "Medical Alerts", textarea: true },
        { name: "hospitalPreference", label: "Hospital Preference" },
      ]},
      { title: "Signatures", fields: [
        { name: "clientSignature", label: "Client" },
        { name: "familySignature", label: "Family/Representative" },
        { name: "managerSignature", label: "Manager" },
      ]}
    ],
    hasGoals: true
  },
  "Risk Assessment": {
    key: "riskAssessmentTemplate",
    sections: [
      { title: "Assessment Info", fields: [
        { name: "clientName", label: "Client Name" },
        { name: "assessmentDate", label: "Assessment Date", type: "date" },
      ]},
      { title: "Control Measures", fields: [
        { name: "staffInstructions", label: "Staff Instructions", textarea: true },
        { name: "equipmentRequired", label: "Equipment Required", textarea: true },
        { name: "monitoringFrequency", label: "Monitoring Frequency" },
        { name: "reviewSchedule", label: "Review Schedule" },
      ]},
      { title: "Signatures", fields: [
        { name: "assessorSignature", label: "Assessor" },
        { name: "managerSignature", label: "Manager" },
        { name: "clientSignature", label: "Client/Representative" },
      ]}
    ],
    hasRiskMatrix: true,
    defaultRisks: ["Falls", "Medication Errors", "Behavioural Risks", "Environmental Hazards"]
  },
  "Daily Notes": {
    key: "dailyNotesTemplate",
    sections: [
      { title: "Details", fields: [
        { name: "clientName", label: "Client Name" },
        { name: "date", label: "Date", type: "date" },
        { name: "staffName", label: "Staff Name" },
      ]},
      { title: "Observations", fields: [
        { name: "mood", label: "Mood" },
        { name: "behaviour", label: "Behaviour" },
        { name: "appetite", label: "Appetite" },
        { name: "mobility", label: "Mobility" },
      ]},
      { title: "Follow-Up", fields: [
        { name: "concerns", label: "Concerns / Follow-Up Needed", textarea: true },
        { name: "staffSignature", label: "Staff Signature" },
      ]}
    ],
    hasActivities: true,
    hasMedTable: true
  },
  "MAR Chart": {
    key: "marTemplate",
    sections: [
      { title: "Details", fields: [
        { name: "clientName", label: "Client Name" },
        { name: "month", label: "Month" },
      ]}
    ],
    hasMARGrid: true
  },
  "Incident Report": {
    key: "incidentReportTemplate",
    sections: [
      { title: "Incident Details", fields: [
        { name: "date", label: "Date", type: "date" },
        { name: "time", label: "Time" },
        { name: "location", label: "Location" },
        { name: "staffInvolved", label: "Staff Involved" },
        { name: "clientInvolved", label: "Client Involved" },
      ]},
      { title: "Description", fields: [
        { name: "description", label: "Description of Incident", textarea: true },
        { name: "immediateAction", label: "Immediate Action Taken", textarea: true },
      ]},
      { title: "Manager Notification", fields: [
        { name: "managerName", label: "Manager Name" },
        { name: "managerTimeNotified", label: "Time Notified" },
        { name: "managerActionTaken", label: "Action Taken", textarea: true },
        { name: "followUpRequired", label: "Follow-Up Required", textarea: true },
      ]},
      { title: "Signatures", fields: [
        { name: "staffSignature", label: "Staff" },
        { name: "managerSignature", label: "Manager" },
      ]}
    ],
    hasInjuries: true
  },
  "Client Consent Form": {
    key: "consentFormTemplate",
    sections: [
      { title: "Client Info", fields: [
        { name: "clientName", label: "Client Name" },
      ]},
      { title: "Signatures", fields: [
        { name: "clientSignature", label: "Client" },
        { name: "familySignature", label: "Family/Representative" },
        { name: "managerSignature", label: "Manager" },
      ]}
    ],
    hasConsents: true,
    defaultConsents: ["Care Services", "Medication Support", "Sharing Information with GP", "Emergency Contact Use", "Photos for Records"]
  },
  "Support Worker Visit Log": {
    key: "visitLogTemplate",
    sections: [
      { title: "Details", fields: [
        { name: "clientName", label: "Client Name" },
        { name: "weekStarting", label: "Week Starting", type: "date" },
      ]}
    ],
    hasVisits: true
  },
  "Home Environment Checklist": {
    key: "homeChecklistTemplate",
    sections: [
      { title: "Sign Off", fields: [
        { name: "assessorSignature", label: "Assessor Signature" },
        { name: "date", label: "Date", type: "date" },
      ]}
    ],
    hasChecklist: true,
    defaultAreas: ["Bathroom", "Kitchen", "Bedroom", "Living Area", "Fire Safety", "Electrical Safety"]
  },
  "Incident Reporting Form": {
    key: "incidentReportingForm",
    sections: [
      { title: "Incident Details", fields: [
        { name: "incidentDateTime", label: "Incident Date & Time" },
        { name: "location", label: "Location" },
        { name: "personsInvolved", label: "Persons Involved" },
        { name: "typeOfIncident", label: "Type of Incident" },
        { name: "description", label: "Description", textarea: true },
        { name: "immediateActions", label: "Immediate Actions Taken", textarea: true },
        { name: "medicalAttentionRequired", label: "Medical Attention Required (Yes/No)" },
        { name: "safeguardingConsidered", label: "Safeguarding Considered (Yes/No)" },
        { name: "managerNotified", label: "Manager Notified" },
        { name: "followUpActions", label: "Follow-Up Actions", textarea: true },
        { name: "signature", label: "Signature" },
        { name: "date", label: "Date", type: "date" },
      ]}
    ]
  },
  "Lessons Learned": {
    key: "lessonsLearned",
    sections: [
      { title: "Lessons Learned", fields: [
        { name: "incidentReference", label: "Incident Reference" },
        { name: "date", label: "Date", type: "date" },
        { name: "whatHappened", label: "What Happened", textarea: true },
        { name: "rootCause", label: "Root Cause", textarea: true },
        { name: "whatWentWell", label: "What Went Well", textarea: true },
        { name: "whatDidntGoWell", label: "What Didn't Go Well", textarea: true },
        { name: "learningPoints", label: "Learning Points", textarea: true },
        { name: "actionsRequired", label: "Actions Required", textarea: true },
      ]}
    ]
  },
  "Monthly Audit Summary": {
    key: "monthlyAuditSummary",
    sections: [
      { title: "Audit Details", fields: [
        { name: "month", label: "Month" },
        { name: "auditor", label: "Auditor" },
        { name: "areaAudited", label: "Area Audited" },
        { name: "findings", label: "Findings", textarea: true },
        { name: "score", label: "Score" },
        { name: "actionsRequired", label: "Actions Required", textarea: true },
        { name: "deadline", label: "Deadline", type: "date" },
      ]}
    ]
  },
  "Care Plan v2": {
    key: "carePlanV2",
    sections: [
      { title: "Care Plan", fields: [
        { name: "serviceUserName", label: "Service User Name" },
        { name: "dateOfBirth", label: "Date of Birth", type: "date" },
        { name: "nhsNumber", label: "NHS Number" },
        { name: "aboutMe", label: "About Me", textarea: true },
        { name: "needsPreferences", label: "Needs & Preferences", textarea: true },
        { name: "dailySupport", label: "Daily Support", textarea: true },
        { name: "healthNeeds", label: "Health Needs", textarea: true },
        { name: "risksSafety", label: "Risks & Safety", textarea: true },
        { name: "communicationNeeds", label: "Communication Needs", textarea: true },
        { name: "goalsOutcomes", label: "Goals & Outcomes", textarea: true },
        { name: "reviewDate", label: "Review Date", type: "date" },
      ]}
    ]
  },
  "Risk Assessment v2": {
    key: "riskAssessmentV2",
    sections: [
      { title: "Risk Assessment", fields: [
        { name: "riskTitle", label: "Risk Title" },
        { name: "personAtRisk", label: "Person at Risk" },
        { name: "assessor", label: "Assessor" },
        { name: "date", label: "Date", type: "date" },
        { name: "hazard", label: "Hazard", textarea: true },
        { name: "likelihood", label: "Likelihood" },
        { name: "impact", label: "Impact" },
        { name: "riskLevel", label: "Risk Level" },
        { name: "controls", label: "Controls", textarea: true },
        { name: "additionalControls", label: "Additional Controls", textarea: true },
      ]}
    ]
  },
  "Medication Error Log": {
    key: "medicationErrorLog",
    sections: [
      { title: "Error Details", fields: [
        { name: "date", label: "Date", type: "date" },
        { name: "serviceUser", label: "Service User" },
        { name: "errorType", label: "Error Type" },
        { name: "staffInvolved", label: "Staff Involved" },
        { name: "actionTaken", label: "Action Taken", textarea: true },
        { name: "outcome", label: "Outcome", textarea: true },
        { name: "managerReview", label: "Manager Review", textarea: true },
      ]}
    ]
  },
  "Initial Assessment": {
    key: "initialAssessment",
    sections: [
      { title: "Initial Assessment", fields: [
        { name: "referralSource", label: "Referral Source" },
        { name: "assessmentDate", label: "Assessment Date", type: "date" },
        { name: "personalDetails", label: "Personal Details", textarea: true },
        { name: "healthNeeds", label: "Health Needs", textarea: true },
        { name: "socialNeeds", label: "Social Needs", textarea: true },
        { name: "risks", label: "Risks", textarea: true },
        { name: "capacityConsent", label: "Capacity & Consent", textarea: true },
        { name: "desiredOutcomes", label: "Desired Outcomes", textarea: true },
      ]}
    ]
  },
  "Training Matrix": {
    key: "trainingMatrix",
    sections: [
      { title: "Training Matrix", fields: [
        { name: "staffName", label: "Staff Name" },
        { name: "trainingCourse", label: "Training Course" },
        { name: "dateCompleted", label: "Date Completed", type: "date" },
        { name: "expiryDate", label: "Expiry Date", type: "date" },
        { name: "status", label: "Status" },
        { name: "notes", label: "Notes", textarea: true },
      ]}
    ]
  },
  "CARE PROVIDER": {
    key: "careProvider",
    sections: [],
    hasCareProviderDropdown: true
  },
};
