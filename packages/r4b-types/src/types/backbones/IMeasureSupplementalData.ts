import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';

/**
 * MeasureSupplementalData Interface
 * 
 * What other data should be reported with the measure
 * 
 *
 * @see https://hl7.org/fhir/R4B/measuresupplementaldata.html
 */
export interface IMeasureSupplementalData extends IBackboneElement {
  /**
   * Meaning of the supplemental data
   */
  code?: ICodeableConcept;

  /**
   * supplemental-data | risk-adjustment-factor
   */
  usage?: ICodeableConcept[];

  /**
   * The human readable description of this supplemental data
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Expression describing additional data to be reported
   */
  criteria: IExpression;

}
