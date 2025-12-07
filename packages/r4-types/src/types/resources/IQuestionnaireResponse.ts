import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuestionnaireResponseItem } from '../backbones/IQuestionnaireResponseItem.js';
import type { QuestionnaireResponseStatusType } from '../../valuesets/index.js';

/**
 * QuestionnaireResponse Interface
 * 
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 * 
 *
 * @see https://hl7.org/fhir/R4/questionnaireresponse.html
 */
export interface IQuestionnaireResponse extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'QuestionnaireResponse';

  /**
   * Unique id for this set of answers
   */
  identifier?: IIdentifier;

  /**
   * Request fulfilled by this QuestionnaireResponse
   */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest'>[];

  /**
   * Part of this action
   */
  partOf?: IReference<'Observation' | 'Procedure'>[];

  /**
   * Form being answered
   */
  questionnaire?: string;
  /**
   * Extension for questionnaire
   */
  _questionnaire?: IElement;

  /**
   * in-progress | completed | amended | entered-in-error | stopped
   */
  status: QuestionnaireResponseStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The subject of the questions
   */
  subject?: IReference<'Resource'>;

  /**
   * Encounter created as part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Date the answers were gathered
   */
  authored?: string;
  /**
   * Extension for authored
   */
  _authored?: IElement;

  /**
   * Person who received and recorded the answers
   */
  author?: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Organization'>;

  /**
   * The person who answered the questions
   */
  source?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Groups and questions
   */
  item?: IQuestionnaireResponseItem[];

}
