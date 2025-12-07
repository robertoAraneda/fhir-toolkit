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
   * Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio
   */
  ratioType?: ICodeableConcept;

  /**
   * The starting materials - monomer(s) used in the synthesis of the polymer
   */
  startingMaterial?: ISubstancePolymerMonomerSetStartingMaterial[];

}
