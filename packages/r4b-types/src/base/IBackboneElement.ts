import type { IElement } from './IElement.js';
import type { IExtension } from '../types/datatypes/IExtension.js';

/**
 * BackboneElement Interface
 * Base definition for all elements that are defined inside a resource.
 *
 * @see https://hl7.org/fhir/R4/backboneelement.html
 */
export interface IBackboneElement extends IElement {
  /**
   * Extensions that cannot be ignored even if unrecognized
   */
  modifierExtension?: IExtension[];
}
