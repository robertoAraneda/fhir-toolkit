import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationRequestSubstitution } from '../../models/backbones/MedicationRequestSubstitution.js';
import type {
  ICodeableConcept,
  IMedicationRequestSubstitution,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationRequestSubstitutionBuilder - Fluent builder for MedicationRequestSubstitution backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationRequestSubstitution = new MedicationRequestSubstitutionBuilder()
 *   .setReason(value)
 *   .build();
 */
export class MedicationRequestSubstitutionBuilder extends BackboneElementBuilder<MedicationRequestSubstitution, IMedicationRequestSubstitution> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reason
   * Why should (not) substitution be made
   */
  setReason(reason: ICodeableConcept): this {
    this.data.reason = reason;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set allowed choice type
   * @param type - 'Boolean' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAllowed('Boolean', value)
   */
  setAllowed<T extends 'Boolean' | 'CodeableConcept'>(
    type: T,
    value: T extends 'Boolean' ? boolean : string
  ): this {
    const key = `allowed${type}` as keyof IMedicationRequestSubstitution;
    const otherKeys: (keyof IMedicationRequestSubstitution)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('allowedBoolean' as keyof IMedicationRequestSubstitution);
      otherKeys.push('_allowedBoolean' as keyof IMedicationRequestSubstitution);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('allowedCodeableConcept' as keyof IMedicationRequestSubstitution);
      otherKeys.push('_allowedCodeableConcept' as keyof IMedicationRequestSubstitution);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationRequestSubstitution instance
   */
  build(): MedicationRequestSubstitution {
    return new MedicationRequestSubstitution(this.data);
  }

  /**
   * Build and validate the MedicationRequestSubstitution instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationRequestSubstitution> {
    const medicationRequestSubstitution = this.build();
    await medicationRequestSubstitution.validateOrThrow();
    return medicationRequestSubstitution;
  }
}
