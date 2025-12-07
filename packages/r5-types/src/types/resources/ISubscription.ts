import type { ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISubscriptionFilterBy } from '../backbones/ISubscriptionFilterBy.js';
import type { ISubscriptionParameter } from '../backbones/ISubscriptionParameter.js';
import type { SubscriptionPayloadContentType, SubscriptionStatusType } from '../../valuesets/index.js';

/**
 * Subscription Interface
 * 
 * The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
 * 
 *
 * @see https://hl7.org/fhir/R4/subscription.html
 */
export interface ISubscription extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Subscription';

  /**
   * Additional identifiers (business identifier)
   */
  identifier?: IIdentifier[];

  /**
   * Human readable name for this subscription
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * requested | active | error | off | entered-in-error
   */
  status: SubscriptionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reference to the subscription topic being subscribed to
   */
  topic: string;
  /**
   * Extension for topic
   */
  _topic?: IElement;

  /**
   * Contact details for source (e.g. troubleshooting)
   */
  contact?: IContactPoint[];

  /**
   * When to automatically delete the subscription
   */
  end?: string;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * Entity responsible for Subscription changes
   */
  managingEntity?: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'RelatedPerson' | 'Patient' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Description of why this subscription was created
   */
  reason?: string;
  /**
   * Extension for reason
   */
  _reason?: IElement;

  /**
   * Criteria for narrowing the subscription topic stream
   */
  filterBy?: ISubscriptionFilterBy[];

  /**
   * Channel type for notifications
   */
  channelType: ICoding;

  /**
   * Where the channel points to
   */
  endpoint?: string;
  /**
   * Extension for endpoint
   */
  _endpoint?: IElement;

  /**
   * Channel type
   */
  parameter?: ISubscriptionParameter[];

  /**
   * Interval in seconds to send 'heartbeat' notification
   */
  heartbeatPeriod?: number;
  /**
   * Extension for heartbeatPeriod
   */
  _heartbeatPeriod?: IElement;

  /**
   * Timeout in seconds to attempt notification delivery
   */
  timeout?: number;
  /**
   * Extension for timeout
   */
  _timeout?: IElement;

  /**
   * MIME type to send, or omit for no payload
   */
  contentType?: string;
  /**
   * Extension for contentType
   */
  _contentType?: IElement;

  /**
   * empty | id-only | full-resource
   */
  content?: SubscriptionPayloadContentType;
  /**
   * Extension for content
   */
  _content?: IElement;

  /**
   * Maximum number of events that can be combined in a single notification
   */
  maxCount?: number;
  /**
   * Extension for maxCount
   */
  _maxCount?: IElement;

}
