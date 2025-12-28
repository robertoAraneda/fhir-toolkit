import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IConceptMapGroupElementTargetDependsOn } from './IConceptMapGroupElementTargetDependsOn.js';
import type { ConceptMapEquivalenceType } from '../../valuesets/index.js';

/**
 * ConceptMapGroupElementTarget Interface
 * 
 * Concept in target system for element
 * 
 *
 * @see https://hl7.org/fhir/R4B/conceptmapgroupelementtarget.html
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
   * relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
   */
  equivalence: ConceptMapEquivalenceType;
  /**
   * Extension for equivalence
   */
  _equivalence?: IElement;

  /**
   * Description of status/issues in mapping
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Other elements required for this mapping (from context)
   */
  dependsOn?: IConceptMapGroupElementTargetDependsOn[];

  /**
   * Other concepts that this mapping also produces
   */
  product?: IConceptMapGroupElementTargetDependsOn[];

}
