/**
 * Type guards for FHIR resources
 *
 * These functions allow type-safe checking of FHIR resource types at runtime.
 *
 * @example
 * ```typescript
 * import { isPatient, isObservation } from '@fhir-toolkit/r4b-types-models';
 *
 * function processResource(resource: FhirResource) {
 *   if (isPatient(resource)) {
 *     // TypeScript knows resource is IPatient here
 *     console.log(resource.name);
 *   } else if (isObservation(resource)) {
 *     // TypeScript knows resource is IObservation here
 *     console.log(resource.code);
 *   }
 * }
 * ```
 */

import type {
  IAccount,
  IActivityDefinition,
  IAdministrableProductDefinition,
  IAdverseEvent,
  IAllergyIntolerance,
  IAppointment,
  IAppointmentResponse,
  IAuditEvent,
  IBasic,
  IBinary,
  IBiologicallyDerivedProduct,
  IBodyStructure,
  IBundle,
  ICapabilityStatement,
  ICarePlan,
  ICareTeam,
  ICatalogEntry,
  IChargeItem,
  IChargeItemDefinition,
  ICitation,
  IClaim,
  IClaimResponse,
  IClinicalImpression,
  IClinicalUseDefinition,
  ICodeSystem,
  ICommunication,
  ICommunicationRequest,
  ICompartmentDefinition,
  IComposition,
  IConceptMap,
  ICondition,
  IConsent,
  IContract,
  ICoverage,
  ICoverageEligibilityRequest,
  ICoverageEligibilityResponse,
  IDetectedIssue,
  IDevice,
  IDeviceDefinition,
  IDeviceMetric,
  IDeviceRequest,
  IDeviceUseStatement,
  IDiagnosticReport,
  IDocumentManifest,
  IDocumentReference,
  IEncounter,
  IEndpoint,
  IEnrollmentRequest,
  IEnrollmentResponse,
  IEpisodeOfCare,
  IEventDefinition,
  IEvidence,
  IEvidenceReport,
  IEvidenceVariable,
  IExampleScenario,
  IExplanationOfBenefit,
  IFamilyMemberHistory,
  IFlag,
  IGoal,
  IGraphDefinition,
  IGroup,
  IGuidanceResponse,
  IHealthcareService,
  IImagingStudy,
  IImmunization,
  IImmunizationEvaluation,
  IImmunizationRecommendation,
  IImplementationGuide,
  IIngredient,
  IInsurancePlan,
  IInvoice,
  ILibrary,
  ILinkage,
  IList,
  ILocation,
  IManufacturedItemDefinition,
  IMeasure,
  IMeasureReport,
  IMedia,
  IMedication,
  IMedicationAdministration,
  IMedicationDispense,
  IMedicationKnowledge,
  IMedicationRequest,
  IMedicationStatement,
  IMedicinalProductDefinition,
  IMessageDefinition,
  IMessageHeader,
  IMolecularSequence,
  INamingSystem,
  INutritionOrder,
  INutritionProduct,
  IObservation,
  IObservationDefinition,
  IOperationDefinition,
  IOperationOutcome,
  IOrganization,
  IOrganizationAffiliation,
  IPackagedProductDefinition,
  IParameters,
  IPatient,
  IPaymentNotice,
  IPaymentReconciliation,
  IPerson,
  IPlanDefinition,
  IPractitioner,
  IPractitionerRole,
  IProcedure,
  IProvenance,
  IQuestionnaire,
  IQuestionnaireResponse,
  IRegulatedAuthorization,
  IRelatedPerson,
  IRequestGroup,
  IResearchDefinition,
  IResearchElementDefinition,
  IResearchStudy,
  IResearchSubject,
  IRiskAssessment,
  ISchedule,
  ISearchParameter,
  IServiceRequest,
  ISlot,
  ISpecimen,
  ISpecimenDefinition,
  IStructureDefinition,
  IStructureMap,
  ISubscription,
  ISubscriptionStatus,
  ISubscriptionTopic,
  ISubstance,
  ISubstanceDefinition,
  ISupplyDelivery,
  ISupplyRequest,
  ITask,
  ITerminologyCapabilities,
  ITestReport,
  ITestScript,
  IValueSet,
  IVerificationResult,
  IVisionPrescription,
} from '@fhir-toolkit/r4b-types';

/**
 * Check if a resource is a Account
 * @param resource - The resource to check
 * @returns True if the resource is a Account
 */
export function isAccount(resource: any): resource is IAccount {
  return resource?.resourceType === 'Account';
}

/**
 * Check if a resource is a ActivityDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ActivityDefinition
 */
export function isActivityDefinition(resource: any): resource is IActivityDefinition {
  return resource?.resourceType === 'ActivityDefinition';
}

/**
 * Check if a resource is a AdministrableProductDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a AdministrableProductDefinition
 */
export function isAdministrableProductDefinition(resource: any): resource is IAdministrableProductDefinition {
  return resource?.resourceType === 'AdministrableProductDefinition';
}

/**
 * Check if a resource is a AdverseEvent
 * @param resource - The resource to check
 * @returns True if the resource is a AdverseEvent
 */
export function isAdverseEvent(resource: any): resource is IAdverseEvent {
  return resource?.resourceType === 'AdverseEvent';
}

/**
 * Check if a resource is a AllergyIntolerance
 * @param resource - The resource to check
 * @returns True if the resource is a AllergyIntolerance
 */
export function isAllergyIntolerance(resource: any): resource is IAllergyIntolerance {
  return resource?.resourceType === 'AllergyIntolerance';
}

/**
 * Check if a resource is a Appointment
 * @param resource - The resource to check
 * @returns True if the resource is a Appointment
 */
export function isAppointment(resource: any): resource is IAppointment {
  return resource?.resourceType === 'Appointment';
}

/**
 * Check if a resource is a AppointmentResponse
 * @param resource - The resource to check
 * @returns True if the resource is a AppointmentResponse
 */
export function isAppointmentResponse(resource: any): resource is IAppointmentResponse {
  return resource?.resourceType === 'AppointmentResponse';
}

/**
 * Check if a resource is a AuditEvent
 * @param resource - The resource to check
 * @returns True if the resource is a AuditEvent
 */
export function isAuditEvent(resource: any): resource is IAuditEvent {
  return resource?.resourceType === 'AuditEvent';
}

/**
 * Check if a resource is a Basic
 * @param resource - The resource to check
 * @returns True if the resource is a Basic
 */
export function isBasic(resource: any): resource is IBasic {
  return resource?.resourceType === 'Basic';
}

/**
 * Check if a resource is a Binary
 * @param resource - The resource to check
 * @returns True if the resource is a Binary
 */
export function isBinary(resource: any): resource is IBinary {
  return resource?.resourceType === 'Binary';
}

/**
 * Check if a resource is a BiologicallyDerivedProduct
 * @param resource - The resource to check
 * @returns True if the resource is a BiologicallyDerivedProduct
 */
export function isBiologicallyDerivedProduct(resource: any): resource is IBiologicallyDerivedProduct {
  return resource?.resourceType === 'BiologicallyDerivedProduct';
}

/**
 * Check if a resource is a BodyStructure
 * @param resource - The resource to check
 * @returns True if the resource is a BodyStructure
 */
export function isBodyStructure(resource: any): resource is IBodyStructure {
  return resource?.resourceType === 'BodyStructure';
}

/**
 * Check if a resource is a Bundle
 * @param resource - The resource to check
 * @returns True if the resource is a Bundle
 */
export function isBundle(resource: any): resource is IBundle {
  return resource?.resourceType === 'Bundle';
}

/**
 * Check if a resource is a CapabilityStatement
 * @param resource - The resource to check
 * @returns True if the resource is a CapabilityStatement
 */
export function isCapabilityStatement(resource: any): resource is ICapabilityStatement {
  return resource?.resourceType === 'CapabilityStatement';
}

/**
 * Check if a resource is a CarePlan
 * @param resource - The resource to check
 * @returns True if the resource is a CarePlan
 */
export function isCarePlan(resource: any): resource is ICarePlan {
  return resource?.resourceType === 'CarePlan';
}

/**
 * Check if a resource is a CareTeam
 * @param resource - The resource to check
 * @returns True if the resource is a CareTeam
 */
export function isCareTeam(resource: any): resource is ICareTeam {
  return resource?.resourceType === 'CareTeam';
}

/**
 * Check if a resource is a CatalogEntry
 * @param resource - The resource to check
 * @returns True if the resource is a CatalogEntry
 */
export function isCatalogEntry(resource: any): resource is ICatalogEntry {
  return resource?.resourceType === 'CatalogEntry';
}

/**
 * Check if a resource is a ChargeItem
 * @param resource - The resource to check
 * @returns True if the resource is a ChargeItem
 */
export function isChargeItem(resource: any): resource is IChargeItem {
  return resource?.resourceType === 'ChargeItem';
}

/**
 * Check if a resource is a ChargeItemDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ChargeItemDefinition
 */
export function isChargeItemDefinition(resource: any): resource is IChargeItemDefinition {
  return resource?.resourceType === 'ChargeItemDefinition';
}

/**
 * Check if a resource is a Citation
 * @param resource - The resource to check
 * @returns True if the resource is a Citation
 */
export function isCitation(resource: any): resource is ICitation {
  return resource?.resourceType === 'Citation';
}

/**
 * Check if a resource is a Claim
 * @param resource - The resource to check
 * @returns True if the resource is a Claim
 */
export function isClaim(resource: any): resource is IClaim {
  return resource?.resourceType === 'Claim';
}

/**
 * Check if a resource is a ClaimResponse
 * @param resource - The resource to check
 * @returns True if the resource is a ClaimResponse
 */
export function isClaimResponse(resource: any): resource is IClaimResponse {
  return resource?.resourceType === 'ClaimResponse';
}

/**
 * Check if a resource is a ClinicalImpression
 * @param resource - The resource to check
 * @returns True if the resource is a ClinicalImpression
 */
export function isClinicalImpression(resource: any): resource is IClinicalImpression {
  return resource?.resourceType === 'ClinicalImpression';
}

/**
 * Check if a resource is a ClinicalUseDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ClinicalUseDefinition
 */
export function isClinicalUseDefinition(resource: any): resource is IClinicalUseDefinition {
  return resource?.resourceType === 'ClinicalUseDefinition';
}

/**
 * Check if a resource is a CodeSystem
 * @param resource - The resource to check
 * @returns True if the resource is a CodeSystem
 */
export function isCodeSystem(resource: any): resource is ICodeSystem {
  return resource?.resourceType === 'CodeSystem';
}

/**
 * Check if a resource is a Communication
 * @param resource - The resource to check
 * @returns True if the resource is a Communication
 */
export function isCommunication(resource: any): resource is ICommunication {
  return resource?.resourceType === 'Communication';
}

/**
 * Check if a resource is a CommunicationRequest
 * @param resource - The resource to check
 * @returns True if the resource is a CommunicationRequest
 */
export function isCommunicationRequest(resource: any): resource is ICommunicationRequest {
  return resource?.resourceType === 'CommunicationRequest';
}

/**
 * Check if a resource is a CompartmentDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a CompartmentDefinition
 */
export function isCompartmentDefinition(resource: any): resource is ICompartmentDefinition {
  return resource?.resourceType === 'CompartmentDefinition';
}

/**
 * Check if a resource is a Composition
 * @param resource - The resource to check
 * @returns True if the resource is a Composition
 */
export function isComposition(resource: any): resource is IComposition {
  return resource?.resourceType === 'Composition';
}

/**
 * Check if a resource is a ConceptMap
 * @param resource - The resource to check
 * @returns True if the resource is a ConceptMap
 */
export function isConceptMap(resource: any): resource is IConceptMap {
  return resource?.resourceType === 'ConceptMap';
}

/**
 * Check if a resource is a Condition
 * @param resource - The resource to check
 * @returns True if the resource is a Condition
 */
export function isCondition(resource: any): resource is ICondition {
  return resource?.resourceType === 'Condition';
}

/**
 * Check if a resource is a Consent
 * @param resource - The resource to check
 * @returns True if the resource is a Consent
 */
export function isConsent(resource: any): resource is IConsent {
  return resource?.resourceType === 'Consent';
}

/**
 * Check if a resource is a Contract
 * @param resource - The resource to check
 * @returns True if the resource is a Contract
 */
export function isContract(resource: any): resource is IContract {
  return resource?.resourceType === 'Contract';
}

/**
 * Check if a resource is a Coverage
 * @param resource - The resource to check
 * @returns True if the resource is a Coverage
 */
export function isCoverage(resource: any): resource is ICoverage {
  return resource?.resourceType === 'Coverage';
}

/**
 * Check if a resource is a CoverageEligibilityRequest
 * @param resource - The resource to check
 * @returns True if the resource is a CoverageEligibilityRequest
 */
export function isCoverageEligibilityRequest(resource: any): resource is ICoverageEligibilityRequest {
  return resource?.resourceType === 'CoverageEligibilityRequest';
}

/**
 * Check if a resource is a CoverageEligibilityResponse
 * @param resource - The resource to check
 * @returns True if the resource is a CoverageEligibilityResponse
 */
export function isCoverageEligibilityResponse(resource: any): resource is ICoverageEligibilityResponse {
  return resource?.resourceType === 'CoverageEligibilityResponse';
}

/**
 * Check if a resource is a DetectedIssue
 * @param resource - The resource to check
 * @returns True if the resource is a DetectedIssue
 */
export function isDetectedIssue(resource: any): resource is IDetectedIssue {
  return resource?.resourceType === 'DetectedIssue';
}

/**
 * Check if a resource is a Device
 * @param resource - The resource to check
 * @returns True if the resource is a Device
 */
export function isDevice(resource: any): resource is IDevice {
  return resource?.resourceType === 'Device';
}

/**
 * Check if a resource is a DeviceDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a DeviceDefinition
 */
export function isDeviceDefinition(resource: any): resource is IDeviceDefinition {
  return resource?.resourceType === 'DeviceDefinition';
}

/**
 * Check if a resource is a DeviceMetric
 * @param resource - The resource to check
 * @returns True if the resource is a DeviceMetric
 */
export function isDeviceMetric(resource: any): resource is IDeviceMetric {
  return resource?.resourceType === 'DeviceMetric';
}

/**
 * Check if a resource is a DeviceRequest
 * @param resource - The resource to check
 * @returns True if the resource is a DeviceRequest
 */
export function isDeviceRequest(resource: any): resource is IDeviceRequest {
  return resource?.resourceType === 'DeviceRequest';
}

/**
 * Check if a resource is a DeviceUseStatement
 * @param resource - The resource to check
 * @returns True if the resource is a DeviceUseStatement
 */
export function isDeviceUseStatement(resource: any): resource is IDeviceUseStatement {
  return resource?.resourceType === 'DeviceUseStatement';
}

/**
 * Check if a resource is a DiagnosticReport
 * @param resource - The resource to check
 * @returns True if the resource is a DiagnosticReport
 */
export function isDiagnosticReport(resource: any): resource is IDiagnosticReport {
  return resource?.resourceType === 'DiagnosticReport';
}

/**
 * Check if a resource is a DocumentManifest
 * @param resource - The resource to check
 * @returns True if the resource is a DocumentManifest
 */
export function isDocumentManifest(resource: any): resource is IDocumentManifest {
  return resource?.resourceType === 'DocumentManifest';
}

/**
 * Check if a resource is a DocumentReference
 * @param resource - The resource to check
 * @returns True if the resource is a DocumentReference
 */
export function isDocumentReference(resource: any): resource is IDocumentReference {
  return resource?.resourceType === 'DocumentReference';
}

/**
 * Check if a resource is a Encounter
 * @param resource - The resource to check
 * @returns True if the resource is a Encounter
 */
export function isEncounter(resource: any): resource is IEncounter {
  return resource?.resourceType === 'Encounter';
}

/**
 * Check if a resource is a Endpoint
 * @param resource - The resource to check
 * @returns True if the resource is a Endpoint
 */
export function isEndpoint(resource: any): resource is IEndpoint {
  return resource?.resourceType === 'Endpoint';
}

/**
 * Check if a resource is a EnrollmentRequest
 * @param resource - The resource to check
 * @returns True if the resource is a EnrollmentRequest
 */
export function isEnrollmentRequest(resource: any): resource is IEnrollmentRequest {
  return resource?.resourceType === 'EnrollmentRequest';
}

/**
 * Check if a resource is a EnrollmentResponse
 * @param resource - The resource to check
 * @returns True if the resource is a EnrollmentResponse
 */
export function isEnrollmentResponse(resource: any): resource is IEnrollmentResponse {
  return resource?.resourceType === 'EnrollmentResponse';
}

/**
 * Check if a resource is a EpisodeOfCare
 * @param resource - The resource to check
 * @returns True if the resource is a EpisodeOfCare
 */
export function isEpisodeOfCare(resource: any): resource is IEpisodeOfCare {
  return resource?.resourceType === 'EpisodeOfCare';
}

/**
 * Check if a resource is a EventDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a EventDefinition
 */
export function isEventDefinition(resource: any): resource is IEventDefinition {
  return resource?.resourceType === 'EventDefinition';
}

/**
 * Check if a resource is a Evidence
 * @param resource - The resource to check
 * @returns True if the resource is a Evidence
 */
export function isEvidence(resource: any): resource is IEvidence {
  return resource?.resourceType === 'Evidence';
}

/**
 * Check if a resource is a EvidenceReport
 * @param resource - The resource to check
 * @returns True if the resource is a EvidenceReport
 */
export function isEvidenceReport(resource: any): resource is IEvidenceReport {
  return resource?.resourceType === 'EvidenceReport';
}

/**
 * Check if a resource is a EvidenceVariable
 * @param resource - The resource to check
 * @returns True if the resource is a EvidenceVariable
 */
export function isEvidenceVariable(resource: any): resource is IEvidenceVariable {
  return resource?.resourceType === 'EvidenceVariable';
}

/**
 * Check if a resource is a ExampleScenario
 * @param resource - The resource to check
 * @returns True if the resource is a ExampleScenario
 */
export function isExampleScenario(resource: any): resource is IExampleScenario {
  return resource?.resourceType === 'ExampleScenario';
}

/**
 * Check if a resource is a ExplanationOfBenefit
 * @param resource - The resource to check
 * @returns True if the resource is a ExplanationOfBenefit
 */
export function isExplanationOfBenefit(resource: any): resource is IExplanationOfBenefit {
  return resource?.resourceType === 'ExplanationOfBenefit';
}

/**
 * Check if a resource is a FamilyMemberHistory
 * @param resource - The resource to check
 * @returns True if the resource is a FamilyMemberHistory
 */
export function isFamilyMemberHistory(resource: any): resource is IFamilyMemberHistory {
  return resource?.resourceType === 'FamilyMemberHistory';
}

/**
 * Check if a resource is a Flag
 * @param resource - The resource to check
 * @returns True if the resource is a Flag
 */
export function isFlag(resource: any): resource is IFlag {
  return resource?.resourceType === 'Flag';
}

/**
 * Check if a resource is a Goal
 * @param resource - The resource to check
 * @returns True if the resource is a Goal
 */
export function isGoal(resource: any): resource is IGoal {
  return resource?.resourceType === 'Goal';
}

/**
 * Check if a resource is a GraphDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a GraphDefinition
 */
export function isGraphDefinition(resource: any): resource is IGraphDefinition {
  return resource?.resourceType === 'GraphDefinition';
}

/**
 * Check if a resource is a Group
 * @param resource - The resource to check
 * @returns True if the resource is a Group
 */
export function isGroup(resource: any): resource is IGroup {
  return resource?.resourceType === 'Group';
}

/**
 * Check if a resource is a GuidanceResponse
 * @param resource - The resource to check
 * @returns True if the resource is a GuidanceResponse
 */
export function isGuidanceResponse(resource: any): resource is IGuidanceResponse {
  return resource?.resourceType === 'GuidanceResponse';
}

/**
 * Check if a resource is a HealthcareService
 * @param resource - The resource to check
 * @returns True if the resource is a HealthcareService
 */
export function isHealthcareService(resource: any): resource is IHealthcareService {
  return resource?.resourceType === 'HealthcareService';
}

/**
 * Check if a resource is a ImagingStudy
 * @param resource - The resource to check
 * @returns True if the resource is a ImagingStudy
 */
export function isImagingStudy(resource: any): resource is IImagingStudy {
  return resource?.resourceType === 'ImagingStudy';
}

/**
 * Check if a resource is a Immunization
 * @param resource - The resource to check
 * @returns True if the resource is a Immunization
 */
export function isImmunization(resource: any): resource is IImmunization {
  return resource?.resourceType === 'Immunization';
}

/**
 * Check if a resource is a ImmunizationEvaluation
 * @param resource - The resource to check
 * @returns True if the resource is a ImmunizationEvaluation
 */
export function isImmunizationEvaluation(resource: any): resource is IImmunizationEvaluation {
  return resource?.resourceType === 'ImmunizationEvaluation';
}

/**
 * Check if a resource is a ImmunizationRecommendation
 * @param resource - The resource to check
 * @returns True if the resource is a ImmunizationRecommendation
 */
export function isImmunizationRecommendation(resource: any): resource is IImmunizationRecommendation {
  return resource?.resourceType === 'ImmunizationRecommendation';
}

/**
 * Check if a resource is a ImplementationGuide
 * @param resource - The resource to check
 * @returns True if the resource is a ImplementationGuide
 */
export function isImplementationGuide(resource: any): resource is IImplementationGuide {
  return resource?.resourceType === 'ImplementationGuide';
}

/**
 * Check if a resource is a Ingredient
 * @param resource - The resource to check
 * @returns True if the resource is a Ingredient
 */
export function isIngredient(resource: any): resource is IIngredient {
  return resource?.resourceType === 'Ingredient';
}

/**
 * Check if a resource is a InsurancePlan
 * @param resource - The resource to check
 * @returns True if the resource is a InsurancePlan
 */
export function isInsurancePlan(resource: any): resource is IInsurancePlan {
  return resource?.resourceType === 'InsurancePlan';
}

/**
 * Check if a resource is a Invoice
 * @param resource - The resource to check
 * @returns True if the resource is a Invoice
 */
export function isInvoice(resource: any): resource is IInvoice {
  return resource?.resourceType === 'Invoice';
}

/**
 * Check if a resource is a Library
 * @param resource - The resource to check
 * @returns True if the resource is a Library
 */
export function isLibrary(resource: any): resource is ILibrary {
  return resource?.resourceType === 'Library';
}

/**
 * Check if a resource is a Linkage
 * @param resource - The resource to check
 * @returns True if the resource is a Linkage
 */
export function isLinkage(resource: any): resource is ILinkage {
  return resource?.resourceType === 'Linkage';
}

/**
 * Check if a resource is a List
 * @param resource - The resource to check
 * @returns True if the resource is a List
 */
export function isList(resource: any): resource is IList {
  return resource?.resourceType === 'List';
}

/**
 * Check if a resource is a Location
 * @param resource - The resource to check
 * @returns True if the resource is a Location
 */
export function isLocation(resource: any): resource is ILocation {
  return resource?.resourceType === 'Location';
}

/**
 * Check if a resource is a ManufacturedItemDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ManufacturedItemDefinition
 */
export function isManufacturedItemDefinition(resource: any): resource is IManufacturedItemDefinition {
  return resource?.resourceType === 'ManufacturedItemDefinition';
}

/**
 * Check if a resource is a Measure
 * @param resource - The resource to check
 * @returns True if the resource is a Measure
 */
export function isMeasure(resource: any): resource is IMeasure {
  return resource?.resourceType === 'Measure';
}

/**
 * Check if a resource is a MeasureReport
 * @param resource - The resource to check
 * @returns True if the resource is a MeasureReport
 */
export function isMeasureReport(resource: any): resource is IMeasureReport {
  return resource?.resourceType === 'MeasureReport';
}

/**
 * Check if a resource is a Media
 * @param resource - The resource to check
 * @returns True if the resource is a Media
 */
export function isMedia(resource: any): resource is IMedia {
  return resource?.resourceType === 'Media';
}

/**
 * Check if a resource is a Medication
 * @param resource - The resource to check
 * @returns True if the resource is a Medication
 */
export function isMedication(resource: any): resource is IMedication {
  return resource?.resourceType === 'Medication';
}

/**
 * Check if a resource is a MedicationAdministration
 * @param resource - The resource to check
 * @returns True if the resource is a MedicationAdministration
 */
export function isMedicationAdministration(resource: any): resource is IMedicationAdministration {
  return resource?.resourceType === 'MedicationAdministration';
}

/**
 * Check if a resource is a MedicationDispense
 * @param resource - The resource to check
 * @returns True if the resource is a MedicationDispense
 */
export function isMedicationDispense(resource: any): resource is IMedicationDispense {
  return resource?.resourceType === 'MedicationDispense';
}

/**
 * Check if a resource is a MedicationKnowledge
 * @param resource - The resource to check
 * @returns True if the resource is a MedicationKnowledge
 */
export function isMedicationKnowledge(resource: any): resource is IMedicationKnowledge {
  return resource?.resourceType === 'MedicationKnowledge';
}

/**
 * Check if a resource is a MedicationRequest
 * @param resource - The resource to check
 * @returns True if the resource is a MedicationRequest
 */
export function isMedicationRequest(resource: any): resource is IMedicationRequest {
  return resource?.resourceType === 'MedicationRequest';
}

/**
 * Check if a resource is a MedicationStatement
 * @param resource - The resource to check
 * @returns True if the resource is a MedicationStatement
 */
export function isMedicationStatement(resource: any): resource is IMedicationStatement {
  return resource?.resourceType === 'MedicationStatement';
}

/**
 * Check if a resource is a MedicinalProductDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a MedicinalProductDefinition
 */
export function isMedicinalProductDefinition(resource: any): resource is IMedicinalProductDefinition {
  return resource?.resourceType === 'MedicinalProductDefinition';
}

/**
 * Check if a resource is a MessageDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a MessageDefinition
 */
export function isMessageDefinition(resource: any): resource is IMessageDefinition {
  return resource?.resourceType === 'MessageDefinition';
}

/**
 * Check if a resource is a MessageHeader
 * @param resource - The resource to check
 * @returns True if the resource is a MessageHeader
 */
export function isMessageHeader(resource: any): resource is IMessageHeader {
  return resource?.resourceType === 'MessageHeader';
}

/**
 * Check if a resource is a MolecularSequence
 * @param resource - The resource to check
 * @returns True if the resource is a MolecularSequence
 */
export function isMolecularSequence(resource: any): resource is IMolecularSequence {
  return resource?.resourceType === 'MolecularSequence';
}

/**
 * Check if a resource is a NamingSystem
 * @param resource - The resource to check
 * @returns True if the resource is a NamingSystem
 */
export function isNamingSystem(resource: any): resource is INamingSystem {
  return resource?.resourceType === 'NamingSystem';
}

/**
 * Check if a resource is a NutritionOrder
 * @param resource - The resource to check
 * @returns True if the resource is a NutritionOrder
 */
export function isNutritionOrder(resource: any): resource is INutritionOrder {
  return resource?.resourceType === 'NutritionOrder';
}

/**
 * Check if a resource is a NutritionProduct
 * @param resource - The resource to check
 * @returns True if the resource is a NutritionProduct
 */
export function isNutritionProduct(resource: any): resource is INutritionProduct {
  return resource?.resourceType === 'NutritionProduct';
}

/**
 * Check if a resource is a Observation
 * @param resource - The resource to check
 * @returns True if the resource is a Observation
 */
export function isObservation(resource: any): resource is IObservation {
  return resource?.resourceType === 'Observation';
}

/**
 * Check if a resource is a ObservationDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ObservationDefinition
 */
export function isObservationDefinition(resource: any): resource is IObservationDefinition {
  return resource?.resourceType === 'ObservationDefinition';
}

/**
 * Check if a resource is a OperationDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a OperationDefinition
 */
export function isOperationDefinition(resource: any): resource is IOperationDefinition {
  return resource?.resourceType === 'OperationDefinition';
}

/**
 * Check if a resource is a OperationOutcome
 * @param resource - The resource to check
 * @returns True if the resource is a OperationOutcome
 */
export function isOperationOutcome(resource: any): resource is IOperationOutcome {
  return resource?.resourceType === 'OperationOutcome';
}

/**
 * Check if a resource is a Organization
 * @param resource - The resource to check
 * @returns True if the resource is a Organization
 */
export function isOrganization(resource: any): resource is IOrganization {
  return resource?.resourceType === 'Organization';
}

/**
 * Check if a resource is a OrganizationAffiliation
 * @param resource - The resource to check
 * @returns True if the resource is a OrganizationAffiliation
 */
export function isOrganizationAffiliation(resource: any): resource is IOrganizationAffiliation {
  return resource?.resourceType === 'OrganizationAffiliation';
}

/**
 * Check if a resource is a PackagedProductDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a PackagedProductDefinition
 */
export function isPackagedProductDefinition(resource: any): resource is IPackagedProductDefinition {
  return resource?.resourceType === 'PackagedProductDefinition';
}

/**
 * Check if a resource is a Parameters
 * @param resource - The resource to check
 * @returns True if the resource is a Parameters
 */
export function isParameters(resource: any): resource is IParameters {
  return resource?.resourceType === 'Parameters';
}

/**
 * Check if a resource is a Patient
 * @param resource - The resource to check
 * @returns True if the resource is a Patient
 */
export function isPatient(resource: any): resource is IPatient {
  return resource?.resourceType === 'Patient';
}

/**
 * Check if a resource is a PaymentNotice
 * @param resource - The resource to check
 * @returns True if the resource is a PaymentNotice
 */
export function isPaymentNotice(resource: any): resource is IPaymentNotice {
  return resource?.resourceType === 'PaymentNotice';
}

/**
 * Check if a resource is a PaymentReconciliation
 * @param resource - The resource to check
 * @returns True if the resource is a PaymentReconciliation
 */
export function isPaymentReconciliation(resource: any): resource is IPaymentReconciliation {
  return resource?.resourceType === 'PaymentReconciliation';
}

/**
 * Check if a resource is a Person
 * @param resource - The resource to check
 * @returns True if the resource is a Person
 */
export function isPerson(resource: any): resource is IPerson {
  return resource?.resourceType === 'Person';
}

/**
 * Check if a resource is a PlanDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a PlanDefinition
 */
export function isPlanDefinition(resource: any): resource is IPlanDefinition {
  return resource?.resourceType === 'PlanDefinition';
}

/**
 * Check if a resource is a Practitioner
 * @param resource - The resource to check
 * @returns True if the resource is a Practitioner
 */
export function isPractitioner(resource: any): resource is IPractitioner {
  return resource?.resourceType === 'Practitioner';
}

/**
 * Check if a resource is a PractitionerRole
 * @param resource - The resource to check
 * @returns True if the resource is a PractitionerRole
 */
export function isPractitionerRole(resource: any): resource is IPractitionerRole {
  return resource?.resourceType === 'PractitionerRole';
}

/**
 * Check if a resource is a Procedure
 * @param resource - The resource to check
 * @returns True if the resource is a Procedure
 */
export function isProcedure(resource: any): resource is IProcedure {
  return resource?.resourceType === 'Procedure';
}

/**
 * Check if a resource is a Provenance
 * @param resource - The resource to check
 * @returns True if the resource is a Provenance
 */
export function isProvenance(resource: any): resource is IProvenance {
  return resource?.resourceType === 'Provenance';
}

/**
 * Check if a resource is a Questionnaire
 * @param resource - The resource to check
 * @returns True if the resource is a Questionnaire
 */
export function isQuestionnaire(resource: any): resource is IQuestionnaire {
  return resource?.resourceType === 'Questionnaire';
}

/**
 * Check if a resource is a QuestionnaireResponse
 * @param resource - The resource to check
 * @returns True if the resource is a QuestionnaireResponse
 */
export function isQuestionnaireResponse(resource: any): resource is IQuestionnaireResponse {
  return resource?.resourceType === 'QuestionnaireResponse';
}

/**
 * Check if a resource is a RegulatedAuthorization
 * @param resource - The resource to check
 * @returns True if the resource is a RegulatedAuthorization
 */
export function isRegulatedAuthorization(resource: any): resource is IRegulatedAuthorization {
  return resource?.resourceType === 'RegulatedAuthorization';
}

/**
 * Check if a resource is a RelatedPerson
 * @param resource - The resource to check
 * @returns True if the resource is a RelatedPerson
 */
export function isRelatedPerson(resource: any): resource is IRelatedPerson {
  return resource?.resourceType === 'RelatedPerson';
}

/**
 * Check if a resource is a RequestGroup
 * @param resource - The resource to check
 * @returns True if the resource is a RequestGroup
 */
export function isRequestGroup(resource: any): resource is IRequestGroup {
  return resource?.resourceType === 'RequestGroup';
}

/**
 * Check if a resource is a ResearchDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ResearchDefinition
 */
export function isResearchDefinition(resource: any): resource is IResearchDefinition {
  return resource?.resourceType === 'ResearchDefinition';
}

/**
 * Check if a resource is a ResearchElementDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a ResearchElementDefinition
 */
export function isResearchElementDefinition(resource: any): resource is IResearchElementDefinition {
  return resource?.resourceType === 'ResearchElementDefinition';
}

/**
 * Check if a resource is a ResearchStudy
 * @param resource - The resource to check
 * @returns True if the resource is a ResearchStudy
 */
export function isResearchStudy(resource: any): resource is IResearchStudy {
  return resource?.resourceType === 'ResearchStudy';
}

/**
 * Check if a resource is a ResearchSubject
 * @param resource - The resource to check
 * @returns True if the resource is a ResearchSubject
 */
export function isResearchSubject(resource: any): resource is IResearchSubject {
  return resource?.resourceType === 'ResearchSubject';
}

/**
 * Check if a resource is a RiskAssessment
 * @param resource - The resource to check
 * @returns True if the resource is a RiskAssessment
 */
export function isRiskAssessment(resource: any): resource is IRiskAssessment {
  return resource?.resourceType === 'RiskAssessment';
}

/**
 * Check if a resource is a Schedule
 * @param resource - The resource to check
 * @returns True if the resource is a Schedule
 */
export function isSchedule(resource: any): resource is ISchedule {
  return resource?.resourceType === 'Schedule';
}

/**
 * Check if a resource is a SearchParameter
 * @param resource - The resource to check
 * @returns True if the resource is a SearchParameter
 */
export function isSearchParameter(resource: any): resource is ISearchParameter {
  return resource?.resourceType === 'SearchParameter';
}

/**
 * Check if a resource is a ServiceRequest
 * @param resource - The resource to check
 * @returns True if the resource is a ServiceRequest
 */
export function isServiceRequest(resource: any): resource is IServiceRequest {
  return resource?.resourceType === 'ServiceRequest';
}

/**
 * Check if a resource is a Slot
 * @param resource - The resource to check
 * @returns True if the resource is a Slot
 */
export function isSlot(resource: any): resource is ISlot {
  return resource?.resourceType === 'Slot';
}

/**
 * Check if a resource is a Specimen
 * @param resource - The resource to check
 * @returns True if the resource is a Specimen
 */
export function isSpecimen(resource: any): resource is ISpecimen {
  return resource?.resourceType === 'Specimen';
}

/**
 * Check if a resource is a SpecimenDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a SpecimenDefinition
 */
export function isSpecimenDefinition(resource: any): resource is ISpecimenDefinition {
  return resource?.resourceType === 'SpecimenDefinition';
}

/**
 * Check if a resource is a StructureDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a StructureDefinition
 */
export function isStructureDefinition(resource: any): resource is IStructureDefinition {
  return resource?.resourceType === 'StructureDefinition';
}

/**
 * Check if a resource is a StructureMap
 * @param resource - The resource to check
 * @returns True if the resource is a StructureMap
 */
export function isStructureMap(resource: any): resource is IStructureMap {
  return resource?.resourceType === 'StructureMap';
}

/**
 * Check if a resource is a Subscription
 * @param resource - The resource to check
 * @returns True if the resource is a Subscription
 */
export function isSubscription(resource: any): resource is ISubscription {
  return resource?.resourceType === 'Subscription';
}

/**
 * Check if a resource is a SubscriptionStatus
 * @param resource - The resource to check
 * @returns True if the resource is a SubscriptionStatus
 */
export function isSubscriptionStatus(resource: any): resource is ISubscriptionStatus {
  return resource?.resourceType === 'SubscriptionStatus';
}

/**
 * Check if a resource is a SubscriptionTopic
 * @param resource - The resource to check
 * @returns True if the resource is a SubscriptionTopic
 */
export function isSubscriptionTopic(resource: any): resource is ISubscriptionTopic {
  return resource?.resourceType === 'SubscriptionTopic';
}

/**
 * Check if a resource is a Substance
 * @param resource - The resource to check
 * @returns True if the resource is a Substance
 */
export function isSubstance(resource: any): resource is ISubstance {
  return resource?.resourceType === 'Substance';
}

/**
 * Check if a resource is a SubstanceDefinition
 * @param resource - The resource to check
 * @returns True if the resource is a SubstanceDefinition
 */
export function isSubstanceDefinition(resource: any): resource is ISubstanceDefinition {
  return resource?.resourceType === 'SubstanceDefinition';
}

/**
 * Check if a resource is a SupplyDelivery
 * @param resource - The resource to check
 * @returns True if the resource is a SupplyDelivery
 */
export function isSupplyDelivery(resource: any): resource is ISupplyDelivery {
  return resource?.resourceType === 'SupplyDelivery';
}

/**
 * Check if a resource is a SupplyRequest
 * @param resource - The resource to check
 * @returns True if the resource is a SupplyRequest
 */
export function isSupplyRequest(resource: any): resource is ISupplyRequest {
  return resource?.resourceType === 'SupplyRequest';
}

/**
 * Check if a resource is a Task
 * @param resource - The resource to check
 * @returns True if the resource is a Task
 */
export function isTask(resource: any): resource is ITask {
  return resource?.resourceType === 'Task';
}

/**
 * Check if a resource is a TerminologyCapabilities
 * @param resource - The resource to check
 * @returns True if the resource is a TerminologyCapabilities
 */
export function isTerminologyCapabilities(resource: any): resource is ITerminologyCapabilities {
  return resource?.resourceType === 'TerminologyCapabilities';
}

/**
 * Check if a resource is a TestReport
 * @param resource - The resource to check
 * @returns True if the resource is a TestReport
 */
export function isTestReport(resource: any): resource is ITestReport {
  return resource?.resourceType === 'TestReport';
}

/**
 * Check if a resource is a TestScript
 * @param resource - The resource to check
 * @returns True if the resource is a TestScript
 */
export function isTestScript(resource: any): resource is ITestScript {
  return resource?.resourceType === 'TestScript';
}

/**
 * Check if a resource is a ValueSet
 * @param resource - The resource to check
 * @returns True if the resource is a ValueSet
 */
export function isValueSet(resource: any): resource is IValueSet {
  return resource?.resourceType === 'ValueSet';
}

/**
 * Check if a resource is a VerificationResult
 * @param resource - The resource to check
 * @returns True if the resource is a VerificationResult
 */
export function isVerificationResult(resource: any): resource is IVerificationResult {
  return resource?.resourceType === 'VerificationResult';
}

/**
 * Check if a resource is a VisionPrescription
 * @param resource - The resource to check
 * @returns True if the resource is a VisionPrescription
 */
export function isVisionPrescription(resource: any): resource is IVisionPrescription {
  return resource?.resourceType === 'VisionPrescription';
}


/**
 * Union type of all FHIR resources
 */
export type FhirResource =
  | IAccount
  | IActivityDefinition
  | IAdministrableProductDefinition
  | IAdverseEvent
  | IAllergyIntolerance
  | IAppointment
  | IAppointmentResponse
  | IAuditEvent
  | IBasic
  | IBinary
  | IBiologicallyDerivedProduct
  | IBodyStructure
  | IBundle
  | ICapabilityStatement
  | ICarePlan
  | ICareTeam
  | ICatalogEntry
  | IChargeItem
  | IChargeItemDefinition
  | ICitation
  | IClaim
  | IClaimResponse
  | IClinicalImpression
  | IClinicalUseDefinition
  | ICodeSystem
  | ICommunication
  | ICommunicationRequest
  | ICompartmentDefinition
  | IComposition
  | IConceptMap
  | ICondition
  | IConsent
  | IContract
  | ICoverage
  | ICoverageEligibilityRequest
  | ICoverageEligibilityResponse
  | IDetectedIssue
  | IDevice
  | IDeviceDefinition
  | IDeviceMetric
  | IDeviceRequest
  | IDeviceUseStatement
  | IDiagnosticReport
  | IDocumentManifest
  | IDocumentReference
  | IEncounter
  | IEndpoint
  | IEnrollmentRequest
  | IEnrollmentResponse
  | IEpisodeOfCare
  | IEventDefinition
  | IEvidence
  | IEvidenceReport
  | IEvidenceVariable
  | IExampleScenario
  | IExplanationOfBenefit
  | IFamilyMemberHistory
  | IFlag
  | IGoal
  | IGraphDefinition
  | IGroup
  | IGuidanceResponse
  | IHealthcareService
  | IImagingStudy
  | IImmunization
  | IImmunizationEvaluation
  | IImmunizationRecommendation
  | IImplementationGuide
  | IIngredient
  | IInsurancePlan
  | IInvoice
  | ILibrary
  | ILinkage
  | IList
  | ILocation
  | IManufacturedItemDefinition
  | IMeasure
  | IMeasureReport
  | IMedia
  | IMedication
  | IMedicationAdministration
  | IMedicationDispense
  | IMedicationKnowledge
  | IMedicationRequest
  | IMedicationStatement
  | IMedicinalProductDefinition
  | IMessageDefinition
  | IMessageHeader
  | IMolecularSequence
  | INamingSystem
  | INutritionOrder
  | INutritionProduct
  | IObservation
  | IObservationDefinition
  | IOperationDefinition
  | IOperationOutcome
  | IOrganization
  | IOrganizationAffiliation
  | IPackagedProductDefinition
  | IParameters
  | IPatient
  | IPaymentNotice
  | IPaymentReconciliation
  | IPerson
  | IPlanDefinition
  | IPractitioner
  | IPractitionerRole
  | IProcedure
  | IProvenance
  | IQuestionnaire
  | IQuestionnaireResponse
  | IRegulatedAuthorization
  | IRelatedPerson
  | IRequestGroup
  | IResearchDefinition
  | IResearchElementDefinition
  | IResearchStudy
  | IResearchSubject
  | IRiskAssessment
  | ISchedule
  | ISearchParameter
  | IServiceRequest
  | ISlot
  | ISpecimen
  | ISpecimenDefinition
  | IStructureDefinition
  | IStructureMap
  | ISubscription
  | ISubscriptionStatus
  | ISubscriptionTopic
  | ISubstance
  | ISubstanceDefinition
  | ISupplyDelivery
  | ISupplyRequest
  | ITask
  | ITerminologyCapabilities
  | ITestReport
  | ITestScript
  | IValueSet
  | IVerificationResult
  | IVisionPrescription
;

/**
 * Get the resource type from a FHIR resource
 * @param resource - The FHIR resource
 * @returns The resource type string
 */
export function getResourceType(resource: FhirResource): string {
  return resource.resourceType;
}

/**
 * Check if an object is a valid FHIR resource
 * @param obj - The object to check
 * @returns True if the object is a FHIR resource
 */
export function isFhirResource(obj: any): obj is FhirResource {
  return obj && typeof obj === 'object' && typeof obj.resourceType === 'string';
}
