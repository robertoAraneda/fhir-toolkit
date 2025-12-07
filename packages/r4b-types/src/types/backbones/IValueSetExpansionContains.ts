import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IValueSetComposeIncludeConceptDesignation } from './IValueSetComposeIncludeConceptDesignation.js';

/**
 * ValueSetExpansionContains Interface
 * 
 * Codes in the value set
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansioncontains.html
 */
export interface IValueSetExpansionContains extends IBackboneElement {
  /**
   * System value for the code
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * If user cannot select this entry
   */
  abstract?: boolean;
  /**
   * Extension for abstract
   */
  _abstract?: IElement;

  /**
   * If concept is inactive in the code system
   */
  inactive?: boolean;
  /**
   * Extension for inactive
   */
  _inactive?: IElement;

  /**
   * Version in which this code/display is defined
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Code - if blank, this is not a selectable code
   */
  code?: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * User display for the concept
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * Additional representations for this item
   */
  designation?: IValueSetComposeIncludeConceptDesignation[];

  /**
   * Codes contained under this entry
   */
  contains?: IValueSetExpansionContains[];

}
