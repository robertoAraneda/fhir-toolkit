import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceAmount,
  ISubstancePolymerMonomerSetStartingMaterial,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstancePolymerMonomerSetStartingMaterial */
const SUBSTANCE_POLYMER_MONOMER_SET_STARTING_MATERIAL_PROPERTIES = [
  'material',
  'type',
  'isDefining',
  '_isDefining',
  'amount',
] as const;

/**
 * SubstancePolymerMonomerSetStartingMaterial - Todo
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

  /** Todo */
  material?: ICodeableConcept;

  /** Todo */
  type?: ICodeableConcept;

  /** Todo */
  isDefining?: boolean;

  /** Extension for isDefining */
  _isDefining?: IElement;

  /** Todo */
  amount?: ISubstanceAmount;

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
