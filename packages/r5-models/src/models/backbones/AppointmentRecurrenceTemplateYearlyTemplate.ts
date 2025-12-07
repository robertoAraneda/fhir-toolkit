import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAppointmentRecurrenceTemplateYearlyTemplate,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AppointmentRecurrenceTemplateYearlyTemplate */
const APPOINTMENT_RECURRENCE_TEMPLATE_YEARLY_TEMPLATE_PROPERTIES = [
  'yearInterval',
  '_yearInterval',
] as const;

/**
 * AppointmentRecurrenceTemplateYearlyTemplate - Information about yearly recurring appointments
 *
 * @see https://hl7.org/fhir/R4/appointmentrecurrencetemplateyearlytemplate.html
 *
 * @example
 * const appointmentRecurrenceTemplateYearlyTemplate = new AppointmentRecurrenceTemplateYearlyTemplate({
 *   // ... properties
 * });
 */
export class AppointmentRecurrenceTemplateYearlyTemplate extends BackboneElement implements IAppointmentRecurrenceTemplateYearlyTemplate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Recurs every nth year */
  yearInterval: number;

  /** Extension for yearInterval */
  _yearInterval?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAppointmentRecurrenceTemplateYearlyTemplate>) {
    super(data);
    if (data) {
      this.assignProps(data, APPOINTMENT_RECURRENCE_TEMPLATE_YEARLY_TEMPLATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AppointmentRecurrenceTemplateYearlyTemplate from a JSON object
   */
  static fromJSON(json: IAppointmentRecurrenceTemplateYearlyTemplate): AppointmentRecurrenceTemplateYearlyTemplate {
    return new AppointmentRecurrenceTemplateYearlyTemplate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AppointmentRecurrenceTemplateYearlyTemplate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAppointmentRecurrenceTemplateYearlyTemplate>): AppointmentRecurrenceTemplateYearlyTemplate {
    return new AppointmentRecurrenceTemplateYearlyTemplate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AppointmentRecurrenceTemplateYearlyTemplate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAppointmentRecurrenceTemplateYearlyTemplate) => Partial<IAppointmentRecurrenceTemplateYearlyTemplate>): AppointmentRecurrenceTemplateYearlyTemplate {
    const currentData = this.toJSON();
    return new AppointmentRecurrenceTemplateYearlyTemplate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAppointmentRecurrenceTemplateYearlyTemplate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAppointmentRecurrenceTemplateYearlyTemplate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, APPOINTMENT_RECURRENCE_TEMPLATE_YEARLY_TEMPLATE_PROPERTIES);
    return result as IAppointmentRecurrenceTemplateYearlyTemplate;
  }

  /**
   * Create a deep clone of this AppointmentRecurrenceTemplateYearlyTemplate
   */
  clone(): AppointmentRecurrenceTemplateYearlyTemplate {
    return new AppointmentRecurrenceTemplateYearlyTemplate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AppointmentRecurrenceTemplateYearlyTemplate
   */
  toString(): string {
    const parts: string[] = ['AppointmentRecurrenceTemplateYearlyTemplate'];
    return parts.join(', ');
  }
}
