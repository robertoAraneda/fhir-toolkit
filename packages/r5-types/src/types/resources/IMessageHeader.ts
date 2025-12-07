import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IMessageHeaderDestination } from '../backbones/IMessageHeaderDestination.js';
import type { IMessageHeaderResponse } from '../backbones/IMessageHeaderResponse.js';
import type { IMessageHeaderSource } from '../backbones/IMessageHeaderSource.js';

/**
 * MessageHeader Interface
 * 
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 * 
 *
 * @see https://hl7.org/fhir/R4/messageheader.html
 */
export interface IMessageHeader extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MessageHeader';

  /**
   * Event code or link to EventDefinition
   */
  eventCoding?: ICoding;

  /**
   * Event code or link to EventDefinition
   */
  eventCanonical?: string;
  /**
   * Extension for eventCanonical
   */
  _eventCanonical?: IElement;

  /**
   * Message destination application(s)
   */
  destination?: IMessageHeaderDestination[];

  /**
   * Real world sender of the message
   */
  sender?: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization'>;

  /**
   * The source of the decision
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization'>;

  /**
   * Message source application
   */
  source: IMessageHeaderSource;

  /**
   * Final responsibility for event
   */
  responsible?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Cause of event
   */
  reason?: ICodeableConcept;

  /**
   * If this is a reply to prior message
   */
  response?: IMessageHeaderResponse;

  /**
   * The actual content of the message
   */
  focus?: IReference<'Resource'>[];

  /**
   * Link to the definition for this message
   */
  definition?: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

}
