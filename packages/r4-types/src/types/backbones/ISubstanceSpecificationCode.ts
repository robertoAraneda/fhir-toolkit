import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * SubstanceSpecificationCode Interface
 * 
 * Codes associated with the substance
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationcode.html
 */
export interface ISubstanceSpecificationCode extends IBackboneElement {
  /**
   * The specific code
   */
  code?: ICodeableConcept;

  /**
   * Status of the code assignment
   */
  status?: ICodeableConcept;

  /**
   * The date at which the code status is changed as part of the terminology maintenance
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * Any comment can be provided in this field, if necessary
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

}
