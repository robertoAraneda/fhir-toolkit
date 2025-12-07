import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IMedicationAdministration,
  IMedicationAdministrationDosage,
  IMedicationAdministrationPerformer,
  IPeriod,
  IReference,
  ITiming,
  MedicationAdministrationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationAdministration */
const MEDICATION_ADMINISTRATION_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'category',
  'medication',
  'subject',
  'encounter',
  'supportingInformation',
  'occurenceDateTime',
  '_occurenceDateTime',
  'occurencePeriod',
  'occurenceTiming',
  'recorded',
  '_recorded',
  'isSubPotent',
  '_isSubPotent',
  'subPotentReason',
  'performer',
  'reason',
  'request',
  'device',
  'note',
  'dosage',
  'eventHistory',
] as const;

/**
 * MedicationAdministration - Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 *
 * @see https://hl7.org/fhir/R4/medicationadministration.html
 *
 * @example
 * const medicationAdministration = new MedicationAdministration({
 *   // ... properties
 * });
 */
export class MedicationAdministration extends DomainResource implements IMedicationAdministration {
  readonly resourceType = 'MedicationAdministration' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier[];

  /** Plan this is fulfilled by this administration */
  basedOn?: IReference<'CarePlan'>[];

  /** Part of referenced event */
  partOf?: IReference<'MedicationAdministration' | 'Procedure' | 'MedicationDispense'>[];

  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
  status: MedicationAdministrationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason administration not performed */
  statusReason?: ICodeableConcept[];

  /** Type of medication administration */
  category?: ICodeableConcept[];

  /** What was administered */
  medication: ICodeableReference;

  /** Who received medication */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter administered as part of */
  encounter?: IReference<'Encounter'>;

  /** Additional information to support administration */
  supportingInformation?: IReference<'Resource'>[];

  /** Specific date/time or interval of time during which the administration took place (or did not take place) */
  occurenceDateTime?: string;

  /** Extension for occurenceDateTime */
  _occurenceDateTime?: IElement;

  /** Specific date/time or interval of time during which the administration took place (or did not take place) */
  occurencePeriod?: IPeriod;

  /** Specific date/time or interval of time during which the administration took place (or did not take place) */
  occurenceTiming?: ITiming;

  /** When the MedicationAdministration was first captured in the subject's record */
  recorded?: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** Full dose was not administered */
  isSubPotent?: boolean;

  /** Extension for isSubPotent */
  _isSubPotent?: IElement;

  /** Reason full dose was not administered */
  subPotentReason?: ICodeableConcept[];

  /** Who or what performed the medication administration and what type of performance they did */
  performer?: IMedicationAdministrationPerformer[];

  /** Concept, condition or observation that supports why the medication was administered */
  reason?: ICodeableReference[];

  /** Request administration performed against */
  request?: IReference<'MedicationRequest'>;

  /** Device used to administer */
  device?: ICodeableReference[];

  /** Information about the administration */
  note?: IAnnotation[];

  /** Details of how medication was taken */
  dosage?: IMedicationAdministrationDosage;

  /** A list of events of interest in the lifecycle */
  eventHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicationAdministration>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_ADMINISTRATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationAdministration from a JSON object
   */
  static fromJSON(json: IMedicationAdministration): MedicationAdministration {
    return new MedicationAdministration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationAdministration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationAdministration>): MedicationAdministration {
    return new MedicationAdministration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationAdministration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationAdministration) => Partial<IMedicationAdministration>): MedicationAdministration {
    const currentData = this.toJSON();
    return new MedicationAdministration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationAdministration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationAdministration {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICATION_ADMINISTRATION_PROPERTIES);
    return result as IMedicationAdministration;
  }

  /**
   * Create a deep clone of this MedicationAdministration
   */
  clone(): MedicationAdministration {
    return new MedicationAdministration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationAdministration
   */
  toString(): string {
    const parts: string[] = ['MedicationAdministration'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
