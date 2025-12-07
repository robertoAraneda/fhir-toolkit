import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AppointmentRecurrenceTemplateYearlyTemplate } from '../../models/backbones/AppointmentRecurrenceTemplateYearlyTemplate.js';
import type {
  IAppointmentRecurrenceTemplateYearlyTemplate,
} from '@fhir-toolkit/r5-types';

/**
 * AppointmentRecurrenceTemplateYearlyTemplateBuilder - Fluent builder for AppointmentRecurrenceTemplateYearlyTemplate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointmentRecurrenceTemplateYearlyTemplate = new AppointmentRecurrenceTemplateYearlyTemplateBuilder()
 *   .setYearInterval(value)
 *   .build();
 */
export class AppointmentRecurrenceTemplateYearlyTemplateBuilder extends BackboneElementBuilder<AppointmentRecurrenceTemplateYearlyTemplate, IAppointmentRecurrenceTemplateYearlyTemplate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set yearInterval
   * Recurs every nth year
   */
  setYearInterval(yearInterval: number): this {
    this.data.yearInterval = yearInterval;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AppointmentRecurrenceTemplateYearlyTemplate instance
   */
  build(): AppointmentRecurrenceTemplateYearlyTemplate {
    return new AppointmentRecurrenceTemplateYearlyTemplate(this.data);
  }

  /**
   * Build and validate the AppointmentRecurrenceTemplateYearlyTemplate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AppointmentRecurrenceTemplateYearlyTemplate> {
    const appointmentRecurrenceTemplateYearlyTemplate = this.build();
    await appointmentRecurrenceTemplateYearlyTemplate.validateOrThrow();
    return appointmentRecurrenceTemplateYearlyTemplate;
  }
}
