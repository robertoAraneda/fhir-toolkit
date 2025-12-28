import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ConceptMapGroupUnmappedModeType } from '../../valuesets/index.js';

/**
 * ConceptMapGroupUnmapped Interface
 * 
 * What to do when there is no mapping for the source concept
 * 
 *
 * @see https://hl7.org/fhir/R4B/conceptmapgroupunmapped.html
 */
export interface IConceptMapGroupUnmapped extends IBackboneElement {
  /**
   * provided | fixed | other-map
   */
  mode: ConceptMapGroupUnmappedModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Fixed code when mode = fixed
   */
  code?: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Display for the code
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
