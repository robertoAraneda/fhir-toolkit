import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitItemDetail } from '../../models/backbones/ExplanationOfBenefitItemDetail.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemDetail,
  IExplanationOfBenefitItemDetailSubDetail,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ExplanationOfBenefitItemDetailBuilder - Fluent builder for ExplanationOfBenefitItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitItemDetail = new ExplanationOfBenefitItemDetailBuilder()
 *   .setSequence(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class ExplanationOfBenefitItemDetailBuilder extends BackboneElementBuilder<ExplanationOfBenefitItemDetail, IExplanationOfBenefitItemDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Product or service provided
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set revenue
   * Revenue or cost center code
   */
  setRevenue(revenue: ICodeableConcept): this {
    this.data.revenue = revenue;
    return this;
  }

  /**
   * Set category
   * Benefit classification
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
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
   * Add programCode
   * Program the product or service is provided under
   */
  addProgramCode(programCode: ICodeableConcept): this {
    return this.addToArray('programCode', programCode);
  }

  /**
   * Add udi
   * Unique device identifier
   */
  addUdi(udi: IReference<'Device'>): this {
    return this.addToArray('udi', udi);
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
   * Detail level adjudication details
   */
  addAdjudication(adjudication: IExplanationOfBenefitItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add subDetail
   * Additional items
   */
  addSubDetail(subDetail: IExplanationOfBenefitItemDetailSubDetail): this {
    return this.addToArray('subDetail', subDetail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitItemDetail instance
   */
  build(): ExplanationOfBenefitItemDetail {
    return new ExplanationOfBenefitItemDetail(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitItemDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitItemDetail> {
    const explanationOfBenefitItemDetail = this.build();
    await explanationOfBenefitItemDetail.validateOrThrow();
    return explanationOfBenefitItemDetail;
  }
}
