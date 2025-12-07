import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeDefinitional } from '../../models/backbones/MedicationKnowledgeDefinitional.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeDefinitional,
  IMedicationKnowledgeDefinitionalDrugCharacteristic,
  IMedicationKnowledgeDefinitionalIngredient,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeDefinitionalBuilder - Fluent builder for MedicationKnowledgeDefinitional backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeDefinitional = new MedicationKnowledgeDefinitionalBuilder()
 *   .setDoseForm(value)
 *   .addDefinition({ ... })
 *   .build();
 */
export class MedicationKnowledgeDefinitionalBuilder extends BackboneElementBuilder<MedicationKnowledgeDefinitional, IMedicationKnowledgeDefinitional> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set doseForm
   * powder | tablets | capsule +
   */
  setDoseForm(doseForm: ICodeableConcept): this {
    this.data.doseForm = doseForm;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add definition
   * Definitional resources that provide more information about this medication
   */
  addDefinition(definition: IReference<'MedicinalProductDefinition'>): this {
    return this.addToArray('definition', definition);
  }

  /**
   * Add intendedRoute
   * The intended or approved route of administration
   */
  addIntendedRoute(intendedRoute: ICodeableConcept): this {
    return this.addToArray('intendedRoute', intendedRoute);
  }

  /**
   * Add ingredient
   * Active or inactive ingredient
   */
  addIngredient(ingredient: IMedicationKnowledgeDefinitionalIngredient): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add drugCharacteristic
   * Specifies descriptive properties of the medicine
   */
  addDrugCharacteristic(drugCharacteristic: IMedicationKnowledgeDefinitionalDrugCharacteristic): this {
    return this.addToArray('drugCharacteristic', drugCharacteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeDefinitional instance
   */
  build(): MedicationKnowledgeDefinitional {
    return new MedicationKnowledgeDefinitional(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeDefinitional instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeDefinitional> {
    const medicationKnowledgeDefinitional = this.build();
    await medicationKnowledgeDefinitional.validateOrThrow();
    return medicationKnowledgeDefinitional;
  }
}
