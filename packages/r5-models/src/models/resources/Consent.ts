import { DomainResource } from '../base/DomainResource.js';
import type {
  ConsentProvisionTypeType,
  ConsentStateType,
  IAttachment,
  ICodeableConcept,
  IConsent,
  IConsentPolicyBasis,
  IConsentProvision,
  IConsentVerification,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Consent */
const CONSENT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'category',
  'subject',
  'date',
  '_date',
  'period',
  'grantor',
  'grantee',
  'manager',
  'controller',
  'sourceAttachment',
  'sourceReference',
  'regulatoryBasis',
  'policyBasis',
  'policyText',
  'verification',
  'decision',
  '_decision',
  'provision',
] as const;

/**
 * Consent - A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 *
 * @see https://hl7.org/fhir/R4/consent.html
 *
 * @example
 * const consent = new Consent({
 *   resourceType: 'Consent',
 *   // ... properties
 * });
 */
export class Consent extends DomainResource implements IConsent {
  readonly resourceType = 'Consent' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier for this record (external references) */
  identifier?: IIdentifier[];

  /** draft | active | inactive | not-done | entered-in-error | unknown */
  status: ConsentStateType;

  /** Extension for status */
  _status?: IElement;

  /** Classification of the consent statement - for indexing/retrieval */
  category?: ICodeableConcept[];

  /** Who the consent applies to */
  subject?: IReference<'Patient' | 'Practitioner' | 'Group'>;

  /** Fully executed date of the consent */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Effective period for this Consent */
  period?: IPeriod;

  /** Who is granting rights according to the policy and rules */
  grantor?: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /** Who is agreeing to the policy and rules */
  grantee?: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /** Consent workflow management */
  manager?: IReference<'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner'>[];

  /** Consent Enforcer */
  controller?: IReference<'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner'>[];

  /** Source from which this consent is taken */
  sourceAttachment?: IAttachment[];

  /** Source from which this consent is taken */
  sourceReference?: IReference<'Consent' | 'DocumentReference' | 'Contract' | 'QuestionnaireResponse'>[];

  /** Regulations establishing base Consent */
  regulatoryBasis?: ICodeableConcept[];

  /** Computable version of the backing policy */
  policyBasis?: IConsentPolicyBasis;

  /** Human Readable Policy */
  policyText?: IReference<'DocumentReference'>[];

  /** Consent Verified by patient or family */
  verification?: IConsentVerification[];

  /** deny | permit */
  decision?: ConsentProvisionTypeType;

  /** Extension for decision */
  _decision?: IElement;

  /** Constraints to the base Consent.policyRule/Consent.policy */
  provision?: IConsentProvision[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsent>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Consent from a JSON object
   */
  static fromJSON(json: IConsent): Consent {
    return new Consent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Consent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsent>): Consent {
    return new Consent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Consent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsent) => Partial<IConsent>): Consent {
    const currentData = this.toJSON();
    return new Consent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsent {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CONSENT_PROPERTIES);
    return result as IConsent;
  }

  /**
   * Create a deep clone of this Consent
   */
  clone(): Consent {
    return new Consent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Consent
   */
  toString(): string {
    const parts: string[] = ['Consent'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
