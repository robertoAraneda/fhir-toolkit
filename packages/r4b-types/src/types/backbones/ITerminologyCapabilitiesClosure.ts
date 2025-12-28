import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesClosure Interface
 * 
 * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiesclosure.html
 */
export interface ITerminologyCapabilitiesClosure extends IBackboneElement {
  /**
   * If cross-system closure is supported
   */
  translation?: boolean;
  /**
   * Extension for translation
   */
  _translation?: IElement;

}
