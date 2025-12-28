import type { IBackboneElement, IElement, IResource } from '../../base/index.js';
import type { IBundleEntryRequest } from './IBundleEntryRequest.js';
import type { IBundleEntryResponse } from './IBundleEntryResponse.js';
import type { IBundleEntrySearch } from './IBundleEntrySearch.js';
import type { IBundleLink } from './IBundleLink.js';

/**
 * BundleEntry Interface
 * 
 * Entry in the bundle - will have a resource or information
 * 
 *
 * @see https://hl7.org/fhir/R5/bundleentry.html
 */
export interface IBundleEntry extends IBackboneElement {
  /**
   * Links related to this entry
   */
  link?: IBundleLink[];

  /**
   * URI for resource (e.g. the absolute URL server address, URI for UUID/OID, etc.)
   */
  fullUrl?: string;
  /**
   * Extension for fullUrl
   */
  _fullUrl?: IElement;

  /**
   * A resource in the bundle
   */
  resource?: IResource;

  /**
   * Search related information
   */
  search?: IBundleEntrySearch;

  /**
   * Additional execution information (transaction/batch/history)
   */
  request?: IBundleEntryRequest;

  /**
   * Results of execution (transaction/batch/history)
   */
  response?: IBundleEntryResponse;

}
