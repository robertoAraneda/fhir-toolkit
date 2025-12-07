import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DaysOfWeekType,
  IAppointmentRecurrenceTemplateMonthlyTemplate,
  ICoding,
  IElement,
  WeekOfMonthType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AppointmentRecurrenceTemplateMonthlyTemplate */
const APPOINTMENT_RECURRENCE_TEMPLATE_MONTHLY_TEMPLATE_PROPERTIES = [
  'dayOfMonth',
  '_dayOfMonth',
  'nthWeekOfMonth',
  'dayOfWeek',
  'monthInterval',
  '_monthInterval',
] as const;

/**
 * AppointmentRecurrenceTemplateMonthlyTemplate - Information about monthly recurring appointments
 *
 * @see https://hl7.org/fhir/R4/appointmentrecurrencetemplatemonthlytemplate.html
 *
 * @example
 * const appointmentRecurrenceTemplateMonthlyTemplate = new AppointmentRecurrenceTemplateMonthlyTemplate({
 *   // ... properties
 * });
 */
export class AppointmentRecurrenceTemplateMonthlyTemplate extends BackboneElement implements IAppointmentRecurrenceTemplateMonthlyTemplate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Recurs on a specific day of the month */
  dayOfMonth?: number;

  /** Extension for dayOfMonth */
  _dayOfMonth?: IElement;

  /** Indicates which week of the month the appointment should occur */
  nthWeekOfMonth?: ICoding;

  /** Indicates which day of the week the appointment should occur */
  dayOfWeek?: ICoding;

  /** Recurs every nth month */
  monthInterval: number;

  /** Extension for monthInterval */
  _monthInterval?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointmentRecurrenceTemplateMonthlyTemplate>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_RECURRENCE_TEMPLATE_MONTHLY_TEMPLATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AppointmentRecurrenceTemplateMonthlyTemplate from a JSON object
   */
  static fromJSON(json: IAppointmentRecurrenceTemplateMonthlyTemplate): AppointmentRecurrenceTemplateMonthlyTemplate {
    return new AppointmentRecurrenceTemplateMonthlyTemplate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AppointmentRecurrenceTemplateMonthlyTemplate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointmentRecurrenceTemplateMonthlyTemplate>): AppointmentRecurrenceTemplateMonthlyTemplate {
    return new AppointmentRecurrenceTemplateMonthlyTemplate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AppointmentRecurrenceTemplateMonthlyTemplate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointmentRecurrenceTemplateMonthlyTemplate) => Partial<IAppointmentRecurrenceTemplateMonthlyTemplate>): AppointmentRecurrenceTemplateMonthlyTemplate {
    const currentData = this.toJSON();
    return new AppointmentRecurrenceTemplateMonthlyTemplate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointmentRecurrenceTemplateMonthlyTemplate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointmentRecurrenceTemplateMonthlyTemplate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, APPOINTMENT_RECURRENCE_TEMPLATE_MONTHLY_TEMPLATE_PROPERTIES);
    return result as IAppointmentRecurrenceTemplateMonthlyTemplate;
  }

  /**
   * Create a deep clone of this AppointmentRecurrenceTemplateMonthlyTemplate
   */
  clone(): AppointmentRecurrenceTemplateMonthlyTemplate {
    return new AppointmentRecurrenceTemplateMonthlyTemplate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AppointmentRecurrenceTemplateMonthlyTemplate
   */
  toString(): string {
    const parts: string[] = ['AppointmentRecurrenceTemplateMonthlyTemplate'];
    return parts.join(', ');
  }
}
