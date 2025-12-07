import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationDispense,
  IMedicationDispensePerformer,
  IMedicationDispenseSubstitution,
  IQuantity,
  IReference,
  MedicationDispenseStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationDispense */
const MEDICATION_DISPENSE_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'notPerformedReason',
  'statusChanged',
  '_statusChanged',
  'category',
  'medication',
  'subject',
  'encounter',
  'supportingInformation',
  'performer',
  'location',
  'authorizingPrescription',
  'type',
  'quantity',
  'daysSupply',
  'recorded',
  '_recorded',
  'whenPrepared',
  '_whenPrepared',
  'whenHandedOver',
  '_whenHandedOver',
  'destination',
  'receiver',
  'note',
  'renderedDosageInstruction',
  '_renderedDosageInstruction',
  'dosageInstruction',
  'substitution',
  'eventHistory',
] as const;

/**
 * MedicationDispense - Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 *
 * @see https://hl7.org/fhir/R4/medicationdispense.html
 *
 * @example
 * const medicationDispense = new MedicationDispense({
 *   resourceType: 'MedicationDispense',
 *   // ... properties
 * });
 */
export class MedicationDispense extends DomainResource implements IMedicationDispense {
  readonly resourceType = 'MedicationDispense' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier[];

  /** Plan that is fulfilled by this dispense */
  basedOn?: IReference<'CarePlan'>[];

  /** Event that dispense is part of */
  partOf?: IReference<'Procedure' | 'MedicationAdministration'>[];

  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown */
  status: MedicationDispenseStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Why a dispense was not performed */
  notPerformedReason?: ICodeableReference;

  /** When the status changed */
  statusChanged?: string;

  /** Extension for statusChanged */
  _statusChanged?: IElement;

  /** Type of medication dispense */
  category?: ICodeableConcept[];

  /** What medication was supplied */
  medication: ICodeableReference;

  /** Who the dispense is for */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter associated with event */
  encounter?: IReference<'Encounter'>;

  /** Information that supports the dispensing of the medication */
  supportingInformation?: IReference<'Resource'>[];

  /** Who performed event */
  performer?: IMedicationDispensePerformer[];

  /** Where the dispense occurred */
  location?: IReference<'Location'>;

  /** Medication order that authorizes the dispense */
  authorizingPrescription?: IReference<'MedicationRequest'>[];

  /** Trial fill, partial fill, emergency fill, etc */
  type?: ICodeableConcept;

  /** Amount dispensed */
  quantity?: IQuantity;

  /** Amount of medication expressed as a timing amount */
  daysSupply?: IQuantity;

  /** When the recording of the dispense started */
  recorded?: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** When product was packaged and reviewed */
  whenPrepared?: string;

  /** Extension for whenPrepared */
  _whenPrepared?: IElement;

  /** When product was given out */
  whenHandedOver?: string;

  /** Extension for whenHandedOver */
  _whenHandedOver?: IElement;

  /** Where the medication was/will be sent */
  destination?: IReference<'Location'>;

  /** Who collected the medication or where the medication was delivered */
  receiver?: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Location' | 'PractitionerRole'>[];

  /** Information about the dispense */
  note?: IAnnotation[];

  /** Full representation of the dosage instructions */
  renderedDosageInstruction?: string;

  /** Extension for renderedDosageInstruction */
  _renderedDosageInstruction?: IElement;

  /** How the medication is to be used by the patient or administered by the caregiver */
  dosageInstruction?: IDosage[];

  /** Whether a substitution was performed on the dispense */
  substitution?: IMedicationDispenseSubstitution;

  /** A list of relevant lifecycle events */
  eventHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationDispense>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_DISPENSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationDispense from a JSON object
   */
  static fromJSON(json: IMedicationDispense): MedicationDispense {
    return new MedicationDispense(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationDispense with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationDispense>): MedicationDispense {
    return new MedicationDispense({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationDispense by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationDispense) => Partial<IMedicationDispense>): MedicationDispense {
    const currentData = this.toJSON();
    return new MedicationDispense({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationDispense)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationDispense {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICATION_DISPENSE_PROPERTIES);
    return result as IMedicationDispense;
  }

  /**
   * Create a deep clone of this MedicationDispense
   */
  clone(): MedicationDispense {
    return new MedicationDispense(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationDispense
   */
  toString(): string {
    const parts: string[] = ['MedicationDispense'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
