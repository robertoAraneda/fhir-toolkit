import type { IBackboneElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IClinicalUseDefinitionContraindicationOtherTherapy } from './IClinicalUseDefinitionContraindicationOtherTherapy.js';

/**
 * ClinicalUseDefinitionContraindication Interface
 * 
 * Specifics for when this is a contraindication
 * 
 *
 * @see https://hl7.org/fhir/R5/clinicalusedefinitioncontraindication.html
 */
export interface IClinicalUseDefinitionContraindication extends IBackboneElement {
  /**
   * The situation that is being documented as contraindicating against this item
   */
  diseaseSymptomProcedure?: ICodeableReference;

  /**
   * The status of the disease or symptom for the contraindication
   */
  diseaseStatus?: ICodeableReference;

  /**
   * A comorbidity (concurrent condition) or coinfection
   */
  comorbidity?: ICodeableReference[];

  /**
   * The indication which this is a contraidication for
   */
  indication?: IReference<'ClinicalUseDefinition'>[];

  /**
   * An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements
   */
  applicability?: IExpression;

  /**
   * Information about use of the product in relation to other therapies described as part of the contraindication
   */
  otherTherapy?: IClinicalUseDefinitionContraindicationOtherTherapy[];

}
