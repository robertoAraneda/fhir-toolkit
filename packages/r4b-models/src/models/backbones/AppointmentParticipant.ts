import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAppointmentParticipant,
  ICodeableConcept,
  IElement,
  IPeriod,
  IReference,
  ParticipantRequiredType,
  ParticipationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AppointmentParticipant */
const APPOINTMENT_PARTICIPANT_PROPERTIES = [
  'type',
  'actor',
  'required',
  '_required',
  'status',
  '_status',
  'period',
] as const;

/**
 * AppointmentParticipant - Participants involved in appointment
 *
 * @see https://hl7.org/fhir/R4B/appointmentparticipant.html
 *
 * @example
 * const appointmentParticipant = new AppointmentParticipant({
 *   // ... properties
 * });
 */
export class AppointmentParticipant extends BackboneElement implements IAppointmentParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Role of participant in the appointment */
  type?: ICodeableConcept[];

  /** Person, Location/HealthcareService or Device */
  actor?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /** required | optional | information-only */
  required?: ParticipantRequiredType;

  /** Extension for required */
  _required?: IElement;

  /** accepted | declined | tentative | needs-action */
  status: ParticipationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Participation period of the actor */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointmentParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AppointmentParticipant from a JSON object
   */
  static fromJSON(json: IAppointmentParticipant): AppointmentParticipant {
    return new AppointmentParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AppointmentParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointmentParticipant>): AppointmentParticipant {
    return new AppointmentParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AppointmentParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointmentParticipant) => Partial<IAppointmentParticipant>): AppointmentParticipant {
    const currentData = this.toJSON();
    return new AppointmentParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointmentParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointmentParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, APPOINTMENT_PARTICIPANT_PROPERTIES);
    return result as IAppointmentParticipant;
  }

  /**
   * Create a deep clone of this AppointmentParticipant
   */
  clone(): AppointmentParticipant {
    return new AppointmentParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AppointmentParticipant
   */
  toString(): string {
    const parts: string[] = ['AppointmentParticipant'];
    return parts.join(', ');
  }
}
