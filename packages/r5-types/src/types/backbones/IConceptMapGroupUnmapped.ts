import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ConceptMapGroupUnmappedModeType, ConceptMapRelationshipType } from '../../valuesets/index.js';

/**
 * ConceptMapGroupUnmapped Interface
 * 
 * What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true
 * 
 *
 * @see https://hl7.org/fhir/R5/conceptmapgroupunmapped.html
 */
export interface IConceptMapGroupUnmapped extends IBackboneElement {
  /**
   * use-source-code | fixed | other-map
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
   * Fixed code set when mode = fixed
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to
   */
  relationship?: ConceptMapRelationshipType;
  /**
   * Extension for relationship
   */
  _relationship?: IElement;

  /**
   * canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped
   */
  otherMap?: string;
  /**
   * Extension for otherMap
   */
  _otherMap?: IElement;

}
