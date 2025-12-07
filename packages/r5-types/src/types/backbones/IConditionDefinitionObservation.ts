import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * ConditionDefinitionObservation Interface
 * 
 * Observations particularly relevant to this condition
 * 
 *
 * @see https://hl7.org/fhir/R4/conditiondefinitionobservation.html
 */
export interface IConditionDefinitionObservation extends IBackboneElement {
  /**
   * Category that is relevant
   */
  category?: ICodeableConcept;

  /**
   * Code for relevant Observation
   */
  code?: ICodeableConcept;

}
