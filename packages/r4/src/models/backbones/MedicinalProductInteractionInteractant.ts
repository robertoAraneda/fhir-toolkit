import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductInteractionInteractant,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductInteractionInteractant */
const MEDICINAL_PRODUCT_INTERACTION_INTERACTANT_PROPERTIES = [
  'itemReference',
  'itemCodeableConcept',
] as const;

/**
 * MedicinalProductInteractionInteractant - The specific medication, food or laboratory test that interacts
 *
 * @see https://hl7.org/fhir/R4/medicinalproductinteractioninteractant.html
 *
 * @example
 * const medicinalProductInteractionInteractant = new MedicinalProductInteractionInteractant({
 *   // ... properties
 * });
 */
export class MedicinalProductInteractionInteractant extends BackboneElement implements IMedicinalProductInteractionInteractant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific medication, food or laboratory test that interacts */
  itemReference?: IReference;

  /** The specific medication, food or laboratory test that interacts */
  itemCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductInteractionInteractant>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INTERACTION_INTERACTANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductInteractionInteractant from a JSON object
   */
  static fromJSON(json: IMedicinalProductInteractionInteractant): MedicinalProductInteractionInteractant {
    return new MedicinalProductInteractionInteractant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductInteractionInteractant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductInteractionInteractant>): MedicinalProductInteractionInteractant {
    return new MedicinalProductInteractionInteractant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductInteractionInteractant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductInteractionInteractant) => Partial<IMedicinalProductInteractionInteractant>): MedicinalProductInteractionInteractant {
    const currentData = this.toJSON();
    return new MedicinalProductInteractionInteractant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductInteractionInteractant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductInteractionInteractant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INTERACTION_INTERACTANT_PROPERTIES);
    return result as IMedicinalProductInteractionInteractant;
  }

  /**
   * Create a deep clone of this MedicinalProductInteractionInteractant
   */
  clone(): MedicinalProductInteractionInteractant {
    return new MedicinalProductInteractionInteractant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductInteractionInteractant
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductInteractionInteractant'];
    return parts.join(', ');
  }
}
