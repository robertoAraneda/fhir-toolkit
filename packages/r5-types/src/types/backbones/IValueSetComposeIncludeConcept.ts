import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IValueSetComposeIncludeConceptDesignation } from './IValueSetComposeIncludeConceptDesignation.js';

/**
 * ValueSetComposeIncludeConcept Interface
 * 
 * A concept defined in the system
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeincludeconcept.html
 */
export interface IValueSetComposeIncludeConcept extends IBackboneElement {
  /**
   * Code or expression from system
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Text to display for this code for this value set in this valueset
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * Additional representations for this concept
   */
  designation?: IValueSetComposeIncludeConceptDesignation[];

}
