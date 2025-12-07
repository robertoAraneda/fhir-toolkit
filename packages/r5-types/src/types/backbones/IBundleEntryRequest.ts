import type { IBackboneElement, IElement } from '../../base/index.js';
import type { HTTPVerbType } from '../../valuesets/index.js';

/**
 * BundleEntryRequest Interface
 * 
 * Additional execution information (transaction/batch/history)
 * 
 *
 * @see https://hl7.org/fhir/R4/bundleentryrequest.html
 */
export interface IBundleEntryRequest extends IBackboneElement {
  /**
   * GET | HEAD | POST | PUT | DELETE | PATCH
   */
  method: HTTPVerbType;
  /**
   * Extension for method
   */
  _method?: IElement;

  /**
   * URL for HTTP equivalent of this entry
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * For managing cache validation
   */
  ifNoneMatch?: string;
  /**
   * Extension for ifNoneMatch
   */
  _ifNoneMatch?: IElement;

  /**
   * For managing cache currency
   */
  ifModifiedSince?: string;
  /**
   * Extension for ifModifiedSince
   */
  _ifModifiedSince?: IElement;

  /**
   * For managing update contention
   */
  ifMatch?: string;
  /**
   * Extension for ifMatch
   */
  _ifMatch?: IElement;

  /**
   * For conditional creates
   */
  ifNoneExist?: string;
  /**
   * Extension for ifNoneExist
   */
  _ifNoneExist?: IElement;

}
