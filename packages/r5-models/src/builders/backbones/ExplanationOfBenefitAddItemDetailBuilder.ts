import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitAddItemDetail } from '../../models/backbones/ExplanationOfBenefitAddItemDetail.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitAddItemDetail,
  IExplanationOfBenefitAddItemDetailSubDetail,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemReviewOutcome,
  IIdentifier,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitAddItemDetailBuilder - Fluent builder for ExplanationOfBenefitAddItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitAddItemDetail = new ExplanationOfBenefitAddItemDetailBuilder()
 *   .setRevenue(value)
 *   .addTraceNumber({ ... })
 *   .build();
 */
export class ExplanationOfBenefitAddItemDetailBuilder extends BackboneElementBuilder<ExplanationOfBenefitAddItemDetail, IExplanationOfBenefitAddItemDetail> {
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
   * Set patientPaid
   * Paid by the patient
   */
  setPatientPaid(patientPaid: IMoney): this {
    this.data.patientPaid = patientPaid;
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
   * Additem detail level adjudication results
   */
  setReviewOutcome(reviewOutcome: IExplanationOfBenefitItemReviewOutcome): this {
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
