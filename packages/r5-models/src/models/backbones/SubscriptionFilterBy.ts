import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ISubscriptionFilterBy,
  SearchComparatorType,
  SearchModifierCodeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubscriptionFilterBy */
const SUBSCRIPTION_FILTER_BY_PROPERTIES = [
  'resourceType',
  '_resourceType',
  'filterParameter',
  '_filterParameter',
  'comparator',
  '_comparator',
  'modifier',
  '_modifier',
  'value',
  '_value',
] as const;

/**
 * SubscriptionFilterBy - Criteria for narrowing the subscription topic stream
 *
 * @see https://hl7.org/fhir/R4/subscriptionfilterby.html
 *
 * @example
 * const subscriptionFilterBy = new SubscriptionFilterBy({
 *   // ... properties
 * });
 */
export class SubscriptionFilterBy extends BackboneElement implements ISubscriptionFilterBy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Allowed Resource (reference to definition) for this Subscription filter */
  resourceType?: string;

  /** Extension for resourceType */
  _resourceType?: IElement;

  /** Filter label defined in SubscriptionTopic */
  filterParameter: string;

  /** Extension for filterParameter */
  _filterParameter?: IElement;

  /** eq | ne | gt | lt | ge | le | sa | eb | ap */
  comparator?: SearchComparatorType;

  /** Extension for comparator */
  _comparator?: IElement;

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate */
  modifier?: SearchModifierCodeType;

  /** Extension for modifier */
  _modifier?: IElement;

  /** Literal value or resource path */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionFilterBy>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_FILTER_BY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionFilterBy from a JSON object
   */
  static fromJSON(json: ISubscriptionFilterBy): SubscriptionFilterBy {
    return new SubscriptionFilterBy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionFilterBy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionFilterBy>): SubscriptionFilterBy {
    return new SubscriptionFilterBy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionFilterBy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionFilterBy) => Partial<ISubscriptionFilterBy>): SubscriptionFilterBy {
    const currentData = this.toJSON();
    return new SubscriptionFilterBy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionFilterBy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionFilterBy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_FILTER_BY_PROPERTIES);
    return result as ISubscriptionFilterBy;
  }

  /**
   * Create a deep clone of this SubscriptionFilterBy
   */
  clone(): SubscriptionFilterBy {
    return new SubscriptionFilterBy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionFilterBy
   */
  toString(): string {
    const parts: string[] = ['SubscriptionFilterBy'];
    return parts.join(', ');
  }
}
