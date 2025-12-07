import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermAssetValuedItem } from '../../models/backbones/ContractTermAssetValuedItem.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IContractTermAssetValuedItem,
  IIdentifier,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ContractTermAssetValuedItemBuilder - Fluent builder for ContractTermAssetValuedItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermAssetValuedItem = new ContractTermAssetValuedItemBuilder()
 *   .setIdentifier(value)
 *   .addLinkId({ ... })
 *   .build();
 */
export class ContractTermAssetValuedItemBuilder extends BackboneElementBuilder<ContractTermAssetValuedItem, IContractTermAssetValuedItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Contract Valued Item Number
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set effectiveTime
   * Contract Valued Item Effective Tiem
   */
  setEffectiveTime(effectiveTime: string): this {
    this.data.effectiveTime = effectiveTime;
    return this;
  }

  /**
   * Set quantity
   * Count of Contract Valued Items
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set unitPrice
   * Contract Valued Item fee, charge, or cost
   */
  setUnitPrice(unitPrice: IMoney): this {
    this.data.unitPrice = unitPrice;
    return this;
  }

  /**
   * Set factor
   * Contract Valued Item Price Scaling Factor
   */
  setFactor(factor: number): this {
    this.data.factor = factor;
    return this;
  }

  /**
   * Set points
   * Contract Valued Item Difficulty Scaling Factor
   */
  setPoints(points: number): this {
    this.data.points = points;
    return this;
  }

  /**
   * Set net
   * Total Contract Valued Item Value
   */
  setNet(net: IMoney): this {
    this.data.net = net;
    return this;
  }

  /**
   * Set payment
   * Terms of valuation
   */
  setPayment(payment: string): this {
    this.data.payment = payment;
    return this;
  }

  /**
   * Set paymentDate
   * When payment is due
   */
  setPaymentDate(paymentDate: string): this {
    this.data.paymentDate = paymentDate;
    return this;
  }

  /**
   * Set responsible
   * Who will make payment
   */
  setResponsible(responsible: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.responsible = responsible;
    return this;
  }

  /**
   * Set recipient
   * Who will receive payment
   */
  setRecipient(recipient: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.recipient = recipient;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set entity choice type (entityCodeableConcept, entityReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEntity('CodeableConcept', value)
   */
  setEntity<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `entity${type}` as keyof IContractTermAssetValuedItem;
    const otherKeys: (keyof IContractTermAssetValuedItem)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('entityCodeableConcept' as keyof IContractTermAssetValuedItem);
      otherKeys.push('_entityCodeableConcept' as keyof IContractTermAssetValuedItem);
    }
    if (type !== 'Reference') {
      otherKeys.push('entityReference' as keyof IContractTermAssetValuedItem);
      otherKeys.push('_entityReference' as keyof IContractTermAssetValuedItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add linkId
   * Pointer to specific item
   */
  addLinkId(linkId: string): this {
    return this.addToArray('linkId', linkId);
  }

  /**
   * Add securityLabelNumber
   * Security Labels that define affected terms
   */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addToArray('securityLabelNumber', securityLabelNumber);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermAssetValuedItem instance
   */
  build(): ContractTermAssetValuedItem {
    return new ContractTermAssetValuedItem(this.data);
  }

  /**
   * Build and validate the ContractTermAssetValuedItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermAssetValuedItem> {
    const contractTermAssetValuedItem = this.build();
    await contractTermAssetValuedItem.validateOrThrow();
    return contractTermAssetValuedItem;
  }
}
