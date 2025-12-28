import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstancePolymerRepeat,
  ISubstancePolymerRepeatRepeatUnit,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstancePolymerRepeat */
const SUBSTANCE_POLYMER_REPEAT_PROPERTIES = [
  'averageMolecularFormula',
  '_averageMolecularFormula',
  'repeatUnitAmountType',
  'repeatUnit',
] as const;

/**
 * SubstancePolymerRepeat - Specifies and quantifies the repeated units and their configuration
 *
 * @see https://hl7.org/fhir/R5/substancepolymerrepeat.html
 *
 * @example
 * const substancePolymerRepeat = new SubstancePolymerRepeat({
 *   // ... properties
 * });
 */
export class SubstancePolymerRepeat extends BackboneElement implements ISubstancePolymerRepeat {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A representation of an (average) molecular formula from a polymer */
  averageMolecularFormula?: string;

  /** Extension for averageMolecularFormula */
  _averageMolecularFormula?: IElement;

  /** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average) */
  repeatUnitAmountType?: ICodeableConcept;

  /** An SRU - Structural Repeat Unit */
  repeatUnit?: ISubstancePolymerRepeatRepeatUnit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymerRepeat>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_REPEAT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymerRepeat from a JSON object
   */
  static fromJSON(json: ISubstancePolymerRepeat): SubstancePolymerRepeat {
    return new SubstancePolymerRepeat(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymerRepeat with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymerRepeat>): SubstancePolymerRepeat {
    return new SubstancePolymerRepeat({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymerRepeat by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymerRepeat) => Partial<ISubstancePolymerRepeat>): SubstancePolymerRepeat {
    const currentData = this.toJSON();
    return new SubstancePolymerRepeat({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymerRepeat)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymerRepeat {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_REPEAT_PROPERTIES);
    return result as ISubstancePolymerRepeat;
  }

  /**
   * Create a deep clone of this SubstancePolymerRepeat
   */
  clone(): SubstancePolymerRepeat {
    return new SubstancePolymerRepeat(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymerRepeat
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymerRepeat'];
    return parts.join(', ');
  }
}
