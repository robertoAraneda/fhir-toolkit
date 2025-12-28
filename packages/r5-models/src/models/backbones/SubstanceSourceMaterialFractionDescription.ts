import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceSourceMaterialFractionDescription,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceSourceMaterialFractionDescription */
const SUBSTANCE_SOURCE_MATERIAL_FRACTION_DESCRIPTION_PROPERTIES = [
  'fraction',
  '_fraction',
  'materialType',
] as const;

/**
 * SubstanceSourceMaterialFractionDescription - Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 *
 * @see https://hl7.org/fhir/R5/substancesourcematerialfractiondescription.html
 *
 * @example
 * const substanceSourceMaterialFractionDescription = new SubstanceSourceMaterialFractionDescription({
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterialFractionDescription extends BackboneElement implements ISubstanceSourceMaterialFractionDescription {

  // ============================================================================
  // Properties
  // ============================================================================

  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation */
  fraction?: string;

  /** Extension for fraction */
  _fraction?: IElement;

  /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1 */
  materialType?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterialFractionDescription>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_FRACTION_DESCRIPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterialFractionDescription from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterialFractionDescription): SubstanceSourceMaterialFractionDescription {
    return new SubstanceSourceMaterialFractionDescription(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterialFractionDescription with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterialFractionDescription>): SubstanceSourceMaterialFractionDescription {
    return new SubstanceSourceMaterialFractionDescription({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterialFractionDescription by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterialFractionDescription) => Partial<ISubstanceSourceMaterialFractionDescription>): SubstanceSourceMaterialFractionDescription {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterialFractionDescription({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterialFractionDescription)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterialFractionDescription {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_FRACTION_DESCRIPTION_PROPERTIES);
    return result as ISubstanceSourceMaterialFractionDescription;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterialFractionDescription
   */
  clone(): SubstanceSourceMaterialFractionDescription {
    return new SubstanceSourceMaterialFractionDescription(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterialFractionDescription
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterialFractionDescription'];
    return parts.join(', ');
  }
}
