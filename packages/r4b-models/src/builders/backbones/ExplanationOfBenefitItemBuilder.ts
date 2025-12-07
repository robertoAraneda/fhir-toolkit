import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitItem } from '../../models/backbones/ExplanationOfBenefitItem.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  ICodeableConcept,
  IExplanationOfBenefitItem,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemDetail,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitItemBuilder - Fluent builder for ExplanationOfBenefitItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitItem = new ExplanationOfBenefitItemBuilder()
 *   .setSequence(value)
 *   .addCareTeamSequence({ ... })
 *   .build();
 */
export class ExplanationOfBenefitItemBuilder extends BackboneElementBuilder<ExplanationOfBenefitItem, IExplanationOfBenefitItem> {
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
    const key = `serviced${type}` as keyof IExplanationOfBenefitItem;
    const otherKeys: (keyof IExplanationOfBenefitItem)[] = [];
    if (type !== 'Date') {
      otherKeys.push('servicedDate' as keyof IExplanationOfBenefitItem);
      otherKeys.push('_servicedDate' as keyof IExplanationOfBenefitItem);
    }
    if (type !== 'Period') {
      otherKeys.push('servicedPeriod' as keyof IExplanationOfBenefitItem);
      otherKeys.push('_servicedPeriod' as keyof IExplanationOfBenefitItem);
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
    const key = `location${type}` as keyof IExplanationOfBenefitItem;
    const otherKeys: (keyof IExplanationOfBenefitItem)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('locationCodeableConcept' as keyof IExplanationOfBenefitItem);
      otherKeys.push('_locationCodeableConcept' as keyof IExplanationOfBenefitItem);
    }
    if (type !== 'Address') {
      otherKeys.push('locationAddress' as keyof IExplanationOfBenefitItem);
      otherKeys.push('_locationAddress' as keyof IExplanationOfBenefitItem);
    }
    if (type !== 'Reference') {
      otherKeys.push('locationReference' as keyof IExplanationOfBenefitItem);
      otherKeys.push('_locationReference' as keyof IExplanationOfBenefitItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add careTeamSequence
   * Applicable care team members
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
   * Add noteNumber
   * Applicable note numbers
   */
  addNoteNumber(noteNumber: number): this {
    return this.addToArray('noteNumber', noteNumber);
  }

  /**
   * Add adjudication
   * Adjudication details
   */
  addAdjudication(adjudication: IExplanationOfBenefitItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add detail
   * Additional items
   */
  addDetail(detail: IExplanationOfBenefitItemDetail): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitItem instance
   */
  build(): ExplanationOfBenefitItem {
    return new ExplanationOfBenefitItem(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitItem> {
    const explanationOfBenefitItem = this.build();
    await explanationOfBenefitItem.validateOrThrow();
    return explanationOfBenefitItem;
  }
}
