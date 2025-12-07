import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityRequestItem } from '../../models/backbones/CoverageEligibilityRequestItem.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityRequestItem,
  ICoverageEligibilityRequestItemDiagnosis,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageEligibilityRequestItemBuilder - Fluent builder for CoverageEligibilityRequestItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityRequestItem = new CoverageEligibilityRequestItemBuilder()
 *   .setCategory(value)
 *   .addSupportingInfoSequence({ ... })
 *   .build();
 */
export class CoverageEligibilityRequestItemBuilder extends BackboneElementBuilder<CoverageEligibilityRequestItem, ICoverageEligibilityRequestItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

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
   * Set provider
   * Perfoming practitioner
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.provider = provider;
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
   * Set facility
   * Servicing facility
   */
  setFacility(facility: IReference<'Location' | 'Organization'>): this {
    this.data.facility = facility;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add supportingInfoSequence
   * Applicable exception or supporting information
   */
  addSupportingInfoSequence(supportingInfoSequence: number): this {
    return this.addToArray('supportingInfoSequence', supportingInfoSequence);
  }

  /**
   * Add modifier
   * Product or service billing modifiers
   */
  addModifier(modifier: ICodeableConcept): this {
    return this.addToArray('modifier', modifier);
  }

  /**
   * Add diagnosis
   * Applicable diagnosis
   */
  addDiagnosis(diagnosi: ICoverageEligibilityRequestItemDiagnosis): this {
    return this.addToArray('diagnosis', diagnosi);
  }

  /**
   * Add detail
   * Product or service details
   */
  addDetail(detail: IReference<'Resource'>): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityRequestItem instance
   */
  build(): CoverageEligibilityRequestItem {
    return new CoverageEligibilityRequestItem(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityRequestItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityRequestItem> {
    const coverageEligibilityRequestItem = this.build();
    await coverageEligibilityRequestItem.validateOrThrow();
    return coverageEligibilityRequestItem;
  }
}
