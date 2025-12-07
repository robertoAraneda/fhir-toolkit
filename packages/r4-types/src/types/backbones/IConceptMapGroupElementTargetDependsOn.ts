import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ConceptMapGroupElementTargetDependsOn Interface
 * 
 * Other elements required for this mapping (from context)
 * 
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupelementtargetdependson.html
 */
export interface IConceptMapGroupElementTargetDependsOn extends IBackboneElement {
  /**
   * Reference to property mapping depends on
   */
  property: string;
  /**
   * Extension for property
   */
  _property?: IElement;

  /**
   * Code System (if necessary)
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * Value of the referenced element
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * Display for the code (if value is a code)
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

}
