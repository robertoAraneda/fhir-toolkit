import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { GuidePageGenerationType } from '../../valuesets/index.js';

/**
 * ImplementationGuideDefinitionPage Interface
 * 
 * Page/Section in the Guide
 * 
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitionpage.html
 */
export interface IImplementationGuideDefinitionPage extends IBackboneElement {
  /**
   * Where to find that page
   */
  nameUrl?: string;
  /**
   * Extension for nameUrl
   */
  _nameUrl?: IElement;

  /**
   * Where to find that page
   */
  nameReference?: IReference;

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
