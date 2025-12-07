import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductAuthorizationJurisdictionalAuthorization } from '../../models/backbones/MedicinalProductAuthorizationJurisdictionalAuthorization.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductAuthorizationJurisdictionalAuthorizationBuilder - Fluent builder for MedicinalProductAuthorizationJurisdictionalAuthorization backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductAuthorizationJurisdictionalAuthorization = new MedicinalProductAuthorizationJurisdictionalAuthorizationBuilder()
 *   .setCountry(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorizationBuilder extends BackboneElementBuilder<MedicinalProductAuthorizationJurisdictionalAuthorization, IMedicinalProductAuthorizationJurisdictionalAuthorization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set country
   * Country of authorization
   */
  setCountry(country: ICodeableConcept): this {
    this.data.country = country;
    return this;
  }

  /**
   * Set legalStatusOfSupply
   * The legal status of supply in a jurisdiction or region
   */
  setLegalStatusOfSupply(legalStatusOfSupply: ICodeableConcept): this {
    this.data.legalStatusOfSupply = legalStatusOfSupply;
    return this;
  }

  /**
   * Set validityPeriod
   * The start and expected end date of the authorization
   */
  setValidityPeriod(validityPeriod: IPeriod): this {
    this.data.validityPeriod = validityPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * The assigned number for the marketing authorization
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add jurisdiction
   * Jurisdiction within a country
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductAuthorizationJurisdictionalAuthorization instance
   */
  build(): MedicinalProductAuthorizationJurisdictionalAuthorization {
    return new MedicinalProductAuthorizationJurisdictionalAuthorization(this.data);
  }

  /**
   * Build and validate the MedicinalProductAuthorizationJurisdictionalAuthorization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductAuthorizationJurisdictionalAuthorization> {
    const medicinalProductAuthorizationJurisdictionalAuthorization = this.build();
    await medicinalProductAuthorizationJurisdictionalAuthorization.validateOrThrow();
    return medicinalProductAuthorizationJurisdictionalAuthorization;
  }
}
