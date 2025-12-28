import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * ConditionDefinitionMedication Interface
 * 
 * Medications particularly relevant for this condition
 * 
 *
 * @see https://hl7.org/fhir/R5/conditiondefinitionmedication.html
 */
export interface IConditionDefinitionMedication extends IBackboneElement {
  /**
   * Category that is relevant
   */
  category?: ICodeableConcept;

  /**
   * Code for relevant Medication
   */
  code?: ICodeableConcept;

}
