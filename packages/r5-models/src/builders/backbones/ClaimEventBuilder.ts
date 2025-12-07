import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimEvent } from '../../models/backbones/ClaimEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IClaimEvent,
  ICodeableConcept,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimEventBuilder - Fluent builder for ClaimEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimEvent = new ClaimEventBuilder()
 *   .setType(value)
 *   .build();
 */
export class ClaimEventBuilder extends BackboneElementBuilder<ClaimEvent, IClaimEvent> {
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
    const key = `when${type}` as keyof IClaimEvent;
    const otherKeys: (keyof IClaimEvent)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('whenDateTime' as keyof IClaimEvent);
      otherKeys.push('_whenDateTime' as keyof IClaimEvent);
    }
    if (type !== 'Period') {
      otherKeys.push('whenPeriod' as keyof IClaimEvent);
      otherKeys.push('_whenPeriod' as keyof IClaimEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimEvent instance
   */
  build(): ClaimEvent {
    return new ClaimEvent(this.data);
  }

  /**
   * Build and validate the ClaimEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimEvent> {
    const claimEvent = this.build();
    await claimEvent.validateOrThrow();
    return claimEvent;
  }
}
