import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IConceptMapGroupElement } from './IConceptMapGroupElement.js';
import type { IConceptMapGroupUnmapped } from './IConceptMapGroupUnmapped.js';

/**
 * ConceptMapGroup Interface
 * 
 * Same source and target systems
 * 
 *
 * @see https://hl7.org/fhir/R4B/conceptmapgroup.html
 */
export interface IConceptMapGroup extends IBackboneElement {
  /**
   * Source system where concepts to be mapped are defined
   */
  source?: string;
  /**
   * Extension for source
   */
  _source?: IElement;

  /**
   * Specific version of the  code system
   */
  sourceVersion?: string;
  /**
   * Extension for sourceVersion
   */
  _sourceVersion?: IElement;

  /**
   * Target system that the concepts are to be mapped to
   */
  target?: string;
  /**
   * Extension for target
   */
  _target?: IElement;

  /**
   * Specific version of the  code system
   */
  targetVersion?: string;
  /**
   * Extension for targetVersion
   */
  _targetVersion?: IElement;

  /**
   * Mappings for a concept from the source set
   */
  element: IConceptMapGroupElement[];

  /**
   * What to do when there is no mapping for the source concept
   */
  unmapped?: IConceptMapGroupUnmapped;

}
