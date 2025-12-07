import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseEvent } from '../../models/backbones/ClaimResponseEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IClaimResponseEvent,
  ICodeableConcept,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseEventBuilder - Fluent builder for ClaimResponseEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseEvent = new ClaimResponseEventBuilder()
 *   .setType(value)
 *   .build();
 */
export class ClaimResponseEventBuilder extends BackboneElementBuilder<ClaimResponseEvent, IClaimResponseEvent> {
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
    const key = `when${type}` as keyof IClaimResponseEvent;
    const otherKeys: (keyof IClaimResponseEvent)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('whenDateTime' as keyof IClaimResponseEvent);
      otherKeys.push('_whenDateTime' as keyof IClaimResponseEvent);
    }
    if (type !== 'Period') {
      otherKeys.push('whenPeriod' as keyof IClaimResponseEvent);
      otherKeys.push('_whenPeriod' as keyof IClaimResponseEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseEvent instance
   */
  build(): ClaimResponseEvent {
    return new ClaimResponseEvent(this.data);
  }

  /**
   * Build and validate the ClaimResponseEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseEvent> {
    const claimResponseEvent = this.build();
    await claimResponseEvent.validateOrThrow();
    return claimResponseEvent;
  }
}
