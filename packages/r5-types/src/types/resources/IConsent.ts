import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IConsentPolicyBasis } from '../backbones/IConsentPolicyBasis.js';
import type { IConsentProvision } from '../backbones/IConsentProvision.js';
import type { IConsentVerification } from '../backbones/IConsentVerification.js';
import type { ConsentProvisionTypeType, ConsentStateType } from '../../valuesets/index.js';

/**
 * Consent Interface
 * 
 * A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 * 
 *
 * @see https://hl7.org/fhir/R5/consent.html
 */
export interface IConsent extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Consent';

  /**
   * Identifier for this record (external references)
   */
  identifier?: IIdentifier[];

  /**
   * draft | active | inactive | not-done | entered-in-error | unknown
   */
  status: ConsentStateType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Classification of the consent statement - for indexing/retrieval
   */
  category?: ICodeableConcept[];

  /**
   * Who the consent applies to
   */
  subject?: IReference<'Patient' | 'Practitioner' | 'Group'>;

  /**
   * Fully executed date of the consent
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Effective period for this Consent
   */
  period?: IPeriod;

  /**
   * Who is granting rights according to the policy and rules
   */
  grantor?: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /**
   * Who is agreeing to the policy and rules
   */
  grantee?: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /**
   * Consent workflow management
   */
  manager?: IReference<'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner'>[];

  /**
   * Consent Enforcer
   */
  controller?: IReference<'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner'>[];

  /**
   * Source from which this consent is taken
   */
  sourceAttachment?: IAttachment[];

  /**
   * Source from which this consent is taken
   */
  sourceReference?: IReference<'Consent' | 'DocumentReference' | 'Contract' | 'QuestionnaireResponse'>[];

  /**
   * Regulations establishing base Consent
   */
  regulatoryBasis?: ICodeableConcept[];

  /**
   * Computable version of the backing policy
   */
  policyBasis?: IConsentPolicyBasis;

  /**
   * Human Readable Policy
   */
  policyText?: IReference<'DocumentReference'>[];

  /**
   * Consent Verified by patient or family
   */
  verification?: IConsentVerification[];

  /**
   * deny | permit
   */
  decision?: ConsentProvisionTypeType;
  /**
   * Extension for decision
   */
  _decision?: IElement;

  /**
   * Constraints to the base Consent.policyRule/Consent.policy
   */
  provision?: IConsentProvision[];

}
