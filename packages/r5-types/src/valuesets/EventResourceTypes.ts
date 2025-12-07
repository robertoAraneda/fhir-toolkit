/**
 * Event Resource Types
 * 
 * All Resource Types that represent event resources
 *
 * @see http://hl7.org/fhir/ValueSet/event-resource-types
 */

export type EventResourceTypesType = 'AdverseEvent' | 'AuditEvent' | 'ChargeItem' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'Composition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'DeviceDispense' | 'DeviceUsage' | 'DiagnosticReport' | 'DocumentReference' | 'Encounter' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'GenomicStudy' | 'GuidanceResponse' | 'ImagingSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'InventoryReport' | 'Invoice' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'MessageHeader' | 'NutritionIntake' | 'Observation' | 'PaymentNotice' | 'PaymentReconciliation' | 'Procedure' | 'Provenance' | 'QuestionnaireResponse' | 'RiskAssessment' | 'SupplyDelivery' | 'Transport';

export enum EventResourceTypesEnum {
  Adverseevent = 'AdverseEvent',
  Auditevent = 'AuditEvent',
  Chargeitem = 'ChargeItem',
  Claimresponse = 'ClaimResponse',
  Clinicalimpression = 'ClinicalImpression',
  Communication = 'Communication',
  Composition = 'Composition',
  Consent = 'Consent',
  Contract = 'Contract',
  Coverage = 'Coverage',
  Coverageeligibilityresponse = 'CoverageEligibilityResponse',
  Detectedissue = 'DetectedIssue',
  Devicedispense = 'DeviceDispense',
  Deviceusage = 'DeviceUsage',
  Diagnosticreport = 'DiagnosticReport',
  Documentreference = 'DocumentReference',
  Encounter = 'Encounter',
  Enrollmentresponse = 'EnrollmentResponse',
  Episodeofcare = 'EpisodeOfCare',
  Explanationofbenefit = 'ExplanationOfBenefit',
  Familymemberhistory = 'FamilyMemberHistory',
  Genomicstudy = 'GenomicStudy',
  Guidanceresponse = 'GuidanceResponse',
  Imagingselection = 'ImagingSelection',
  Imagingstudy = 'ImagingStudy',
  Immunization = 'Immunization',
  Immunizationevaluation = 'ImmunizationEvaluation',
  Inventoryreport = 'InventoryReport',
  Invoice = 'Invoice',
  Medicationadministration = 'MedicationAdministration',
  Medicationdispense = 'MedicationDispense',
  Medicationstatement = 'MedicationStatement',
  Messageheader = 'MessageHeader',
  Nutritionintake = 'NutritionIntake',
  Observation = 'Observation',
  Paymentnotice = 'PaymentNotice',
  Paymentreconciliation = 'PaymentReconciliation',
  Procedure = 'Procedure',
  Provenance = 'Provenance',
  Questionnaireresponse = 'QuestionnaireResponse',
  Riskassessment = 'RiskAssessment',
  Supplydelivery = 'SupplyDelivery',
  Transport = 'Transport',
}

export const EventResourceTypesValues = ['AdverseEvent', 'AuditEvent', 'ChargeItem', 'ClaimResponse', 'ClinicalImpression', 'Communication', 'Composition', 'Consent', 'Contract', 'Coverage', 'CoverageEligibilityResponse', 'DetectedIssue', 'DeviceDispense', 'DeviceUsage', 'DiagnosticReport', 'DocumentReference', 'Encounter', 'EnrollmentResponse', 'EpisodeOfCare', 'ExplanationOfBenefit', 'FamilyMemberHistory', 'GenomicStudy', 'GuidanceResponse', 'ImagingSelection', 'ImagingStudy', 'Immunization', 'ImmunizationEvaluation', 'InventoryReport', 'Invoice', 'MedicationAdministration', 'MedicationDispense', 'MedicationStatement', 'MessageHeader', 'NutritionIntake', 'Observation', 'PaymentNotice', 'PaymentReconciliation', 'Procedure', 'Provenance', 'QuestionnaireResponse', 'RiskAssessment', 'SupplyDelivery', 'Transport'] as const;
