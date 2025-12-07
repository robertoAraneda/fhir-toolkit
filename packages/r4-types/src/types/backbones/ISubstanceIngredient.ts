import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * SubstanceIngredient Interface
 * 
 * Composition information about the substance
 * 
 *
 * @see https://hl7.org/fhir/R4/substanceingredient.html
 */
export interface ISubstanceIngredient extends IBackboneElement {
  /**
   * Optional amount (concentration)
   */
  quantity?: IRatio;

  /**
   * A component of the substance
   */
  substanceCodeableConcept?: ICodeableConcept;

  /**
   * A component of the substance
   */
  substanceReference?: IReference;

}
