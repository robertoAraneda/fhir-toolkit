import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IConceptMapGroupElementTarget } from './IConceptMapGroupElementTarget.js';

/**
 * ConceptMapGroupElement Interface
 * 
 * Mappings for a concept from the source set
 * 
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupelement.html
 */
export interface IConceptMapGroupElement extends IBackboneElement {
  /**
   * Identifies element being mapped
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
   * Identifies the set of concepts being mapped
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * No mapping to a target concept for this source concept
   */
  noMap?: boolean;
  /**
   * Extension for noMap
   */
  _noMap?: IElement;

  /**
   * Concept in target system for element
   */
  target?: IConceptMapGroupElementTarget[];

}
