import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductInteractionInteractant } from '../../models/backbones/MedicinalProductInteractionInteractant.js';
import type {
  ICodeableConcept,
  IMedicinalProductInteractionInteractant,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductInteractionInteractantBuilder - Fluent builder for MedicinalProductInteractionInteractant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductInteractionInteractant = new MedicinalProductInteractionInteractantBuilder()
 *   .build();
 */
export class MedicinalProductInteractionInteractantBuilder extends BackboneElementBuilder<MedicinalProductInteractionInteractant, IMedicinalProductInteractionInteractant> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set item choice type
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setItem('Reference', value)
   */
  setItem<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: string
  ): this {
    const key = `item${type}` as keyof IMedicinalProductInteractionInteractant;
    const otherKeys: (keyof IMedicinalProductInteractionInteractant)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IMedicinalProductInteractionInteractant);
      otherKeys.push('_itemReference' as keyof IMedicinalProductInteractionInteractant);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IMedicinalProductInteractionInteractant);
      otherKeys.push('_itemCodeableConcept' as keyof IMedicinalProductInteractionInteractant);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductInteractionInteractant instance
   */
  build(): MedicinalProductInteractionInteractant {
    return new MedicinalProductInteractionInteractant(this.data);
  }

  /**
   * Build and validate the MedicinalProductInteractionInteractant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductInteractionInteractant> {
    const medicinalProductInteractionInteractant = this.build();
    await medicinalProductInteractionInteractant.validateOrThrow();
    return medicinalProductInteractionInteractant;
  }
}
