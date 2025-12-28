import type { IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ValueFilterComparatorType } from '../../valuesets/index.js';

/**
 * DataRequirementValueFilter Interface
 * 
 * What values are expected
 * 
 *
 * @see https://hl7.org/fhir/R5/datarequirementvaluefilter.html
 */
export interface IDataRequirementValueFilter extends IElement {
  /**
   * An attribute to filter on
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * A parameter to search on
   */
  searchParam?: string;
  /**
   * Extension for searchParam
   */
  _searchParam?: IElement;

  /**
   * eq | gt | lt | ge | le | sa | eb
   */
  comparator?: ValueFilterComparatorType;
  /**
   * Extension for comparator
   */
  _comparator?: IElement;

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
