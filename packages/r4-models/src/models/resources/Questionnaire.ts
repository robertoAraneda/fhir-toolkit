import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IQuestionnaire,
  IQuestionnaireItem,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Questionnaire */
const QUESTIONNAIRE_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'derivedFrom',
  '_derivedFrom',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'subjectType',
  '_subjectType',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'code',
  'item',
] as const;

/**
 * Questionnaire - A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 *
 * @see https://hl7.org/fhir/R4/questionnaire.html
 *
 * @example
 * const questionnaire = new Questionnaire({
 *   resourceType: 'Questionnaire',
 *   // ... properties
 * });
 */
export class Questionnaire extends DomainResource implements IQuestionnaire {
  readonly resourceType = 'Questionnaire' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this questionnaire, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the questionnaire */
  identifier?: IIdentifier[];

  /** Business version of the questionnaire */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this questionnaire (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this questionnaire (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Instantiates protocol or definition */
  derivedFrom?: string[];

  /** Extension for derivedFrom */
  _derivedFrom?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Resource that can be subject of QuestionnaireResponse */
  subjectType?: string[];

  /** Extension for subjectType */
  _subjectType?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the questionnaire */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for questionnaire (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this questionnaire is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the questionnaire was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the questionnaire was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the questionnaire is expected to be used */
  effectivePeriod?: IPeriod;

  /** Concept that represents the overall questionnaire */
  code?: ICoding[];

  /** Questions and sections within the Questionnaire */
  item?: IQuestionnaireItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaire>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Questionnaire from a JSON object
   */
  static fromJSON(json: IQuestionnaire): Questionnaire {
    return new Questionnaire(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Questionnaire with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaire>): Questionnaire {
    return new Questionnaire({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Questionnaire by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaire) => Partial<IQuestionnaire>): Questionnaire {
    const currentData = this.toJSON();
    return new Questionnaire({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaire)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaire {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_PROPERTIES);
    return result as IQuestionnaire;
  }

  /**
   * Create a deep clone of this Questionnaire
   */
  clone(): Questionnaire {
    return new Questionnaire(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Questionnaire
   */
  toString(): string {
    const parts: string[] = ['Questionnaire'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
