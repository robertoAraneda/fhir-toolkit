import { ElementBuilder } from '../base/ElementBuilder.js';
import { UsageContext } from '../../models/datatypes/UsageContext.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IQuantity,
  IRange,
  IReference,
  IUsageContext,
} from '@fhir-toolkit/r4b-types';

/**
 * UsageContextBuilder - Fluent builder for UsageContext datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const usageContext = new UsageContextBuilder()
 *   .setCode(value)
 *   .build();
 */
export class UsageContextBuilder extends ElementBuilder<UsageContext, IUsageContext> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of context being specified
   */
  setCode(code: ICoding): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'CodeableConcept' | 'Quantity' | 'Range' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity' | 'Range' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IUsageContext;
    const otherKeys: (keyof IUsageContext)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IUsageContext);
      otherKeys.push('_valueCodeableConcept' as keyof IUsageContext);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IUsageContext);
      otherKeys.push('_valueQuantity' as keyof IUsageContext);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IUsageContext);
      otherKeys.push('_valueRange' as keyof IUsageContext);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IUsageContext);
      otherKeys.push('_valueReference' as keyof IUsageContext);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the UsageContext instance
   */
  build(): UsageContext {
    return new UsageContext(this.data);
  }

  /**
   * Build and validate the UsageContext instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<UsageContext> {
    const usageContext = this.build();
    await usageContext.validateOrThrow();
    return usageContext;
  }
}
