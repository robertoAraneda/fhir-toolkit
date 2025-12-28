import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IDeviceRequestParameter } from '../backbones/IDeviceRequestParameter.js';
import type { RequestIntentType, RequestPriorityType, RequestStatusType } from '../../valuesets/index.js';

/**
 * DeviceRequest Interface
 * 
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 * 
 *
 * @see https://hl7.org/fhir/R5/devicerequest.html
 */
export interface IDeviceRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceRequest';

  /**
   * External Request identifier
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * What request fulfills
   */
  basedOn?: IReference<'Resource'>[];

  /**
   * What request replaces
   */
  replaces?: IReference<'DeviceRequest'>[];

  /**
   * Identifier of composite request
   */
  groupIdentifier?: IIdentifier;

  /**
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  status?: RequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: RequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * True if the request is to stop or not to start using the device
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * Device requested
   */
  code: ICodeableReference;

  /**
   * Quantity of devices to supply
   */
  quantity?: number;
  /**
   * Extension for quantity
   */
  _quantity?: IElement;

  /**
   * Device details
   */
  parameter?: IDeviceRequestParameter[];

  /**
   * Focus of request
   */
  subject: IReference<'Patient' | 'Group' | 'Location' | 'Device'>;

  /**
   * Encounter motivating request
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Desired time or schedule for use
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * Desired time or schedule for use
   */
  occurrencePeriod?: IPeriod;

  /**
   * Desired time or schedule for use
   */
  occurrenceTiming?: ITiming;

  /**
   * When recorded
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Who/what submitted the device request
   */
  requester?: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Requested Filler
   */
  performer?: ICodeableReference;

  /**
   * Coded/Linked Reason for request
   */
  reason?: ICodeableReference[];

  /**
   * PRN status of request
   */
  asNeeded?: boolean;
  /**
   * Extension for asNeeded
   */
  _asNeeded?: IElement;

  /**
   * Device usage reason
   */
  asNeededFor?: ICodeableConcept;

  /**
   * Associated insurance coverage
   */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /**
   * Additional clinical information
   */
  supportingInfo?: IReference<'Resource'>[];

  /**
   * Notes or comments
   */
  note?: IAnnotation[];

  /**
   * Request provenance
   */
  relevantHistory?: IReference<'Provenance'>[];

}
