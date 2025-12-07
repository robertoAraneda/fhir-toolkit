import type { IResource } from './IResource.js';
import type { IExtension } from '../types/datatypes/IExtension.js';
import type { INarrative } from '../types/datatypes/INarrative.js';

/**
 * DomainResource Interface
 * A resource that includes narrative, extensions, and contained resources.
 *
 * @see https://hl7.org/fhir/R4/domainresource.html
 */
export interface IDomainResource extends IResource {
  /**
   * Text summary of the resource, for human interpretation
   */
  text?: INarrative;

  /**
   * Contained, inline Resources
   */
  contained?: IResource[];

  /**
   * Additional content defined by implementations
   */
  extension?: IExtension[];

  /**
   * Extensions that cannot be ignored
   */
  modifierExtension?: IExtension[];
}
