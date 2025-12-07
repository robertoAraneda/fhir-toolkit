import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptMetadataLink } from '../../models/backbones/TestScriptMetadataLink.js';
import type {
  ITestScriptMetadataLink,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptMetadataLinkBuilder - Fluent builder for TestScriptMetadataLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptMetadataLink = new TestScriptMetadataLinkBuilder()
 *   .setUrl(value)
 *   .build();
 */
export class TestScriptMetadataLinkBuilder extends BackboneElementBuilder<TestScriptMetadataLink, ITestScriptMetadataLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * URL to the specification
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set description
   * Short description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptMetadataLink instance
   */
  build(): TestScriptMetadataLink {
    return new TestScriptMetadataLink(this.data);
  }

  /**
   * Build and validate the TestScriptMetadataLink instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptMetadataLink> {
    const testScriptMetadataLink = this.build();
    await testScriptMetadataLink.validateOrThrow();
    return testScriptMetadataLink;
  }
}
