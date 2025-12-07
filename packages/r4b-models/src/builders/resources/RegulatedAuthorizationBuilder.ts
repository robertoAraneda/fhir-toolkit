import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { RegulatedAuthorization } from '../../models/resources/RegulatedAuthorization.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IPeriod,
  IReference,
  IRegulatedAuthorization,
  IRegulatedAuthorizationCase,
} from '@fhir-toolkit/r4b-types';

/**
 * RegulatedAuthorizationBuilder - Fluent builder for RegulatedAuthorization resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const regulatedAuthorization = new RegulatedAuthorizationBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class RegulatedAuthorizationBuilder extends DomainResourceBuilder<RegulatedAuthorization, IRegulatedAuthorization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Overall type of this authorization, for example drug marketing approval, orphan drug designation
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set description
   * General textual supporting information
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set status
   * The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * The date at which the current status was assigned
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set validityPeriod
   * The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date
   */
  setValidityPeriod(validityPeriod: IPeriod): this {
    this.data.validityPeriod = validityPeriod;
    return this;
  }

  /**
   * Set indication
   * Condition for which the use of the regulated product applies
   */
  setIndication(indication: ICodeableReference): this {
    this.data.indication = indication;
    return this;
  }

  /**
   * Set intendedUse
   * The intended use of the product, e.g. prevention, treatment
   */
  setIntendedUse(intendedUse: ICodeableConcept): this {
    this.data.intendedUse = intendedUse;
    return this;
  }

  /**
   * Set holder
   * The organization that has been granted this authorization, by the regulator
   */
  setHolder(holder: IReference<'Organization'>): this {
    this.data.holder = holder;
    return this;
  }

  /**
   * Set regulator
   * The regulatory authority or authorizing body granting the authorization
   */
  setRegulator(regulator: IReference<'Organization'>): this {
    this.data.regulator = regulator;
    return this;
  }

  /**
   * Set case
   * The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
   */
  setCase(_case: IRegulatedAuthorizationCase): this {
    this.data.case = _case;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for the authorization, typically assigned by the authorizing body
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add subject
   * The product type, treatment, facility or activity that is being authorized
   */
  addSubject(subject: IReference<'MedicinalProductDefinition' | 'BiologicallyDerivedProduct' | 'NutritionProduct' | 'PackagedProductDefinition' | 'SubstanceDefinition' | 'DeviceDefinition' | 'ResearchStudy' | 'ActivityDefinition' | 'PlanDefinition' | 'ObservationDefinition' | 'Practitioner' | 'Organization' | 'Location'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add region
   * The territory in which the authorization has been granted
   */
  addRegion(region: ICodeableConcept): this {
    return this.addToArray('region', region);
  }

  /**
   * Add basis
   * The legal/regulatory framework or reasons under which this authorization is granted
   */
  addBasis(basi: ICodeableConcept): this {
    return this.addToArray('basis', basi);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RegulatedAuthorization instance
   */
  build(): RegulatedAuthorization {
    return new RegulatedAuthorization(this.data);
  }

  /**
   * Build and validate the RegulatedAuthorization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RegulatedAuthorization> {
    const regulatedAuthorization = this.build();
    await regulatedAuthorization.validateOrThrow();
    return regulatedAuthorization;
  }
}
