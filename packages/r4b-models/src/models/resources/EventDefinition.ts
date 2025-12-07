import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IEventDefinition,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  ITriggerDefinition,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EventDefinition */
const EVENT_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'subtitle',
  '_subtitle',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'subjectCodeableConcept',
  'subjectReference',
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
  'usage',
  '_usage',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'trigger',
] as const;

/**
 * EventDefinition - The EventDefinition resource provides a reusable description of when a particular event can occur.
 *
 * @see https://hl7.org/fhir/R4/eventdefinition.html
 *
 * @example
 * const eventDefinition = new EventDefinition({
 *   resourceType: 'EventDefinition',
 *   // ... properties
 * });
 */
export class EventDefinition extends DomainResource implements IEventDefinition {
  readonly resourceType = 'EventDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this event definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the event definition */
  identifier?: IIdentifier[];

  /** Business version of the event definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this event definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this event definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate title of the event definition */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Type of individual the event definition is focused on */
  subjectCodeableConcept?: ICodeableConcept;

  /** Type of individual the event definition is focused on */
  subjectReference?: IReference;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the event definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for event definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this event definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the event definition */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the event definition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the event definition was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the event definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc. */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc. */
  relatedArtifact?: IRelatedArtifact[];

  /** "when" the event occurs (multiple = 'or') */
  trigger: ITriggerDefinition[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEventDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, EVENT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EventDefinition from a JSON object
   */
  static fromJSON(json: IEventDefinition): EventDefinition {
    return new EventDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EventDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEventDefinition>): EventDefinition {
    return new EventDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EventDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEventDefinition) => Partial<IEventDefinition>): EventDefinition {
    const currentData = this.toJSON();
    return new EventDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEventDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEventDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EVENT_DEFINITION_PROPERTIES);
    return result as IEventDefinition;
  }

  /**
   * Create a deep clone of this EventDefinition
   */
  clone(): EventDefinition {
    return new EventDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EventDefinition
   */
  toString(): string {
    const parts: string[] = ['EventDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
