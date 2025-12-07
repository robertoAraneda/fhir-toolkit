import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DosageDoseAndRate } from '../../models/backbones/DosageDoseAndRate.js';
import type {
  ICodeableConcept,
  IDosageDoseAndRate,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r4-types';

/**
 * DosageDoseAndRateBuilder - Fluent builder for DosageDoseAndRate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const dosageDoseAndRate = new DosageDoseAndRateBuilder()
 *   .setType(value)
 *   .build();
 */
export class DosageDoseAndRateBuilder extends BackboneElementBuilder<DosageDoseAndRate, IDosageDoseAndRate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The kind of dose or rate specified
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set dose choice type
   * @param type - 'Range' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDose('Range', value)
   */
  setDose<T extends 'Range' | 'Quantity'>(
    type: T,
    value: string
  ): this {
    const key = `dose${type}` as keyof IDosageDoseAndRate;
    const otherKeys: (keyof IDosageDoseAndRate)[] = [];
    if (type !== 'Range') {
      otherKeys.push('doseRange' as keyof IDosageDoseAndRate);
      otherKeys.push('_doseRange' as keyof IDosageDoseAndRate);
    }
    if (type !== 'Quantity') {
      otherKeys.push('doseQuantity' as keyof IDosageDoseAndRate);
      otherKeys.push('_doseQuantity' as keyof IDosageDoseAndRate);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set rate choice type
   * @param type - 'Ratio' | 'Range' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setRate('Ratio', value)
   */
  setRate<T extends 'Ratio' | 'Range' | 'Quantity'>(
    type: T,
    value: string
  ): this {
    const key = `rate${type}` as keyof IDosageDoseAndRate;
    const otherKeys: (keyof IDosageDoseAndRate)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('rateRatio' as keyof IDosageDoseAndRate);
      otherKeys.push('_rateRatio' as keyof IDosageDoseAndRate);
    }
    if (type !== 'Range') {
      otherKeys.push('rateRange' as keyof IDosageDoseAndRate);
      otherKeys.push('_rateRange' as keyof IDosageDoseAndRate);
    }
    if (type !== 'Quantity') {
      otherKeys.push('rateQuantity' as keyof IDosageDoseAndRate);
      otherKeys.push('_rateQuantity' as keyof IDosageDoseAndRate);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DosageDoseAndRate instance
   */
  build(): DosageDoseAndRate {
    return new DosageDoseAndRate(this.data);
  }

  /**
   * Build and validate the DosageDoseAndRate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DosageDoseAndRate> {
    const dosageDoseAndRate = this.build();
    await dosageDoseAndRate.validateOrThrow();
    return dosageDoseAndRate;
  }
}
