import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceSpecificationStructure,
  ISubstanceSpecificationStructureIsotope,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
  ISubstanceSpecificationStructureRepresentation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationStructure */
const SUBSTANCE_SPECIFICATION_STRUCTURE_PROPERTIES = [
  'stereochemistry',
  'opticalActivity',
  'molecularFormula',
  '_molecularFormula',
  'molecularFormulaByMoiety',
  '_molecularFormulaByMoiety',
  'isotope',
  'molecularWeight',
  'source',
  'representation',
] as const;

/**
 * SubstanceSpecificationStructure - Structural information
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructure.html
 *
 * @example
 * const substanceSpecificationStructure = new SubstanceSpecificationStructure({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationStructure extends BackboneElement implements ISubstanceSpecificationStructure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Stereochemistry type */
  stereochemistry?: ICodeableConcept;

  /** Optical activity type */
  opticalActivity?: ICodeableConcept;

  /** Molecular formula */
  molecularFormula?: string;

  /** Extension for molecularFormula */
  _molecularFormula?: IElement;

  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot */
  molecularFormulaByMoiety?: string;

  /** Extension for molecularFormulaByMoiety */
  _molecularFormulaByMoiety?: IElement;

  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio */
  isotope?: ISubstanceSpecificationStructureIsotope[];

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight;

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  /** Molecular structural representation */
  representation?: ISubstanceSpecificationStructureRepresentation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationStructure>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_STRUCTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationStructure from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationStructure): SubstanceSpecificationStructure {
    return new SubstanceSpecificationStructure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationStructure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationStructure>): SubstanceSpecificationStructure {
    return new SubstanceSpecificationStructure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationStructure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationStructure) => Partial<ISubstanceSpecificationStructure>): SubstanceSpecificationStructure {
    const currentData = this.toJSON();
    return new SubstanceSpecificationStructure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationStructure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationStructure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_STRUCTURE_PROPERTIES);
    return result as ISubstanceSpecificationStructure;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationStructure
   */
  clone(): SubstanceSpecificationStructure {
    return new SubstanceSpecificationStructure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationStructure
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationStructure'];
    return parts.join(', ');
  }
}
