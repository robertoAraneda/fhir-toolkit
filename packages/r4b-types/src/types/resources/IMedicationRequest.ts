import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMedicationRequestDispenseRequest } from '../backbones/IMedicationRequestDispenseRequest.js';
import type { IMedicationRequestSubstitution } from '../backbones/IMedicationRequestSubstitution.js';
import type { MedicationRequestIntentType, MedicationrequestStatusType, RequestPriorityType } from '../../valuesets/index.js';

/**
 * MedicationRequest Interface
 * 
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationrequest.html
 */
export interface IMedicationRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationRequest';

  /**
   * External ids for this request
   */
  identifier?: IIdentifier[];

  /**
   * active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
   */
  status: MedicationrequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: MedicationRequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * Type of medication usage
   */
  category?: ICodeableConcept[];

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * True if request is prohibiting action
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * Reported rather than primary record
   */
  reportedBoolean?: boolean;
  /**
   * Extension for reportedBoolean
   */
  _reportedBoolean?: IElement;

  /**
   * Reported rather than primary record
   */
  reportedReference?: IReference;

  /**
   * Medication to be taken
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * Medication to be taken
   */
  medicationReference?: IReference;

  /**
   * Who or group medication request is for
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter created as part of encounter/admission/stay
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Information to support ordering of the medication
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * When request was initially authored
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Who/What requested the Request
   */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * Intended performer of administration
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>;

  /**
   * Desired kind of performer of the medication administration
   */
  performerType?: ICodeableConcept;

  /**
   * Person who entered the request
   */
  recorder?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Reason or indication for ordering or not ordering the medication
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Condition or observation that supports why the prescription is being written
   */
  reasonReference?: IReference<'Condition' | 'Observation'>[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * What request fulfills
   */
  basedOn?: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>[];

  /**
   * Composite request this is part of
   */
  groupIdentifier?: IIdentifier;

  /**
   * Overall pattern of medication administration
   */
  courseOfTherapyType?: ICodeableConcept;

  /**
   * Associated insurance coverage
   */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /**
   * Information about the prescription
   */
  note?: IAnnotation[];

  /**
   * How the medication should be taken
   */
  dosageInstruction?: IDosage[];

  /**
   * Medication supply authorization
   */
  dispenseRequest?: IMedicationRequestDispenseRequest;

  /**
   * Any restrictions on medication substitution
   */
  substitution?: IMedicationRequestSubstitution;

  /**
   * An order/prescription that is being replaced
   */
  priorPrescription?: IReference<'MedicationRequest'>;

  /**
   * Clinical Issue with action
   */
  detectedIssue?: IReference<'DetectedIssue'>[];

  /**
   * A list of events of interest in the lifecycle
   */
  eventHistory?: IReference<'Provenance'>[];

}
