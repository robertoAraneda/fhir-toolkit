import { DomainResource } from '../base/DomainResource.js';
import type {
  AppointmentStatusType,
  IAnnotation,
  IAppointment,
  IAppointmentParticipant,
  IAppointmentRecurrenceTemplate,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IVirtualServiceDetail,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Appointment */
const APPOINTMENT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'cancellationReason',
  'class',
  'serviceCategory',
  'serviceType',
  'specialty',
  'appointmentType',
  'reason',
  'priority',
  'description',
  '_description',
  'replaces',
  'virtualService',
  'supportingInformation',
  'previousAppointment',
  'originatingAppointment',
  'start',
  '_start',
  'end',
  '_end',
  'minutesDuration',
  '_minutesDuration',
  'requestedPeriod',
  'slot',
  'account',
  'created',
  '_created',
  'cancellationDate',
  '_cancellationDate',
  'note',
  'patientInstruction',
  'basedOn',
  'subject',
  'participant',
  'recurrenceId',
  '_recurrenceId',
  'occurrenceChanged',
  '_occurrenceChanged',
  'recurrenceTemplate',
] as const;

/**
 * Appointment - A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 *
 * @see https://hl7.org/fhir/R4/appointment.html
 *
 * @example
 * const appointment = new Appointment({
 *   resourceType: 'Appointment',
 *   // ... properties
 * });
 */
export class Appointment extends DomainResource implements IAppointment {
  readonly resourceType = 'Appointment' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this item */
  identifier?: IIdentifier[];

  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
  status: AppointmentStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The coded reason for the appointment being cancelled */
  cancellationReason?: ICodeableConcept;

  /** Classification when becoming an encounter */
  class?: ICodeableConcept[];

  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: ICodeableConcept[];

  /** The specific service that is to be performed during this appointment */
  serviceType?: ICodeableReference[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: ICodeableConcept[];

  /** The style of appointment or patient that has been booked in the slot (not service type) */
  appointmentType?: ICodeableConcept;

  /** Reason this appointment is scheduled */
  reason?: ICodeableReference[];

  /** Used to make informed decisions if needing to re-prioritize */
  priority?: ICodeableConcept;

  /** Shown on a subject line in a meeting request, or appointment list */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Appointment replaced by this Appointment */
  replaces?: IReference<'Appointment'>[];

  /** Connection details of a virtual service (e.g. conference call) */
  virtualService?: IVirtualServiceDetail[];

  /** Additional information to support the appointment */
  supportingInformation?: IReference<'Resource'>[];

  /** The previous appointment in a series */
  previousAppointment?: IReference<'Appointment'>;

  /** The originating appointment in a recurring set of appointments */
  originatingAppointment?: IReference<'Appointment'>;

  /** When appointment is to take place */
  start?: string;

  /** Extension for start */
  _start?: IElement;

  /** When appointment is to conclude */
  end?: string;

  /** Extension for end */
  _end?: IElement;

  /** Can be less than start/end (e.g. estimate) */
  minutesDuration?: number;

  /** Extension for minutesDuration */
  _minutesDuration?: IElement;

  /** Potential date/time interval(s) requested to allocate the appointment within */
  requestedPeriod?: IPeriod[];

  /** The slots that this appointment is filling */
  slot?: IReference<'Slot'>[];

  /** The set of accounts that may be used for billing for this Appointment */
  account?: IReference<'Account'>[];

  /** The date that this appointment was initially created */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** When the appointment was cancelled */
  cancellationDate?: string;

  /** Extension for cancellationDate */
  _cancellationDate?: IElement;

  /** Additional comments */
  note?: IAnnotation[];

  /** Detailed information and instructions for the patient */
  patientInstruction?: ICodeableReference[];

  /** The request this appointment is allocated to assess */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'MedicationRequest' | 'ServiceRequest'>[];

  /** The patient or group associated with the appointment */
  subject?: IReference<'Patient' | 'Group'>;

  /** Participants involved in appointment */
  participant: IAppointmentParticipant[];

  /** The sequence number in the recurrence */
  recurrenceId?: number;

  /** Extension for recurrenceId */
  _recurrenceId?: IElement;

  /** Indicates that this appointment varies from a recurrence pattern */
  occurrenceChanged?: boolean;

  /** Extension for occurrenceChanged */
  _occurrenceChanged?: IElement;

  /** Details of the recurrence pattern/template used to generate occurrences */
  recurrenceTemplate?: IAppointmentRecurrenceTemplate[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointment>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Appointment from a JSON object
   */
  static fromJSON(json: IAppointment): Appointment {
    return new Appointment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Appointment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointment>): Appointment {
    return new Appointment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Appointment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointment) => Partial<IAppointment>): Appointment {
    const currentData = this.toJSON();
    return new Appointment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointment {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, APPOINTMENT_PROPERTIES);
    return result as IAppointment;
  }

  /**
   * Create a deep clone of this Appointment
   */
  clone(): Appointment {
    return new Appointment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Appointment
   */
  toString(): string {
    const parts: string[] = ['Appointment'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
