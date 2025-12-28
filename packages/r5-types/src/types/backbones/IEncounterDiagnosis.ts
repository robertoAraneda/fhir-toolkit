import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * EncounterDiagnosis Interface
 * 
 * The list of diagnosis relevant to this encounter
 * 
 *
 * @see https://hl7.org/fhir/R5/encounterdiagnosis.html
 */
export interface IEncounterDiagnosis extends IBackboneElement {
  /**
   * The diagnosis relevant to the encounter
   */
  condition?: ICodeableReference[];

  /**
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
   */
  use?: ICodeableConcept[];

}
