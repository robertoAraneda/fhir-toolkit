import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ICommunicationPayload } from '../backbones/ICommunicationPayload.js';
import type { EventStatusType, RequestPriorityType } from '../../valuesets/index.js';

/**
 * Communication Interface
 * 
 * A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a responsible provider, a public health agency communication to a provider/reporter in response to a case report for a reportable condition.
 * 
 *
 * @see https://hl7.org/fhir/R5/communication.html
 */
export interface ICommunication extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Communication';

  /**
   * Unique identifier
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
   * Request fulfilled by this communication
   */
  basedOn?: IReference<'Resource'>[];

  /**
   * Part of referenced event (e.g. Communication, Procedure)
   */
  partOf?: IReference<'Resource'>[];

  /**
   * Reply to
   */
  inResponseTo?: IReference<'Communication'>[];

  /**
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  status: EventStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

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
   * A channel of communication
   */
  medium?: ICodeableConcept[];

  /**
   * Focus of message
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Description of the purpose/content
   */
  topic?: ICodeableConcept;

  /**
   * Resources that pertain to this communication
   */
  about?: IReference<'Resource'>[];

  /**
   * The Encounter during which this Communication was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When sent
   */
  sent?: string;
  /**
   * Extension for sent
   */
  _sent?: IElement;

  /**
   * When received
   */
  received?: string;
  /**
   * Extension for received
   */
  _received?: IElement;

  /**
   * Who the information is shared with
   */
  recipient?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Endpoint'>[];

  /**
   * Who shares the information
   */
  sender?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService' | 'Endpoint' | 'CareTeam'>;

  /**
   * Indication for message
   */
  reason?: ICodeableReference[];

  /**
   * Message payload
   */
  payload?: ICommunicationPayload[];

  /**
   * Comments made about the communication
   */
  note?: IAnnotation[];

}
