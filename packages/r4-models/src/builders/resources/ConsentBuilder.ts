import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Consent } from '../../models/resources/Consent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ConsentStateType,
  IAttachment,
  ICodeableConcept,
  IConsent,
  IConsentPolicy,
  IConsentProvision,
  IConsentVerification,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

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
   * draft | proposed | active | rejected | inactive | entered-in-error
   */
  setStatus(status: ConsentStateType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set scope
   * Which of the four areas this resource covers (extensible)
   */
  setScope(scope: ICodeableConcept): this {
    this.data.scope = scope;
    return this;
  }

  /**
   * Set patient
   * Who the consent applies to
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set dateTime
   * When this Consent was created or indexed
   */
  setDateTime(dateTime: string): this {
    this.data.dateTime = dateTime;
    return this;
  }

  /**
   * Set policyRule
   * Regulation that this consents to
   */
  setPolicyRule(policyRule: ICodeableConcept): this {
    this.data.policyRule = policyRule;
    return this;
  }

  /**
   * Set provision
   * Constraints to the base Consent.policyRule
   */
  setProvision(provision: IConsentProvision): this {
    this.data.provision = provision;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set source choice type (sourceAttachment, sourceReference)
   * @param type - 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSource('Attachment', value)
   */
  setSource<T extends 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `source${type}` as keyof IConsent;
    const otherKeys: (keyof IConsent)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('sourceAttachment' as keyof IConsent);
      otherKeys.push('_sourceAttachment' as keyof IConsent);
    }
    if (type !== 'Reference') {
      otherKeys.push('sourceReference' as keyof IConsent);
      otherKeys.push('_sourceReference' as keyof IConsent);
    }
    return this.setChoiceType(key, value, otherKeys);
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
   * Add performer
   * Who is agreeing to the policy and rules
   */
  addPerformer(performer: IReference<'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add organization
   * Custodian of the consent
   */
  addOrganization(organization: IReference<'Organization'>): this {
    return this.addToArray('organization', organization);
  }

  /**
   * Add policy
   * Policies covered by this consent
   */
  addPolicy(policy: IConsentPolicy): this {
    return this.addToArray('policy', policy);
  }

  /**
   * Add verification
   * Consent Verified by patient or family
   */
  addVerification(verification: IConsentVerification): this {
    return this.addToArray('verification', verification);
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
