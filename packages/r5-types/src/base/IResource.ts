import type { IMeta } from '../types/datatypes/IMeta.js';

/**
 * Resource Interface
 * Base Resource - all resources have these elements.
 * Note: Resource does NOT extend Element in FHIR spec.
 *
 * @see https://hl7.org/fhir/R4/resource.html
 */
export interface IResource {
  /**
   * The type of the resource
   */
  resourceType: string;

  /**
   * Logical id of this artifact
   */
  id?: string;

  /**
   * Metadata about the resource
   */
  meta?: IMeta;

  /**
   * A set of rules under which this content was created
   */
  implicitRules?: string;

  /**
   * Extension for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * Language of the resource content
   */
  language?: string;

  /**
   * Extension for language
   */
  _language?: IElement;
}

import type { IElement } from './IElement.js';
