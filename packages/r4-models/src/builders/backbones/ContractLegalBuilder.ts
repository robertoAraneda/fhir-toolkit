import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractLegal } from '../../models/backbones/ContractLegal.js';
import type {
  IAttachment,
  IContractLegal,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractLegalBuilder - Fluent builder for ContractLegal backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractLegal = new ContractLegalBuilder()
 *   .build();
 */
export class ContractLegalBuilder extends BackboneElementBuilder<ContractLegal, IContractLegal> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set content choice type
   * @param type - 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setContent('Attachment', value)
   */
  setContent<T extends 'Attachment' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `content${type}` as keyof IContractLegal;
    const otherKeys: (keyof IContractLegal)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof IContractLegal);
      otherKeys.push('_contentAttachment' as keyof IContractLegal);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof IContractLegal);
      otherKeys.push('_contentReference' as keyof IContractLegal);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractLegal instance
   */
  build(): ContractLegal {
    return new ContractLegal(this.data);
  }

  /**
   * Build and validate the ContractLegal instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractLegal> {
    const contractLegal = this.build();
    await contractLegal.validateOrThrow();
    return contractLegal;
  }
}
