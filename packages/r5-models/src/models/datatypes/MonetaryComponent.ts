import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IElement,
  IMonetaryComponent,
  IMoney,
  PriceComponentTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MonetaryComponent */
const MONETARY_COMPONENT_PROPERTIES = [
  'type',
  '_type',
  'code',
  'factor',
  '_factor',
  'amount',
] as const;

/**
 * MonetaryComponent - Availability data for an {item}.
 *
 * @see https://hl7.org/fhir/R5/monetarycomponent.html
 *
 * @example
 * const monetaryComponent = new MonetaryComponent({
 *   // ... properties
 * });
 */
export class MonetaryComponent extends Element implements IMonetaryComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** base | surcharge | deduction | discount | tax | informational */
  type: PriceComponentTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc. */
  code?: ICodeableConcept;

  /** Factor used for calculating this component */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Explicit value amount to be used */
  amount?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMonetaryComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, MONETARY_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MonetaryComponent from a JSON object
   */
  static fromJSON(json: IMonetaryComponent): MonetaryComponent {
    return new MonetaryComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MonetaryComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMonetaryComponent>): MonetaryComponent {
    return new MonetaryComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MonetaryComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMonetaryComponent) => Partial<IMonetaryComponent>): MonetaryComponent {
    const currentData = this.toJSON();
    return new MonetaryComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMonetaryComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMonetaryComponent {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, MONETARY_COMPONENT_PROPERTIES);
    return result as IMonetaryComponent;
  }

  /**
   * Create a deep clone of this MonetaryComponent
   */
  clone(): MonetaryComponent {
    return new MonetaryComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MonetaryComponent
   */
  toString(): string {
    const parts: string[] = ['MonetaryComponent'];
    return parts.join(', ');
  }
}
