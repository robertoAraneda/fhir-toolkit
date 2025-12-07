import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IQuantity,
  ISubstanceSpecificationMoiety,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationMoiety */
const SUBSTANCE_SPECIFICATION_MOIETY_PROPERTIES = [
  'role',
  'identifier',
  'name',
  '_name',
  'stereochemistry',
  'opticalActivity',
  'molecularFormula',
  '_molecularFormula',
  'amountQuantity',
  'amountString',
  '_amountString',
] as const;

/**
 * SubstanceSpecificationMoiety - Moiety, for structural modifications
 *
 * @see https://hl7.org/fhir/R4/substancespecificationmoiety.html
 *
 * @example
 * const substanceSpecificationMoiety = new SubstanceSpecificationMoiety({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationMoiety extends BackboneElement implements ISubstanceSpecificationMoiety {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Role that the moiety is playing */
  role?: ICodeableConcept;

  /** Identifier by which this moiety substance is known */
  identifier?: IIdentifier;

  /** Textual name for this moiety substance */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Stereochemistry type */
  stereochemistry?: ICodeableConcept;

  /** Optical activity type */
  opticalActivity?: ICodeableConcept;

  /** Molecular formula */
  molecularFormula?: string;

  /** Extension for molecularFormula */
  _molecularFormula?: IElement;

  /** Quantitative value for this moiety */
  amountQuantity?: IQuantity;

  /** Quantitative value for this moiety */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationMoiety>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_MOIETY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationMoiety from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationMoiety): SubstanceSpecificationMoiety {
    return new SubstanceSpecificationMoiety(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationMoiety with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationMoiety>): SubstanceSpecificationMoiety {
    return new SubstanceSpecificationMoiety({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationMoiety by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationMoiety) => Partial<ISubstanceSpecificationMoiety>): SubstanceSpecificationMoiety {
    const currentData = this.toJSON();
    return new SubstanceSpecificationMoiety({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationMoiety)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationMoiety {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_MOIETY_PROPERTIES);
    return result as ISubstanceSpecificationMoiety;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationMoiety
   */
  clone(): SubstanceSpecificationMoiety {
    return new SubstanceSpecificationMoiety(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationMoiety
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationMoiety'];
    return parts.join(', ');
  }
}
