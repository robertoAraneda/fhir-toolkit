import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationAdministrationDosage,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationAdministrationDosage */
const MEDICATION_ADMINISTRATION_DOSAGE_PROPERTIES = [
  'text',
  '_text',
  'site',
  'route',
  'method',
  'dose',
  'rateRatio',
  'rateQuantity',
] as const;

/**
 * MedicationAdministrationDosage - Details of how medication was taken
 *
 * @see https://hl7.org/fhir/R4/medicationadministrationdosage.html
 *
 * @example
 * const medicationAdministrationDosage = new MedicationAdministrationDosage({
 *   // ... properties
 * });
 */
export class MedicationAdministrationDosage extends BackboneElement implements IMedicationAdministrationDosage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Free text dosage instructions e.g. SIG */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Body site administered to */
  site?: ICodeableConcept;

  /** Path of substance into body */
  route?: ICodeableConcept;

  /** How drug was administered */
  method?: ICodeableConcept;

  /** Amount of medication per dose */
  dose?: IQuantity;

  /** Dose quantity per unit of time */
  rateRatio?: IRatio;

  /** Dose quantity per unit of time */
  rateQuantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationAdministrationDosage>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_ADMINISTRATION_DOSAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationAdministrationDosage from a JSON object
   */
  static fromJSON(json: IMedicationAdministrationDosage): MedicationAdministrationDosage {
    return new MedicationAdministrationDosage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationAdministrationDosage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationAdministrationDosage>): MedicationAdministrationDosage {
    return new MedicationAdministrationDosage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationAdministrationDosage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationAdministrationDosage) => Partial<IMedicationAdministrationDosage>): MedicationAdministrationDosage {
    const currentData = this.toJSON();
    return new MedicationAdministrationDosage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationAdministrationDosage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationAdministrationDosage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_ADMINISTRATION_DOSAGE_PROPERTIES);
    return result as IMedicationAdministrationDosage;
  }

  /**
   * Create a deep clone of this MedicationAdministrationDosage
   */
  clone(): MedicationAdministrationDosage {
    return new MedicationAdministrationDosage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationAdministrationDosage
   */
  toString(): string {
    const parts: string[] = ['MedicationAdministrationDosage'];
    return parts.join(', ');
  }
}
