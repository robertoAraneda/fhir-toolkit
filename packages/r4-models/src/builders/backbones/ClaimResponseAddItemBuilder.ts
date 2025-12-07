import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseAddItem } from '../../models/backbones/ClaimResponseAddItem.js';
import type {
  IAddress,
  IClaimResponseAddItem,
  IClaimResponseAddItemDetail,
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimResponseAddItemBuilder - Fluent builder for ClaimResponseAddItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseAddItem = new ClaimResponseAddItemBuilder()
 *   .setProductOrService(value)
 *   .addItemSequence({ ... })
 *   .build();
 */
export class ClaimResponseAddItemBuilder extends BackboneElementBuilder<ClaimResponseAddItem, IClaimResponseAddItem> {
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

  /**
   * Set bodySite
   * Anatomical location
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set serviced choice type
   * @param type - 'Date' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setServiced('Date', value)
   */
  setServiced<T extends 'Date' | 'Period'>(
    type: T,
    value: string
  ): this {
    const key = `serviced${type}` as keyof IClaimResponseAddItem;
    const otherKeys: (keyof IClaimResponseAddItem)[] = [];
    if (type !== 'Date') {
      otherKeys.push('servicedDate' as keyof IClaimResponseAddItem);
      otherKeys.push('_servicedDate' as keyof IClaimResponseAddItem);
    }
    if (type !== 'Period') {
      otherKeys.push('servicedPeriod' as keyof IClaimResponseAddItem);
      otherKeys.push('_servicedPeriod' as keyof IClaimResponseAddItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set location choice type
   * @param type - 'CodeableConcept' | 'Address' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setLocation('CodeableConcept', value)
   */
  setLocation<T extends 'CodeableConcept' | 'Address' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `location${type}` as keyof IClaimResponseAddItem;
    const otherKeys: (keyof IClaimResponseAddItem)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('locationCodeableConcept' as keyof IClaimResponseAddItem);
      otherKeys.push('_locationCodeableConcept' as keyof IClaimResponseAddItem);
    }
    if (type !== 'Address') {
      otherKeys.push('locationAddress' as keyof IClaimResponseAddItem);
      otherKeys.push('_locationAddress' as keyof IClaimResponseAddItem);
    }
    if (type !== 'Reference') {
      otherKeys.push('locationReference' as keyof IClaimResponseAddItem);
      otherKeys.push('_locationReference' as keyof IClaimResponseAddItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add itemSequence
   * Item sequence number
   */
  addItemSequence(itemSequence: number): this {
    return this.addToArray('itemSequence', itemSequence);
  }

  /**
   * Add detailSequence
   * Detail sequence number
   */
  addDetailSequence(detailSequence: number): this {
    return this.addToArray('detailSequence', detailSequence);
  }

  /**
   * Add subdetailSequence
   * Subdetail sequence number
   */
  addSubdetailSequence(subdetailSequence: number): this {
    return this.addToArray('subdetailSequence', subdetailSequence);
  }

  /**
   * Add provider
   * Authorized providers
   */
  addProvider(provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    return this.addToArray('provider', provider);
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
   * Add subSite
   * Anatomical sub-location
   */
  addSubSite(subSite: ICodeableConcept): this {
    return this.addToArray('subSite', subSite);
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
  addAdjudication(adjudication: IClaimResponseItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add detail
   * Insurer added line details
   */
  addDetail(detail: IClaimResponseAddItemDetail): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseAddItem instance
   */
  build(): ClaimResponseAddItem {
    return new ClaimResponseAddItem(this.data);
  }

  /**
   * Build and validate the ClaimResponseAddItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseAddItem> {
    const claimResponseAddItem = this.build();
    await claimResponseAddItem.validateOrThrow();
    return claimResponseAddItem;
  }
}
