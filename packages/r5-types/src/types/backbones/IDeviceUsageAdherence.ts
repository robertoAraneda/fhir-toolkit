import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * DeviceUsageAdherence Interface
 * 
 * How device is being used
 * 
 *
 * @see https://hl7.org/fhir/R4/deviceusageadherence.html
 */
export interface IDeviceUsageAdherence extends IBackboneElement {
  /**
   * always | never | sometimes
   */
  code: ICodeableConcept;

  /**
   * lost | stolen | prescribed | broken | burned | forgot
   */
  reason: ICodeableConcept[];

}
