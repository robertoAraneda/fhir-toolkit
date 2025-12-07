import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IClinicalUseDefinitionContraindicationOtherTherapy } from './IClinicalUseDefinitionContraindicationOtherTherapy.js';

/**
 * ClinicalUseDefinitionIndication Interface
 * 
 * Specifics for when this is an indication
 * 
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitionindication.html
 */
export interface IClinicalUseDefinitionIndication extends IBackboneElement {
  /**
   * The situation that is being documented as an indicaton for this item
   */
  diseaseSymptomProcedure?: ICodeableReference;

  /**
   * The status of the disease or symptom for the indication
   */
  diseaseStatus?: ICodeableReference;

  /**
   * A comorbidity or coinfection as part of the indication
   */
  comorbidity?: ICodeableReference[];

  /**
   * The intended effect, aim or strategy to be achieved
   */
  intendedEffect?: ICodeableReference;

  /**
   * Timing or duration information
   */
  durationRange?: IRange;

  /**
   * Timing or duration information
   */
  durationString?: string;
  /**
   * Extension for durationString
   */
  _durationString?: IElement;

  /**
   * An unwanted side effect or negative outcome of the subject of this resource when being used for this indication
   */
  undesirableEffect?: IReference<'ClinicalUseDefinition'>[];

  /**
   * An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements
   */
  applicability?: IExpression;

  /**
   * The use of the medicinal product in relation to other therapies described as part of the indication
   */
  otherTherapy?: IClinicalUseDefinitionContraindicationOtherTherapy[];

}
