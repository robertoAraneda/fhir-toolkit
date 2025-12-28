import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';

/**
 * SubstanceDefinitionCode Interface
 * 
 * Codes associated with the substance
 * 
 *
 * @see https://hl7.org/fhir/R4B/substancedefinitioncode.html
 */
export interface ISubstanceDefinitionCode extends IBackboneElement {
  /**
   * The specific code
   */
  code?: ICodeableConcept;

  /**
   * Status of the code assignment, for example 'provisional', 'approved'
   */
  status?: ICodeableConcept;

  /**
   * The date at which the code status was changed
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * Any comment can be provided in this field
   */
  note?: IAnnotation[];

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

}
