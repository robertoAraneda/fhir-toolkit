import { DomainResource } from '../base/DomainResource.js';
import type {
  AppointmentResponseStatusType,
  IAppointmentResponse,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AppointmentResponse */
const APPOINTMENT_RESPONSE_PROPERTIES = [
  'identifier',
  'appointment',
  'proposedNewTime',
  '_proposedNewTime',
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
  'recurring',
  '_recurring',
  'occurrenceDate',
  '_occurrenceDate',
  'recurrenceId',
  '_recurrenceId',
] as const;

/**
 * AppointmentResponse - A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 *
 * @see https://hl7.org/fhir/R5/appointmentresponse.html
 *
 * @example
 * const appointmentResponse = new AppointmentResponse({
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

  /** Indicator for a counter proposal */
  proposedNewTime?: boolean;

  /** Extension for proposedNewTime */
  _proposedNewTime?: IElement;

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

  /** Person(s), Location, HealthcareService, or Device */
  actor?: IReference<'Patient' | 'Group' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /** accepted | declined | tentative | needs-action | entered-in-error */
  participantStatus: AppointmentResponseStatusType;

  /** Extension for participantStatus */
  _participantStatus?: IElement;

  /** Additional comments */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** This response is for all occurrences in a recurring request */
  recurring?: boolean;

  /** Extension for recurring */
  _recurring?: IElement;

  /** Original date within a recurring request */
  occurrenceDate?: string;

  /** Extension for occurrenceDate */
  _occurrenceDate?: IElement;

  /** The recurrence ID of the specific recurring request */
  recurrenceId?: number;

  /** Extension for recurrenceId */
  _recurrenceId?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IAppointmentResponse>, 'resourceType'>) {
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
