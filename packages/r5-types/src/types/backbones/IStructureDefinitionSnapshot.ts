import type { IBackboneElement } from '../../base/index.js';
import type { IElementDefinition } from '../datatypes/IElementDefinition.js';

/**
 * StructureDefinitionSnapshot Interface
 * 
 * Snapshot view of the structure
 * 
 *
 * @see https://hl7.org/fhir/R5/structuredefinitionsnapshot.html
 */
export interface IStructureDefinitionSnapshot extends IBackboneElement {
  /**
   * Definition of elements in the resource (if no StructureDefinition)
   */
  element: IElementDefinition[];

}
