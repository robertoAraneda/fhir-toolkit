import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalImpressionFinding } from '../../models/backbones/ClinicalImpressionFinding.js';
import type {
  IClinicalImpressionFinding,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClinicalImpressionFindingBuilder - Fluent builder for ClinicalImpressionFinding backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalImpressionFinding = new ClinicalImpressionFindingBuilder()
 *   .setBasis(value)
 *   .build();
 */
export class ClinicalImpressionFindingBuilder extends BackboneElementBuilder<ClinicalImpressionFinding, IClinicalImpressionFinding> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set basis
   * Which investigations support finding
   */
  setBasis(basis: string): this {
    this.data.basis = basis;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set item choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setItem('CodeableConcept', value)
   */
  setItem<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `item${type}` as keyof IClinicalImpressionFinding;
    const otherKeys: (keyof IClinicalImpressionFinding)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IClinicalImpressionFinding);
      otherKeys.push('_itemCodeableConcept' as keyof IClinicalImpressionFinding);
    }
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IClinicalImpressionFinding);
      otherKeys.push('_itemReference' as keyof IClinicalImpressionFinding);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalImpressionFinding instance
   */
  build(): ClinicalImpressionFinding {
    return new ClinicalImpressionFinding(this.data);
  }

  /**
   * Build and validate the ClinicalImpressionFinding instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalImpressionFinding> {
    const clinicalImpressionFinding = this.build();
    await clinicalImpressionFinding.validateOrThrow();
    return clinicalImpressionFinding;
  }
}
