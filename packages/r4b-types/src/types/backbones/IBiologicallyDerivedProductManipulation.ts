import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * BiologicallyDerivedProductManipulation Interface
 * 
 * Any manipulation of product post-collection
 * 
 *
 * @see https://hl7.org/fhir/R4B/biologicallyderivedproductmanipulation.html
 */
export interface IBiologicallyDerivedProductManipulation extends IBackboneElement {
  /**
   * Description of manipulation
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Time of manipulation
   */
  timeDateTime?: string;
  /**
   * Extension for timeDateTime
   */
  _timeDateTime?: IElement;

  /**
   * Time of manipulation
   */
  timePeriod?: IPeriod;

}
