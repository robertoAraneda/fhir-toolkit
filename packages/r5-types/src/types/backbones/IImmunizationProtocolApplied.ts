import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ImmunizationProtocolApplied Interface
 * 
 * Protocol followed by the provider
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationprotocolapplied.html
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
   * Vaccine preventatable disease being targeted
   */
  targetDisease?: ICodeableConcept[];

  /**
   * Dose number within series
   */
  doseNumber: string;
  /**
   * Extension for doseNumber
   */
  _doseNumber?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDoses?: string;
  /**
   * Extension for seriesDoses
   */
  _seriesDoses?: IElement;

}
