import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEncounterAdmission,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EncounterAdmission */
const ENCOUNTER_ADMISSION_PROPERTIES = [
  'preAdmissionIdentifier',
  'origin',
  'admitSource',
  'reAdmission',
  'destination',
  'dischargeDisposition',
] as const;

/**
 * EncounterAdmission - Details about the admission to a healthcare service
 *
 * @see https://hl7.org/fhir/R5/encounteradmission.html
 *
 * @example
 * const encounterAdmission = new EncounterAdmission({
 *   // ... properties
 * });
 */
export class EncounterAdmission extends BackboneElement implements IEncounterAdmission {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Pre-admission identifier */
  preAdmissionIdentifier?: IIdentifier;

  /** The location/organization from which the patient came before admission */
  origin?: IReference<'Location' | 'Organization'>;

  /** From where patient was admitted (physician referral, transfer) */
  admitSource?: ICodeableConcept;

  /** Indicates that the patient is being re-admitted */
  reAdmission?: ICodeableConcept;

  /** Location/organization to which the patient is discharged */
  destination?: IReference<'Location' | 'Organization'>;

  /** Category or kind of location after discharge */
  dischargeDisposition?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterAdmission>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_ADMISSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterAdmission from a JSON object
   */
  static fromJSON(json: IEncounterAdmission): EncounterAdmission {
    return new EncounterAdmission(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterAdmission with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterAdmission>): EncounterAdmission {
    return new EncounterAdmission({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterAdmission by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterAdmission) => Partial<IEncounterAdmission>): EncounterAdmission {
    const currentData = this.toJSON();
    return new EncounterAdmission({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterAdmission)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterAdmission {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_ADMISSION_PROPERTIES);
    return result as IEncounterAdmission;
  }

  /**
   * Create a deep clone of this EncounterAdmission
   */
  clone(): EncounterAdmission {
    return new EncounterAdmission(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterAdmission
   */
  toString(): string {
    const parts: string[] = ['EncounterAdmission'];
    return parts.join(', ');
  }
}
