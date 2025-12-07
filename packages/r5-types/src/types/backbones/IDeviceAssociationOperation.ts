import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * DeviceAssociationOperation Interface
 * 
 * The details about the device when it is in use to describe its operation
 * 
 *
 * @see https://hl7.org/fhir/R4/deviceassociationoperation.html
 */
export interface IDeviceAssociationOperation extends IBackboneElement {
  /**
   * Device operational condition
   */
  status: ICodeableConcept;

  /**
   * The individual performing the action enabled by the device
   */
  operator?: IReference<'Patient' | 'Practitioner' | 'RelatedPerson'>[];

  /**
   * Begin and end dates and times for the device's operation
   */
  period?: IPeriod;

}
