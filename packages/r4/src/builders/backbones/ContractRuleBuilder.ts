import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractRule } from '../../models/backbones/ContractRule.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  IContractRule,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractRuleBuilder - Fluent builder for ContractRule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractRule = new ContractRuleBuilder()
 *   .build();
 */
export class ContractRuleBuilder extends BackboneElementBuilder<ContractRule, IContractRule> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set content choice type (contentAttachment, contentReference)
   * @param type - 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setContent('Attachment', value)
   */
  setContent<T extends 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `content${type}` as keyof IContractRule;
    const otherKeys: (keyof IContractRule)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof IContractRule);
      otherKeys.push('_contentAttachment' as keyof IContractRule);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof IContractRule);
      otherKeys.push('_contentReference' as keyof IContractRule);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractRule instance
   */
  build(): ContractRule {
    return new ContractRule(this.data);
  }

  /**
   * Build and validate the ContractRule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractRule> {
    const contractRule = this.build();
    await contractRule.validateOrThrow();
    return contractRule;
  }
}
