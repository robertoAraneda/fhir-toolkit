import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ImplementationGuideDefinitionTemplate Interface
 * 
 * A template for building resources
 * 
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitiontemplate.html
 */
export interface IImplementationGuideDefinitionTemplate extends IBackboneElement {
  /**
   * Type of template specified
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * The source location for the template
   */
  source: string;
  /**
   * Extension for source
   */
  _source?: IElement;

  /**
   * The scope in which the template applies
   */
  scope?: string;
  /**
   * Extension for scope
   */
  _scope?: IElement;

}
