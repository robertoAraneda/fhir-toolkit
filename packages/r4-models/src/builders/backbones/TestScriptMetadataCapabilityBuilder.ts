import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptMetadataCapability } from '../../models/backbones/TestScriptMetadataCapability.js';
import type {
  ITestScriptMetadataCapability,
} from '@fhir-toolkit/r4-types';

/**
 * TestScriptMetadataCapabilityBuilder - Fluent builder for TestScriptMetadataCapability backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptMetadataCapability = new TestScriptMetadataCapabilityBuilder()
 *   .setRequired(value)
 *   .addOrigin({ ... })
 *   .build();
 */
export class TestScriptMetadataCapabilityBuilder extends BackboneElementBuilder<TestScriptMetadataCapability, ITestScriptMetadataCapability> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set required
   * Are the capabilities required?
   */
  setRequired(required: boolean): this {
    this.data.required = required;
    return this;
  }

  /**
   * Set validated
   * Are the capabilities validated?
   */
  setValidated(validated: boolean): this {
    this.data.validated = validated;
    return this;
  }

  /**
   * Set description
   * The expected capabilities of the server
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set destination
   * Which server these requirements apply to
   */
  setDestination(destination: number): this {
    this.data.destination = destination;
    return this;
  }

  /**
   * Set capabilities
   * Required Capability Statement
   */
  setCapabilities(capabilities: string): this {
    this.data.capabilities = capabilities;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add origin
   * Which origin server these requirements apply to
   */
  addOrigin(origin: number): this {
    return this.addToArray('origin', origin);
  }

  /**
   * Add link
   * Links to the FHIR specification
   */
  addLink(link: string): this {
    return this.addToArray('link', link);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptMetadataCapability instance
   */
  build(): TestScriptMetadataCapability {
    return new TestScriptMetadataCapability(this.data);
  }

  /**
   * Build and validate the TestScriptMetadataCapability instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptMetadataCapability> {
    const testScriptMetadataCapability = this.build();
    await testScriptMetadataCapability.validateOrThrow();
    return testScriptMetadataCapability;
  }
}
