import type { IElement } from '../../base/index.js';
import type { IExtension } from './IExtension.js';

/**
 * BackboneType Interface
 *
 * Base definition for the few datatypes that allow modifier extensions.
 * In FHIR R5, this is used by Timing, Dosage, and ElementDefinition.
 *
 * @see https://hl7.org/fhir/R5/types.html#BackboneType
 */
export interface IBackboneType extends IElement {
  /**
   * Extensions that cannot be ignored even if unrecognized
   */
  modifierExtension?: IExtension[];
}
