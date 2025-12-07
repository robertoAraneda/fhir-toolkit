import type { IElement } from './IElement.js';
import type { ICoding } from './ICoding.js';

/**
 * CodeableConcept Interface
 *
 * A concept that may be defined by a formal reference to a terminology or ontology
 * or may be provided by text.
 *
 * @typeParam T - The type of the code value in the codings, defaults to string
 * @see https://hl7.org/fhir/R4/codeableconcept.html
 */
export interface ICodeableConcept<T extends string = string> extends IElement {
  /**
   * Code defined by a terminology system
   */
  coding?: ICoding<T>[];

  /**
   * Plain text representation of the concept
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;
}
