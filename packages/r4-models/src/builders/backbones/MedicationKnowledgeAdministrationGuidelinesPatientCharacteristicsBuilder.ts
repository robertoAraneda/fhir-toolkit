import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics } from '../../models/backbones/MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsBuilder - Fluent builder for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeAdministrationGuidelinesPatientCharacteristics = new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsBuilder()
 *   .addValue({ ... })
 *   .build();
 */
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsBuilder extends BackboneElementBuilder<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics, IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set characteristic choice type
   * @param type - 'CodeableConcept' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCharacteristic('CodeableConcept', value)
   */
  setCharacteristic<T extends 'CodeableConcept' | 'Quantity'>(
    type: T,
    value: string
  ): this {
    const key = `characteristic${type}` as keyof IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
    const otherKeys: (keyof IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('characteristicCodeableConcept' as keyof IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics);
      otherKeys.push('_characteristicCodeableConcept' as keyof IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics);
    }
    if (type !== 'Quantity') {
      otherKeys.push('characteristicQuantity' as keyof IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics);
      otherKeys.push('_characteristicQuantity' as keyof IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add value
   * The specific characteristic
   */
  addValue(value: string): this {
    return this.addToArray('value', value);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics instance
   */
  build(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    return new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics> {
    const medicationKnowledgeAdministrationGuidelinesPatientCharacteristics = this.build();
    await medicationKnowledgeAdministrationGuidelinesPatientCharacteristics.validateOrThrow();
    return medicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
  }
}
