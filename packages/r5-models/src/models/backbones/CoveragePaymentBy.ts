import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoveragePaymentBy,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoveragePaymentBy */
const COVERAGE_PAYMENT_BY_PROPERTIES = [
  'party',
  'responsibility',
  '_responsibility',
] as const;

/**
 * CoveragePaymentBy - Self-pay parties and responsibility
 *
 * @see https://hl7.org/fhir/R4/coveragepaymentby.html
 *
 * @example
 * const coveragePaymentBy = new CoveragePaymentBy({
 *   // ... properties
 * });
 */
export class CoveragePaymentBy extends BackboneElement implements ICoveragePaymentBy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Parties performing self-payment */
  party: IReference<'Patient' | 'RelatedPerson' | 'Organization'>;

  /** Party's responsibility */
  responsibility?: string;

  /** Extension for responsibility */
  _responsibility?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoveragePaymentBy>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_PAYMENT_BY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoveragePaymentBy from a JSON object
   */
  static fromJSON(json: ICoveragePaymentBy): CoveragePaymentBy {
    return new CoveragePaymentBy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoveragePaymentBy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoveragePaymentBy>): CoveragePaymentBy {
    return new CoveragePaymentBy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoveragePaymentBy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoveragePaymentBy) => Partial<ICoveragePaymentBy>): CoveragePaymentBy {
    const currentData = this.toJSON();
    return new CoveragePaymentBy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoveragePaymentBy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoveragePaymentBy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_PAYMENT_BY_PROPERTIES);
    return result as ICoveragePaymentBy;
  }

  /**
   * Create a deep clone of this CoveragePaymentBy
   */
  clone(): CoveragePaymentBy {
    return new CoveragePaymentBy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoveragePaymentBy
   */
  toString(): string {
    const parts: string[] = ['CoveragePaymentBy'];
    return parts.join(', ');
  }
}
