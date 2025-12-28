import type { ICoding, IDataType, IElement } from '../../base/index.js';

/**
 * Meta Interface
 * 
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 * 
 *
 * @see https://hl7.org/fhir/R5/meta.html
 */
export interface IMeta extends IDataType {
  /**
   * Version specific identifier
   */
  versionId?: string;
  /**
   * Extension for versionId
   */
  _versionId?: IElement;

  /**
   * When the resource version last changed
   */
  lastUpdated?: string;
  /**
   * Extension for lastUpdated
   */
  _lastUpdated?: IElement;

  /**
   * Identifies where the resource comes from
   */
  source?: string;
  /**
   * Extension for source
   */
  _source?: IElement;

  /**
   * Profiles this resource claims to conform to
   */
  profile?: string[];
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Security Labels applied to this resource
   */
  security?: ICoding[];

  /**
   * Tags applied to this resource
   */
  tag?: ICoding[];

}
