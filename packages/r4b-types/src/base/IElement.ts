import type { IExtension } from '../types/datatypes/IExtension.js';

/**
 * Element Interface
 * Base definition for all elements in a resource.
 *
 * @see https://hl7.org/fhir/R4/element.html
 */
export interface IElement {
  /**
   * Unique id for inter-element referencing
   */
  id?: string;

  /**
   * Additional content defined by implementations
   */
  extension?: IExtension[];
}
