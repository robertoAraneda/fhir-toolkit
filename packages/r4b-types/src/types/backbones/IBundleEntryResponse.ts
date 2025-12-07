import type { IBackboneElement, IElement, IResource } from '../../base/index.js';

/**
 * BundleEntryResponse Interface
 * 
 * Results of execution (transaction/batch/history)
 * 
 *
 * @see https://hl7.org/fhir/R4/bundleentryresponse.html
 */
export interface IBundleEntryResponse extends IBackboneElement {
  /**
   * Status response code (text optional)
   */
  status: string;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The location (if the operation returns a location)
   */
  location?: string;
  /**
   * Extension for location
   */
  _location?: IElement;

  /**
   * The Etag for the resource (if relevant)
   */
  etag?: string;
  /**
   * Extension for etag
   */
  _etag?: IElement;

  /**
   * Server's date time modified
   */
  lastModified?: string;
  /**
   * Extension for lastModified
   */
  _lastModified?: IElement;

  /**
   * OperationOutcome with hints and warnings (for batch/transaction)
   */
  outcome?: IResource;

}
