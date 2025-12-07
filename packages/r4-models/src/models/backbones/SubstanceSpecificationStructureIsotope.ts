import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  ISubstanceSpecificationStructureIsotope,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationStructureIsotope */
const SUBSTANCE_SPECIFICATION_STRUCTURE_ISOTOPE_PROPERTIES = [
  'identifier',
  'name',
  'substitution',
  'halfLife',
  'molecularWeight',
] as const;

/**
 * SubstanceSpecificationStructureIsotope - Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructureisotope.html
 *
 * @example
 * const substanceSpecificationStructureIsotope = new SubstanceSpecificationStructureIsotope({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationStructureIsotope extends BackboneElement implements ISubstanceSpecificationStructureIsotope {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Substance identifier for each non-natural or radioisotope */
  identifier?: IIdentifier;

  /** Substance name for each non-natural or radioisotope */
  name?: ICodeableConcept;

  /** The type of isotopic substitution present in a single substance */
  substitution?: ICodeableConcept;

  /** Half life - for a non-natural nuclide */
  halfLife?: IQuantity;

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationStructureIsotope>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_STRUCTURE_ISOTOPE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationStructureIsotope from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationStructureIsotope): SubstanceSpecificationStructureIsotope {
    return new SubstanceSpecificationStructureIsotope(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationStructureIsotope with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationStructureIsotope>): SubstanceSpecificationStructureIsotope {
    return new SubstanceSpecificationStructureIsotope({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationStructureIsotope by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationStructureIsotope) => Partial<ISubstanceSpecificationStructureIsotope>): SubstanceSpecificationStructureIsotope {
    const currentData = this.toJSON();
    return new SubstanceSpecificationStructureIsotope({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationStructureIsotope)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationStructureIsotope {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_STRUCTURE_ISOTOPE_PROPERTIES);
    return result as ISubstanceSpecificationStructureIsotope;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationStructureIsotope
   */
  clone(): SubstanceSpecificationStructureIsotope {
    return new SubstanceSpecificationStructureIsotope(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationStructureIsotope
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationStructureIsotope'];
    return parts.join(', ');
  }
}
