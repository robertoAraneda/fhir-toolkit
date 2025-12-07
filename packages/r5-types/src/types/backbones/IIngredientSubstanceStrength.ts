import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IRatioRange } from '../datatypes/IRatioRange.js';
import type { IIngredientSubstanceStrengthReferenceStrength } from './IIngredientSubstanceStrengthReferenceStrength.js';

/**
 * IngredientSubstanceStrength Interface
 * 
 * The quantity of substance, per presentation, or per volume or mass, and type of quantity
 * 
 *
 * @see https://hl7.org/fhir/R4/ingredientsubstancestrength.html
 */
export interface IIngredientSubstanceStrength extends IBackboneElement {
  /**
   * The quantity of substance in the unit of presentation
   */
  presentationRatio?: IRatio;

  /**
   * The quantity of substance in the unit of presentation
   */
  presentationRatioRange?: IRatioRange;

  /**
   * The quantity of substance in the unit of presentation
   */
  presentationCodeableConcept?: ICodeableConcept;

  /**
   * The quantity of substance in the unit of presentation
   */
  presentationQuantity?: IQuantity;

  /**
   * Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio)
   */
  textPresentation?: string;
  /**
   * Extension for textPresentation
   */
  _textPresentation?: IElement;

  /**
   * The strength per unitary volume (or mass)
   */
  concentrationRatio?: IRatio;

  /**
   * The strength per unitary volume (or mass)
   */
  concentrationRatioRange?: IRatioRange;

  /**
   * The strength per unitary volume (or mass)
   */
  concentrationCodeableConcept?: ICodeableConcept;

  /**
   * The strength per unitary volume (or mass)
   */
  concentrationQuantity?: IQuantity;

  /**
   * Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio)
   */
  textConcentration?: string;
  /**
   * Extension for textConcentration
   */
  _textConcentration?: IElement;

  /**
   * A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt)
   */
  basis?: ICodeableConcept;

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

  /**
   * Strength expressed in terms of a reference substance
   */
  referenceStrength?: IIngredientSubstanceStrengthReferenceStrength[];

}
