import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseAddItemDetail } from '../../models/backbones/ClaimResponseAddItemDetail.js';
import type {
  IClaimResponseAddItemDetail,
  IClaimResponseAddItemDetailSubDetail,
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * ClaimResponseAddItemDetailBuilder - Fluent builder for ClaimResponseAddItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseAddItemDetail = new ClaimResponseAddItemDetailBuilder()
 *   .setProductOrService(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class ClaimResponseAddItemDetailBuilder extends BackboneElementBuilder<ClaimResponseAddItemDetail, IClaimResponseAddItemDetail> {
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
