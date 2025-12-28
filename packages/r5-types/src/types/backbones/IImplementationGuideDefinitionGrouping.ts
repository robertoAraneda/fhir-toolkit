import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ImplementationGuideDefinitionGrouping Interface
 * 
 * Grouping used to present related resources in the IG
 * 
 *
 * @see https://hl7.org/fhir/R5/implementationguidedefinitiongrouping.html
 */
export interface IImplementationGuideDefinitionGrouping extends IBackboneElement {
  /**
   * Descriptive name for the package
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Human readable text describing the package
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
