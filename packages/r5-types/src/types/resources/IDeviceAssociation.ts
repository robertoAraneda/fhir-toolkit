import type { ICodeableConcept, IDomainResource, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IDeviceAssociationOperation } from '../backbones/IDeviceAssociationOperation.js';
import type { DeviceAssociationType } from '../../valuesets/index.js';

/**
 * DeviceAssociation Interface
 * 
 * A record of association or dissociation of a device with a patient.
 * 
 *
 * @see https://hl7.org/fhir/R4/deviceassociation.html
 */
export interface IDeviceAssociation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceAssociation';

  /**
   * Instance identifier
   */
  identifier?: IIdentifier[];

  /**
   * Reference to the devices associated with the patient or group
   */
  device: IReference<'Device'>;

  /**
   * Describes the relationship between the device and subject
   */
  category?: ICodeableConcept[];

  /**
   * implanted | explanted | attached | entered-in-error | unknown
   */
  status: ICodeableConcept<DeviceAssociationType>;

  /**
   * The reasons given for the current association status
   */
  statusReason?: ICodeableConcept<DeviceAssociationType>[];

  /**
   * The individual, group of individuals or device that the device is on or associated with
   */
  subject?: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson' | 'Device'>;

  /**
   * Current anatomical location of the device in/on subject
   */
  bodyStructure?: IReference<'BodyStructure'>;

  /**
   * Begin and end dates and times for the device association
   */
  period?: IPeriod;

  /**
   * The details about the device when it is in use to describe its operation
   */
  operation?: IDeviceAssociationOperation[];

}
