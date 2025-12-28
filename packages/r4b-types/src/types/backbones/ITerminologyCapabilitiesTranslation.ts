import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesTranslation Interface
 * 
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiestranslation.html
 */
export interface ITerminologyCapabilitiesTranslation extends IBackboneElement {
  /**
   * Whether the client must identify the map
   */
  needsMap: boolean;
  /**
   * Extension for needsMap
   */
  _needsMap?: IElement;

}
