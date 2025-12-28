import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ISubstanceDefinitionSourceMaterial,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceDefinitionSourceMaterial */
const SUBSTANCE_DEFINITION_SOURCE_MATERIAL_PROPERTIES = [
  'type',
  'genus',
  'species',
  'part',
  'countryOfOrigin',
] as const;

/**
 * SubstanceDefinitionSourceMaterial - Material or taxonomic/anatomical source
 *
 * @see https://hl7.org/fhir/R4B/substancedefinitionsourcematerial.html
 *
 * @example
 * const substanceDefinitionSourceMaterial = new SubstanceDefinitionSourceMaterial({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionSourceMaterial extends BackboneElement implements ISubstanceDefinitionSourceMaterial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Classification of the origin of the raw material. e.g. cat hair is an Animal source type */
  type?: ICodeableConcept;

  /** The genus of an organism e.g. the Latin epithet of the plant/animal scientific name */
  genus?: ICodeableConcept;

  /** The species of an organism e.g. the Latin epithet of the species of the plant/animal */
  species?: ICodeableConcept;

  /** An anatomical origin of the source material within an organism */
  part?: ICodeableConcept;

  /** The country or countries where the material is harvested */
  countryOfOrigin?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionSourceMaterial>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_SOURCE_MATERIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionSourceMaterial from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionSourceMaterial): SubstanceDefinitionSourceMaterial {
    return new SubstanceDefinitionSourceMaterial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionSourceMaterial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionSourceMaterial>): SubstanceDefinitionSourceMaterial {
    return new SubstanceDefinitionSourceMaterial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionSourceMaterial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionSourceMaterial) => Partial<ISubstanceDefinitionSourceMaterial>): SubstanceDefinitionSourceMaterial {
    const currentData = this.toJSON();
    return new SubstanceDefinitionSourceMaterial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionSourceMaterial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionSourceMaterial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_SOURCE_MATERIAL_PROPERTIES);
    return result as ISubstanceDefinitionSourceMaterial;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionSourceMaterial
   */
  clone(): SubstanceDefinitionSourceMaterial {
    return new SubstanceDefinitionSourceMaterial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionSourceMaterial
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionSourceMaterial'];
    return parts.join(', ');
  }
}
