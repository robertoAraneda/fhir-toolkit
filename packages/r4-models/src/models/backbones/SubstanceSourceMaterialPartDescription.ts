import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialPartDescription,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSourceMaterialPartDescription */
const SUBSTANCE_SOURCE_MATERIAL_PART_DESCRIPTION_PROPERTIES = [
  'part',
  'partLocation',
] as const;

/**
 * SubstanceSourceMaterialPartDescription - To do
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialpartdescription.html
 *
 * @example
 * const substanceSourceMaterialPartDescription = new SubstanceSourceMaterialPartDescription({
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterialPartDescription extends BackboneElement implements ISubstanceSourceMaterialPartDescription {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Entity of anatomical origin of source material within an organism */
  part?: ICodeableConcept;

  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply */
  partLocation?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterialPartDescription>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_PART_DESCRIPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterialPartDescription from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterialPartDescription): SubstanceSourceMaterialPartDescription {
    return new SubstanceSourceMaterialPartDescription(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterialPartDescription with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterialPartDescription>): SubstanceSourceMaterialPartDescription {
    return new SubstanceSourceMaterialPartDescription({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterialPartDescription by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterialPartDescription) => Partial<ISubstanceSourceMaterialPartDescription>): SubstanceSourceMaterialPartDescription {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterialPartDescription({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterialPartDescription)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterialPartDescription {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_PART_DESCRIPTION_PROPERTIES);
    return result as ISubstanceSourceMaterialPartDescription;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterialPartDescription
   */
  clone(): SubstanceSourceMaterialPartDescription {
    return new SubstanceSourceMaterialPartDescription(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterialPartDescription
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterialPartDescription'];
    return parts.join(', ');
  }
}
