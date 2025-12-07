import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioInstanceVersion } from '../../models/backbones/ExampleScenarioInstanceVersion.js';
import type {
  IExampleScenarioInstanceVersion,
} from '@fhir-toolkit/r4-types';

/**
 * ExampleScenarioInstanceVersionBuilder - Fluent builder for ExampleScenarioInstanceVersion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioInstanceVersion = new ExampleScenarioInstanceVersionBuilder()
 *   .setVersionId(value)
 *   .build();
 */
export class ExampleScenarioInstanceVersionBuilder extends BackboneElementBuilder<ExampleScenarioInstanceVersion, IExampleScenarioInstanceVersion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set versionId
   * The identifier of a specific version of a resource
   */
  setVersionId(versionId: string): this {
    this.data.versionId = versionId;
    return this;
  }

  /**
   * Set description
   * The description of the resource version
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioInstanceVersion instance
   */
  build(): ExampleScenarioInstanceVersion {
    return new ExampleScenarioInstanceVersion(this.data);
  }

  /**
   * Build and validate the ExampleScenarioInstanceVersion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioInstanceVersion> {
    const exampleScenarioInstanceVersion = this.build();
    await exampleScenarioInstanceVersion.validateOrThrow();
    return exampleScenarioInstanceVersion;
  }
}
