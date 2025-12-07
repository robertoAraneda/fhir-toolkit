import type { IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * DataRequirementDateFilter Interface
 * 
 * What dates/date ranges are expected
 * 
 *
 * @see https://hl7.org/fhir/R4/datarequirementdatefilter.html
 */
export interface IDataRequirementDateFilter extends IElement {
  /**
   * A date-valued attribute to filter on
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * A date valued parameter to search on
   */
  searchParam?: string;
  /**
   * Extension for searchParam
   */
  _searchParam?: IElement;

  /**
   * The value of the filter, as a Period, DateTime, or Duration value
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The value of the filter, as a Period, DateTime, or Duration value
   */
  valuePeriod?: IPeriod;

  /**
   * The value of the filter, as a Period, DateTime, or Duration value
   */
  valueDuration?: IDuration;

}
