import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioInstanceVersion } from '../../models/backbones/ExampleScenarioInstanceVersion.js';
import type {
  IExampleScenarioInstanceVersion,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioInstanceVersionBuilder - Fluent builder for ExampleScenarioInstanceVersion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioInstanceVersion = new ExampleScenarioInstanceVersionBuilder()
 *   .setKey(value)
 *   .build();
 */
export class ExampleScenarioInstanceVersionBuilder extends BackboneElementBuilder<ExampleScenarioInstanceVersion, IExampleScenarioInstanceVersion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set key
   * ID or acronym of the version
   */
  setKey(key: string): this {
    this.data.key = key;
    return this;
  }

  /**
   * Set title
   * Label for instance version
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Details about version
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set content
   * Example instance version data
   */
  setContent(content: IReference): this {
    this.data.content = content;
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
