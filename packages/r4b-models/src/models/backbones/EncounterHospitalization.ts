import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEncounterHospitalization,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EncounterHospitalization */
const ENCOUNTER_HOSPITALIZATION_PROPERTIES = [
  'preAdmissionIdentifier',
  'origin',
  'admitSource',
  'reAdmission',
  'dietPreference',
  'specialCourtesy',
  'specialArrangement',
  'destination',
  'dischargeDisposition',
] as const;

/**
 * EncounterHospitalization - Details about the admission to a healthcare service
 *
 * @see https://hl7.org/fhir/R4B/encounterhospitalization.html
 *
 * @example
 * const encounterHospitalization = new EncounterHospitalization({
 *   // ... properties
 * });
 */
export class EncounterHospitalization extends BackboneElement implements IEncounterHospitalization {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Pre-admission identifier */
  preAdmissionIdentifier?: IIdentifier;

  /** The location/organization from which the patient came before admission */
  origin?: IReference<'Location' | 'Organization'>;

  /** From where patient was admitted (physician referral, transfer) */
  admitSource?: ICodeableConcept;

  /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission */
  reAdmission?: ICodeableConcept;

  /** Diet preferences reported by the patient */
  dietPreference?: ICodeableConcept[];

  /** Special courtesies (VIP, board member) */
  specialCourtesy?: ICodeableConcept[];

  /** Wheelchair, translator, stretcher, etc. */
  specialArrangement?: ICodeableConcept[];

  /** Location/organization to which the patient is discharged */
  destination?: IReference<'Location' | 'Organization'>;

  /** Category or kind of location after discharge */
  dischargeDisposition?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterHospitalization>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_HOSPITALIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterHospitalization from a JSON object
   */
  static fromJSON(json: IEncounterHospitalization): EncounterHospitalization {
    return new EncounterHospitalization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterHospitalization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterHospitalization>): EncounterHospitalization {
    return new EncounterHospitalization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterHospitalization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterHospitalization) => Partial<IEncounterHospitalization>): EncounterHospitalization {
    const currentData = this.toJSON();
    return new EncounterHospitalization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterHospitalization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterHospitalization {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_HOSPITALIZATION_PROPERTIES);
    return result as IEncounterHospitalization;
  }

  /**
   * Create a deep clone of this EncounterHospitalization
   */
  clone(): EncounterHospitalization {
    return new EncounterHospitalization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterHospitalization
   */
  toString(): string {
    const parts: string[] = ['EncounterHospitalization'];
    return parts.join(', ');
  }
}
