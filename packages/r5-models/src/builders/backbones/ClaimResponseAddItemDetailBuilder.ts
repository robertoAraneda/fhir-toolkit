import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseAddItemDetail } from '../../models/backbones/ClaimResponseAddItemDetail.js';
import type {
  IClaimResponseAddItemDetail,
  IClaimResponseAddItemDetailSubDetail,
  IClaimResponseItemAdjudication,
  IClaimResponseItemReviewOutcome,
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseAddItemDetailBuilder - Fluent builder for ClaimResponseAddItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseAddItemDetail = new ClaimResponseAddItemDetailBuilder()
 *   .setRevenue(value)
 *   .addTraceNumber({ ... })
 *   .build();
 */
export class ClaimResponseAddItemDetailBuilder extends BackboneElementBuilder<ClaimResponseAddItemDetail, IClaimResponseAddItemDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set revenue
   * Revenue or cost center code
   */
  setRevenue(revenue: ICodeableConcept): this {
    this.data.revenue = revenue;
    return this;
  }

  /**
   * Set productOrService
   * Billing, service, product, or drug code
   */
  setProductOrService(productOrService: ICodeableConcept): this {
    this.data.productOrService = productOrService;
    return this;
  }

  /**
   * Set productOrServiceEnd
   * End of a range of codes
   */
  setProductOrServiceEnd(productOrServiceEnd: ICodeableConcept): this {
    this.data.productOrServiceEnd = productOrServiceEnd;
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
   * Set tax
   * Total tax
   */
  setTax(tax: IMoney): this {
    this.data.tax = tax;
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

  /**
   * Set reviewOutcome
   * Added items detail level adjudication results
   */
  setReviewOutcome(reviewOutcome: IClaimResponseItemReviewOutcome): this {
    this.data.reviewOutcome = reviewOutcome;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add traceNumber
   * Number for tracking
   */
  addTraceNumber(traceNumber: IIdentifier): this {
    return this.addToArray('traceNumber', traceNumber);
  }

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
   * Added items detail adjudication
   */
  addAdjudication(adjudication: IClaimResponseItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add subDetail
   * Insurer added line items
   */
  addSubDetail(subDetail: IClaimResponseAddItemDetailSubDetail): this {
    return this.addToArray('subDetail', subDetail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseAddItemDetail instance
   */
  build(): ClaimResponseAddItemDetail {
    return new ClaimResponseAddItemDetail(this.data);
  }

  /**
   * Build and validate the ClaimResponseAddItemDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseAddItemDetail> {
    const claimResponseAddItemDetail = this.build();
    await claimResponseAddItemDetail.validateOrThrow();
    return claimResponseAddItemDetail;
  }
}
