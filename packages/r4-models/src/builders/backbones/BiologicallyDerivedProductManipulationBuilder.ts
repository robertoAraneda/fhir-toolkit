import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BiologicallyDerivedProductManipulation } from '../../models/backbones/BiologicallyDerivedProductManipulation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IBiologicallyDerivedProductManipulation,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * BiologicallyDerivedProductManipulationBuilder - Fluent builder for BiologicallyDerivedProductManipulation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductManipulation = new BiologicallyDerivedProductManipulationBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class BiologicallyDerivedProductManipulationBuilder extends BackboneElementBuilder<BiologicallyDerivedProductManipulation, IBiologicallyDerivedProductManipulation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of manipulation
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set time choice type (timeDateTime, timePeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTime('DateTime', value)
   */
  setTime<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `time${type}` as keyof IBiologicallyDerivedProductManipulation;
    const otherKeys: (keyof IBiologicallyDerivedProductManipulation)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('timeDateTime' as keyof IBiologicallyDerivedProductManipulation);
      otherKeys.push('_timeDateTime' as keyof IBiologicallyDerivedProductManipulation);
    }
    if (type !== 'Period') {
      otherKeys.push('timePeriod' as keyof IBiologicallyDerivedProductManipulation);
      otherKeys.push('_timePeriod' as keyof IBiologicallyDerivedProductManipulation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductManipulation instance
   */
  build(): BiologicallyDerivedProductManipulation {
    return new BiologicallyDerivedProductManipulation(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductManipulation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductManipulation> {
    const biologicallyDerivedProductManipulation = this.build();
    await biologicallyDerivedProductManipulation.validateOrThrow();
    return biologicallyDerivedProductManipulation;
  }
}
