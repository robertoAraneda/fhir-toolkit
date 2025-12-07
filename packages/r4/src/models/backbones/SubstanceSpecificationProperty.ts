import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  IReference,
  ISubstanceSpecificationProperty,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationProperty */
const SUBSTANCE_SPECIFICATION_PROPERTY_PROPERTIES = [
  'category',
  'code',
  'parameters',
  '_parameters',
  'definingSubstanceReference',
  'definingSubstanceCodeableConcept',
  'amountQuantity',
  'amountString',
  '_amountString',
] as const;

/**
 * SubstanceSpecificationProperty - General specifications for this substance, including how it is related to other substances
 *
 * @see https://hl7.org/fhir/R4/substancespecificationproperty.html
 *
 * @example
 * const substanceSpecificationProperty = new SubstanceSpecificationProperty({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationProperty extends BackboneElement implements ISubstanceSpecificationProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A category for this property, e.g. Physical, Chemical, Enzymatic */
  category?: ICodeableConcept;

  /** Property type e.g. viscosity, pH, isoelectric point */
  code?: ICodeableConcept;

  /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) */
  parameters?: string;

  /** Extension for parameters */
  _parameters?: IElement;

  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
  definingSubstanceReference?: IReference;

  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
  definingSubstanceCodeableConcept?: ICodeableConcept;

  /** Quantitative value for this property */
  amountQuantity?: IQuantity;

  /** Quantitative value for this property */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationProperty from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationProperty): SubstanceSpecificationProperty {
    return new SubstanceSpecificationProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationProperty>): SubstanceSpecificationProperty {
    return new SubstanceSpecificationProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationProperty) => Partial<ISubstanceSpecificationProperty>): SubstanceSpecificationProperty {
    const currentData = this.toJSON();
    return new SubstanceSpecificationProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_PROPERTY_PROPERTIES);
    return result as ISubstanceSpecificationProperty;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationProperty
   */
  clone(): SubstanceSpecificationProperty {
    return new SubstanceSpecificationProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationProperty
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationProperty'];
    return parts.join(', ');
  }
}
