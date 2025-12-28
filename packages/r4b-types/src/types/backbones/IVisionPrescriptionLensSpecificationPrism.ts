import type { IBackboneElement, IElement } from '../../base/index.js';
import type { VisionBaseType } from '../../valuesets/index.js';

/**
 * VisionPrescriptionLensSpecificationPrism Interface
 * 
 * Eye alignment compensation
 * 
 *
 * @see https://hl7.org/fhir/R4B/visionprescriptionlensspecificationprism.html
 */
export interface IVisionPrescriptionLensSpecificationPrism extends IBackboneElement {
  /**
   * Amount of adjustment
   */
  amount: number;
  /**
   * Extension for amount
   */
  _amount?: IElement;

  /**
   * up | down | in | out
   */
  base: VisionBaseType;
  /**
   * Extension for base
   */
  _base?: IElement;

}
