import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AppointmentRecurrenceTemplate } from '../../models/backbones/AppointmentRecurrenceTemplate.js';
import type {
  IAppointmentRecurrenceTemplate,
  IAppointmentRecurrenceTemplateMonthlyTemplate,
  IAppointmentRecurrenceTemplateWeeklyTemplate,
  IAppointmentRecurrenceTemplateYearlyTemplate,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * AppointmentRecurrenceTemplateBuilder - Fluent builder for AppointmentRecurrenceTemplate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointmentRecurrenceTemplate = new AppointmentRecurrenceTemplateBuilder()
 *   .setTimezone(value)
 *   .addOccurrenceDate({ ... })
 *   .build();
 */
export class AppointmentRecurrenceTemplateBuilder extends BackboneElementBuilder<AppointmentRecurrenceTemplate, IAppointmentRecurrenceTemplate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set timezone
   * The timezone of the occurrences
   */
  setTimezone(timezone: ICodeableConcept): this {
    this.data.timezone = timezone;
    return this;
  }

  /**
   * Set recurrenceType
   * The frequency of the recurrence
   */
  setRecurrenceType(recurrenceType: ICodeableConcept): this {
    this.data.recurrenceType = recurrenceType;
    return this;
  }

  /**
   * Set lastOccurrenceDate
   * The date when the recurrence should end
   */
  setLastOccurrenceDate(lastOccurrenceDate: string): this {
    this.data.lastOccurrenceDate = lastOccurrenceDate;
    return this;
  }

  /**
   * Set occurrenceCount
   * The number of planned occurrences
   */
  setOccurrenceCount(occurrenceCount: number): this {
    this.data.occurrenceCount = occurrenceCount;
    return this;
  }

  /**
   * Set weeklyTemplate
   * Information about weekly recurring appointments
   */
  setWeeklyTemplate(weeklyTemplate: IAppointmentRecurrenceTemplateWeeklyTemplate): this {
    this.data.weeklyTemplate = weeklyTemplate;
    return this;
  }

  /**
   * Set monthlyTemplate
   * Information about monthly recurring appointments
   */
  setMonthlyTemplate(monthlyTemplate: IAppointmentRecurrenceTemplateMonthlyTemplate): this {
    this.data.monthlyTemplate = monthlyTemplate;
    return this;
  }

  /**
   * Set yearlyTemplate
   * Information about yearly recurring appointments
   */
  setYearlyTemplate(yearlyTemplate: IAppointmentRecurrenceTemplateYearlyTemplate): this {
    this.data.yearlyTemplate = yearlyTemplate;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add occurrenceDate
   * Specific dates for a recurring set of appointments (no template)
   */
  addOccurrenceDate(occurrenceDate: string): this {
    return this.addToArray('occurrenceDate', occurrenceDate);
  }

  /**
   * Add excludingDate
   * Any dates that should be excluded from the series
   */
  addExcludingDate(excludingDate: string): this {
    return this.addToArray('excludingDate', excludingDate);
  }

  /**
   * Add excludingRecurrenceId
   * Any recurrence IDs that should be excluded from the recurrence
   */
  addExcludingRecurrenceId(excludingRecurrenceId: number): this {
    return this.addToArray('excludingRecurrenceId', excludingRecurrenceId);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AppointmentRecurrenceTemplate instance
   */
  build(): AppointmentRecurrenceTemplate {
    return new AppointmentRecurrenceTemplate(this.data);
  }

  /**
   * Build and validate the AppointmentRecurrenceTemplate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AppointmentRecurrenceTemplate> {
    const appointmentRecurrenceTemplate = this.build();
    await appointmentRecurrenceTemplate.validateOrThrow();
    return appointmentRecurrenceTemplate;
  }
}
