import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSourceMaterialOrganismOrganismGeneral */
const SUBSTANCE_SOURCE_MATERIAL_ORGANISM_ORGANISM_GENERAL_PROPERTIES = [
  'kingdom',
  'phylum',
  'class',
  'order',
] as const;

/**
 * SubstanceSourceMaterialOrganismOrganismGeneral - 4.9.13.7.1 Kingdom (Conditional)
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialorganismorganismgeneral.html
 *
 * @example
 * const substanceSourceMaterialOrganismOrganismGeneral = new SubstanceSourceMaterialOrganismOrganismGeneral({
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement implements ISubstanceSourceMaterialOrganismOrganismGeneral {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kingdom of an organism shall be specified */
  kingdom?: ICodeableConcept;

  /** The phylum of an organism shall be specified */
  phylum?: ICodeableConcept;

  /** The class of an organism shall be specified */
  class?: ICodeableConcept;

  /** The order of an organism shall be specified, */
  order?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterialOrganismOrganismGeneral>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_ORGANISM_GENERAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterialOrganismOrganismGeneral from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterialOrganismOrganismGeneral): SubstanceSourceMaterialOrganismOrganismGeneral {
    return new SubstanceSourceMaterialOrganismOrganismGeneral(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterialOrganismOrganismGeneral with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterialOrganismOrganismGeneral>): SubstanceSourceMaterialOrganismOrganismGeneral {
    return new SubstanceSourceMaterialOrganismOrganismGeneral({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterialOrganismOrganismGeneral by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterialOrganismOrganismGeneral) => Partial<ISubstanceSourceMaterialOrganismOrganismGeneral>): SubstanceSourceMaterialOrganismOrganismGeneral {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterialOrganismOrganismGeneral({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterialOrganismOrganismGeneral)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterialOrganismOrganismGeneral {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_ORGANISM_GENERAL_PROPERTIES);
    return result as ISubstanceSourceMaterialOrganismOrganismGeneral;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterialOrganismOrganismGeneral
   */
  clone(): SubstanceSourceMaterialOrganismOrganismGeneral {
    return new SubstanceSourceMaterialOrganismOrganismGeneral(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterialOrganismOrganismGeneral
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterialOrganismOrganismGeneral'];
    return parts.join(', ');
  }
}
