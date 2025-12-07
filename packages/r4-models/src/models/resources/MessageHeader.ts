import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IElement,
  IMessageHeader,
  IMessageHeaderDestination,
  IMessageHeaderResponse,
  IMessageHeaderSource,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MessageHeader */
const MESSAGE_HEADER_PROPERTIES = [
  'eventCoding',
  'eventUri',
  '_eventUri',
  'destination',
  'sender',
  'enterer',
  'author',
  'source',
  'responsible',
  'reason',
  'response',
  'focus',
  'definition',
  '_definition',
] as const;

/**
 * MessageHeader - The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 *
 * @see https://hl7.org/fhir/R4/messageheader.html
 *
 * @example
 * const messageHeader = new MessageHeader({
 *   // ... properties
 * });
 */
export class MessageHeader extends DomainResource implements IMessageHeader {
  readonly resourceType = 'MessageHeader' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code for the event this message represents or link to event definition */
  eventCoding?: ICoding;

  /** Code for the event this message represents or link to event definition */
  eventUri?: string;

  /** Extension for eventUri */
  _eventUri?: IElement;

  /** Message destination application(s) */
  destination?: IMessageHeaderDestination[];

  /** Real world sender of the message */
  sender?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** The source of the data entry */
  enterer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** The source of the decision */
  author?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Message source application */
  source: IMessageHeaderSource;

  /** Final responsibility for event */
  responsible?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Cause of event */
  reason?: ICodeableConcept;

  /** If this is a reply to prior message */
  response?: IMessageHeaderResponse;

  /** The actual content of the message */
  focus?: IReference<'Resource'>[];

  /** Link to the definition for this message */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMessageHeader>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_HEADER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageHeader from a JSON object
   */
  static fromJSON(json: IMessageHeader): MessageHeader {
    return new MessageHeader(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageHeader with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageHeader>): MessageHeader {
    return new MessageHeader({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageHeader by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageHeader) => Partial<IMessageHeader>): MessageHeader {
    const currentData = this.toJSON();
    return new MessageHeader({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageHeader)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageHeader {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MESSAGE_HEADER_PROPERTIES);
    return result as IMessageHeader;
  }

  /**
   * Create a deep clone of this MessageHeader
   */
  clone(): MessageHeader {
    return new MessageHeader(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageHeader
   */
  toString(): string {
    const parts: string[] = ['MessageHeader'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
