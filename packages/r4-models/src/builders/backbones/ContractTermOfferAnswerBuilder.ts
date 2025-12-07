import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermOfferAnswer } from '../../models/backbones/ContractTermOfferAnswer.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICoding,
  IContractTermOfferAnswer,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractTermOfferAnswerBuilder - Fluent builder for ContractTermOfferAnswer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermOfferAnswer = new ContractTermOfferAnswerBuilder()
 *   .build();
 */
export class ContractTermOfferAnswerBuilder extends BackboneElementBuilder<ContractTermOfferAnswer, IContractTermOfferAnswer> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueBoolean, valueDecimal, valueInteger, valueDate, valueDateTime, valueTime, valueString, valueUri, valueAttachment, valueCoding, valueQuantity, valueReference)
   * @param type - 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Uri' | 'Attachment' | 'Coding' | 'Quantity' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Boolean', value)
   */
  setValue<T extends 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Uri' | 'Attachment' | 'Coding' | 'Quantity' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IContractTermOfferAnswer;
    const otherKeys: (keyof IContractTermOfferAnswer)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueBoolean' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueDecimal' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueInteger' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueDate' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueDateTime' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueTime' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueString' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueUri' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueAttachment' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueCoding' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueQuantity' as keyof IContractTermOfferAnswer);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IContractTermOfferAnswer);
      otherKeys.push('_valueReference' as keyof IContractTermOfferAnswer);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermOfferAnswer instance
   */
  build(): ContractTermOfferAnswer {
    return new ContractTermOfferAnswer(this.data);
  }

  /**
   * Build and validate the ContractTermOfferAnswer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermOfferAnswer> {
    const contractTermOfferAnswer = this.build();
    await contractTermOfferAnswer.validateOrThrow();
    return contractTermOfferAnswer;
  }
}
