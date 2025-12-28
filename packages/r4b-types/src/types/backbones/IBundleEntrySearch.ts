import type { IBackboneElement, IElement } from '../../base/index.js';
import type { SearchEntryModeType } from '../../valuesets/index.js';

/**
 * BundleEntrySearch Interface
 * 
 * Search related information
 * 
 *
 * @see https://hl7.org/fhir/R4B/bundleentrysearch.html
 */
export interface IBundleEntrySearch extends IBackboneElement {
  /**
   * match | include | outcome - why this is in the result set
   */
  mode?: SearchEntryModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Search ranking (between 0 and 1)
   */
  score?: number;
  /**
   * Extension for score
   */
  _score?: IElement;

}
