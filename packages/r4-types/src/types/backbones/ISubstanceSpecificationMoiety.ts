import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceSpecificationMoiety Interface
 * 
 * Moiety, for structural modifications
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationmoiety.html
 */
export interface ISubstanceSpecificationMoiety extends IBackboneElement {
  /**
   * Role that the moiety is playing
   */
  role?: ICodeableConcept;

  /**
   * Identifier by which this moiety substance is known
   */
  identifier?: IIdentifier;

  /**
   * Textual name for this moiety substance
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Stereochemistry type
   */
  stereochemistry?: ICodeableConcept;

  /**
   * Optical activity type
   */
  opticalActivity?: ICodeableConcept;

  /**
   * Molecular formula
   */
  molecularFormula?: string;
  /**
   * Extension for molecularFormula
   */
  _molecularFormula?: IElement;

  /**
   * Quantitative value for this moiety
   */
  amountQuantity?: IQuantity;

  /**
   * Quantitative value for this moiety
   */
  amountString?: string;
  /**
   * Extension for amountString
   */
  _amountString?: IElement;

}
