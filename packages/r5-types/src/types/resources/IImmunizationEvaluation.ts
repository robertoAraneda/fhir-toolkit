import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ImmunizationEvaluationStatusType } from '../../valuesets/index.js';

/**
 * ImmunizationEvaluation Interface
 * 
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationevaluation.html
 */
export interface IImmunizationEvaluation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ImmunizationEvaluation';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * completed | entered-in-error
   */
  status: ImmunizationEvaluationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Who this evaluation is for
   */
  patient: IReference<'Patient'>;

  /**
   * Date evaluation was performed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who is responsible for publishing the recommendations
   */
  authority?: IReference<'Organization'>;

  /**
   * The vaccine preventable disease schedule being evaluated
   */
  targetDisease: ICodeableConcept;

  /**
   * Immunization being evaluated
   */
  immunizationEvent: IReference<'Immunization'>;

  /**
   * Status of the dose relative to published recommendations
   */
  doseStatus: ICodeableConcept;

  /**
   * Reason why the doese is considered valid, invalid or some other status
   */
  doseStatusReason?: ICodeableConcept[];

  /**
   * Evaluation notes
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Name of vaccine series
   */
  series?: string;
  /**
   * Extension for series
   */
  _series?: IElement;

  /**
   * Dose number within series
   */
  doseNumber?: string;
  /**
   * Extension for doseNumber
   */
  _doseNumber?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDoses?: string;
  /**
   * Extension for seriesDoses
   */
  _seriesDoses?: IElement;

}
