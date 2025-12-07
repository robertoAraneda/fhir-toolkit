import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimAccident } from '../../models/backbones/ClaimAccident.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  IClaimAccident,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimAccidentBuilder - Fluent builder for ClaimAccident backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimAccident = new ClaimAccidentBuilder()
 *   .setDate(value)
 *   .build();
 */
export class ClaimAccidentBuilder extends BackboneElementBuilder<ClaimAccident, IClaimAccident> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set date
   * When the incident occurred
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set type
   * The nature of the accident
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set location choice type (locationAddress, locationReference)
   * @param type - 'Address' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setLocation('Address', value)
   */
  setLocation<T extends 'Address' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `location${type}` as keyof IClaimAccident;
    const otherKeys: (keyof IClaimAccident)[] = [];
    if (type !== 'Address') {
      otherKeys.push('locationAddress' as keyof IClaimAccident);
      otherKeys.push('_locationAddress' as keyof IClaimAccident);
    }
    if (type !== 'Reference') {
      otherKeys.push('locationReference' as keyof IClaimAccident);
      otherKeys.push('_locationReference' as keyof IClaimAccident);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimAccident instance
   */
  build(): ClaimAccident {
    return new ClaimAccident(this.data);
  }

  /**
   * Build and validate the ClaimAccident instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimAccident> {
    const claimAccident = this.build();
    await claimAccident.validateOrThrow();
    return claimAccident;
  }
}
