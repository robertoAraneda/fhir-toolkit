import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { NoteTypeType } from '../../valuesets/index.js';

/**
 * ClaimResponseProcessNote Interface
 * 
 * Note concerning adjudication
 * 
 *
 * @see https://hl7.org/fhir/R4/claimresponseprocessnote.html
 */
export interface IClaimResponseProcessNote extends IBackboneElement {
  /**
   * Note instance identifier
   */
  number?: number;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * display | print | printoper
   */
  type?: NoteTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Note explanatory text
   */
  text: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Language of the text
   */
  language?: ICodeableConcept;

}
