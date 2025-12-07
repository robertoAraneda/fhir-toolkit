import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IRatioRange } from '../datatypes/IRatioRange.js';

/**
 * IngredientSubstanceStrengthReferenceStrength Interface
 * 
 * Strength expressed in terms of a reference substance
 * 
 *
 * @see https://hl7.org/fhir/R4/ingredientsubstancestrengthreferencestrength.html
 */
export interface IIngredientSubstanceStrengthReferenceStrength extends IBackboneElement {
  /**
   * Relevant reference substance
   */
  substance: ICodeableReference;

  /**
   * Strength expressed in terms of a reference substance
   */
  strengthRatio?: IRatio;

  /**
   * Strength expressed in terms of a reference substance
   */
  strengthRatioRange?: IRatioRange;

  /**
   * Strength expressed in terms of a reference substance
   */
  strengthQuantity?: IQuantity;

  /**
   * When strength is measured at a particular point or distance
   */
  measurementPoint?: string;
  /**
   * Extension for measurementPoint
   */
  _measurementPoint?: IElement;

  /**
   * Where the strength range applies
   */
  country?: ICodeableConcept[];

}
