import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicationAdministration,
  IMedicationAdministrationDosage,
  IMedicationAdministrationPerformer,
  IPeriod,
  IReference,
  MedicationAdministrationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationAdministration */
const MEDICATION_ADMINISTRATION_PROPERTIES = [
  'identifier',
  'instantiates',
  '_instantiates',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'category',
  'medicationCodeableConcept',
  'medicationReference',
  'subject',
  'context',
  'supportingInformation',
  'effectiveDateTime',
  '_effectiveDateTime',
  'effectivePeriod',
  'performer',
  'reasonCode',
  'reasonReference',
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
 *   resourceType: 'MedicationAdministration',
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

  /** Instantiates protocol or definition */
  instantiates?: string[];

  /** Extension for instantiates */
  _instantiates?: IElement;

  /** Part of referenced event */
  partOf?: IReference<'MedicationAdministration' | 'Procedure'>[];

  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
  status: MedicationAdministrationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason administration not performed */
  statusReason?: ICodeableConcept[];

  /** Type of medication usage */
  category?: ICodeableConcept;

  /** What was administered */
  medicationCodeableConcept?: ICodeableConcept;

  /** What was administered */
  medicationReference?: IReference;

  /** Who received medication */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter or Episode of Care administered as part of */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /** Additional information to support administration */
  supportingInformation?: IReference<'Resource'>[];

  /** Start and end time of administration */
  effectiveDateTime?: string;

  /** Extension for effectiveDateTime */
  _effectiveDateTime?: IElement;

  /** Start and end time of administration */
  effectivePeriod?: IPeriod;

  /** Who performed the medication administration and what they did */
  performer?: IMedicationAdministrationPerformer[];

  /** Reason administration performed */
  reasonCode?: ICodeableConcept[];

  /** Condition or observation that supports why the medication was administered */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>[];

  /** Request administration performed against */
  request?: IReference<'MedicationRequest'>;

  /** Device used to administer */
  device?: IReference<'Device'>[];

  /** Information about the administration */
  note?: IAnnotation[];

  /** Details of how medication was taken */
  dosage?: IMedicationAdministrationDosage;

  /** A list of events of interest in the lifecycle */
  eventHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationAdministration>) {
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
