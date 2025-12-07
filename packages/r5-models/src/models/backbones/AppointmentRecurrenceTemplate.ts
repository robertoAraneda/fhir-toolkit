import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAppointmentRecurrenceTemplate,
  IAppointmentRecurrenceTemplateMonthlyTemplate,
  IAppointmentRecurrenceTemplateWeeklyTemplate,
  IAppointmentRecurrenceTemplateYearlyTemplate,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AppointmentRecurrenceTemplate */
const APPOINTMENT_RECURRENCE_TEMPLATE_PROPERTIES = [
  'timezone',
  'recurrenceType',
  'lastOccurrenceDate',
  '_lastOccurrenceDate',
  'occurrenceCount',
  '_occurrenceCount',
  'occurrenceDate',
  '_occurrenceDate',
  'weeklyTemplate',
  'monthlyTemplate',
  'yearlyTemplate',
  'excludingDate',
  '_excludingDate',
  'excludingRecurrenceId',
  '_excludingRecurrenceId',
] as const;

/**
 * AppointmentRecurrenceTemplate - Details of the recurrence pattern/template used to generate occurrences
 *
 * @see https://hl7.org/fhir/R4/appointmentrecurrencetemplate.html
 *
 * @example
 * const appointmentRecurrenceTemplate = new AppointmentRecurrenceTemplate({
 *   // ... properties
 * });
 */
export class AppointmentRecurrenceTemplate extends BackboneElement implements IAppointmentRecurrenceTemplate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The timezone of the occurrences */
  timezone?: ICodeableConcept;

  /** The frequency of the recurrence */
  recurrenceType: ICodeableConcept;

  /** The date when the recurrence should end */
  lastOccurrenceDate?: string;

  /** Extension for lastOccurrenceDate */
  _lastOccurrenceDate?: IElement;

  /** The number of planned occurrences */
  occurrenceCount?: number;

  /** Extension for occurrenceCount */
  _occurrenceCount?: IElement;

  /** Specific dates for a recurring set of appointments (no template) */
  occurrenceDate?: string[];

  /** Extension for occurrenceDate */
  _occurrenceDate?: IElement;

  /** Information about weekly recurring appointments */
  weeklyTemplate?: IAppointmentRecurrenceTemplateWeeklyTemplate;

  /** Information about monthly recurring appointments */
  monthlyTemplate?: IAppointmentRecurrenceTemplateMonthlyTemplate;

  /** Information about yearly recurring appointments */
  yearlyTemplate?: IAppointmentRecurrenceTemplateYearlyTemplate;

  /** Any dates that should be excluded from the series */
  excludingDate?: string[];

  /** Extension for excludingDate */
  _excludingDate?: IElement;

  /** Any recurrence IDs that should be excluded from the recurrence */
  excludingRecurrenceId?: number[];

  /** Extension for excludingRecurrenceId */
  _excludingRecurrenceId?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointmentRecurrenceTemplate>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_RECURRENCE_TEMPLATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AppointmentRecurrenceTemplate from a JSON object
   */
  static fromJSON(json: IAppointmentRecurrenceTemplate): AppointmentRecurrenceTemplate {
    return new AppointmentRecurrenceTemplate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AppointmentRecurrenceTemplate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointmentRecurrenceTemplate>): AppointmentRecurrenceTemplate {
    return new AppointmentRecurrenceTemplate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AppointmentRecurrenceTemplate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointmentRecurrenceTemplate) => Partial<IAppointmentRecurrenceTemplate>): AppointmentRecurrenceTemplate {
    const currentData = this.toJSON();
    return new AppointmentRecurrenceTemplate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointmentRecurrenceTemplate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointmentRecurrenceTemplate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, APPOINTMENT_RECURRENCE_TEMPLATE_PROPERTIES);
    return result as IAppointmentRecurrenceTemplate;
  }

  /**
   * Create a deep clone of this AppointmentRecurrenceTemplate
   */
  clone(): AppointmentRecurrenceTemplate {
    return new AppointmentRecurrenceTemplate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AppointmentRecurrenceTemplate
   */
  toString(): string {
    const parts: string[] = ['AppointmentRecurrenceTemplate'];
    return parts.join(', ');
  }
}
