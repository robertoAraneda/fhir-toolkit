import { DomainResource } from '../base/DomainResource.js';
import type {
  IAvailability,
  ICodeableConcept,
  IElement,
  IExtendedContactDetail,
  IIdentifier,
  IPeriod,
  IPractitionerRole,
  IReference,
} from '@fhir-toolkit/r5-types';

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
  'contact',
  'characteristic',
  'communication',
  'availability',
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

  /** Identifiers for a role/location */
  identifier?: IIdentifier[];

  /** Whether this practitioner role record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** The period during which the practitioner is authorized to perform in these role(s) */
  period?: IPeriod;

  /** Practitioner that provides services for the organization */
  practitioner?: IReference<'Practitioner'>;

  /** Organization where the roles are available */
  organization?: IReference<'Organization'>;

  /** Roles which this practitioner may perform */
  code?: ICodeableConcept[];

  /** Specific specialty of the practitioner */
  specialty?: ICodeableConcept[];

  /** Location(s) where the practitioner provides care */
  location?: IReference<'Location'>[];

  /** Healthcare services provided for this role's Organization/Location(s) */
  healthcareService?: IReference<'HealthcareService'>[];

  /** Official contact details relating to this PractitionerRole */
  contact?: IExtendedContactDetail[];

  /** Collection of characteristics (attributes) */
  characteristic?: ICodeableConcept[];

  /** A language the practitioner (in this role) can use in patient communication */
  communication?: ICodeableConcept[];

  /** Times the Practitioner is available at this location and/or healthcare service (including exceptions) */
  availability?: IAvailability[];

  /** Endpoints for interacting with the practitioner in this role */
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
