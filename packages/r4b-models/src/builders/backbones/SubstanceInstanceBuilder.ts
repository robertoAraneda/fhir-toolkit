import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceInstance } from '../../models/backbones/SubstanceInstance.js';
import type {
  IIdentifier,
  IQuantity,
  ISubstanceInstance,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceInstanceBuilder - Fluent builder for SubstanceInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceInstance = new SubstanceInstanceBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class SubstanceInstanceBuilder extends BackboneElementBuilder<SubstanceInstance, ISubstanceInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifier of the package/container
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set expiry
   * When no longer valid to use
   */
  setExpiry(expiry: string): this {
    this.data.expiry = expiry;
    return this;
  }

  /**
   * Set quantity
   * Amount of substance in the package
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceInstance instance
   */
  build(): SubstanceInstance {
    return new SubstanceInstance(this.data);
  }

  /**
   * Build and validate the SubstanceInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceInstance> {
    const substanceInstance = this.build();
    await substanceInstance.validateOrThrow();
    return substanceInstance;
  }
}
