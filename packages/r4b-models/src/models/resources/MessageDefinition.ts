import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IMessageDefinition,
  IMessageDefinitionAllowedResponse,
  IMessageDefinitionFocus,
  IUsageContext,
  MessageSignificanceCategoryType,
  MessageheaderResponseRequestType,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MessageDefinition */
const MESSAGE_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'replaces',
  '_replaces',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'base',
  '_base',
  'parent',
  '_parent',
  'eventCoding',
  'eventUri',
  '_eventUri',
  'category',
  '_category',
  'focus',
  'responseRequired',
  '_responseRequired',
  'allowedResponse',
  'graph',
  '_graph',
] as const;

/**
 * MessageDefinition - Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 *
 * @see https://hl7.org/fhir/R4/messagedefinition.html
 *
 * @example
 * const messageDefinition = new MessageDefinition({
 *   resourceType: 'MessageDefinition',
 *   // ... properties
 * });
 */
export class MessageDefinition extends DomainResource implements IMessageDefinition {
  readonly resourceType = 'MessageDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for a given MessageDefinition */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Primary key for the message definition on a given server */
  identifier?: IIdentifier[];

  /** Business version of the message definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this message definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this message definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Takes the place of */
  replaces?: string[];

  /** Extension for replaces */
  _replaces?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the message definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for message definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this message definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Definition this one is based on */
  base?: string;

  /** Extension for base */
  _base?: IElement;

  /** Protocol/workflow this is part of */
  parent?: string[];

  /** Extension for parent */
  _parent?: IElement;

  /** Event code  or link to the EventDefinition */
  eventCoding?: ICoding;

  /** Event code  or link to the EventDefinition */
  eventUri?: string;

  /** Extension for eventUri */
  _eventUri?: IElement;

  /** consequence | currency | notification */
  category?: MessageSignificanceCategoryType;

  /** Extension for category */
  _category?: IElement;

  /** Resource(s) that are the subject of the event */
  focus?: IMessageDefinitionFocus[];

  /** always | on-error | never | on-success */
  responseRequired?: MessageheaderResponseRequestType;

  /** Extension for responseRequired */
  _responseRequired?: IElement;

  /** Responses to this message */
  allowedResponse?: IMessageDefinitionAllowedResponse[];

  /** Canonical reference to a GraphDefinition */
  graph?: string[];

  /** Extension for graph */
  _graph?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMessageDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageDefinition from a JSON object
   */
  static fromJSON(json: IMessageDefinition): MessageDefinition {
    return new MessageDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageDefinition>): MessageDefinition {
    return new MessageDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageDefinition) => Partial<IMessageDefinition>): MessageDefinition {
    const currentData = this.toJSON();
    return new MessageDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MESSAGE_DEFINITION_PROPERTIES);
    return result as IMessageDefinition;
  }

  /**
   * Create a deep clone of this MessageDefinition
   */
  clone(): MessageDefinition {
    return new MessageDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageDefinition
   */
  toString(): string {
    const parts: string[] = ['MessageDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
