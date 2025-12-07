import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitAddItemDetail } from '../../models/backbones/ExplanationOfBenefitAddItemDetail.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitAddItemDetail,
  IExplanationOfBenefitAddItemDetailSubDetail,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * ExplanationOfBenefitAddItemDetailBuilder - Fluent builder for ExplanationOfBenefitAddItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitAddItemDetail = new ExplanationOfBenefitAddItemDetailBuilder()
 *   .setProductOrService(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class ExplanationOfBenefitAddItemDetailBuilder extends BackboneElementBuilder<ExplanationOfBenefitAddItemDetail, IExplanationOfBenefitAddItemDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set productOrService
   * Billing, service, product, or drug code
   */
  setProductOrService(productOrService: ICodeableConcept): this {
    this.data.productOrService = productOrService;
    return this;
  }

  /**
   * Set quantity
   * Count of products or services
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set unitPrice
   * Fee, charge or cost per item
   */
  setUnitPrice(unitPrice: IMoney): this {
    this.data.unitPrice = unitPrice;
    return this;
  }

  /**
   * Set factor
   * Price scaling factor
   */
  setFactor(factor: number): this {
    this.data.factor = factor;
    return this;
  }

  /**
   * Set net
   * Total item cost
   */
  setNet(net: IMoney): this {
    this.data.net = net;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add modifier
   * Service/Product billing modifiers
   */
  addModifier(modifier: ICodeableConcept): this {
    return this.addToArray('modifier', modifier);
  }

  /**
   * Add noteNumber
   * Applicable note numbers
   */
  addNoteNumber(noteNumber: number): this {
    return this.addToArray('noteNumber', noteNumber);
  }

  /**
   * Add adjudication
   * Added items adjudication
   */
  addAdjudication(adjudication: IExplanationOfBenefitItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add subDetail
   * Insurer added line items
   */
  addSubDetail(subDetail: IExplanationOfBenefitAddItemDetailSubDetail): this {
    return this.addToArray('subDetail', subDetail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitAddItemDetail instance
   */
  build(): ExplanationOfBenefitAddItemDetail {
    return new ExplanationOfBenefitAddItemDetail(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitAddItemDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitAddItemDetail> {
    const explanationOfBenefitAddItemDetail = this.build();
    await explanationOfBenefitAddItemDetail.validateOrThrow();
    return explanationOfBenefitAddItemDetail;
  }
}
