import { DomainResource } from '../base/DomainResource.js';
import type {
  IAppointmentResponse,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
  ParticipationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to AppointmentResponse */
const APPOINTMENT_RESPONSE_PROPERTIES = [
  'identifier',
  'appointment',
  'start',
  '_start',
  'end',
  '_end',
  'participantType',
  'actor',
  'participantStatus',
  '_participantStatus',
  'comment',
  '_comment',
] as const;

/**
 * AppointmentResponse - A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 *
 * @see https://hl7.org/fhir/R4/appointmentresponse.html
 *
 * @example
 * const appointmentResponse = new AppointmentResponse({
 *   resourceType: 'AppointmentResponse',
 *   // ... properties
 * });
 */
export class AppointmentResponse extends DomainResource implements IAppointmentResponse {
  readonly resourceType = 'AppointmentResponse' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this item */
  identifier?: IIdentifier[];

  /** Appointment this response relates to */
  appointment: IReference<'Appointment'>;

  /** Time from appointment, or requested new start time */
  start?: string;

  /** Extension for start */
  _start?: IElement;

  /** Time from appointment, or requested new end time */
  end?: string;

  /** Extension for end */
  _end?: IElement;

  /** Role of participant in the appointment */
  participantType?: ICodeableConcept[];

  /** Person, Location, HealthcareService, or Device */
  actor?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /** accepted | declined | tentative | needs-action */
  participantStatus: ParticipationStatusType;

  /** Extension for participantStatus */
  _participantStatus?: IElement;

  /** Additional comments */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointmentResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AppointmentResponse from a JSON object
   */
  static fromJSON(json: IAppointmentResponse): AppointmentResponse {
    return new AppointmentResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AppointmentResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointmentResponse>): AppointmentResponse {
    return new AppointmentResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AppointmentResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointmentResponse) => Partial<IAppointmentResponse>): AppointmentResponse {
    const currentData = this.toJSON();
    return new AppointmentResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointmentResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointmentResponse {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, APPOINTMENT_RESPONSE_PROPERTIES);
    return result as IAppointmentResponse;
  }

  /**
   * Create a deep clone of this AppointmentResponse
   */
  clone(): AppointmentResponse {
    return new AppointmentResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AppointmentResponse
   */
  toString(): string {
    const parts: string[] = ['AppointmentResponse'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
