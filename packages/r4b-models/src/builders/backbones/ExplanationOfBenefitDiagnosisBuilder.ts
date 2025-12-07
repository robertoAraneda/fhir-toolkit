import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitDiagnosis } from '../../models/backbones/ExplanationOfBenefitDiagnosis.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitDiagnosis,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitDiagnosisBuilder - Fluent builder for ExplanationOfBenefitDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitDiagnosis = new ExplanationOfBenefitDiagnosisBuilder()
 *   .setSequence(value)
 *   .addType({ ... })
 *   .build();
 */
export class ExplanationOfBenefitDiagnosisBuilder extends BackboneElementBuilder<ExplanationOfBenefitDiagnosis, IExplanationOfBenefitDiagnosis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Diagnosis instance identifier
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set onAdmission
   * Present on admission
   */
  setOnAdmission(onAdmission: ICodeableConcept): this {
    this.data.onAdmission = onAdmission;
    return this;
  }

  /**
   * Set packageCode
   * Package billing code
   */
  setPackageCode(packageCode: ICodeableConcept): this {
    this.data.packageCode = packageCode;
    return this;
  }

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
    const key = `diagnosis${type}` as keyof IExplanationOfBenefitDiagnosis;
    const otherKeys: (keyof IExplanationOfBenefitDiagnosis)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('diagnosisCodeableConcept' as keyof IExplanationOfBenefitDiagnosis);
      otherKeys.push('_diagnosisCodeableConcept' as keyof IExplanationOfBenefitDiagnosis);
    }
    if (type !== 'Reference') {
      otherKeys.push('diagnosisReference' as keyof IExplanationOfBenefitDiagnosis);
      otherKeys.push('_diagnosisReference' as keyof IExplanationOfBenefitDiagnosis);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Timing or nature of the diagnosis
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitDiagnosis instance
   */
  build(): ExplanationOfBenefitDiagnosis {
    return new ExplanationOfBenefitDiagnosis(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitDiagnosis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitDiagnosis> {
    const explanationOfBenefitDiagnosis = this.build();
    await explanationOfBenefitDiagnosis.validateOrThrow();
    return explanationOfBenefitDiagnosis;
  }
}
