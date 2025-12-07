import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptScope } from '../../models/backbones/TestScriptScope.js';
import type {
  ICodeableConcept,
  ITestScriptScope,
} from '@fhir-toolkit/r5-types';

/**
 * TestScriptScopeBuilder - Fluent builder for TestScriptScope backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptScope = new TestScriptScopeBuilder()
 *   .setArtifact(value)
 *   .build();
 */
export class TestScriptScopeBuilder extends BackboneElementBuilder<TestScriptScope, ITestScriptScope> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set artifact
   * The specific conformance artifact being tested
   */
  setArtifact(artifact: string): this {
    this.data.artifact = artifact;
    return this;
  }

  /**
   * Set conformance
   * required | optional | strict
   */
  setConformance(conformance: ICodeableConcept): this {
    this.data.conformance = conformance;
    return this;
  }

  /**
   * Set phase
   * unit | integration | production
   */
  setPhase(phase: ICodeableConcept): this {
    this.data.phase = phase;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptScope instance
   */
  build(): TestScriptScope {
    return new TestScriptScope(this.data);
  }

  /**
   * Build and validate the TestScriptScope instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptScope> {
    const testScriptScope = this.build();
    await testScriptScope.validateOrThrow();
    return testScriptScope;
  }
}
