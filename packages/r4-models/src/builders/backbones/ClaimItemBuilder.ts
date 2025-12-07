import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimItem } from '../../models/backbones/ClaimItem.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  IClaimItem,
  IClaimItemDetail,
  ICodeableConcept,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimItemBuilder - Fluent builder for ClaimItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimItem = new ClaimItemBuilder()
 *   .setSequence(value)
 *   .addCareTeamSequence({ ... })
 *   .build();
 */
export class ClaimItemBuilder extends BackboneElementBuilder<ClaimItem, IClaimItem> {
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
   * Set serviced choice type (servicedDate, servicedPeriod)
   * @param type - 'Date' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setServiced('Date', value)
   */
  setServiced<T extends 'Date' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `serviced${type}` as keyof IClaimItem;
    const otherKeys: (keyof IClaimItem)[] = [];
    if (type !== 'Date') {
      otherKeys.push('servicedDate' as keyof IClaimItem);
      otherKeys.push('_servicedDate' as keyof IClaimItem);
    }
    if (type !== 'Period') {
      otherKeys.push('servicedPeriod' as keyof IClaimItem);
      otherKeys.push('_servicedPeriod' as keyof IClaimItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set location choice type (locationCodeableConcept, locationAddress, locationReference)
   * @param type - 'CodeableConcept' | 'Address' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setLocation('CodeableConcept', value)
   */
  setLocation<T extends 'CodeableConcept' | 'Address' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `location${type}` as keyof IClaimItem;
    const otherKeys: (keyof IClaimItem)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('locationCodeableConcept' as keyof IClaimItem);
      otherKeys.push('_locationCodeableConcept' as keyof IClaimItem);
    }
    if (type !== 'Address') {
      otherKeys.push('locationAddress' as keyof IClaimItem);
      otherKeys.push('_locationAddress' as keyof IClaimItem);
    }
    if (type !== 'Reference') {
      otherKeys.push('locationReference' as keyof IClaimItem);
      otherKeys.push('_locationReference' as keyof IClaimItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add careTeamSequence
   * Applicable careTeam members
   */
  addCareTeamSequence(careTeamSequence: number): this {
    return this.addToArray('careTeamSequence', careTeamSequence);
  }

  /**
   * Add diagnosisSequence
   * Applicable diagnoses
   */
  addDiagnosisSequence(diagnosisSequence: number): this {
    return this.addToArray('diagnosisSequence', diagnosisSequence);
  }

  /**
   * Add procedureSequence
   * Applicable procedures
   */
  addProcedureSequence(procedureSequence: number): this {
    return this.addToArray('procedureSequence', procedureSequence);
  }

  /**
   * Add informationSequence
   * Applicable exception and supporting information
   */
  addInformationSequence(informationSequence: number): this {
    return this.addToArray('informationSequence', informationSequence);
  }

  /**
   * Add modifier
   * Product or service billing modifiers
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
   * Add subSite
   * Anatomical sub-location
   */
  addSubSite(subSite: ICodeableConcept): this {
    return this.addToArray('subSite', subSite);
  }

  /**
   * Add encounter
   * Encounters related to this billed item
   */
  addEncounter(encounter: IReference<'Encounter'>): this {
    return this.addToArray('encounter', encounter);
  }

  /**
   * Add detail
   * Product or service provided
   */
  addDetail(detail: IClaimItemDetail): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimItem instance
   */
  build(): ClaimItem {
    return new ClaimItem(this.data);
  }

  /**
   * Build and validate the ClaimItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimItem> {
    const claimItem = this.build();
    await claimItem.validateOrThrow();
    return claimItem;
  }
}
