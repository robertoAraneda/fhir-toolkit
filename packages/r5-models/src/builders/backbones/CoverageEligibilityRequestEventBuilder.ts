import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityRequestEvent } from '../../models/backbones/CoverageEligibilityRequestEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityRequestEvent,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * CoverageEligibilityRequestEventBuilder - Fluent builder for CoverageEligibilityRequestEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityRequestEvent = new CoverageEligibilityRequestEventBuilder()
 *   .setType(value)
 *   .build();
 */
export class CoverageEligibilityRequestEventBuilder extends BackboneElementBuilder<CoverageEligibilityRequestEvent, ICoverageEligibilityRequestEvent> {
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
    const key = `when${type}` as keyof ICoverageEligibilityRequestEvent;
    const otherKeys: (keyof ICoverageEligibilityRequestEvent)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('whenDateTime' as keyof ICoverageEligibilityRequestEvent);
      otherKeys.push('_whenDateTime' as keyof ICoverageEligibilityRequestEvent);
    }
    if (type !== 'Period') {
      otherKeys.push('whenPeriod' as keyof ICoverageEligibilityRequestEvent);
      otherKeys.push('_whenPeriod' as keyof ICoverageEligibilityRequestEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityRequestEvent instance
   */
  build(): CoverageEligibilityRequestEvent {
    return new CoverageEligibilityRequestEvent(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityRequestEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityRequestEvent> {
    const coverageEligibilityRequestEvent = this.build();
    await coverageEligibilityRequestEvent.validateOrThrow();
    return coverageEligibilityRequestEvent;
  }
}
