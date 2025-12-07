import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimItemDetail } from '../../models/backbones/ClaimItemDetail.js';
import type {
  IClaimItemDetail,
  IClaimItemDetailSubDetail,
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimItemDetailBuilder - Fluent builder for ClaimItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimItemDetail = new ClaimItemDetailBuilder()
 *   .setSequence(value)
 *   .addTraceNumber({ ... })
 *   .build();
 */
export class ClaimItemDetailBuilder extends BackboneElementBuilder<ClaimItemDetail, IClaimItemDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Item instance identifier
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
   * Add subDetail
   * Product or service provided
   */
  addSubDetail(subDetail: IClaimItemDetailSubDetail): this {
    return this.addToArray('subDetail', subDetail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimItemDetail instance
   */
  build(): ClaimItemDetail {
    return new ClaimItemDetail(this.data);
  }

  /**
   * Build and validate the ClaimItemDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimItemDetail> {
    const claimItemDetail = this.build();
    await claimItemDetail.validateOrThrow();
    return claimItemDetail;
  }
}
