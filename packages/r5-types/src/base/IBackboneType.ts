import type { IDataType } from './IDataType.js';
import type { IExtension } from '../types/datatypes/IExtension.js';

/**
 * BackboneType Interface
 * Base definition for datatypes that allow modifier extensions.
 * R5: BackboneType extends DataType and adds modifierExtension.
 * Used by: Timing, Dosage, ElementDefinition, MarketingStatus, ProductShelfLife
 *
 * @see https://hl7.org/fhir/R5/types.html#BackboneType
 */
export interface IBackboneType extends IDataType {
  /**
   * Extensions that cannot be ignored even if unrecognized
   */
  modifierExtension?: IExtension[];
}
