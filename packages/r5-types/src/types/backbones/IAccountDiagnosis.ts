import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * AccountDiagnosis Interface
 * 
 * The list of diagnoses relevant to this account
 * 
 *
 * @see https://hl7.org/fhir/R5/accountdiagnosis.html
 */
export interface IAccountDiagnosis extends IBackboneElement {
  /**
   * Ranking of the diagnosis (for each type)
   */
  sequence?: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * The diagnosis relevant to the account
   */
  condition: ICodeableReference;

  /**
   * Date of the diagnosis (when coded diagnosis)
   */
  dateOfDiagnosis?: string;
  /**
   * Extension for dateOfDiagnosis
   */
  _dateOfDiagnosis?: IElement;

  /**
   * Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …)
   */
  type?: ICodeableConcept[];

  /**
   * Diagnosis present on Admission
   */
  onAdmission?: boolean;
  /**
   * Extension for onAdmission
   */
  _onAdmission?: IElement;

  /**
   * Package Code specific for billing
   */
  packageCode?: ICodeableConcept[];

}
