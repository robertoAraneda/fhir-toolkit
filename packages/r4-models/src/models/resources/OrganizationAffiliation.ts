import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactPoint,
  IElement,
  IIdentifier,
  IOrganizationAffiliation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to OrganizationAffiliation */
const ORGANIZATION_AFFILIATION_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'period',
  'organization',
  'participatingOrganization',
  'network',
  'code',
  'specialty',
  'location',
  'healthcareService',
  'telecom',
  'endpoint',
] as const;

/**
 * OrganizationAffiliation - Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 *
 * @see https://hl7.org/fhir/R4/organizationaffiliation.html
 *
 * @example
 * const organizationAffiliation = new OrganizationAffiliation({
 *   // ... properties
 * });
 */
export class OrganizationAffiliation extends DomainResource implements IOrganizationAffiliation {
  readonly resourceType = 'OrganizationAffiliation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifiers that are specific to this role */
  identifier?: IIdentifier[];

  /** Whether this organization affiliation record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** The period during which the participatingOrganization is affiliated with the primary organization */
  period?: IPeriod;

  /** Organization where the role is available */
  organization?: IReference<'Organization'>;

  /** Organization that provides/performs the role (e.g. providing services or is a member of) */
  participatingOrganization?: IReference<'Organization'>;

  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) */
  network?: IReference<'Organization'>[];

  /** Definition of the role the participatingOrganization plays */
  code?: ICodeableConcept[];

  /** Specific specialty of the participatingOrganization in the context of the role */
  specialty?: ICodeableConcept[];

  /** The location(s) at which the role occurs */
  location?: IReference<'Location'>[];

  /** Healthcare services provided through the role */
  healthcareService?: IReference<'HealthcareService'>[];

  /** Contact details at the participatingOrganization relevant to this Affiliation */
  telecom?: IContactPoint[];

  /** Technical endpoints providing access to services operated for this role */
  endpoint?: IReference<'Endpoint'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IOrganizationAffiliation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ORGANIZATION_AFFILIATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OrganizationAffiliation from a JSON object
   */
  static fromJSON(json: IOrganizationAffiliation): OrganizationAffiliation {
    return new OrganizationAffiliation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OrganizationAffiliation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOrganizationAffiliation>): OrganizationAffiliation {
    return new OrganizationAffiliation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OrganizationAffiliation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOrganizationAffiliation) => Partial<IOrganizationAffiliation>): OrganizationAffiliation {
    const currentData = this.toJSON();
    return new OrganizationAffiliation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOrganizationAffiliation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOrganizationAffiliation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ORGANIZATION_AFFILIATION_PROPERTIES);
    return result as IOrganizationAffiliation;
  }

  /**
   * Create a deep clone of this OrganizationAffiliation
   */
  clone(): OrganizationAffiliation {
    return new OrganizationAffiliation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OrganizationAffiliation
   */
  toString(): string {
    const parts: string[] = ['OrganizationAffiliation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
