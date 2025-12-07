import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityResponseInsuranceItem } from '../../models/backbones/CoverageEligibilityResponseInsuranceItem.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseInsuranceItem,
  ICoverageEligibilityResponseInsuranceItemBenefit,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageEligibilityResponseInsuranceItemBuilder - Fluent builder for CoverageEligibilityResponseInsuranceItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityResponseInsuranceItem = new CoverageEligibilityResponseInsuranceItemBuilder()
 *   .setCategory(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class CoverageEligibilityResponseInsuranceItemBuilder extends BackboneElementBuilder<CoverageEligibilityResponseInsuranceItem, ICoverageEligibilityResponseInsuranceItem> {
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
   * Performing practitioner
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.provider = provider;
    return this;
  }

  /**
   * Set excluded
   * Excluded from the plan
   */
  setExcluded(excluded: boolean): this {
    this.data.excluded = excluded;
    return this;
  }

  /**
   * Set name
   * Short name for the benefit
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Description of the benefit or services covered
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set network
   * In or out of network
   */
  setNetwork(network: ICodeableConcept): this {
    this.data.network = network;
    return this;
  }

  /**
   * Set unit
   * Individual or family
   */
  setUnit(unit: ICodeableConcept): this {
    this.data.unit = unit;
    return this;
  }

  /**
   * Set term
   * Annual or lifetime
   */
  setTerm(term: ICodeableConcept): this {
    this.data.term = term;
    return this;
  }

  /**
   * Set authorizationRequired
   * Authorization required flag
   */
  setAuthorizationRequired(authorizationRequired: boolean): this {
    this.data.authorizationRequired = authorizationRequired;
    return this;
  }

  /**
   * Set authorizationUrl
   * Preauthorization requirements endpoint
   */
  setAuthorizationUrl(authorizationUrl: string): this {
    this.data.authorizationUrl = authorizationUrl;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add modifier
   * Product or service billing modifiers
   */
  addModifier(modifier: ICodeableConcept): this {
    return this.addToArray('modifier', modifier);
  }

  /**
   * Add benefit
   * Benefit Summary
   */
  addBenefit(benefit: ICoverageEligibilityResponseInsuranceItemBenefit): this {
    return this.addToArray('benefit', benefit);
  }

  /**
   * Add authorizationSupporting
   * Type of required supporting materials
   */
  addAuthorizationSupporting(authorizationSupporting: ICodeableConcept): this {
    return this.addToArray('authorizationSupporting', authorizationSupporting);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityResponseInsuranceItem instance
   */
  build(): CoverageEligibilityResponseInsuranceItem {
    return new CoverageEligibilityResponseInsuranceItem(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityResponseInsuranceItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityResponseInsuranceItem> {
    const coverageEligibilityResponseInsuranceItem = this.build();
    await coverageEligibilityResponseInsuranceItem.validateOrThrow();
    return coverageEligibilityResponseInsuranceItem;
  }
}
