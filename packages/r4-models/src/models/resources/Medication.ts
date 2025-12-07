import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedication,
  IMedicationBatch,
  IMedicationIngredient,
  IRatio,
  IReference,
  MedicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Medication */
const MEDICATION_PROPERTIES = [
  'identifier',
  'code',
  'status',
  '_status',
  'manufacturer',
  'form',
  'amount',
  'ingredient',
  'batch',
] as const;

/**
 * Medication - This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 *
 * @see https://hl7.org/fhir/R4/medication.html
 *
 * @example
 * const medication = new Medication({
 *   // ... properties
 * });
 */
export class Medication extends DomainResource implements IMedication {
  readonly resourceType = 'Medication' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this medication */
  identifier?: IIdentifier[];

  /** Codes that identify this medication */
  code?: ICodeableConcept;

  /** active | inactive | entered-in-error */
  status?: MedicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Manufacturer of the item */
  manufacturer?: IReference<'Organization'>;

  /** powder | tablets | capsule + */
  form?: ICodeableConcept;

  /** Amount of drug in package */
  amount?: IRatio;

  /** Active or inactive ingredient */
  ingredient?: IMedicationIngredient[];

  /** Details about packaged medications */
  batch?: IMedicationBatch;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedication>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Medication from a JSON object
   */
  static fromJSON(json: IMedication): Medication {
    return new Medication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Medication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedication>): Medication {
    return new Medication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Medication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedication) => Partial<IMedication>): Medication {
    const currentData = this.toJSON();
    return new Medication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedication {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICATION_PROPERTIES);
    return result as IMedication;
  }

  /**
   * Create a deep clone of this Medication
   */
  clone(): Medication {
    return new Medication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Medication
   */
  toString(): string {
    const parts: string[] = ['Medication'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
