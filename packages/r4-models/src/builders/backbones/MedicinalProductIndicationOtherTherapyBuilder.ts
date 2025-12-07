import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductIndicationOtherTherapy } from '../../models/backbones/MedicinalProductIndicationOtherTherapy.js';
import type {
  ICodeableConcept,
  IMedicinalProductIndicationOtherTherapy,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIndicationOtherTherapyBuilder - Fluent builder for MedicinalProductIndicationOtherTherapy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIndicationOtherTherapy = new MedicinalProductIndicationOtherTherapyBuilder()
 *   .setTherapyRelationshipType(value)
 *   .build();
 */
export class MedicinalProductIndicationOtherTherapyBuilder extends BackboneElementBuilder<MedicinalProductIndicationOtherTherapy, IMedicinalProductIndicationOtherTherapy> {
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
   * Set medication choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMedication('CodeableConcept', value)
   */
  setMedication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `medication${type}` as keyof IMedicinalProductIndicationOtherTherapy;
    const otherKeys: (keyof IMedicinalProductIndicationOtherTherapy)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('medicationCodeableConcept' as keyof IMedicinalProductIndicationOtherTherapy);
      otherKeys.push('_medicationCodeableConcept' as keyof IMedicinalProductIndicationOtherTherapy);
    }
    if (type !== 'Reference') {
      otherKeys.push('medicationReference' as keyof IMedicinalProductIndicationOtherTherapy);
      otherKeys.push('_medicationReference' as keyof IMedicinalProductIndicationOtherTherapy);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductIndicationOtherTherapy instance
   */
  build(): MedicinalProductIndicationOtherTherapy {
    return new MedicinalProductIndicationOtherTherapy(this.data);
  }

  /**
   * Build and validate the MedicinalProductIndicationOtherTherapy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIndicationOtherTherapy> {
    const medicinalProductIndicationOtherTherapy = this.build();
    await medicinalProductIndicationOtherTherapy.validateOrThrow();
    return medicinalProductIndicationOtherTherapy;
  }
}
