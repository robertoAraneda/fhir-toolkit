import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * NutritionIntakePerformer Interface
 * 
 * Who was performed in the intake
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionintakeperformer.html
 */
export interface INutritionIntakePerformer extends IBackboneElement {
  /**
   * Type of performer
   */
  function?: ICodeableConcept;

  /**
   * Who performed the intake
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

}
