import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAppointmentRecurrenceTemplateWeeklyTemplate,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AppointmentRecurrenceTemplateWeeklyTemplate */
const APPOINTMENT_RECURRENCE_TEMPLATE_WEEKLY_TEMPLATE_PROPERTIES = [
  'monday',
  '_monday',
  'tuesday',
  '_tuesday',
  'wednesday',
  '_wednesday',
  'thursday',
  '_thursday',
  'friday',
  '_friday',
  'saturday',
  '_saturday',
  'sunday',
  '_sunday',
  'weekInterval',
  '_weekInterval',
] as const;

/**
 * AppointmentRecurrenceTemplateWeeklyTemplate - Information about weekly recurring appointments
 *
 * @see https://hl7.org/fhir/R5/appointmentrecurrencetemplateweeklytemplate.html
 *
 * @example
 * const appointmentRecurrenceTemplateWeeklyTemplate = new AppointmentRecurrenceTemplateWeeklyTemplate({
 *   // ... properties
 * });
 */
export class AppointmentRecurrenceTemplateWeeklyTemplate extends BackboneElement implements IAppointmentRecurrenceTemplateWeeklyTemplate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Recurs on Mondays */
  monday?: boolean;

  /** Extension for monday */
  _monday?: IElement;

  /** Recurs on Tuesday */
  tuesday?: boolean;

  /** Extension for tuesday */
  _tuesday?: IElement;

  /** Recurs on Wednesday */
  wednesday?: boolean;

  /** Extension for wednesday */
  _wednesday?: IElement;

  /** Recurs on Thursday */
  thursday?: boolean;

  /** Extension for thursday */
  _thursday?: IElement;

  /** Recurs on Friday */
  friday?: boolean;

  /** Extension for friday */
  _friday?: IElement;

  /** Recurs on Saturday */
  saturday?: boolean;

  /** Extension for saturday */
  _saturday?: IElement;

  /** Recurs on Sunday */
  sunday?: boolean;

  /** Extension for sunday */
  _sunday?: IElement;

  /** Recurs every nth week */
  weekInterval?: number;

  /** Extension for weekInterval */
  _weekInterval?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointmentRecurrenceTemplateWeeklyTemplate>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_RECURRENCE_TEMPLATE_WEEKLY_TEMPLATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AppointmentRecurrenceTemplateWeeklyTemplate from a JSON object
   */
  static fromJSON(json: IAppointmentRecurrenceTemplateWeeklyTemplate): AppointmentRecurrenceTemplateWeeklyTemplate {
    return new AppointmentRecurrenceTemplateWeeklyTemplate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AppointmentRecurrenceTemplateWeeklyTemplate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointmentRecurrenceTemplateWeeklyTemplate>): AppointmentRecurrenceTemplateWeeklyTemplate {
    return new AppointmentRecurrenceTemplateWeeklyTemplate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AppointmentRecurrenceTemplateWeeklyTemplate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointmentRecurrenceTemplateWeeklyTemplate) => Partial<IAppointmentRecurrenceTemplateWeeklyTemplate>): AppointmentRecurrenceTemplateWeeklyTemplate {
    const currentData = this.toJSON();
    return new AppointmentRecurrenceTemplateWeeklyTemplate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointmentRecurrenceTemplateWeeklyTemplate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointmentRecurrenceTemplateWeeklyTemplate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, APPOINTMENT_RECURRENCE_TEMPLATE_WEEKLY_TEMPLATE_PROPERTIES);
    return result as IAppointmentRecurrenceTemplateWeeklyTemplate;
  }

  /**
   * Create a deep clone of this AppointmentRecurrenceTemplateWeeklyTemplate
   */
  clone(): AppointmentRecurrenceTemplateWeeklyTemplate {
    return new AppointmentRecurrenceTemplateWeeklyTemplate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AppointmentRecurrenceTemplateWeeklyTemplate
   */
  toString(): string {
    const parts: string[] = ['AppointmentRecurrenceTemplateWeeklyTemplate'];
    return parts.join(', ');
  }
}
