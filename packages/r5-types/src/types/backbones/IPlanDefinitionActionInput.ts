import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';

/**
 * PlanDefinitionActionInput Interface
 * 
 * Input data requirements
 * 
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactioninput.html
 */
export interface IPlanDefinitionActionInput extends IBackboneElement {
  /**
   * User-visible title
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * What data is provided
   */
  requirement?: IDataRequirement;

  /**
   * What data is provided
   */
  relatedData?: string;
  /**
   * Extension for relatedData
   */
  _relatedData?: IElement;

}
