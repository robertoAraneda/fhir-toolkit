import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitItemBodySite } from '../../models/backbones/ExplanationOfBenefitItemBodySite.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IExplanationOfBenefitItemBodySite,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitItemBodySiteBuilder - Fluent builder for ExplanationOfBenefitItemBodySite backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitItemBodySite = new ExplanationOfBenefitItemBodySiteBuilder()
 *   .addSite({ ... })
 *   .build();
 */
export class ExplanationOfBenefitItemBodySiteBuilder extends BackboneElementBuilder<ExplanationOfBenefitItemBodySite, IExplanationOfBenefitItemBodySite> {
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
   * Build the ExplanationOfBenefitItemBodySite instance
   */
  build(): ExplanationOfBenefitItemBodySite {
    return new ExplanationOfBenefitItemBodySite(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitItemBodySite instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitItemBodySite> {
    const explanationOfBenefitItemBodySite = this.build();
    await explanationOfBenefitItemBodySite.validateOrThrow();
    return explanationOfBenefitItemBodySite;
  }
}
