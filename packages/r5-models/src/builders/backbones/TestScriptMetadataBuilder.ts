import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptMetadata } from '../../models/backbones/TestScriptMetadata.js';
import type {
  ITestScriptMetadata,
  ITestScriptMetadataCapability,
  ITestScriptMetadataLink,
} from '@fhir-toolkit/r5-types';

/**
 * TestScriptMetadataBuilder - Fluent builder for TestScriptMetadata backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptMetadata = new TestScriptMetadataBuilder()
 *   .addLink({ ... })
 *   .build();
 */
export class TestScriptMetadataBuilder extends BackboneElementBuilder<TestScriptMetadata, ITestScriptMetadata> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add link
   * Links to the FHIR specification
   */
  addLink(link: ITestScriptMetadataLink): this {
    return this.addToArray('link', link);
  }

  /**
   * Add capability
   * Capabilities  that are assumed to function correctly on the FHIR server being tested
   */
  addCapability(capability: ITestScriptMetadataCapability): this {
    return this.addToArray('capability', capability);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptMetadata instance
   */
  build(): TestScriptMetadata {
    return new TestScriptMetadata(this.data);
  }

  /**
   * Build and validate the TestScriptMetadata instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptMetadata> {
    const testScriptMetadata = this.build();
    await testScriptMetadata.validateOrThrow();
    return testScriptMetadata;
  }
}
