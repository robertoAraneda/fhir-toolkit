import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactPoint,
  IElement,
  IIdentifier,
  IPeriod,
  IPractitionerRole,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to PractitionerRole */
const PRACTITIONER_ROLE_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'period',
  'practitioner',
  'organization',
  'code',
  'specialty',
  'location',
  'healthcareService',
  'telecom',
  'availableTime',
  'notAvailable',
  'availabilityExceptions',
  '_availabilityExceptions',
  'endpoint',
] as const;

/**
 * PractitionerRole - A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 *
 * @see https://hl7.org/fhir/R4/practitionerrole.html
 *
 * @example
 * const practitionerRole = new PractitionerRole({
 *   resourceType: 'PractitionerRole',
 *   // ... properties
 * });
 */
export class PractitionerRole extends DomainResource implements IPractitionerRole {
  readonly resourceType = 'PractitionerRole' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifiers that are specific to a role/location */
  identifier?: IIdentifier[];

  /** Whether this practitioner role record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** The period during which the practitioner is authorized to perform in these role(s) */
  period?: IPeriod;

  /** Practitioner that is able to provide the defined services for the organization */
  practitioner?: IReference<'Practitioner'>;

  /** Organization where the roles are available */
  organization?: IReference<'Organization'>;

  /** Roles which this practitioner may perform */
  code?: ICodeableConcept[];

  /** Specific specialty of the practitioner */
  specialty?: ICodeableConcept[];

  /** The location(s) at which this practitioner provides care */
  location?: IReference<'Location'>[];

  /** The list of healthcare services that this worker provides for this role's Organization/Location(s) */
  healthcareService?: IReference<'HealthcareService'>[];

  /** Contact details that are specific to the role/location/service */
  telecom?: IContactPoint[];

  /** Times the Service Site is available */
  availableTime?: IPractitionerRoleAvailableTime[];

  /** Not available during this time due to provided reason */
  notAvailable?: IPractitionerRoleNotAvailable[];

  /** Description of availability exceptions */
  availabilityExceptions?: string;

  /** Extension for availabilityExceptions */
  _availabilityExceptions?: IElement;

  /** Technical endpoints providing access to services operated for the practitioner with this role */
  endpoint?: IReference<'Endpoint'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPractitionerRole>) {
    super(data);
    if (data) {
      this.assignProps(data, PRACTITIONER_ROLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PractitionerRole from a JSON object
   */
  static fromJSON(json: IPractitionerRole): PractitionerRole {
    return new PractitionerRole(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PractitionerRole with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPractitionerRole>): PractitionerRole {
    return new PractitionerRole({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PractitionerRole by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPractitionerRole) => Partial<IPractitionerRole>): PractitionerRole {
    const currentData = this.toJSON();
    return new PractitionerRole({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPractitionerRole)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPractitionerRole {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PRACTITIONER_ROLE_PROPERTIES);
    return result as IPractitionerRole;
  }

  /**
   * Create a deep clone of this PractitionerRole
   */
  clone(): PractitionerRole {
    return new PractitionerRole(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PractitionerRole
   */
  toString(): string {
    const parts: string[] = ['PractitionerRole'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
