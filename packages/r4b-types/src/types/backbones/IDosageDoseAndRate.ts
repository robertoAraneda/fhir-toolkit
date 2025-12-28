import type { ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * DosageDoseAndRate Interface
 * 
 * Amount of medication administered
 * 
 *
 * @see https://hl7.org/fhir/R4B/dosagedoseandrate.html
 */
export interface IDosageDoseAndRate extends IElement {
  /**
   * The kind of dose or rate specified
   */
  type?: ICodeableConcept;

  /**
   * Amount of medication per dose
   */
  doseRange?: IRange;

  /**
   * Amount of medication per dose
   */
  doseQuantity?: IQuantity;

  /**
   * Amount of medication per unit of time
   */
  rateRatio?: IRatio;

  /**
   * Amount of medication per unit of time
   */
  rateRange?: IRange;

  /**
   * Amount of medication per unit of time
   */
  rateQuantity?: IQuantity;

}
