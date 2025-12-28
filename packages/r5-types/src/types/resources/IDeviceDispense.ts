import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IDeviceDispensePerformer } from '../backbones/IDeviceDispensePerformer.js';
import type { DeviceDispenseStatusType } from '../../valuesets/index.js';

/**
 * DeviceDispense Interface
 * 
 * A record of dispensation of a device - i.e., assigning a device to a patient, or to a professional for their use.
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedispense.html
 */
export interface IDeviceDispense extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceDispense';

  /**
   * Business identifier for this dispensation
   */
  identifier?: IIdentifier[];

  /**
   * The order or request that this dispense is fulfilling
   */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest'>[];

  /**
   * The bigger event that this dispense is a part of
   */
  partOf?: IReference<'Procedure'>[];

  /**
   * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
   */
  status: DeviceDispenseStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Why a dispense was or was not performed
   */
  statusReason?: ICodeableReference;

  /**
   * Type of device dispense
   */
  category?: ICodeableConcept[];

  /**
   * What device was supplied
   */
  device: ICodeableReference;

  /**
   * Who the dispense is for
   */
  subject: IReference<'Patient' | 'Practitioner'>;

  /**
   * Who collected the device or where the medication was delivered
   */
  receiver?: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Location' | 'PractitionerRole'>;

  /**
   * Encounter associated with event
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Information that supports the dispensing of the device
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * Who performed event
   */
  performer?: IDeviceDispensePerformer[];

  /**
   * Where the dispense occurred
   */
  location?: IReference<'Location'>;

  /**
   * Trial fill, partial fill, emergency fill, etc
   */
  type?: ICodeableConcept;

  /**
   * Amount dispensed
   */
  quantity?: IQuantity;

  /**
   * When product was packaged and reviewed
   */
  preparedDate?: string;
  /**
   * Extension for preparedDate
   */
  _preparedDate?: IElement;

  /**
   * When product was given out
   */
  whenHandedOver?: string;
  /**
   * Extension for whenHandedOver
   */
  _whenHandedOver?: IElement;

  /**
   * Where the device was sent or should be sent
   */
  destination?: IReference<'Location'>;

  /**
   * Information about the dispense
   */
  note?: IAnnotation[];

  /**
   * Full representation of the usage instructions
   */
  usageInstruction?: string;
  /**
   * Extension for usageInstruction
   */
  _usageInstruction?: IElement;

  /**
   * A list of relevant lifecycle events
   */
  eventHistory?: IReference<'Provenance'>[];

}
