import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityRequestItemDiagnosis } from '../../models/backbones/CoverageEligibilityRequestItemDiagnosis.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityRequestItemDiagnosis,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CoverageEligibilityRequestItemDiagnosisBuilder - Fluent builder for CoverageEligibilityRequestItemDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityRequestItemDiagnosis = new CoverageEligibilityRequestItemDiagnosisBuilder()
 *   .build();
 */
export class CoverageEligibilityRequestItemDiagnosisBuilder extends BackboneElementBuilder<CoverageEligibilityRequestItemDiagnosis, ICoverageEligibilityRequestItemDiagnosis> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set diagnosis choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDiagnosis('CodeableConcept', value)
   */
  setDiagnosis<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `diagnosis${type}` as keyof ICoverageEligibilityRequestItemDiagnosis;
    const otherKeys: (keyof ICoverageEligibilityRequestItemDiagnosis)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('diagnosisCodeableConcept' as keyof ICoverageEligibilityRequestItemDiagnosis);
      otherKeys.push('_diagnosisCodeableConcept' as keyof ICoverageEligibilityRequestItemDiagnosis);
    }
    if (type !== 'Reference') {
      otherKeys.push('diagnosisReference' as keyof ICoverageEligibilityRequestItemDiagnosis);
      otherKeys.push('_diagnosisReference' as keyof ICoverageEligibilityRequestItemDiagnosis);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityRequestItemDiagnosis instance
   */
  build(): CoverageEligibilityRequestItemDiagnosis {
    return new CoverageEligibilityRequestItemDiagnosis(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityRequestItemDiagnosis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityRequestItemDiagnosis> {
    const coverageEligibilityRequestItemDiagnosis = this.build();
    await coverageEligibilityRequestItemDiagnosis.validateOrThrow();
    return coverageEligibilityRequestItemDiagnosis;
  }
}
