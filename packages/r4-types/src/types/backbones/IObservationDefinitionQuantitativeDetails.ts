import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ObservationDefinitionQuantitativeDetails Interface
 * 
 * Characteristics of quantitative results
 * 
 *
 * @see https://hl7.org/fhir/R4/observationdefinitionquantitativedetails.html
 */
export interface IObservationDefinitionQuantitativeDetails extends IBackboneElement {
  /**
   * Customary unit for quantitative results
   */
  customaryUnit?: ICodeableConcept;

  /**
   * SI unit for quantitative results
   */
  unit?: ICodeableConcept;

  /**
   * SI to Customary unit conversion factor
   */
  conversionFactor?: number;
  /**
   * Extension for conversionFactor
   */
  _conversionFactor?: IElement;

  /**
   * Decimal precision of observation quantitative results
   */
  decimalPrecision?: number;
  /**
   * Extension for decimalPrecision
   */
  _decimalPrecision?: IElement;

}
