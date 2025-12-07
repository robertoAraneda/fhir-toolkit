import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptSetupActionAssertRequirement } from '../../models/backbones/TestScriptSetupActionAssertRequirement.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ITestScriptSetupActionAssertRequirement,
} from '@fhir-toolkit/r5-types';

/**
 * TestScriptSetupActionAssertRequirementBuilder - Fluent builder for TestScriptSetupActionAssertRequirement backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptSetupActionAssertRequirement = new TestScriptSetupActionAssertRequirementBuilder()
 *   .build();
 */
export class TestScriptSetupActionAssertRequirementBuilder extends BackboneElementBuilder<TestScriptSetupActionAssertRequirement, ITestScriptSetupActionAssertRequirement> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set link choice type (linkUri, linkCanonical)
   * @param type - 'Uri' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setLink('Uri', value)
   */
  setLink<T extends 'Uri' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `link${type}` as keyof ITestScriptSetupActionAssertRequirement;
    const otherKeys: (keyof ITestScriptSetupActionAssertRequirement)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('linkUri' as keyof ITestScriptSetupActionAssertRequirement);
      otherKeys.push('_linkUri' as keyof ITestScriptSetupActionAssertRequirement);
    }
    if (type !== 'Canonical') {
      otherKeys.push('linkCanonical' as keyof ITestScriptSetupActionAssertRequirement);
      otherKeys.push('_linkCanonical' as keyof ITestScriptSetupActionAssertRequirement);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptSetupActionAssertRequirement instance
   */
  build(): TestScriptSetupActionAssertRequirement {
    return new TestScriptSetupActionAssertRequirement(this.data);
  }

  /**
   * Build and validate the TestScriptSetupActionAssertRequirement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptSetupActionAssertRequirement> {
    const testScriptSetupActionAssertRequirement = this.build();
    await testScriptSetupActionAssertRequirement.validateOrThrow();
    return testScriptSetupActionAssertRequirement;
  }
}
