import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationRequest,
  IMedicationRequestDispenseRequest,
  IMedicationRequestSubstitution,
  IPeriod,
  IReference,
  MedicationRequestIntentType,
  MedicationrequestStatusType,
  RequestPriorityType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationRequest */
const MEDICATION_REQUEST_PROPERTIES = [
  'identifier',
  'basedOn',
  'priorPrescription',
  'groupIdentifier',
  'status',
  '_status',
  'statusReason',
  'statusChanged',
  '_statusChanged',
  'intent',
  '_intent',
  'category',
  'priority',
  '_priority',
  'doNotPerform',
  '_doNotPerform',
  'medication',
  'subject',
  'informationSource',
  'encounter',
  'supportingInformation',
  'authoredOn',
  '_authoredOn',
  'requester',
  'reported',
  '_reported',
  'performerType',
  'performer',
  'device',
  'recorder',
  'reason',
  'courseOfTherapyType',
  'insurance',
  'note',
  'renderedDosageInstruction',
  '_renderedDosageInstruction',
  'effectiveDosePeriod',
  'dosageInstruction',
  'dispenseRequest',
  'substitution',
  'eventHistory',
] as const;

/**
 * MedicationRequest - An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 *
 * @see https://hl7.org/fhir/R4/medicationrequest.html
 *
 * @example
 * const medicationRequest = new MedicationRequest({
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

  /** A plan or request that is fulfilled in whole or in part by this medication request */
  basedOn?: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>[];

  /** Reference to an order/prescription that is being replaced by this MedicationRequest */
  priorPrescription?: IReference<'MedicationRequest'>;

  /** Composite request this is part of */
  groupIdentifier?: IIdentifier;

  /** active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown */
  status: MedicationrequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** When the status was changed */
  statusChanged?: string;

  /** Extension for statusChanged */
  _statusChanged?: IElement;

  /** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: MedicationRequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** Grouping or category of medication request */
  category?: ICodeableConcept[];

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** True if patient is to stop taking or not to start taking the medication */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** Medication to be taken */
  medication: ICodeableReference;

  /** Individual or group for whom the medication has been requested */
  subject: IReference<'Patient' | 'Group'>;

  /** The person or organization who provided the information about this request, if the source is someone other than the requestor */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>[];

  /** Encounter created as part of encounter/admission/stay */
  encounter?: IReference<'Encounter'>;

  /** Information to support fulfilling of the medication */
  supportingInformation?: IReference<'Resource'>[];

  /** When request was initially authored */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Who/What requested the Request */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /** Reported rather than primary record */
  reported?: boolean;

  /** Extension for reported */
  _reported?: IElement;

  /** Desired kind of performer of the medication administration */
  performerType?: ICodeableConcept;

  /** Intended performer of administration */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'DeviceDefinition' | 'RelatedPerson' | 'CareTeam' | 'HealthcareService'>[];

  /** Intended type of device for the administration */
  device?: ICodeableReference[];

  /** Person who entered the request */
  recorder?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Reason or indication for ordering or not ordering the medication */
  reason?: ICodeableReference[];

  /** Overall pattern of medication administration */
  courseOfTherapyType?: ICodeableConcept;

  /** Associated insurance coverage */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /** Information about the prescription */
  note?: IAnnotation[];

  /** Full representation of the dosage instructions */
  renderedDosageInstruction?: string;

  /** Extension for renderedDosageInstruction */
  _renderedDosageInstruction?: IElement;

  /** Period over which the medication is to be taken */
  effectiveDosePeriod?: IPeriod;

  /** Specific instructions for how the medication should be taken */
  dosageInstruction?: IDosage[];

  /** Medication supply authorization */
  dispenseRequest?: IMedicationRequestDispenseRequest;

  /** Any restrictions on medication substitution */
  substitution?: IMedicationRequestSubstitution;

  /** A list of events of interest in the lifecycle */
  eventHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicationRequest>, 'resourceType'>) {
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
