import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IInsurancePlan,
  IInsurancePlanContact,
  IInsurancePlanCoverage,
  IInsurancePlanPlan,
  IPeriod,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to InsurancePlan */
const INSURANCE_PLAN_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  'name',
  '_name',
  'alias',
  '_alias',
  'period',
  'ownedBy',
  'administeredBy',
  'coverageArea',
  'contact',
  'endpoint',
  'network',
  'coverage',
  'plan',
] as const;

/**
 * InsurancePlan - Details of a Health Insurance product/plan provided by an organization.
 *
 * @see https://hl7.org/fhir/R4/insuranceplan.html
 *
 * @example
 * const insurancePlan = new InsurancePlan({
 *   resourceType: 'InsurancePlan',
 *   // ... properties
 * });
 */
export class InsurancePlan extends DomainResource implements IInsurancePlan {
  readonly resourceType = 'InsurancePlan' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for Product */
  identifier?: IIdentifier[];

  /** draft | active | retired | unknown */
  status?: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Kind of product */
  type?: ICodeableConcept[];

  /** Official name */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Alternate names */
  alias?: string[];

  /** Extension for alias */
  _alias?: IElement;

  /** When the product is available */
  period?: IPeriod;

  /** Plan issuer */
  ownedBy?: IReference<'Organization'>;

  /** Product administrator */
  administeredBy?: IReference<'Organization'>;

  /** Where product applies */
  coverageArea?: IReference<'Location'>[];

  /** Contact for the product */
  contact?: IInsurancePlanContact[];

  /** Technical endpoint */
  endpoint?: IReference<'Endpoint'>[];

  /** What networks are Included */
  network?: IReference<'Organization'>[];

  /** Coverage details */
  coverage?: IInsurancePlanCoverage[];

  /** Plan details */
  plan?: IInsurancePlanPlan[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlan>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlan from a JSON object
   */
  static fromJSON(json: IInsurancePlan): InsurancePlan {
    return new InsurancePlan(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlan with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlan>): InsurancePlan {
    return new InsurancePlan({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlan by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlan) => Partial<IInsurancePlan>): InsurancePlan {
    const currentData = this.toJSON();
    return new InsurancePlan({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlan)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlan {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_PROPERTIES);
    return result as IInsurancePlan;
  }

  /**
   * Create a deep clone of this InsurancePlan
   */
  clone(): InsurancePlan {
    return new InsurancePlan(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlan
   */
  toString(): string {
    const parts: string[] = ['InsurancePlan'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
