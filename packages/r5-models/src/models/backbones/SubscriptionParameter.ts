import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ISubscriptionParameter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubscriptionParameter */
const SUBSCRIPTION_PARAMETER_PROPERTIES = [
  'name',
  '_name',
  'value',
  '_value',
] as const;

/**
 * SubscriptionParameter - Channel type
 *
 * @see https://hl7.org/fhir/R5/subscriptionparameter.html
 *
 * @example
 * const subscriptionParameter = new SubscriptionParameter({
 *   // ... properties
 * });
 */
export class SubscriptionParameter extends BackboneElement implements ISubscriptionParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name (key) of the parameter */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Value of the parameter to use or pass through */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionParameter from a JSON object
   */
  static fromJSON(json: ISubscriptionParameter): SubscriptionParameter {
    return new SubscriptionParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionParameter>): SubscriptionParameter {
    return new SubscriptionParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionParameter) => Partial<ISubscriptionParameter>): SubscriptionParameter {
    const currentData = this.toJSON();
    return new SubscriptionParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_PARAMETER_PROPERTIES);
    return result as ISubscriptionParameter;
  }

  /**
   * Create a deep clone of this SubscriptionParameter
   */
  clone(): SubscriptionParameter {
    return new SubscriptionParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionParameter
   */
  toString(): string {
    const parts: string[] = ['SubscriptionParameter'];
    return parts.join(', ');
  }
}
