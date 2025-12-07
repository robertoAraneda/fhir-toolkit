import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Consent } from '../../models/resources/Consent.js';
import type {
  ConsentProvisionTypeType,
  ConsentStateType,
  IAttachment,
  ICodeableConcept,
  IConsent,
  IConsentPolicyBasis,
  IConsentProvision,
  IConsentVerification,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConsentBuilder - Fluent builder for Consent resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const consent = new ConsentBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ConsentBuilder extends DomainResourceBuilder<Consent, IConsent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | inactive | not-done | entered-in-error | unknown
   */
  setStatus(status: ConsentStateType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * Who the consent applies to
   */
  setSubject(subject: IReference<'Patient' | 'Practitioner' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set date
   * Fully executed date of the consent
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set period
   * Effective period for this Consent
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set policyBasis
   * Computable version of the backing policy
   */
  setPolicyBasis(policyBasis: IConsentPolicyBasis): this {
    this.data.policyBasis = policyBasis;
    return this;
  }

  /**
   * Set decision
   * deny | permit
   */
  setDecision(decision: ConsentProvisionTypeType): this {
    this.data.decision = decision;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier for this record (external references)
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Classification of the consent statement - for indexing/retrieval
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add grantor
   * Who is granting rights according to the policy and rules
   */
  addGrantor(grantor: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>): this {
    return this.addToArray('grantor', grantor);
  }

  /**
   * Add grantee
   * Who is agreeing to the policy and rules
   */
  addGrantee(grantee: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>): this {
    return this.addToArray('grantee', grantee);
  }

  /**
   * Add manager
   * Consent workflow management
   */
  addManager(manager: IReference<'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner'>): this {
    return this.addToArray('manager', manager);
  }

  /**
   * Add controller
   * Consent Enforcer
   */
  addController(controller: IReference<'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner'>): this {
    return this.addToArray('controller', controller);
  }

  /**
   * Add sourceAttachment
   * Source from which this consent is taken
   */
  addSourceAttachment(sourceAttachment: IAttachment): this {
    return this.addToArray('sourceAttachment', sourceAttachment);
  }

  /**
   * Add sourceReference
   * Source from which this consent is taken
   */
  addSourceReference(sourceReference: IReference<'Consent' | 'DocumentReference' | 'Contract' | 'QuestionnaireResponse'>): this {
    return this.addToArray('sourceReference', sourceReference);
  }

  /**
   * Add regulatoryBasis
   * Regulations establishing base Consent
   */
  addRegulatoryBasis(regulatoryBasi: ICodeableConcept): this {
    return this.addToArray('regulatoryBasis', regulatoryBasi);
  }

  /**
   * Add policyText
   * Human Readable Policy
   */
  addPolicyText(policyText: IReference<'DocumentReference'>): this {
    return this.addToArray('policyText', policyText);
  }

  /**
   * Add verification
   * Consent Verified by patient or family
   */
  addVerification(verification: IConsentVerification): this {
    return this.addToArray('verification', verification);
  }

  /**
   * Add provision
   * Constraints to the base Consent.policyRule/Consent.policy
   */
  addProvision(provision: IConsentProvision): this {
    return this.addToArray('provision', provision);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Consent instance
   */
  build(): Consent {
    return new Consent(this.data);
  }

  /**
   * Build and validate the Consent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Consent> {
    const consent = this.build();
    await consent.validateOrThrow();
    return consent;
  }
}
