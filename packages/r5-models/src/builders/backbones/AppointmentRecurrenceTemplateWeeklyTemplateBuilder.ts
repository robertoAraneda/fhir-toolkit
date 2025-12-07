import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AppointmentRecurrenceTemplateWeeklyTemplate } from '../../models/backbones/AppointmentRecurrenceTemplateWeeklyTemplate.js';
import type {
  IAppointmentRecurrenceTemplateWeeklyTemplate,
} from '@fhir-toolkit/r5-types';

/**
 * AppointmentRecurrenceTemplateWeeklyTemplateBuilder - Fluent builder for AppointmentRecurrenceTemplateWeeklyTemplate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointmentRecurrenceTemplateWeeklyTemplate = new AppointmentRecurrenceTemplateWeeklyTemplateBuilder()
 *   .setMonday(value)
 *   .build();
 */
export class AppointmentRecurrenceTemplateWeeklyTemplateBuilder extends BackboneElementBuilder<AppointmentRecurrenceTemplateWeeklyTemplate, IAppointmentRecurrenceTemplateWeeklyTemplate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set monday
   * Recurs on Mondays
   */
  setMonday(monday: boolean): this {
    this.data.monday = monday;
    return this;
  }

  /**
   * Set tuesday
   * Recurs on Tuesday
   */
  setTuesday(tuesday: boolean): this {
    this.data.tuesday = tuesday;
    return this;
  }

  /**
   * Set wednesday
   * Recurs on Wednesday
   */
  setWednesday(wednesday: boolean): this {
    this.data.wednesday = wednesday;
    return this;
  }

  /**
   * Set thursday
   * Recurs on Thursday
   */
  setThursday(thursday: boolean): this {
    this.data.thursday = thursday;
    return this;
  }

  /**
   * Set friday
   * Recurs on Friday
   */
  setFriday(friday: boolean): this {
    this.data.friday = friday;
    return this;
  }

  /**
   * Set saturday
   * Recurs on Saturday
   */
  setSaturday(saturday: boolean): this {
    this.data.saturday = saturday;
    return this;
  }

  /**
   * Set sunday
   * Recurs on Sunday
   */
  setSunday(sunday: boolean): this {
    this.data.sunday = sunday;
    return this;
  }

  /**
   * Set weekInterval
   * Recurs every nth week
   */
  setWeekInterval(weekInterval: number): this {
    this.data.weekInterval = weekInterval;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AppointmentRecurrenceTemplateWeeklyTemplate instance
   */
  build(): AppointmentRecurrenceTemplateWeeklyTemplate {
    return new AppointmentRecurrenceTemplateWeeklyTemplate(this.data);
  }

  /**
   * Build and validate the AppointmentRecurrenceTemplateWeeklyTemplate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AppointmentRecurrenceTemplateWeeklyTemplate> {
    const appointmentRecurrenceTemplateWeeklyTemplate = this.build();
    await appointmentRecurrenceTemplateWeeklyTemplate.validateOrThrow();
    return appointmentRecurrenceTemplateWeeklyTemplate;
  }
}
