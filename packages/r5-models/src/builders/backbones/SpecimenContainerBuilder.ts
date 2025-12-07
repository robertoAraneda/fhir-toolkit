import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenContainer } from '../../models/backbones/SpecimenContainer.js';
import type {
  IQuantity,
  IReference,
  ISpecimenContainer,
} from '@fhir-toolkit/r5-types';

/**
 * SpecimenContainerBuilder - Fluent builder for SpecimenContainer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenContainer = new SpecimenContainerBuilder()
 *   .setDevice(value)
 *   .build();
 */
export class SpecimenContainerBuilder extends BackboneElementBuilder<SpecimenContainer, ISpecimenContainer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set device
   * Device resource for the container
   */
  setDevice(device: IReference<'Device'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set location
   * Where the container is
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
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
