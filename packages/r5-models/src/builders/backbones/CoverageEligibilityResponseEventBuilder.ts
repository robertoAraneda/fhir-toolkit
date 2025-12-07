import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityResponseEvent } from '../../models/backbones/CoverageEligibilityResponseEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseEvent,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * CoverageEligibilityResponseEventBuilder - Fluent builder for CoverageEligibilityResponseEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityResponseEvent = new CoverageEligibilityResponseEventBuilder()
 *   .setType(value)
 *   .build();
 */
export class CoverageEligibilityResponseEventBuilder extends BackboneElementBuilder<CoverageEligibilityResponseEvent, ICoverageEligibilityResponseEvent> {
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
    const key = `when${type}` as keyof ICoverageEligibilityResponseEvent;
    const otherKeys: (keyof ICoverageEligibilityResponseEvent)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('whenDateTime' as keyof ICoverageEligibilityResponseEvent);
      otherKeys.push('_whenDateTime' as keyof ICoverageEligibilityResponseEvent);
    }
    if (type !== 'Period') {
      otherKeys.push('whenPeriod' as keyof ICoverageEligibilityResponseEvent);
      otherKeys.push('_whenPeriod' as keyof ICoverageEligibilityResponseEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityResponseEvent instance
   */
  build(): CoverageEligibilityResponseEvent {
    return new CoverageEligibilityResponseEvent(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityResponseEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityResponseEvent> {
    const coverageEligibilityResponseEvent = this.build();
    await coverageEligibilityResponseEvent.validateOrThrow();
    return coverageEligibilityResponseEvent;
  }
}
