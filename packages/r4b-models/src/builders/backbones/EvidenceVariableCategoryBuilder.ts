import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCategory } from '../../models/backbones/EvidenceVariableCategory.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IEvidenceVariableCategory,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceVariableCategoryBuilder - Fluent builder for EvidenceVariableCategory backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCategory = new EvidenceVariableCategoryBuilder()
 *   .setName(value)
 *   .build();
 */
export class EvidenceVariableCategoryBuilder extends BackboneElementBuilder<EvidenceVariableCategory, IEvidenceVariableCategory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Description of the grouping
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'CodeableConcept' | 'Quantity' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IEvidenceVariableCategory;
    const otherKeys: (keyof IEvidenceVariableCategory)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IEvidenceVariableCategory);
      otherKeys.push('_valueCodeableConcept' as keyof IEvidenceVariableCategory);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IEvidenceVariableCategory);
      otherKeys.push('_valueQuantity' as keyof IEvidenceVariableCategory);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IEvidenceVariableCategory);
      otherKeys.push('_valueRange' as keyof IEvidenceVariableCategory);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCategory instance
   */
  build(): EvidenceVariableCategory {
    return new EvidenceVariableCategory(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCategory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCategory> {
    const evidenceVariableCategory = this.build();
    await evidenceVariableCategory.validateOrThrow();
    return evidenceVariableCategory;
  }
}
