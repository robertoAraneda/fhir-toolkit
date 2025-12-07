import { DomainResource } from '../base/DomainResource.js';
import type {
  AppointmentStatusType,
  IAppointment,
  IAppointmentParticipant,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Appointment */
const APPOINTMENT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'cancelationReason',
  'serviceCategory',
  'serviceType',
  'specialty',
  'appointmentType',
  'reasonCode',
  'reasonReference',
  'priority',
  '_priority',
  'description',
  '_description',
  'supportingInformation',
  'start',
  '_start',
  'end',
  '_end',
  'minutesDuration',
  '_minutesDuration',
  'slot',
  'created',
  '_created',
  'comment',
  '_comment',
  'patientInstruction',
  '_patientInstruction',
  'basedOn',
  'participant',
  'requestedPeriod',
] as const;

/**
 * Appointment - A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 *
 * @see https://hl7.org/fhir/R4/appointment.html
 *
 * @example
 * const appointment = new Appointment({
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
  cancelationReason?: ICodeableConcept;

  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: ICodeableConcept[];

  /** The specific service that is to be performed during this appointment */
  serviceType?: ICodeableConcept[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: ICodeableConcept[];

  /** The style of appointment or patient that has been booked in the slot (not service type) */
  appointmentType?: ICodeableConcept;

  /** Coded reason this appointment is scheduled */
  reasonCode?: ICodeableConcept[];

  /** Reason the appointment is to take place (resource) */
  reasonReference?: IReference<'Condition' | 'Procedure' | 'Observation' | 'ImmunizationRecommendation'>[];

  /** Used to make informed decisions if needing to re-prioritize */
  priority?: number;

  /** Extension for priority */
  _priority?: IElement;

  /** Shown on a subject line in a meeting request, or appointment list */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Additional information to support the appointment */
  supportingInformation?: IReference<'Resource'>[];

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

  /** The slots that this appointment is filling */
  slot?: IReference<'Slot'>[];

  /** The date that this appointment was initially created */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** Additional comments */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Detailed information and instructions for the patient */
  patientInstruction?: string;

  /** Extension for patientInstruction */
  _patientInstruction?: IElement;

  /** The service request this appointment is allocated to assess */
  basedOn?: IReference<'ServiceRequest'>[];

  /** Participants involved in appointment */
  participant: IAppointmentParticipant[];

  /** Potential date/time interval(s) requested to allocate the appointment within */
  requestedPeriod?: IPeriod[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IAppointment>, 'resourceType'>) {
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
