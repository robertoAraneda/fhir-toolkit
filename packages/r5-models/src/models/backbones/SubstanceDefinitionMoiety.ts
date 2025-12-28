import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IQuantity,
  ISubstanceDefinitionMoiety,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceDefinitionMoiety */
const SUBSTANCE_DEFINITION_MOIETY_PROPERTIES = [
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
  'measurementType',
] as const;

/**
 * SubstanceDefinitionMoiety - Moiety, for structural modifications
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionmoiety.html
 *
 * @example
 * const substanceDefinitionMoiety = new SubstanceDefinitionMoiety({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionMoiety extends BackboneElement implements ISubstanceDefinitionMoiety {

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

  /** Molecular formula for this moiety (e.g. with the Hill system) */
  molecularFormula?: string;

  /** Extension for molecularFormula */
  _molecularFormula?: IElement;

  /** Quantitative value for this moiety */
  amountQuantity?: IQuantity;

  /** Quantitative value for this moiety */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  /** The measurement type of the quantitative value */
  measurementType?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionMoiety>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_MOIETY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionMoiety from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionMoiety): SubstanceDefinitionMoiety {
    return new SubstanceDefinitionMoiety(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionMoiety with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionMoiety>): SubstanceDefinitionMoiety {
    return new SubstanceDefinitionMoiety({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionMoiety by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionMoiety) => Partial<ISubstanceDefinitionMoiety>): SubstanceDefinitionMoiety {
    const currentData = this.toJSON();
    return new SubstanceDefinitionMoiety({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionMoiety)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionMoiety {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_MOIETY_PROPERTIES);
    return result as ISubstanceDefinitionMoiety;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionMoiety
   */
  clone(): SubstanceDefinitionMoiety {
    return new SubstanceDefinitionMoiety(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionMoiety
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionMoiety'];
    return parts.join(', ');
  }
}
