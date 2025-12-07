import { DomainResource } from '../base/DomainResource.js';
import type {
  ConsentStateType,
  IAttachment,
  ICodeableConcept,
  IConsent,
  IConsentPolicy,
  IConsentProvision,
  IConsentVerification,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Consent */
const CONSENT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'scope',
  'category',
  'patient',
  'dateTime',
  '_dateTime',
  'performer',
  'organization',
  'sourceAttachment',
  'sourceReference',
  'policy',
  'policyRule',
  'verification',
  'provision',
] as const;

/**
 * Consent - A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
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

  /** draft | proposed | active | rejected | inactive | entered-in-error */
  status: ConsentStateType;

  /** Extension for status */
  _status?: IElement;

  /** Which of the four areas this resource covers (extensible) */
  scope: ICodeableConcept;

  /** Classification of the consent statement - for indexing/retrieval */
  category: ICodeableConcept[];

  /** Who the consent applies to */
  patient?: IReference<'Patient'>;

  /** When this Consent was created or indexed */
  dateTime?: string;

  /** Extension for dateTime */
  _dateTime?: IElement;

  /** Who is agreeing to the policy and rules */
  performer?: IReference<'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /** Custodian of the consent */
  organization?: IReference<'Organization'>[];

  /** Source from which this consent is taken */
  sourceAttachment?: IAttachment;

  /** Source from which this consent is taken */
  sourceReference?: IReference;

  /** Policies covered by this consent */
  policy?: IConsentPolicy[];

  /** Regulation that this consents to */
  policyRule?: ICodeableConcept;

  /** Consent Verified by patient or family */
  verification?: IConsentVerification[];

  /** Constraints to the base Consent.policyRule */
  provision?: IConsentProvision;

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
