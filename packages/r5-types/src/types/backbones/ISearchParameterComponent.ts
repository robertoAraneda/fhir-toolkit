import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * SearchParameterComponent Interface
 * 
 * For Composite resources to define the parts
 * 
 *
 * @see https://hl7.org/fhir/R5/searchparametercomponent.html
 */
export interface ISearchParameterComponent extends IBackboneElement {
  /**
   * Defines how the part works
   */
  definition: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

  /**
   * Subexpression relative to main expression
   */
  expression: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

}
