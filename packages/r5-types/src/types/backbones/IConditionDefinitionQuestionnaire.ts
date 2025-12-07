import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ConditionQuestionnairePurposeType } from '../../valuesets/index.js';

/**
 * ConditionDefinitionQuestionnaire Interface
 * 
 * Questionnaire for this condition
 * 
 *
 * @see https://hl7.org/fhir/R4/conditiondefinitionquestionnaire.html
 */
export interface IConditionDefinitionQuestionnaire extends IBackboneElement {
  /**
   * preadmit | diff-diagnosis | outcome
   */
  purpose: ConditionQuestionnairePurposeType;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Specific Questionnaire
   */
  reference: IReference<'Questionnaire'>;

}
