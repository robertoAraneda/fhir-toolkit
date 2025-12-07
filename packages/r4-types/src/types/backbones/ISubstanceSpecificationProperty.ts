import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceSpecificationProperty Interface
 * 
 * General specifications for this substance, including how it is related to other substances
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationproperty.html
 */
export interface ISubstanceSpecificationProperty extends IBackboneElement {
  /**
   * A category for this property, e.g. Physical, Chemical, Enzymatic
   */
  category?: ICodeableConcept;

  /**
   * Property type e.g. viscosity, pH, isoelectric point
   */
  code?: ICodeableConcept;

  /**
   * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1)
   */
  parameters?: string;
  /**
   * Extension for parameters
   */
  _parameters?: IElement;

  /**
   * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol)
   */
  definingSubstanceReference?: IReference;

  /**
   * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol)
   */
  definingSubstanceCodeableConcept?: ICodeableConcept;

  /**
   * Quantitative value for this property
   */
  amountQuantity?: IQuantity;

  /**
   * Quantitative value for this property
   */
  amountString?: string;
  /**
   * Extension for amountString
   */
  _amountString?: IElement;

}
