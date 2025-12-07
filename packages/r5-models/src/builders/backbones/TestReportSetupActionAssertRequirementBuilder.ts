import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportSetupActionAssertRequirement } from '../../models/backbones/TestReportSetupActionAssertRequirement.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ITestReportSetupActionAssertRequirement,
} from '@fhir-toolkit/r5-types';

/**
 * TestReportSetupActionAssertRequirementBuilder - Fluent builder for TestReportSetupActionAssertRequirement backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportSetupActionAssertRequirement = new TestReportSetupActionAssertRequirementBuilder()
 *   .build();
 */
export class TestReportSetupActionAssertRequirementBuilder extends BackboneElementBuilder<TestReportSetupActionAssertRequirement, ITestReportSetupActionAssertRequirement> {
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
    const key = `link${type}` as keyof ITestReportSetupActionAssertRequirement;
    const otherKeys: (keyof ITestReportSetupActionAssertRequirement)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('linkUri' as keyof ITestReportSetupActionAssertRequirement);
      otherKeys.push('_linkUri' as keyof ITestReportSetupActionAssertRequirement);
    }
    if (type !== 'Canonical') {
      otherKeys.push('linkCanonical' as keyof ITestReportSetupActionAssertRequirement);
      otherKeys.push('_linkCanonical' as keyof ITestReportSetupActionAssertRequirement);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportSetupActionAssertRequirement instance
   */
  build(): TestReportSetupActionAssertRequirement {
    return new TestReportSetupActionAssertRequirement(this.data);
  }

  /**
   * Build and validate the TestReportSetupActionAssertRequirement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportSetupActionAssertRequirement> {
    const testReportSetupActionAssertRequirement = this.build();
    await testReportSetupActionAssertRequirement.validateOrThrow();
    return testReportSetupActionAssertRequirement;
  }
}
