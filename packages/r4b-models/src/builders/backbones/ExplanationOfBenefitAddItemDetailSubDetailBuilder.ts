import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitAddItemDetailSubDetail } from '../../models/backbones/ExplanationOfBenefitAddItemDetailSubDetail.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitAddItemDetailSubDetail,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitAddItemDetailSubDetailBuilder - Fluent builder for ExplanationOfBenefitAddItemDetailSubDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitAddItemDetailSubDetail = new ExplanationOfBenefitAddItemDetailSubDetailBuilder()
 *   .setProductOrService(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class ExplanationOfBenefitAddItemDetailSubDetailBuilder extends BackboneElementBuilder<ExplanationOfBenefitAddItemDetailSubDetail, IExplanationOfBenefitAddItemDetailSubDetail> {
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitAddItemDetailSubDetail instance
   */
  build(): ExplanationOfBenefitAddItemDetailSubDetail {
    return new ExplanationOfBenefitAddItemDetailSubDetail(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitAddItemDetailSubDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitAddItemDetailSubDetail> {
    const explanationOfBenefitAddItemDetailSubDetail = this.build();
    await explanationOfBenefitAddItemDetailSubDetail.validateOrThrow();
    return explanationOfBenefitAddItemDetailSubDetail;
  }
}
