import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * EncounterDiagnosis Interface
 * 
 * The list of diagnosis relevant to this encounter
 * 
 *
 * @see https://hl7.org/fhir/R4/encounterdiagnosis.html
 */
export interface IEncounterDiagnosis extends IBackboneElement {
  /**
   * The diagnosis or procedure relevant to the encounter
   */
  condition: IReference<'Condition' | 'Procedure'>;

  /**
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
   */
  use?: ICodeableConcept;

  /**
   * Ranking of the diagnosis (for each role type)
   */
  rank?: number;
  /**
   * Extension for rank
   */
  _rank?: IElement;

}
