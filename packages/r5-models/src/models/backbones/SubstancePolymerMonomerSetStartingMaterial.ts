import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  ISubstancePolymerMonomerSetStartingMaterial,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstancePolymerMonomerSetStartingMaterial */
const SUBSTANCE_POLYMER_MONOMER_SET_STARTING_MATERIAL_PROPERTIES = [
  'code',
  'category',
  'isDefining',
  '_isDefining',
  'amount',
] as const;

/**
 * SubstancePolymerMonomerSetStartingMaterial - The starting materials - monomer(s) used in the synthesis of the polymer
 *
 * @see https://hl7.org/fhir/R4/substancepolymermonomersetstartingmaterial.html
 *
 * @example
 * const substancePolymerMonomerSetStartingMaterial = new SubstancePolymerMonomerSetStartingMaterial({
 *   // ... properties
 * });
 */
export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement implements ISubstancePolymerMonomerSetStartingMaterial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of substance for this starting material */
  code?: ICodeableConcept;

  /** Substance high level category, e.g. chemical substance */
  category?: ICodeableConcept;

  /** Used to specify whether the attribute described is a defining element for the unique identification of the polymer */
  isDefining?: boolean;

  /** Extension for isDefining */
  _isDefining?: IElement;

  /** A percentage */
  amount?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymerMonomerSetStartingMaterial>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_MONOMER_SET_STARTING_MATERIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymerMonomerSetStartingMaterial from a JSON object
   */
  static fromJSON(json: ISubstancePolymerMonomerSetStartingMaterial): SubstancePolymerMonomerSetStartingMaterial {
    return new SubstancePolymerMonomerSetStartingMaterial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymerMonomerSetStartingMaterial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymerMonomerSetStartingMaterial>): SubstancePolymerMonomerSetStartingMaterial {
    return new SubstancePolymerMonomerSetStartingMaterial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymerMonomerSetStartingMaterial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymerMonomerSetStartingMaterial) => Partial<ISubstancePolymerMonomerSetStartingMaterial>): SubstancePolymerMonomerSetStartingMaterial {
    const currentData = this.toJSON();
    return new SubstancePolymerMonomerSetStartingMaterial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymerMonomerSetStartingMaterial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymerMonomerSetStartingMaterial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_MONOMER_SET_STARTING_MATERIAL_PROPERTIES);
    return result as ISubstancePolymerMonomerSetStartingMaterial;
  }

  /**
   * Create a deep clone of this SubstancePolymerMonomerSetStartingMaterial
   */
  clone(): SubstancePolymerMonomerSetStartingMaterial {
    return new SubstancePolymerMonomerSetStartingMaterial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymerMonomerSetStartingMaterial
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymerMonomerSetStartingMaterial'];
    return parts.join(', ');
  }
}
