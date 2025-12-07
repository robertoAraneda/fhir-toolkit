import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * ServiceRequestOrderDetailParameter Interface
 * 
 * The parameter details for the service being requested
 * 
 *
 * @see https://hl7.org/fhir/R4/servicerequestorderdetailparameter.html
 */
export interface IServiceRequestOrderDetailParameter extends IBackboneElement {
  /**
   * The detail of the order being requested
   */
  code: ICodeableConcept;

  /**
   * The value for the order detail
   */
  valueQuantity?: IQuantity;

  /**
   * The value for the order detail
   */
  valueRatio?: IRatio;

  /**
   * The value for the order detail
   */
  valueRange?: IRange;

  /**
   * The value for the order detail
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The value for the order detail
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The value for the order detail
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * The value for the order detail
   */
  valuePeriod?: IPeriod;

}
