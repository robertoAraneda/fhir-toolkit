import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementImplementation } from '../../models/backbones/CapabilityStatementImplementation.js';
import type {
  ICapabilityStatementImplementation,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementImplementationBuilder - Fluent builder for CapabilityStatementImplementation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementImplementation = new CapabilityStatementImplementationBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class CapabilityStatementImplementationBuilder extends BackboneElementBuilder<CapabilityStatementImplementation, ICapabilityStatementImplementation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Describes this specific instance
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set url
   * Base URL for the installation
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set custodian
   * Organization that manages the data
   */
  setCustodian(custodian: IReference<'Organization'>): this {
    this.data.custodian = custodian;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementImplementation instance
   */
  build(): CapabilityStatementImplementation {
    return new CapabilityStatementImplementation(this.data);
  }

  /**
   * Build and validate the CapabilityStatementImplementation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementImplementation> {
    const capabilityStatementImplementation = this.build();
    await capabilityStatementImplementation.validateOrThrow();
    return capabilityStatementImplementation;
  }
}
