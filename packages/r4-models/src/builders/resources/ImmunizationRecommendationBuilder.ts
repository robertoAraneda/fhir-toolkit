import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ImmunizationRecommendation } from '../../models/resources/ImmunizationRecommendation.js';
import type {
  IIdentifier,
  IImmunizationRecommendation,
  IImmunizationRecommendationRecommendation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ImmunizationRecommendationBuilder - Fluent builder for ImmunizationRecommendation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationRecommendation = new ImmunizationRecommendationBuilder()
 *   .setId('123')
 *   .setPatient(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ImmunizationRecommendationBuilder extends DomainResourceBuilder<ImmunizationRecommendation, IImmunizationRecommendation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set patient
   * Who this profile is for
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set date
   * Date recommendation(s) created
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set authority
   * Who is responsible for protocol
   */
  setAuthority(authority: IReference<'Organization'>): this {
    this.data.authority = authority;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add recommendation
   * Vaccine administration recommendations
   */
  addRecommendation(recommendation: IImmunizationRecommendationRecommendation): this {
    return this.addToArray('recommendation', recommendation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationRecommendation instance
   */
  build(): ImmunizationRecommendation {
    return new ImmunizationRecommendation(this.data);
  }

  /**
   * Build and validate the ImmunizationRecommendation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationRecommendation> {
    const immunizationRecommendation = this.build();
    await immunizationRecommendation.validateOrThrow();
    return immunizationRecommendation;
  }
}
