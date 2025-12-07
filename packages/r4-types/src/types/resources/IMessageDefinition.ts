import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IMessageDefinitionAllowedResponse } from '../backbones/IMessageDefinitionAllowedResponse.js';
import type { IMessageDefinitionFocus } from '../backbones/IMessageDefinitionFocus.js';
import type { MessageSignificanceCategoryType, MessageheaderResponseRequestType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * MessageDefinition Interface
 * 
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 * 
 *
 * @see https://hl7.org/fhir/R4/messagedefinition.html
 */
export interface IMessageDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MessageDefinition';

  /**
   * Business Identifier for a given MessageDefinition
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Primary key for the message definition on a given server
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the message definition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this message definition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this message definition (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Takes the place of
   */
  replaces?: string[];
  /**
   * Extension for replaces
   */
  _replaces?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Date last changed
   */
  date: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Natural language description of the message definition
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for message definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this message definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * Definition this one is based on
   */
  base?: string;
  /**
   * Extension for base
   */
  _base?: IElement;

  /**
   * Protocol/workflow this is part of
   */
  parent?: string[];
  /**
   * Extension for parent
   */
  _parent?: IElement;

  /**
   * Event code  or link to the EventDefinition
   */
  eventCoding?: ICoding;

  /**
   * Event code  or link to the EventDefinition
   */
  eventUri?: string;
  /**
   * Extension for eventUri
   */
  _eventUri?: IElement;

  /**
   * consequence | currency | notification
   */
  category?: MessageSignificanceCategoryType;
  /**
   * Extension for category
   */
  _category?: IElement;

  /**
   * Resource(s) that are the subject of the event
   */
  focus?: IMessageDefinitionFocus[];

  /**
   * always | on-error | never | on-success
   */
  responseRequired?: MessageheaderResponseRequestType;
  /**
   * Extension for responseRequired
   */
  _responseRequired?: IElement;

  /**
   * Responses to this message
   */
  allowedResponse?: IMessageDefinitionAllowedResponse[];

  /**
   * Canonical reference to a GraphDefinition
   */
  graph?: string[];
  /**
   * Extension for graph
   */
  _graph?: IElement;

}
