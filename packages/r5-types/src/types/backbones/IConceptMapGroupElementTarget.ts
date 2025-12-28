import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IConceptMapGroupElementTargetDependsOn } from './IConceptMapGroupElementTargetDependsOn.js';
import type { IConceptMapGroupElementTargetProperty } from './IConceptMapGroupElementTargetProperty.js';
import type { ConceptMapRelationshipType } from '../../valuesets/index.js';

/**
 * ConceptMapGroupElementTarget Interface
 * 
 * Concept in target system for element
 * 
 *
 * @see https://hl7.org/fhir/R5/conceptmapgroupelementtarget.html
 */
export interface IConceptMapGroupElementTarget extends IBackboneElement {
  /**
   * Code that identifies the target element
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
   * Identifies the set of target concepts
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to
   */
  relationship: ConceptMapRelationshipType;
  /**
   * Extension for relationship
   */
  _relationship?: IElement;

  /**
   * Description of status/issues in mapping
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Property value for the source -> target mapping
   */
  property?: IConceptMapGroupElementTargetProperty[];

  /**
   * Other properties required for this mapping
   */
  dependsOn?: IConceptMapGroupElementTargetDependsOn[];

  /**
   * Other data elements that this mapping also produces
   */
  product?: IConceptMapGroupElementTargetDependsOn[];

}
