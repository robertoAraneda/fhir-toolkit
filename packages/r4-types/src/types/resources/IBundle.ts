import type { IElement, IResource } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISignature } from '../datatypes/ISignature.js';
import type { IBundleEntry } from '../backbones/IBundleEntry.js';
import type { IBundleLink } from '../backbones/IBundleLink.js';
import type { BundleTypeType } from '../../valuesets/index.js';

/**
 * Bundle Interface
 * 
 * A container for a collection of resources.
 * 
 *
 * @see https://hl7.org/fhir/R4/bundle.html
 */
export interface IBundle extends IResource {
  /**
   * The type of resource
   */
  resourceType: 'Bundle';

  /**
   * Persistent identifier for the bundle
   */
  identifier?: IIdentifier;

  /**
   * document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
   */
  type: BundleTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * When the bundle was assembled
   */
  timestamp?: string;
  /**
   * Extension for timestamp
   */
  _timestamp?: IElement;

  /**
   * If search, the total number of matches
   */
  total?: number;
  /**
   * Extension for total
   */
  _total?: IElement;

  /**
   * Links related to this Bundle
   */
  link?: IBundleLink[];

  /**
   * Entry in the bundle - will have a resource or information
   */
  entry?: IBundleEntry[];

  /**
   * Digital Signature
   */
  signature?: ISignature;

}
