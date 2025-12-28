import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';

/**
 * DeviceDefinitionChargeItem Interface
 * 
 * Billing code or reference associated with the device
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionchargeitem.html
 */
export interface IDeviceDefinitionChargeItem extends IBackboneElement {
  /**
   * The code or reference for the charge item
   */
  chargeItemCode: ICodeableReference;

  /**
   * Coefficient applicable to the billing code
   */
  count: IQuantity;

  /**
   * A specific time period in which this charge item applies
   */
  effectivePeriod?: IPeriod;

  /**
   * The context to which this charge item applies
   */
  useContext?: IUsageContext[];

}
