import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IConsentPolicy,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ConsentPolicy */
const CONSENT_POLICY_PROPERTIES = [
  'authority',
  '_authority',
  'uri',
  '_uri',
] as const;

/**
 * ConsentPolicy - Policies covered by this consent
 *
 * @see https://hl7.org/fhir/R4/consentpolicy.html
 *
 * @example
 * const consentPolicy = new ConsentPolicy({
 *   // ... properties
 * });
 */
export class ConsentPolicy extends BackboneElement implements IConsentPolicy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Enforcement source for policy */
  authority?: string;

  /** Extension for authority */
  _authority?: IElement;

  /** Specific policy covered by this consent */
  uri?: string;

  /** Extension for uri */
  _uri?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsentPolicy>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_POLICY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConsentPolicy from a JSON object
   */
  static fromJSON(json: IConsentPolicy): ConsentPolicy {
    return new ConsentPolicy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConsentPolicy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsentPolicy>): ConsentPolicy {
    return new ConsentPolicy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConsentPolicy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsentPolicy) => Partial<IConsentPolicy>): ConsentPolicy {
    const currentData = this.toJSON();
    return new ConsentPolicy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsentPolicy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsentPolicy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONSENT_POLICY_PROPERTIES);
    return result as IConsentPolicy;
  }

  /**
   * Create a deep clone of this ConsentPolicy
   */
  clone(): ConsentPolicy {
    return new ConsentPolicy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConsentPolicy
   */
  toString(): string {
    const parts: string[] = ['ConsentPolicy'];
    return parts.join(', ');
  }
}
