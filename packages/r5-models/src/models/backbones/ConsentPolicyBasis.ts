import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IConsentPolicyBasis,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConsentPolicyBasis */
const CONSENT_POLICY_BASIS_PROPERTIES = [
  'reference',
  'url',
  '_url',
] as const;

/**
 * ConsentPolicyBasis - Computable version of the backing policy
 *
 * @see https://hl7.org/fhir/R4/consentpolicybasis.html
 *
 * @example
 * const consentPolicyBasis = new ConsentPolicyBasis({
 *   // ... properties
 * });
 */
export class ConsentPolicyBasis extends BackboneElement implements IConsentPolicyBasis {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference backing policy resource */
  reference?: IReference<'Resource'>;

  /** URL to a computable backing policy */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsentPolicyBasis>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_POLICY_BASIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConsentPolicyBasis from a JSON object
   */
  static fromJSON(json: IConsentPolicyBasis): ConsentPolicyBasis {
    return new ConsentPolicyBasis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConsentPolicyBasis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsentPolicyBasis>): ConsentPolicyBasis {
    return new ConsentPolicyBasis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConsentPolicyBasis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsentPolicyBasis) => Partial<IConsentPolicyBasis>): ConsentPolicyBasis {
    const currentData = this.toJSON();
    return new ConsentPolicyBasis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsentPolicyBasis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsentPolicyBasis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONSENT_POLICY_BASIS_PROPERTIES);
    return result as IConsentPolicyBasis;
  }

  /**
   * Create a deep clone of this ConsentPolicyBasis
   */
  clone(): ConsentPolicyBasis {
    return new ConsentPolicyBasis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConsentPolicyBasis
   */
  toString(): string {
    const parts: string[] = ['ConsentPolicyBasis'];
    return parts.join(', ');
  }
}
