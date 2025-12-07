import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitEvent } from '../../models/backbones/ExplanationOfBenefitEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitEvent,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitEventBuilder - Fluent builder for ExplanationOfBenefitEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitEvent = new ExplanationOfBenefitEventBuilder()
 *   .setType(value)
 *   .build();
 */
export class ExplanationOfBenefitEventBuilder extends BackboneElementBuilder<ExplanationOfBenefitEvent, IExplanationOfBenefitEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Specific event
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set when choice type (whenDateTime, whenPeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setWhen('DateTime', value)
   */
  setWhen<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `when${type}` as keyof IExplanationOfBenefitEvent;
    const otherKeys: (keyof IExplanationOfBenefitEvent)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('whenDateTime' as keyof IExplanationOfBenefitEvent);
      otherKeys.push('_whenDateTime' as keyof IExplanationOfBenefitEvent);
    }
    if (type !== 'Period') {
      otherKeys.push('whenPeriod' as keyof IExplanationOfBenefitEvent);
      otherKeys.push('_whenPeriod' as keyof IExplanationOfBenefitEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitEvent instance
   */
  build(): ExplanationOfBenefitEvent {
    return new ExplanationOfBenefitEvent(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitEvent> {
    const explanationOfBenefitEvent = this.build();
    await explanationOfBenefitEvent.validateOrThrow();
    return explanationOfBenefitEvent;
  }
}
