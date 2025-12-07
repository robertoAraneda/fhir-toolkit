import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductInteraction } from '../../models/resources/MedicinalProductInteraction.js';
import type {
  ICodeableConcept,
  IMedicinalProductInteraction,
  IMedicinalProductInteractionInteractant,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductInteractionBuilder - Fluent builder for MedicinalProductInteraction resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductInteraction = new MedicinalProductInteractionBuilder()
 *   .setId('123')
 *   .setDescription(value)
 *   .addSubject({ ... })
 *   .build();
 */
export class MedicinalProductInteractionBuilder extends DomainResourceBuilder<MedicinalProductInteraction, IMedicinalProductInteraction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * The interaction described
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set effect
   * The effect of the interaction, for example "reduced gastric absorption of primary medication"
   */
  setEffect(effect: ICodeableConcept): this {
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

  /**
   * Set management
   * Actions for managing the interaction
   */
  setManagement(management: ICodeableConcept): this {
    this.data.management = management;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subject
   * The medication for which this is a described interaction
   */
  addSubject(subject: IReference<'MedicinalProduct' | 'Medication' | 'Substance'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add interactant
   * The specific medication, food or laboratory test that interacts
   */
  addInteractant(interactant: IMedicinalProductInteractionInteractant): this {
    return this.addToArray('interactant', interactant);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductInteraction instance
   */
  build(): MedicinalProductInteraction {
    return new MedicinalProductInteraction(this.data);
  }

  /**
   * Build and validate the MedicinalProductInteraction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductInteraction> {
    const medicinalProductInteraction = this.build();
    await medicinalProductInteraction.validateOrThrow();
    return medicinalProductInteraction;
  }
}
