import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionDefinitionMedication } from '../../models/backbones/ConditionDefinitionMedication.js';
import type {
  ICodeableConcept,
  IConditionDefinitionMedication,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionDefinitionMedicationBuilder - Fluent builder for ConditionDefinitionMedication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionDefinitionMedication = new ConditionDefinitionMedicationBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class ConditionDefinitionMedicationBuilder extends BackboneElementBuilder<ConditionDefinitionMedication, IConditionDefinitionMedication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Category that is relevant
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set code
   * Code for relevant Medication
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionDefinitionMedication instance
   */
  build(): ConditionDefinitionMedication {
    return new ConditionDefinitionMedication(this.data);
  }

  /**
   * Build and validate the ConditionDefinitionMedication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionDefinitionMedication> {
    const conditionDefinitionMedication = this.build();
    await conditionDefinitionMedication.validateOrThrow();
    return conditionDefinitionMedication;
  }
}
