import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * BiologicallyDerivedProductDispensePerformer Interface
 * 
 * Indicates who or what performed an action
 * 
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproductdispenseperformer.html
 */
export interface IBiologicallyDerivedProductDispensePerformer extends IBackboneElement {
  /**
   * Identifies the function of the performer during the dispense
   */
  function?: ICodeableConcept;

  /**
   * Who performed the action
   */
  actor: IReference<'Practitioner'>;

}
