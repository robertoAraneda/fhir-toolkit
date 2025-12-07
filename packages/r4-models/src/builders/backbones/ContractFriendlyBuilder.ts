import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractFriendly } from '../../models/backbones/ContractFriendly.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  IContractFriendly,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractFriendlyBuilder - Fluent builder for ContractFriendly backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractFriendly = new ContractFriendlyBuilder()
 *   .build();
 */
export class ContractFriendlyBuilder extends BackboneElementBuilder<ContractFriendly, IContractFriendly> {
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
    const key = `content${type}` as keyof IContractFriendly;
    const otherKeys: (keyof IContractFriendly)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof IContractFriendly);
      otherKeys.push('_contentAttachment' as keyof IContractFriendly);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof IContractFriendly);
      otherKeys.push('_contentReference' as keyof IContractFriendly);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractFriendly instance
   */
  build(): ContractFriendly {
    return new ContractFriendly(this.data);
  }

  /**
   * Build and validate the ContractFriendly instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractFriendly> {
    const contractFriendly = this.build();
    await contractFriendly.validateOrThrow();
    return contractFriendly;
  }
}
