import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionInteraction } from '../../models/backbones/ClinicalUseDefinitionInteraction.js';
import type {
  IClinicalUseDefinitionInteraction,
  IClinicalUseDefinitionInteractionInteractant,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClinicalUseDefinitionInteractionBuilder - Fluent builder for ClinicalUseDefinitionInteraction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionInteraction = new ClinicalUseDefinitionInteractionBuilder()
 *   .setType(value)
 *   .addInteractant({ ... })
 *   .build();
 */
export class ClinicalUseDefinitionInteractionBuilder extends BackboneElementBuilder<ClinicalUseDefinitionInteraction, IClinicalUseDefinitionInteraction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of the interaction e.g. drug-drug interaction, drug-lab test interaction
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set effect
   * The effect of the interaction, for example "reduced gastric absorption of primary medication"
   */
  setEffect(effect: ICodeableReference): this {
    this.data.effect = effect;
    return this;
  }

  /**
   * Set incidence
   * The incidence of the interaction, e.g. theoretical, observed
   */
  setIncidence(incidence: ICodeableConcept): this {
    this.data.incidence = incidence;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add interactant
   * The specific medication, product, food etc. or laboratory test that interacts
   */
  addInteractant(interactant: IClinicalUseDefinitionInteractionInteractant): this {
    return this.addToArray('interactant', interactant);
  }

  /**
   * Add management
   * Actions for managing the interaction
   */
  addManagement(management: ICodeableConcept): this {
    return this.addToArray('management', management);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionInteraction instance
   */
  build(): ClinicalUseDefinitionInteraction {
    return new ClinicalUseDefinitionInteraction(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionInteraction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionInteraction> {
    const clinicalUseDefinitionInteraction = this.build();
    await clinicalUseDefinitionInteraction.validateOrThrow();
    return clinicalUseDefinitionInteraction;
  }
}
