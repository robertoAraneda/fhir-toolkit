import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductContraindicationOtherTherapy } from '../../models/backbones/MedicinalProductContraindicationOtherTherapy.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicinalProductContraindicationOtherTherapy,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductContraindicationOtherTherapyBuilder - Fluent builder for MedicinalProductContraindicationOtherTherapy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductContraindicationOtherTherapy = new MedicinalProductContraindicationOtherTherapyBuilder()
 *   .setTherapyRelationshipType(value)
 *   .build();
 */
export class MedicinalProductContraindicationOtherTherapyBuilder extends BackboneElementBuilder<MedicinalProductContraindicationOtherTherapy, IMedicinalProductContraindicationOtherTherapy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set therapyRelationshipType
   * The type of relationship between the medicinal product indication or contraindication and another therapy
   */
  setTherapyRelationshipType(therapyRelationshipType: ICodeableConcept): this {
    this.data.therapyRelationshipType = therapyRelationshipType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set medication choice type (medicationCodeableConcept, medicationReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMedication('CodeableConcept', value)
   */
  setMedication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `medication${type}` as keyof IMedicinalProductContraindicationOtherTherapy;
    const otherKeys: (keyof IMedicinalProductContraindicationOtherTherapy)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('medicationCodeableConcept' as keyof IMedicinalProductContraindicationOtherTherapy);
      otherKeys.push('_medicationCodeableConcept' as keyof IMedicinalProductContraindicationOtherTherapy);
    }
    if (type !== 'Reference') {
      otherKeys.push('medicationReference' as keyof IMedicinalProductContraindicationOtherTherapy);
      otherKeys.push('_medicationReference' as keyof IMedicinalProductContraindicationOtherTherapy);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductContraindicationOtherTherapy instance
   */
  build(): MedicinalProductContraindicationOtherTherapy {
    return new MedicinalProductContraindicationOtherTherapy(this.data);
  }

  /**
   * Build and validate the MedicinalProductContraindicationOtherTherapy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductContraindicationOtherTherapy> {
    const medicinalProductContraindicationOtherTherapy = this.build();
    await medicinalProductContraindicationOtherTherapy.validateOrThrow();
    return medicinalProductContraindicationOtherTherapy;
  }
}
