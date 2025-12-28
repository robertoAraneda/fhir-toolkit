import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * DeviceRequestParameter Interface
 * 
 * Device details
 * 
 *
 * @see https://hl7.org/fhir/R4B/devicerequestparameter.html
 */
export interface IDeviceRequestParameter extends IBackboneElement {
  /**
   * Device detail
   */
  code?: ICodeableConcept;

  /**
   * Value of detail
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of detail
   */
  valueQuantity?: IQuantity;

  /**
   * Value of detail
   */
  valueRange?: IRange;

  /**
   * Value of detail
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

}
