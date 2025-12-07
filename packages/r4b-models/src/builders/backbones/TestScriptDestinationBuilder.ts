import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptDestination } from '../../models/backbones/TestScriptDestination.js';
import type {
  ICoding,
  ITestScriptDestination,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptDestinationBuilder - Fluent builder for TestScriptDestination backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptDestination = new TestScriptDestinationBuilder()
 *   .setIndex(value)
 *   .build();
 */
export class TestScriptDestinationBuilder extends BackboneElementBuilder<TestScriptDestination, ITestScriptDestination> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set index
   * The index of the abstract destination server starting at 1
   */
  setIndex(index: number): this {
    this.data.index = index;
    return this;
  }

  /**
   * Set profile
   * FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor
   */
  setProfile(profile: ICoding): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptDestination instance
   */
  build(): TestScriptDestination {
    return new TestScriptDestination(this.data);
  }

  /**
   * Build and validate the TestScriptDestination instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptDestination> {
    const testScriptDestination = this.build();
    await testScriptDestination.validateOrThrow();
    return testScriptDestination;
  }
}
