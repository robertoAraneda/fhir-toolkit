import type { IBackboneElement, IElement } from '../../base/index.js';
import type { StructureMapModelModeType } from '../../valuesets/index.js';

/**
 * StructureMapStructure Interface
 * 
 * Structure Definition used by this map
 * 
 *
 * @see https://hl7.org/fhir/R4/structuremapstructure.html
 */
export interface IStructureMapStructure extends IBackboneElement {
  /**
   * Canonical reference to structure definition
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * source | queried | target | produced
   */
  mode: StructureMapModelModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Name for type in this map
   */
  alias?: string;
  /**
   * Extension for alias
   */
  _alias?: IElement;

  /**
   * Documentation on use of structure
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
