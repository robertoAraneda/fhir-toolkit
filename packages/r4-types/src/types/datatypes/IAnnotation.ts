import type { IElement, IReference } from '../../base/index.js';

/**
 * Annotation Interface
 * 
 * A  text note which also  contains information about who made the statement and when.
 * 
 *
 * @see https://hl7.org/fhir/R4/annotation.html
 */
export interface IAnnotation extends IElement {
  /**
   * Individual responsible for the annotation
   */
  authorReference?: IReference;

  /**
   * Individual responsible for the annotation
   */
  authorString?: string;
  /**
   * Extension for authorString
   */
  _authorString?: IElement;

  /**
   * When the annotation was made
   */
  time?: string;
  /**
   * Extension for time
   */
  _time?: IElement;

  /**
   * The annotation  - text content (as markdown)
   */
  text: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
