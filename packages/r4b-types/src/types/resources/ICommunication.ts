import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ICommunicationPayload } from '../backbones/ICommunicationPayload.js';
import type { EventStatusType, RequestPriorityType } from '../../valuesets/index.js';

/**
 * Communication Interface
 * 
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 * 
 *
 * @see https://hl7.org/fhir/R4B/communication.html
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
   * Part of this action
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
   * Encounter created as part of
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
   * Message recipient
   */
  recipient?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'CareTeam' | 'HealthcareService'>[];

  /**
   * Message sender
   */
  sender?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService'>;

  /**
   * Indication for message
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why was communication done?
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /**
   * Message payload
   */
  payload?: ICommunicationPayload[];

  /**
   * Comments made about the communication
   */
  note?: IAnnotation[];

}
