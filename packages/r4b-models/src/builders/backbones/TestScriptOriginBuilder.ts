import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptOrigin } from '../../models/backbones/TestScriptOrigin.js';
import type {
  ICoding,
  ITestScriptOrigin,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptOriginBuilder - Fluent builder for TestScriptOrigin backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptOrigin = new TestScriptOriginBuilder()
 *   .setIndex(value)
 *   .build();
 */
export class TestScriptOriginBuilder extends BackboneElementBuilder<TestScriptOrigin, ITestScriptOrigin> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set index
   * The index of the abstract origin server starting at 1
   */
  setIndex(index: number): this {
    this.data.index = index;
    return this;
  }

  /**
   * Set profile
   * FHIR-Client | FHIR-SDC-FormFiller
   */
  setProfile(profile: ICoding): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptOrigin instance
   */
  build(): TestScriptOrigin {
    return new TestScriptOrigin(this.data);
  }

  /**
   * Build and validate the TestScriptOrigin instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptOrigin> {
    const testScriptOrigin = this.build();
    await testScriptOrigin.validateOrThrow();
    return testScriptOrigin;
  }
}
