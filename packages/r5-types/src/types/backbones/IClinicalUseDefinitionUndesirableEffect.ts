import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ClinicalUseDefinitionUndesirableEffect Interface
 * 
 * A possible negative outcome from the use of this treatment
 * 
 *
 * @see https://hl7.org/fhir/R5/clinicalusedefinitionundesirableeffect.html
 */
export interface IClinicalUseDefinitionUndesirableEffect extends IBackboneElement {
  /**
   * The situation in which the undesirable effect may manifest
   */
  symptomConditionEffect?: ICodeableReference;

  /**
   * High level classification of the effect
   */
  classification?: ICodeableConcept;

  /**
   * How often the effect is seen
   */
  frequencyOfOccurrence?: ICodeableConcept;

}
