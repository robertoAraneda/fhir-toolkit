import type { IElement } from '../../base/index.js';
import type { SortDirectionType } from '../../valuesets/index.js';

/**
 * DataRequirementSort Interface
 * 
 * Order of the results
 * 
 *
 * @see https://hl7.org/fhir/R4/datarequirementsort.html
 */
export interface IDataRequirementSort extends IElement {
  /**
   * The name of the attribute to perform the sort
   */
  path: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * ascending | descending
   */
  direction: SortDirectionType;
  /**
   * Extension for direction
   */
  _direction?: IElement;

}
