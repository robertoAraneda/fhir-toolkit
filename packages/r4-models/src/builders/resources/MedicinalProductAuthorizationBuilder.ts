import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductAuthorization } from '../../models/resources/MedicinalProductAuthorization.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductAuthorization,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  IMedicinalProductAuthorizationProcedure,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductAuthorizationBuilder - Fluent builder for MedicinalProductAuthorization resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductAuthorization = new MedicinalProductAuthorizationBuilder()
 *   .setId('123')
 *   .setSubject(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductAuthorizationBuilder extends DomainResourceBuilder<MedicinalProductAuthorization, IMedicinalProductAuthorization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set subject
   * The medicinal product that is being authorized
   */
  setSubject(subject: IReference<'MedicinalProduct' | 'MedicinalProductPackaged'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set status
   * The status of the marketing authorization
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * The date at which the given status has become applicable
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set restoreDate
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored
   */
  setRestoreDate(restoreDate: string): this {
    this.data.restoreDate = restoreDate;
    return this;
  }

  /**
   * Set validityPeriod
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format
   */
  setValidityPeriod(validityPeriod: IPeriod): this {
    this.data.validityPeriod = validityPeriod;
    return this;
  }

  /**
   * Set dataExclusivityPeriod
   * A period of time after authorization before generic product applicatiosn can be submitted
   */
  setDataExclusivityPeriod(dataExclusivityPeriod: IPeriod): this {
    this.data.dataExclusivityPeriod = dataExclusivityPeriod;
    return this;
  }

  /**
   * Set dateOfFirstAuthorization
   * The date when the first authorization was granted by a Medicines Regulatory Agency
   */
  setDateOfFirstAuthorization(dateOfFirstAuthorization: string): this {
    this.data.dateOfFirstAuthorization = dateOfFirstAuthorization;
    return this;
  }

  /**
   * Set internationalBirthDate
   * Date of first marketing authorization for a company's new medicinal product in any country in the World
   */
  setInternationalBirthDate(internationalBirthDate: string): this {
    this.data.internationalBirthDate = internationalBirthDate;
    return this;
  }

  /**
   * Set legalBasis
   * The legal framework against which this authorization is granted
   */
  setLegalBasis(legalBasis: ICodeableConcept): this {
    this.data.legalBasis = legalBasis;
    return this;
  }

  /**
   * Set holder
   * Marketing Authorization Holder
   */
  setHolder(holder: IReference<'Organization'>): this {
    this.data.holder = holder;
    return this;
  }

  /**
   * Set regulator
   * Medicines Regulatory Agency
   */
  setRegulator(regulator: IReference<'Organization'>): this {
    this.data.regulator = regulator;
    return this;
  }

  /**
   * Set procedure
   * The regulatory procedure for granting or amending a marketing authorization
   */
  setProcedure(procedure: IMedicinalProductAuthorizationProcedure): this {
    this.data.procedure = procedure;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for the marketing authorization, as assigned by a regulator
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add country
   * The country in which the marketing authorization has been granted
   */
  addCountry(country: ICodeableConcept): this {
    return this.addToArray('country', country);
  }

  /**
   * Add jurisdiction
   * Jurisdiction within a country
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add jurisdictionalAuthorization
   * Authorization in areas within a country
   */
  addJurisdictionalAuthorization(jurisdictionalAuthorization: IMedicinalProductAuthorizationJurisdictionalAuthorization): this {
    return this.addToArray('jurisdictionalAuthorization', jurisdictionalAuthorization);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductAuthorization instance
   */
  build(): MedicinalProductAuthorization {
    return new MedicinalProductAuthorization(this.data);
  }

  /**
   * Build and validate the MedicinalProductAuthorization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductAuthorization> {
    const medicinalProductAuthorization = this.build();
    await medicinalProductAuthorization.validateOrThrow();
    return medicinalProductAuthorization;
  }
}
