import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IQuestionnaireItem } from '../backbones/IQuestionnaireItem.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Questionnaire Interface
 * 
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * 
 *
 * @see https://hl7.org/fhir/R4/questionnaire.html
 */
export interface IQuestionnaire extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Questionnaire';

  /**
   * Canonical identifier for this questionnaire, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the questionnaire
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the questionnaire
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this questionnaire (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this questionnaire (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Instantiates protocol or definition
   */
  derivedFrom?: string[];
  /**
   * Extension for derivedFrom
   */
  _derivedFrom?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Resource that can be subject of QuestionnaireResponse
   */
  subjectType?: string[];
  /**
   * Extension for subjectType
   */
  _subjectType?: IElement;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Natural language description of the questionnaire
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for questionnaire (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this questionnaire is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * When the questionnaire was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the questionnaire was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the questionnaire is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * Concept that represents the overall questionnaire
   */
  code?: ICoding[];

  /**
   * Questions and sections within the Questionnaire
   */
  item?: IQuestionnaireItem[];

}
