import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitAddItemBodySite } from '../../models/backbones/ExplanationOfBenefitAddItemBodySite.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IExplanationOfBenefitAddItemBodySite,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitAddItemBodySiteBuilder - Fluent builder for ExplanationOfBenefitAddItemBodySite backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitAddItemBodySite = new ExplanationOfBenefitAddItemBodySiteBuilder()
 *   .addSite({ ... })
 *   .build();
 */
export class ExplanationOfBenefitAddItemBodySiteBuilder extends BackboneElementBuilder<ExplanationOfBenefitAddItemBodySite, IExplanationOfBenefitAddItemBodySite> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add site
   * Location
   */
  addSite(site: ICodeableReference): this {
    return this.addToArray('site', site);
  }

  /**
   * Add subSite
   * Sub-location
   */
  addSubSite(subSite: ICodeableConcept): this {
    return this.addToArray('subSite', subSite);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitAddItemBodySite instance
   */
  build(): ExplanationOfBenefitAddItemBodySite {
    return new ExplanationOfBenefitAddItemBodySite(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitAddItemBodySite instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitAddItemBodySite> {
    const explanationOfBenefitAddItemBodySite = this.build();
    await explanationOfBenefitAddItemBodySite.validateOrThrow();
    return explanationOfBenefitAddItemBodySite;
  }
}
