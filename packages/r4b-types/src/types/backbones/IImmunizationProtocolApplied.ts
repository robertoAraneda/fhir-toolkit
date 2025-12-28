import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ImmunizationProtocolApplied Interface
 * 
 * Protocol followed by the provider
 * 
 *
 * @see https://hl7.org/fhir/R4B/immunizationprotocolapplied.html
 */
export interface IImmunizationProtocolApplied extends IBackboneElement {
  /**
   * Name of vaccine series
   */
  series?: string;
  /**
   * Extension for series
   */
  _series?: IElement;

  /**
   * Who is responsible for publishing the recommendations
   */
  authority?: IReference<'Organization'>;

  /**
   * Vaccine preventatable disease being targetted
   */
  targetDisease?: ICodeableConcept[];

  /**
   * Dose number within series
   */
  doseNumberPositiveInt?: number;
  /**
   * Extension for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * Dose number within series
   */
  doseNumberString?: string;
  /**
   * Extension for doseNumberString
   */
  _doseNumberString?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDosesPositiveInt?: number;
  /**
   * Extension for seriesDosesPositiveInt
   */
  _seriesDosesPositiveInt?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDosesString?: string;
  /**
   * Extension for seriesDosesString
   */
  _seriesDosesString?: IElement;

}
