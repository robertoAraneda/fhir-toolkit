import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IExtendedContactDetail,
  IIdentifier,
  IOrganization,
  IOrganizationQualification,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Organization */
const ORGANIZATION_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'type',
  'name',
  '_name',
  'alias',
  '_alias',
  'description',
  '_description',
  'contact',
  'partOf',
  'endpoint',
  'qualification',
] as const;

/**
 * Organization - A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 *
 * @see https://hl7.org/fhir/R5/organization.html
 *
 * @example
 * const organization = new Organization({
 *   // ... properties
 * });
 */
export class Organization extends DomainResource implements IOrganization {
  readonly resourceType = 'Organization' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies this organization  across multiple systems */
  identifier?: IIdentifier[];

  /** Whether the organization's record is still in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** Kind of organization */
  type?: ICodeableConcept[];

  /** Name used for the organization */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** A list of alternate names that the organization is known as, or was known as in the past */
  alias?: string[];

  /** Extension for alias */
  _alias?: IElement;

  /** Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Official contact details for the Organization */
  contact?: IExtendedContactDetail[];

  /** The organization of which this organization forms a part */
  partOf?: IReference<'Organization'>;

  /** Technical endpoints providing access to services operated for the organization */
  endpoint?: IReference<'Endpoint'>[];

  /** Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care */
  qualification?: IOrganizationQualification[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IOrganization>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ORGANIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Organization from a JSON object
   */
  static fromJSON(json: IOrganization): Organization {
    return new Organization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Organization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOrganization>): Organization {
    return new Organization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Organization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOrganization) => Partial<IOrganization>): Organization {
    const currentData = this.toJSON();
    return new Organization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOrganization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOrganization {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ORGANIZATION_PROPERTIES);
    return result as IOrganization;
  }

  /**
   * Create a deep clone of this Organization
   */
  clone(): Organization {
    return new Organization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Organization
   */
  toString(): string {
    const parts: string[] = ['Organization'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
