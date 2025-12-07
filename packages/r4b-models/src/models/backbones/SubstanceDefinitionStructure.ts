import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceDefinitionMolecularWeight,
  ISubstanceDefinitionStructure,
  ISubstanceDefinitionStructureRepresentation,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceDefinitionStructure */
const SUBSTANCE_DEFINITION_STRUCTURE_PROPERTIES = [
  'stereochemistry',
  'opticalActivity',
  'molecularFormula',
  '_molecularFormula',
  'molecularFormulaByMoiety',
  '_molecularFormulaByMoiety',
  'molecularWeight',
  'technique',
  'sourceDocument',
  'representation',
] as const;

/**
 * SubstanceDefinitionStructure - Structural information
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionstructure.html
 *
 * @example
 * const substanceDefinitionStructure = new SubstanceDefinitionStructure({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionStructure extends BackboneElement implements ISubstanceDefinitionStructure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Stereochemistry type */
  stereochemistry?: ICodeableConcept;

  /** Optical activity type */
  opticalActivity?: ICodeableConcept;

  /** Molecular formula (e.g. using the Hill system) */
  molecularFormula?: string;

  /** Extension for molecularFormula */
  _molecularFormula?: IElement;

  /** Specified per moiety according to the Hill system */
  molecularFormulaByMoiety?: string;

  /** Extension for molecularFormulaByMoiety */
  _molecularFormulaByMoiety?: IElement;

  /** The molecular weight or weight range */
  molecularWeight?: ISubstanceDefinitionMolecularWeight;

  /** The method used to find the structure e.g. X-ray, NMR */
  technique?: ICodeableConcept[];

  /** Source of information for the structure */
  sourceDocument?: IReference<'DocumentReference'>[];

  /** A depiction of the structure or characterization of the substance */
  representation?: ISubstanceDefinitionStructureRepresentation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionStructure>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_STRUCTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionStructure from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionStructure): SubstanceDefinitionStructure {
    return new SubstanceDefinitionStructure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionStructure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionStructure>): SubstanceDefinitionStructure {
    return new SubstanceDefinitionStructure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionStructure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionStructure) => Partial<ISubstanceDefinitionStructure>): SubstanceDefinitionStructure {
    const currentData = this.toJSON();
    return new SubstanceDefinitionStructure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionStructure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionStructure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_STRUCTURE_PROPERTIES);
    return result as ISubstanceDefinitionStructure;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionStructure
   */
  clone(): SubstanceDefinitionStructure {
    return new SubstanceDefinitionStructure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionStructure
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionStructure'];
    return parts.join(', ');
  }
}
