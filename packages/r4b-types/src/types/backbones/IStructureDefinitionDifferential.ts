import type { IBackboneElement } from '../../base/index.js';
import type { IElementDefinition } from '../datatypes/IElementDefinition.js';

/**
 * StructureDefinitionDifferential Interface
 * 
 * Differential view of the structure
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuredefinitiondifferential.html
 */
export interface IStructureDefinitionDifferential extends IBackboneElement {
  /**
   * Definition of elements in the resource (if no StructureDefinition)
   */
  element: IElementDefinition[];

}
