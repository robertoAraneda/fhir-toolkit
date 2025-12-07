import { DomainResource } from '../base/DomainResource.js';
import type {
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHealthcareService,
  IHealthcareServiceAvailableTime,
  IHealthcareServiceEligibility,
  IHealthcareServiceNotAvailable,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to HealthcareService */
const HEALTHCARE_SERVICE_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'providedBy',
  'category',
  'type',
  'specialty',
  'location',
  'name',
  '_name',
  'comment',
  '_comment',
  'extraDetails',
  '_extraDetails',
  'photo',
  'telecom',
  'coverageArea',
  'serviceProvisionCode',
  'eligibility',
  'program',
  'characteristic',
  'communication',
  'referralMethod',
  'appointmentRequired',
  '_appointmentRequired',
  'availableTime',
  'notAvailable',
  'availabilityExceptions',
  '_availabilityExceptions',
  'endpoint',
] as const;

/**
 * HealthcareService - The details of a healthcare service available at a location.
 *
 * @see https://hl7.org/fhir/R4/healthcareservice.html
 *
 * @example
 * const healthcareService = new HealthcareService({
 *   // ... properties
 * });
 */
export class HealthcareService extends DomainResource implements IHealthcareService {
  readonly resourceType = 'HealthcareService' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifiers for this item */
  identifier?: IIdentifier[];

  /** Whether this HealthcareService record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** Organization that provides this service */
  providedBy?: IReference<'Organization'>;

  /** Broad category of service being performed or delivered */
  category?: ICodeableConcept[];

  /** Type of service that may be delivered or performed */
  type?: ICodeableConcept[];

  /** Specialties handled by the HealthcareService */
  specialty?: ICodeableConcept[];

  /** Location(s) where service may be provided */
  location?: IReference<'Location'>[];

  /** Description of service as presented to a consumer while searching */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Additional description and/or any specific issues not covered elsewhere */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Extra details about the service that can't be placed in the other fields */
  extraDetails?: string;

  /** Extension for extraDetails */
  _extraDetails?: IElement;

  /** Facilitates quick identification of the service */
  photo?: IAttachment;

  /** Contacts related to the healthcare service */
  telecom?: IContactPoint[];

  /** Location(s) service is intended for/available to */
  coverageArea?: IReference<'Location'>[];

  /** Conditions under which service is available/offered */
  serviceProvisionCode?: ICodeableConcept[];

  /** Specific eligibility requirements required to use the service */
  eligibility?: IHealthcareServiceEligibility[];

  /** Programs that this service is applicable to */
  program?: ICodeableConcept[];

  /** Collection of characteristics (attributes) */
  characteristic?: ICodeableConcept[];

  /** The language that this service is offered in */
  communication?: ICodeableConcept[];

  /** Ways that the service accepts referrals */
  referralMethod?: ICodeableConcept[];

  /** If an appointment is required for access to this service */
  appointmentRequired?: boolean;

  /** Extension for appointmentRequired */
  _appointmentRequired?: IElement;

  /** Times the Service Site is available */
  availableTime?: IHealthcareServiceAvailableTime[];

  /** Not available during this time due to provided reason */
  notAvailable?: IHealthcareServiceNotAvailable[];

  /** Description of availability exceptions */
  availabilityExceptions?: string;

  /** Extension for availabilityExceptions */
  _availabilityExceptions?: IElement;

  /** Technical endpoints providing access to electronic services operated for the healthcare service */
  endpoint?: IReference<'Endpoint'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IHealthcareService>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, HEALTHCARE_SERVICE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create HealthcareService from a JSON object
   */
  static fromJSON(json: IHealthcareService): HealthcareService {
    return new HealthcareService(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new HealthcareService with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IHealthcareService>): HealthcareService {
    return new HealthcareService({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new HealthcareService by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IHealthcareService) => Partial<IHealthcareService>): HealthcareService {
    const currentData = this.toJSON();
    return new HealthcareService({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IHealthcareService)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IHealthcareService {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, HEALTHCARE_SERVICE_PROPERTIES);
    return result as IHealthcareService;
  }

  /**
   * Create a deep clone of this HealthcareService
   */
  clone(): HealthcareService {
    return new HealthcareService(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the HealthcareService
   */
  toString(): string {
    const parts: string[] = ['HealthcareService'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
