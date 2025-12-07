import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
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
 * @see https://hl7.org/fhir/R4/devicerequest.html
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
  priorRequest?: IReference<'Resource'>[];

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
   * Device requested
   */
  codeReference?: IReference;

  /**
   * Device requested
   */
  codeCodeableConcept?: ICodeableConcept;

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
   * Who/what is requesting diagnostics
   */
  requester?: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Filler role
   */
  performerType?: ICodeableConcept;

  /**
   * Requested Filler
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * Coded Reason for request
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Linked Reason for request
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

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
