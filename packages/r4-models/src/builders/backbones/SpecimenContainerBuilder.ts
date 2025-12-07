import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenContainer } from '../../models/backbones/SpecimenContainer.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  IReference,
  ISpecimenContainer,
} from '@fhir-toolkit/r4-types';

/**
 * SpecimenContainerBuilder - Fluent builder for SpecimenContainer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenContainer = new SpecimenContainerBuilder()
 *   .setDescription(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SpecimenContainerBuilder extends BackboneElementBuilder<SpecimenContainer, ISpecimenContainer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Textual description of the container
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * Kind of container directly associated with specimen
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set capacity
   * Container volume or size
   */
  setCapacity(capacity: IQuantity): this {
    this.data.capacity = capacity;
    return this;
  }

  /**
   * Set specimenQuantity
   * Quantity of specimen within container
   */
  setSpecimenQuantity(specimenQuantity: IQuantity): this {
    this.data.specimenQuantity = specimenQuantity;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set additive choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAdditive('CodeableConcept', value)
   */
  setAdditive<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `additive${type}` as keyof ISpecimenContainer;
    const otherKeys: (keyof ISpecimenContainer)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('additiveCodeableConcept' as keyof ISpecimenContainer);
      otherKeys.push('_additiveCodeableConcept' as keyof ISpecimenContainer);
    }
    if (type !== 'Reference') {
      otherKeys.push('additiveReference' as keyof ISpecimenContainer);
      otherKeys.push('_additiveReference' as keyof ISpecimenContainer);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Id for the container
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenContainer instance
   */
  build(): SpecimenContainer {
    return new SpecimenContainer(this.data);
  }

  /**
   * Build and validate the SpecimenContainer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenContainer> {
    const specimenContainer = this.build();
    await specimenContainer.validateOrThrow();
    return specimenContainer;
  }
}
