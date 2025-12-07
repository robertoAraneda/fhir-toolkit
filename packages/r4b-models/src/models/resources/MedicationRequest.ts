import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationRequest,
  IMedicationRequestDispenseRequest,
  IMedicationRequestSubstitution,
  IReference,
  MedicationRequestIntentType,
  MedicationrequestStatusType,
  RequestPriorityType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationRequest */
const MEDICATION_REQUEST_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'statusReason',
  'intent',
  '_intent',
  'category',
  'priority',
  '_priority',
  'doNotPerform',
  '_doNotPerform',
  'reportedBoolean',
  '_reportedBoolean',
  'reportedReference',
  'medicationCodeableConcept',
  'medicationReference',
  'subject',
  'encounter',
  'supportingInformation',
  'authoredOn',
  '_authoredOn',
  'requester',
  'performer',
  'performerType',
  'recorder',
  'reasonCode',
  'reasonReference',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'groupIdentifier',
  'courseOfTherapyType',
  'insurance',
  'note',
  'dosageInstruction',
  'dispenseRequest',
  'substitution',
  'priorPrescription',
  'detectedIssue',
  'eventHistory',
] as const;

/**
 * MedicationRequest - An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 *
 * @see https://hl7.org/fhir/R4/medicationrequest.html
 *
 * @example
 * const medicationRequest = new MedicationRequest({
 *   resourceType: 'MedicationRequest',
 *   // ... properties
 * });
 */
export class MedicationRequest extends DomainResource implements IMedicationRequest {
  readonly resourceType = 'MedicationRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External ids for this request */
  identifier?: IIdentifier[];

  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
  status: MedicationrequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: MedicationRequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** Type of medication usage */
  category?: ICodeableConcept[];

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** True if request is prohibiting action */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** Reported rather than primary record */
  reportedBoolean?: boolean;

  /** Extension for reportedBoolean */
  _reportedBoolean?: IElement;

  /** Reported rather than primary record */
  reportedReference?: IReference;

  /** Medication to be taken */
  medicationCodeableConcept?: ICodeableConcept;

  /** Medication to be taken */
  medicationReference?: IReference;

  /** Who or group medication request is for */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter created as part of encounter/admission/stay */
  encounter?: IReference<'Encounter'>;

  /** Information to support ordering of the medication */
  supportingInformation?: IReference<'Resource'>[];

  /** When request was initially authored */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Who/What requested the Request */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /** Intended performer of administration */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>;

  /** Desired kind of performer of the medication administration */
  performerType?: ICodeableConcept;

  /** Person who entered the request */
  recorder?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Reason or indication for ordering or not ordering the medication */
  reasonCode?: ICodeableConcept[];

  /** Condition or observation that supports why the prescription is being written */
  reasonReference?: IReference<'Condition' | 'Observation'>[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** What request fulfills */
  basedOn?: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>[];

  /** Composite request this is part of */
  groupIdentifier?: IIdentifier;

  /** Overall pattern of medication administration */
  courseOfTherapyType?: ICodeableConcept;

  /** Associated insurance coverage */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /** Information about the prescription */
  note?: IAnnotation[];

  /** How the medication should be taken */
  dosageInstruction?: IDosage[];

  /** Medication supply authorization */
  dispenseRequest?: IMedicationRequestDispenseRequest;

  /** Any restrictions on medication substitution */
  substitution?: IMedicationRequestSubstitution;

  /** An order/prescription that is being replaced */
  priorPrescription?: IReference<'MedicationRequest'>;

  /** Clinical Issue with action */
  detectedIssue?: IReference<'DetectedIssue'>[];

  /** A list of events of interest in the lifecycle */
  eventHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationRequest from a JSON object
   */
  static fromJSON(json: IMedicationRequest): MedicationRequest {
    return new MedicationRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationRequest>): MedicationRequest {
    return new MedicationRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationRequest) => Partial<IMedicationRequest>): MedicationRequest {
    const currentData = this.toJSON();
    return new MedicationRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICATION_REQUEST_PROPERTIES);
    return result as IMedicationRequest;
  }

  /**
   * Create a deep clone of this MedicationRequest
   */
  clone(): MedicationRequest {
    return new MedicationRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationRequest
   */
  toString(): string {
    const parts: string[] = ['MedicationRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
