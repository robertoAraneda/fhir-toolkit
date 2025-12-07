import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ConditionDefinitionPlan Interface
 * 
 * Plan that is appropriate
 * 
 *
 * @see https://hl7.org/fhir/R4/conditiondefinitionplan.html
 */
export interface IConditionDefinitionPlan extends IBackboneElement {
  /**
   * Use for the plan
   */
  role?: ICodeableConcept;

  /**
   * The actual plan
   */
  reference: IReference<'PlanDefinition'>;

}
