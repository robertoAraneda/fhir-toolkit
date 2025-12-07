import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenDefinitionTypeTestedContainer } from '../../models/backbones/SpecimenDefinitionTypeTestedContainer.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IQuantity,
  ISpecimenDefinitionTypeTestedContainer,
  ISpecimenDefinitionTypeTestedContainerAdditive,
} from '@fhir-toolkit/r4-types';

/**
 * SpecimenDefinitionTypeTestedContainerBuilder - Fluent builder for SpecimenDefinitionTypeTestedContainer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenDefinitionTypeTestedContainer = new SpecimenDefinitionTypeTestedContainerBuilder()
 *   .setMaterial(value)
 *   .addAdditive({ ... })
 *   .build();
 */
export class SpecimenDefinitionTypeTestedContainerBuilder extends BackboneElementBuilder<SpecimenDefinitionTypeTestedContainer, ISpecimenDefinitionTypeTestedContainer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set material
   * Container material
   */
  setMaterial(material: ICodeableConcept): this {
    this.data.material = material;
    return this;
  }

  /**
   * Set type
   * Kind of container associated with the kind of specimen
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set cap
   * Color of container cap
   */
  setCap(cap: ICodeableConcept): this {
    this.data.cap = cap;
    return this;
  }

  /**
   * Set description
   * Container description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set capacity
   * Container capacity
   */
  setCapacity(capacity: IQuantity): this {
    this.data.capacity = capacity;
    return this;
  }

  /**
   * Set preparation
   * Specimen container preparation
   */
  setPreparation(preparation: string): this {
    this.data.preparation = preparation;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set minimumVolume choice type (minimumVolumeQuantity, minimumVolumeString)
   * @param type - 'Quantity' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMinimumVolume('Quantity', value)
   */
  setMinimumVolume<T extends 'Quantity' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `minimumVolume${type}` as keyof ISpecimenDefinitionTypeTestedContainer;
    const otherKeys: (keyof ISpecimenDefinitionTypeTestedContainer)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('minimumVolumeQuantity' as keyof ISpecimenDefinitionTypeTestedContainer);
      otherKeys.push('_minimumVolumeQuantity' as keyof ISpecimenDefinitionTypeTestedContainer);
    }
    if (type !== 'String') {
      otherKeys.push('minimumVolumeString' as keyof ISpecimenDefinitionTypeTestedContainer);
      otherKeys.push('_minimumVolumeString' as keyof ISpecimenDefinitionTypeTestedContainer);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add additive
   * Additive associated with container
   */
  addAdditive(additive: ISpecimenDefinitionTypeTestedContainerAdditive): this {
    return this.addToArray('additive', additive);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenDefinitionTypeTestedContainer instance
   */
  build(): SpecimenDefinitionTypeTestedContainer {
    return new SpecimenDefinitionTypeTestedContainer(this.data);
  }

  /**
   * Build and validate the SpecimenDefinitionTypeTestedContainer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenDefinitionTypeTestedContainer> {
    const specimenDefinitionTypeTestedContainer = this.build();
    await specimenDefinitionTypeTestedContainer.validateOrThrow();
    return specimenDefinitionTypeTestedContainer;
  }
}
