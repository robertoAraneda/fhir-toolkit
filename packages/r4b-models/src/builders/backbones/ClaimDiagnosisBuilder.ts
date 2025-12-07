import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimDiagnosis } from '../../models/backbones/ClaimDiagnosis.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IClaimDiagnosis,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClaimDiagnosisBuilder - Fluent builder for ClaimDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimDiagnosis = new ClaimDiagnosisBuilder()
 *   .setSequence(value)
 *   .addType({ ... })
 *   .build();
 */
export class ClaimDiagnosisBuilder extends BackboneElementBuilder<ClaimDiagnosis, IClaimDiagnosis> {
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
    const key = `diagnosis${type}` as keyof IClaimDiagnosis;
    const otherKeys: (keyof IClaimDiagnosis)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('diagnosisCodeableConcept' as keyof IClaimDiagnosis);
      otherKeys.push('_diagnosisCodeableConcept' as keyof IClaimDiagnosis);
    }
    if (type !== 'Reference') {
      otherKeys.push('diagnosisReference' as keyof IClaimDiagnosis);
      otherKeys.push('_diagnosisReference' as keyof IClaimDiagnosis);
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
   * Build the ClaimDiagnosis instance
   */
  build(): ClaimDiagnosis {
    return new ClaimDiagnosis(this.data);
  }

  /**
   * Build and validate the ClaimDiagnosis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimDiagnosis> {
    const claimDiagnosis = this.build();
    await claimDiagnosis.validateOrThrow();
    return claimDiagnosis;
  }
}
