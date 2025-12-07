import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { BiologicallyDerivedProductStorageScaleType } from '../../valuesets/index.js';

/**
 * BiologicallyDerivedProductStorage Interface
 * 
 * Product storage
 * 
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproductstorage.html
 */
export interface IBiologicallyDerivedProductStorage extends IBackboneElement {
  /**
   * Description of storage
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Storage temperature
   */
  temperature?: number;
  /**
   * Extension for temperature
   */
  _temperature?: IElement;

  /**
   * farenheit | celsius | kelvin
   */
  scale?: BiologicallyDerivedProductStorageScaleType;
  /**
   * Extension for scale
   */
  _scale?: IElement;

  /**
   * Storage timeperiod
   */
  duration?: IPeriod;

}
