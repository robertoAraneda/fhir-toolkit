import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IQuantity,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationStructureIsotopeMolecularWeight */
const SUBSTANCE_SPECIFICATION_STRUCTURE_ISOTOPE_MOLECULAR_WEIGHT_PROPERTIES = [
  'method',
  'type',
  'amount',
] as const;

/**
 * SubstanceSpecificationStructureIsotopeMolecularWeight - The molecular weight or weight range (for proteins, polymers or nucleic acids)
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructureisotopemolecularweight.html
 *
 * @example
 * const substanceSpecificationStructureIsotopeMolecularWeight = new SubstanceSpecificationStructureIsotopeMolecularWeight({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement implements ISubstanceSpecificationStructureIsotopeMolecularWeight {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The method by which the molecular weight was determined */
  method?: ICodeableConcept;

  /** Type of molecular weight such as exact, average (also known as. number average), weight average */
  type?: ICodeableConcept;

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amount?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationStructureIsotopeMolecularWeight>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_STRUCTURE_ISOTOPE_MOLECULAR_WEIGHT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationStructureIsotopeMolecularWeight from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationStructureIsotopeMolecularWeight): SubstanceSpecificationStructureIsotopeMolecularWeight {
    return new SubstanceSpecificationStructureIsotopeMolecularWeight(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationStructureIsotopeMolecularWeight with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationStructureIsotopeMolecularWeight>): SubstanceSpecificationStructureIsotopeMolecularWeight {
    return new SubstanceSpecificationStructureIsotopeMolecularWeight({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationStructureIsotopeMolecularWeight by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationStructureIsotopeMolecularWeight) => Partial<ISubstanceSpecificationStructureIsotopeMolecularWeight>): SubstanceSpecificationStructureIsotopeMolecularWeight {
    const currentData = this.toJSON();
    return new SubstanceSpecificationStructureIsotopeMolecularWeight({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationStructureIsotopeMolecularWeight)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationStructureIsotopeMolecularWeight {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_STRUCTURE_ISOTOPE_MOLECULAR_WEIGHT_PROPERTIES);
    return result as ISubstanceSpecificationStructureIsotopeMolecularWeight;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationStructureIsotopeMolecularWeight
   */
  clone(): SubstanceSpecificationStructureIsotopeMolecularWeight {
    return new SubstanceSpecificationStructureIsotopeMolecularWeight(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationStructureIsotopeMolecularWeight
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationStructureIsotopeMolecularWeight'];
    return parts.join(', ');
  }
}
