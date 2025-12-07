import type { IBackboneType, ICodeableConcept, IElement } from '../../base/index.js';
import type { IDuration } from './IDuration.js';

/**
 * ProductShelfLife Interface
 * 
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 * 
 *
 * @see https://hl7.org/fhir/R4/productshelflife.html
 */
export interface IProductShelfLife extends IBackboneType {
  /**
   * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
   */
  type?: ICodeableConcept;

  /**
   * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  periodDuration?: IDuration;

  /**
   * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  periodString?: string;
  /**
   * Extension for periodString
   */
  _periodString?: IElement;

  /**
   * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
   */
  specialPrecautionsForStorage?: ICodeableConcept[];

}
