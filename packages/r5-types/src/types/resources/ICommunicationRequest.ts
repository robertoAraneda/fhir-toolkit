import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICommunicationRequestPayload } from '../backbones/ICommunicationRequestPayload.js';
import type { RequestIntentType, RequestPriorityType, RequestStatusType } from '../../valuesets/index.js';

/**
 * CommunicationRequest Interface
 * 
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 * 
 *
 * @see https://hl7.org/fhir/R5/communicationrequest.html
 */
export interface ICommunicationRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CommunicationRequest';

  /**
   * Unique identifier
   */
  identifier?: IIdentifier[];

  /**
   * Fulfills plan or proposal
   */
  basedOn?: IReference<'Resource'>[];

  /**
   * Request(s) replaced by this request
   */
  replaces?: IReference<'CommunicationRequest'>[];

  /**
   * Composite request this is part of
   */
  groupIdentifier?: IIdentifier;

  /**
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  status: RequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: RequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * Message category
   */
  category?: ICodeableConcept[];

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * True if request is prohibiting action
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * A channel of communication
   */
  medium?: ICodeableConcept[];

  /**
   * Focus of message
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Resources that pertain to this communication request
   */
  about?: IReference<'Resource'>[];

  /**
   * The Encounter during which this CommunicationRequest was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Message payload
   */
  payload?: ICommunicationRequestPayload[];

  /**
   * When scheduled
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When scheduled
   */
  occurrencePeriod?: IPeriod;

  /**
   * When request transitioned to being actionable
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Who asks for the information to be shared
   */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * Who to share the information with
   */
  recipient?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'CareTeam' | 'HealthcareService' | 'Endpoint'>[];

  /**
   * Who should share the information
   */
  informationProvider?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService' | 'Endpoint'>[];

  /**
   * Why is communication needed?
   */
  reason?: ICodeableReference[];

  /**
   * Comments made about communication request
   */
  note?: IAnnotation[];

}
