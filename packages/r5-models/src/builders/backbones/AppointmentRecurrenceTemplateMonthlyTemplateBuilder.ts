import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AppointmentRecurrenceTemplateMonthlyTemplate } from '../../models/backbones/AppointmentRecurrenceTemplateMonthlyTemplate.js';
import type {
  DaysOfWeekType,
  IAppointmentRecurrenceTemplateMonthlyTemplate,
  ICoding,
  WeekOfMonthType,
} from '@fhir-toolkit/r5-types';

/**
 * AppointmentRecurrenceTemplateMonthlyTemplateBuilder - Fluent builder for AppointmentRecurrenceTemplateMonthlyTemplate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointmentRecurrenceTemplateMonthlyTemplate = new AppointmentRecurrenceTemplateMonthlyTemplateBuilder()
 *   .setDayOfMonth(value)
 *   .build();
 */
export class AppointmentRecurrenceTemplateMonthlyTemplateBuilder extends BackboneElementBuilder<AppointmentRecurrenceTemplateMonthlyTemplate, IAppointmentRecurrenceTemplateMonthlyTemplate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set dayOfMonth
   * Recurs on a specific day of the month
   */
  setDayOfMonth(dayOfMonth: number): this {
    this.data.dayOfMonth = dayOfMonth;
    return this;
  }

  /**
   * Set nthWeekOfMonth
   * Indicates which week of the month the appointment should occur
   */
  setNthWeekOfMonth(nthWeekOfMonth: ICoding): this {
    this.data.nthWeekOfMonth = nthWeekOfMonth;
    return this;
  }

  /**
   * Set dayOfWeek
   * Indicates which day of the week the appointment should occur
   */
  setDayOfWeek(dayOfWeek: ICoding): this {
    this.data.dayOfWeek = dayOfWeek;
    return this;
  }

  /**
   * Set monthInterval
   * Recurs every nth month
   */
  setMonthInterval(monthInterval: number): this {
    this.data.monthInterval = monthInterval;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AppointmentRecurrenceTemplateMonthlyTemplate instance
   */
  build(): AppointmentRecurrenceTemplateMonthlyTemplate {
    return new AppointmentRecurrenceTemplateMonthlyTemplate(this.data);
  }

  /**
   * Build and validate the AppointmentRecurrenceTemplateMonthlyTemplate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AppointmentRecurrenceTemplateMonthlyTemplate> {
    const appointmentRecurrenceTemplateMonthlyTemplate = this.build();
    await appointmentRecurrenceTemplateMonthlyTemplate.validateOrThrow();
    return appointmentRecurrenceTemplateMonthlyTemplate;
  }
}
