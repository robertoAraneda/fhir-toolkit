import type { ICoding, IElement } from '../../base/index.js';

/**
 * DataRequirementCodeFilter Interface
 * 
 * What codes are expected
 * 
 *
 * @see https://hl7.org/fhir/R4/datarequirementcodefilter.html
 */
export interface IDataRequirementCodeFilter extends IElement {
  /**
   * A code-valued attribute to filter on
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * A coded (token) parameter to search on
   */
  searchParam?: string;
  /**
   * Extension for searchParam
   */
  _searchParam?: IElement;

  /**
   * ValueSet for the filter
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * What code is expected
   */
  code?: ICoding[];

}
