import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  ICoverage,
  ICoverageClass,
  ICoverageCostToBeneficiary,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Coverage */
const COVERAGE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  'policyHolder',
  'subscriber',
  'subscriberId',
  '_subscriberId',
  'beneficiary',
  'dependent',
  '_dependent',
  'relationship',
  'period',
  'payor',
  'class',
  'order',
  '_order',
  'network',
  '_network',
  'costToBeneficiary',
  'subrogation',
  '_subrogation',
  'contract',
] as const;

/**
 * Coverage - Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 *
 * @see https://hl7.org/fhir/R4/coverage.html
 *
 * @example
 * const coverage = new Coverage({
 *   // ... properties
 * });
 */
export class Coverage extends DomainResource implements ICoverage {
  readonly resourceType = 'Coverage' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for the coverage */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Coverage category such as medical or accident */
  type?: ICodeableConcept;

  /** Owner of the policy */
  policyHolder?: IReference<'Patient' | 'RelatedPerson' | 'Organization'>;

  /** Subscriber to the policy */
  subscriber?: IReference<'Patient' | 'RelatedPerson'>;

  /** ID assigned to the subscriber */
  subscriberId?: string;

  /** Extension for subscriberId */
  _subscriberId?: IElement;

  /** Plan beneficiary */
  beneficiary: IReference<'Patient'>;

  /** Dependent number */
  dependent?: string;

  /** Extension for dependent */
  _dependent?: IElement;

  /** Beneficiary relationship to the subscriber */
  relationship?: ICodeableConcept;

  /** Coverage start and end dates */
  period?: IPeriod;

  /** Issuer of the policy */
  payor: IReference<'Organization' | 'Patient' | 'RelatedPerson'>[];

  /** Additional coverage classifications */
  class?: ICoverageClass[];

  /** Relative order of the coverage */
  order?: number;

  /** Extension for order */
  _order?: IElement;

  /** Insurer network */
  network?: string;

  /** Extension for network */
  _network?: IElement;

  /** Patient payments for services/products */
  costToBeneficiary?: ICoverageCostToBeneficiary[];

  /** Reimbursement to insurer */
  subrogation?: boolean;

  /** Extension for subrogation */
  _subrogation?: IElement;

  /** Contract details */
  contract?: IReference<'Contract'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICoverage>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Coverage from a JSON object
   */
  static fromJSON(json: ICoverage): Coverage {
    return new Coverage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Coverage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverage>): Coverage {
    return new Coverage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Coverage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverage) => Partial<ICoverage>): Coverage {
    const currentData = this.toJSON();
    return new Coverage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverage {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COVERAGE_PROPERTIES);
    return result as ICoverage;
  }

  /**
   * Create a deep clone of this Coverage
   */
  clone(): Coverage {
    return new Coverage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Coverage
   */
  toString(): string {
    const parts: string[] = ['Coverage'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
