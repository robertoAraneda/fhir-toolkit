import type { IDomainResource, IElement } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { ISubscriptionChannel } from '../backbones/ISubscriptionChannel.js';
import type { SubscriptionStatusType } from '../../valuesets/index.js';

/**
 * Subscription Interface
 * 
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 * 
 *
 * @see https://hl7.org/fhir/R4B/subscription.html
 */
export interface ISubscription extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Subscription';

  /**
   * requested | active | error | off
   */
  status: SubscriptionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

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
   * Description of why this subscription was created
   */
  reason: string;
  /**
   * Extension for reason
   */
  _reason?: IElement;

  /**
   * Rule for server push
   */
  criteria: string;
  /**
   * Extension for criteria
   */
  _criteria?: IElement;

  /**
   * Latest error note
   */
  error?: string;
  /**
   * Extension for error
   */
  _error?: IElement;

  /**
   * The channel on which to report matches to the criteria
   */
  channel: ISubscriptionChannel;

}
