import type { IBackboneElement, IElement } from '../../base/index.js';
import type { GuidePageGenerationType } from '../../valuesets/index.js';

/**
 * ImplementationGuideDefinitionPage Interface
 * 
 * Page/Section in the Guide
 * 
 *
 * @see https://hl7.org/fhir/R4/implementationguidedefinitionpage.html
 */
export interface IImplementationGuideDefinitionPage extends IBackboneElement {
  /**
   * Source for page
   */
  sourceUrl?: string;
  /**
   * Extension for sourceUrl
   */
  _sourceUrl?: IElement;

  /**
   * Source for page
   */
  sourceString?: string;
  /**
   * Extension for sourceString
   */
  _sourceString?: IElement;

  /**
   * Source for page
   */
  sourceMarkdown?: string;
  /**
   * Extension for sourceMarkdown
   */
  _sourceMarkdown?: IElement;

  /**
   * Name of the page when published
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Short title shown for navigational assistance
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * html | markdown | xml | generated
   */
  generation: GuidePageGenerationType;
  /**
   * Extension for generation
   */
  _generation?: IElement;

  /**
   * Nested Pages / Sections
   */
  page?: IImplementationGuideDefinitionPage[];

}
