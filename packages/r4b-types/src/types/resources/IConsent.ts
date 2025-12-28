import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IConsentPolicy } from '../backbones/IConsentPolicy.js';
import type { IConsentProvision } from '../backbones/IConsentProvision.js';
import type { IConsentVerification } from '../backbones/IConsentVerification.js';
import type { ConsentStateType } from '../../valuesets/index.js';

/**
 * Consent Interface
 * 
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 * 
 *
 * @see https://hl7.org/fhir/R4B/consent.html
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
   * draft | proposed | active | rejected | inactive | entered-in-error
   */
  status: ConsentStateType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Which of the four areas this resource covers (extensible)
   */
  scope: ICodeableConcept;

  /**
   * Classification of the consent statement - for indexing/retrieval
   */
  category: ICodeableConcept[];

  /**
   * Who the consent applies to
   */
  patient?: IReference<'Patient'>;

  /**
   * When this Consent was created or indexed
   */
  dateTime?: string;
  /**
   * Extension for dateTime
   */
  _dateTime?: IElement;

  /**
   * Who is agreeing to the policy and rules
   */
  performer?: IReference<'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /**
   * Custodian of the consent
   */
  organization?: IReference<'Organization'>[];

  /**
   * Source from which this consent is taken
   */
  sourceAttachment?: IAttachment;

  /**
   * Source from which this consent is taken
   */
  sourceReference?: IReference;

  /**
   * Policies covered by this consent
   */
  policy?: IConsentPolicy[];

  /**
   * Regulation that this consents to
   */
  policyRule?: ICodeableConcept;

  /**
   * Consent Verified by patient or family
   */
  verification?: IConsentVerification[];

  /**
   * Constraints to the base Consent.policyRule
   */
  provision?: IConsentProvision;

}
