import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICodeSystemConceptDesignation } from './ICodeSystemConceptDesignation.js';
import type { ICodeSystemConceptProperty } from './ICodeSystemConceptProperty.js';

/**
 * CodeSystemConcept Interface
 * 
 * Concepts in the code system
 * 
 *
 * @see https://hl7.org/fhir/R4B/codesystemconcept.html
 */
export interface ICodeSystemConcept extends IBackboneElement {
  /**
   * Code that identifies concept
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Text to display to the user
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * Formal definition
   */
  definition?: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

  /**
   * Additional representations for the concept
   */
  designation?: ICodeSystemConceptDesignation[];

  /**
   * Property value for the concept
   */
  property?: ICodeSystemConceptProperty[];

  /**
   * Child Concepts (is-a/contains/categorizes)
   */
  concept?: ICodeSystemConcept[];

}
