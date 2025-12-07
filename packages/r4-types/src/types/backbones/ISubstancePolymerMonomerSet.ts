import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ISubstancePolymerMonomerSetStartingMaterial } from './ISubstancePolymerMonomerSetStartingMaterial.js';

/**
 * SubstancePolymerMonomerSet Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymermonomerset.html
 */
export interface ISubstancePolymerMonomerSet extends IBackboneElement {
  /**
   * Todo
   */
  ratioType?: ICodeableConcept;

  /**
   * Todo
   */
  startingMaterial?: ISubstancePolymerMonomerSetStartingMaterial[];

}
