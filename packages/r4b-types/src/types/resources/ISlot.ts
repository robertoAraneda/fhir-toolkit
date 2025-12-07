import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { SlotStatusType } from '../../valuesets/index.js';

/**
 * Slot Interface
 * 
 * A slot of time on a schedule that may be available for booking appointments.
 * 
 *
 * @see https://hl7.org/fhir/R4/slot.html
 */
export interface ISlot extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Slot';

  /**
   * External Ids for this item
   */
  identifier?: IIdentifier[];

  /**
   * A broad categorization of the service that is to be performed during this appointment
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource
   */
  serviceType?: ICodeableConcept[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment
   */
  specialty?: ICodeableConcept[];

  /**
   * The style of appointment or patient that may be booked in the slot (not service type)
   */
  appointmentType?: ICodeableConcept;

  /**
   * The schedule resource that this slot defines an interval of status information
   */
  schedule: IReference<'Schedule'>;

  /**
   * busy | free | busy-unavailable | busy-tentative | entered-in-error
   */
  status: SlotStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Date/Time that the slot is to begin
   */
  start: string;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * Date/Time that the slot is to conclude
   */
  end: string;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * This slot has already been overbooked, appointments are unlikely to be accepted for this time
   */
  overbooked?: boolean;
  /**
   * Extension for overbooked
   */
  _overbooked?: IElement;

  /**
   * Comments on the slot to describe any extended information. Such as custom constraints on the slot
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
