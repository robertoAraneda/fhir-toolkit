import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRegulatedAuthorization,
  IRegulatedAuthorizationCase,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RegulatedAuthorization */
const REGULATED_AUTHORIZATION_PROPERTIES = [
  'identifier',
  'subject',
  'type',
  'description',
  '_description',
  'region',
  'status',
  'statusDate',
  '_statusDate',
  'validityPeriod',
  'indication',
  'intendedUse',
  'basis',
  'holder',
  'regulator',
  'case',
] as const;

/**
 * RegulatedAuthorization - Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 *
 * @see https://hl7.org/fhir/R4/regulatedauthorization.html
 *
 * @example
 * const regulatedAuthorization = new RegulatedAuthorization({
 *   resourceType: 'RegulatedAuthorization',
 *   // ... properties
 * });
 */
export class RegulatedAuthorization extends DomainResource implements IRegulatedAuthorization {
  readonly resourceType = 'RegulatedAuthorization' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for the authorization, typically assigned by the authorizing body */
  identifier?: IIdentifier[];

  /** The product type, treatment, facility or activity that is being authorized */
  subject?: IReference<'MedicinalProductDefinition' | 'BiologicallyDerivedProduct' | 'NutritionProduct' | 'PackagedProductDefinition' | 'SubstanceDefinition' | 'DeviceDefinition' | 'ResearchStudy' | 'ActivityDefinition' | 'PlanDefinition' | 'ObservationDefinition' | 'Practitioner' | 'Organization' | 'Location'>[];

  /** Overall type of this authorization, for example drug marketing approval, orphan drug designation */
  type?: ICodeableConcept;

  /** General textual supporting information */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The territory in which the authorization has been granted */
  region?: ICodeableConcept[];

  /** The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications */
  status?: ICodeableConcept;

  /** The date at which the current status was assigned */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date */
  validityPeriod?: IPeriod;

  /** Condition for which the use of the regulated product applies */
  indication?: ICodeableReference;

  /** The intended use of the product, e.g. prevention, treatment */
  intendedUse?: ICodeableConcept;

  /** The legal/regulatory framework or reasons under which this authorization is granted */
  basis?: ICodeableConcept[];

  /** The organization that has been granted this authorization, by the regulator */
  holder?: IReference<'Organization'>;

  /** The regulatory authority or authorizing body granting the authorization */
  regulator?: IReference<'Organization'>;

  /** The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page) */
  case?: IRegulatedAuthorizationCase;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRegulatedAuthorization>) {
    super(data);
    if (data) {
      this.assignProps(data, REGULATED_AUTHORIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RegulatedAuthorization from a JSON object
   */
  static fromJSON(json: IRegulatedAuthorization): RegulatedAuthorization {
    return new RegulatedAuthorization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RegulatedAuthorization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRegulatedAuthorization>): RegulatedAuthorization {
    return new RegulatedAuthorization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RegulatedAuthorization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRegulatedAuthorization) => Partial<IRegulatedAuthorization>): RegulatedAuthorization {
    const currentData = this.toJSON();
    return new RegulatedAuthorization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRegulatedAuthorization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRegulatedAuthorization {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, REGULATED_AUTHORIZATION_PROPERTIES);
    return result as IRegulatedAuthorization;
  }

  /**
   * Create a deep clone of this RegulatedAuthorization
   */
  clone(): RegulatedAuthorization {
    return new RegulatedAuthorization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RegulatedAuthorization
   */
  toString(): string {
    const parts: string[] = ['RegulatedAuthorization'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
