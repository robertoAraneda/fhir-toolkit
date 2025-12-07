import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationProtocolApplied } from '../../models/backbones/ImmunizationProtocolApplied.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IImmunizationProtocolApplied,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ImmunizationProtocolAppliedBuilder - Fluent builder for ImmunizationProtocolApplied backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationProtocolApplied = new ImmunizationProtocolAppliedBuilder()
 *   .setSeries(value)
 *   .addTargetDisease({ ... })
 *   .build();
 */
export class ImmunizationProtocolAppliedBuilder extends BackboneElementBuilder<ImmunizationProtocolApplied, IImmunizationProtocolApplied> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set series
   * Name of vaccine series
   */
  setSeries(series: string): this {
    this.data.series = series;
    return this;
  }

  /**
   * Set authority
   * Who is responsible for publishing the recommendations
   */
  setAuthority(authority: IReference<'Organization'>): this {
    this.data.authority = authority;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set doseNumber choice type (doseNumberPositiveInt, doseNumberString)
   * @param type - 'PositiveInt' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDoseNumber('PositiveInt', value)
   */
  setDoseNumber<T extends 'PositiveInt' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `doseNumber${type}` as keyof IImmunizationProtocolApplied;
    const otherKeys: (keyof IImmunizationProtocolApplied)[] = [];
    if (type !== 'PositiveInt') {
      otherKeys.push('doseNumberPositiveInt' as keyof IImmunizationProtocolApplied);
      otherKeys.push('_doseNumberPositiveInt' as keyof IImmunizationProtocolApplied);
    }
    if (type !== 'String') {
      otherKeys.push('doseNumberString' as keyof IImmunizationProtocolApplied);
      otherKeys.push('_doseNumberString' as keyof IImmunizationProtocolApplied);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set seriesDoses choice type (seriesDosesPositiveInt, seriesDosesString)
   * @param type - 'PositiveInt' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSeriesDoses('PositiveInt', value)
   */
  setSeriesDoses<T extends 'PositiveInt' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `seriesDoses${type}` as keyof IImmunizationProtocolApplied;
    const otherKeys: (keyof IImmunizationProtocolApplied)[] = [];
    if (type !== 'PositiveInt') {
      otherKeys.push('seriesDosesPositiveInt' as keyof IImmunizationProtocolApplied);
      otherKeys.push('_seriesDosesPositiveInt' as keyof IImmunizationProtocolApplied);
    }
    if (type !== 'String') {
      otherKeys.push('seriesDosesString' as keyof IImmunizationProtocolApplied);
      otherKeys.push('_seriesDosesString' as keyof IImmunizationProtocolApplied);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add targetDisease
   * Vaccine preventatable disease being targetted
   */
  addTargetDisease(targetDisease: ICodeableConcept): this {
    return this.addToArray('targetDisease', targetDisease);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationProtocolApplied instance
   */
  build(): ImmunizationProtocolApplied {
    return new ImmunizationProtocolApplied(this.data);
  }

  /**
   * Build and validate the ImmunizationProtocolApplied instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationProtocolApplied> {
    const immunizationProtocolApplied = this.build();
    await immunizationProtocolApplied.validateOrThrow();
    return immunizationProtocolApplied;
  }
}
