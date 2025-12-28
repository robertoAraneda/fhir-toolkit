import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation */
const SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_DEGREE_OF_POLYMERISATION_PROPERTIES = [
  'type',
  'average',
  '_average',
  'low',
  '_low',
  'high',
  '_high',
] as const;

/**
 * SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation - Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
 *
 * @see https://hl7.org/fhir/R5/substancepolymerrepeatrepeatunitdegreeofpolymerisation.html
 *
 * @example
 * const substancePolymerRepeatRepeatUnitDegreeOfPolymerisation = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation({
 *   // ... properties
 * });
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement implements ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio */
  type?: ICodeableConcept;

  /** An average amount of polymerisation */
  average?: number;

  /** Extension for average */
  _average?: IElement;

  /** A low expected limit of the amount */
  low?: number;

  /** Extension for low */
  _low?: IElement;

  /** A high expected limit of the amount */
  high?: number;

  /** Extension for high */
  _high?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_DEGREE_OF_POLYMERISATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation from a JSON object
   */
  static fromJSON(json: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    return new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    return new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation) => Partial<ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    const currentData = this.toJSON();
    return new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_DEGREE_OF_POLYMERISATION_PROPERTIES);
    return result as ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
  }

  /**
   * Create a deep clone of this SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
   */
  clone(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    return new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation'];
    return parts.join(', ');
  }
}
