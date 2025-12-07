import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptFixture } from '../../models/backbones/TestScriptFixture.js';
import type {
  IReference,
  ITestScriptFixture,
} from '@fhir-toolkit/r5-types';

/**
 * TestScriptFixtureBuilder - Fluent builder for TestScriptFixture backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptFixture = new TestScriptFixtureBuilder()
 *   .setAutocreate(value)
 *   .build();
 */
export class TestScriptFixtureBuilder extends BackboneElementBuilder<TestScriptFixture, ITestScriptFixture> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set autocreate
   * Whether or not to implicitly create the fixture during setup
   */
  setAutocreate(autocreate: boolean): this {
    this.data.autocreate = autocreate;
    return this;
  }

  /**
   * Set autodelete
   * Whether or not to implicitly delete the fixture during teardown
   */
  setAutodelete(autodelete: boolean): this {
    this.data.autodelete = autodelete;
    return this;
  }

  /**
   * Set resource
   * Reference of the resource
   */
  setResource(resource: IReference<'Resource'>): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptFixture instance
   */
  build(): TestScriptFixture {
    return new TestScriptFixture(this.data);
  }

  /**
   * Build and validate the TestScriptFixture instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptFixture> {
    const testScriptFixture = this.build();
    await testScriptFixture.validateOrThrow();
    return testScriptFixture;
  }
}
