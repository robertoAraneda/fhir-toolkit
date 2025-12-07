import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseAddItemDetailSubDetail } from '../../models/backbones/ClaimResponseAddItemDetailSubDetail.js';
import type {
  IClaimResponseAddItemDetailSubDetail,
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimResponseAddItemDetailSubDetailBuilder - Fluent builder for ClaimResponseAddItemDetailSubDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseAddItemDetailSubDetail = new ClaimResponseAddItemDetailSubDetailBuilder()
 *   .setProductOrService(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class ClaimResponseAddItemDetailSubDetailBuilder extends BackboneElementBuilder<ClaimResponseAddItemDetailSubDetail, IClaimResponseAddItemDetailSubDetail> {
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseAddItemDetailSubDetail instance
   */
  build(): ClaimResponseAddItemDetailSubDetail {
    return new ClaimResponseAddItemDetailSubDetail(this.data);
  }

  /**
   * Build and validate the ClaimResponseAddItemDetailSubDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseAddItemDetailSubDetail> {
    const claimResponseAddItemDetailSubDetail = this.build();
    await claimResponseAddItemDetailSubDetail.validateOrThrow();
    return claimResponseAddItemDetailSubDetail;
  }
}
