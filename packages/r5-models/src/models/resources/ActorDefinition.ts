import { DomainResource } from '../base/DomainResource.js';
import type {
  ExampleScenarioActorTypeType,
  IActorDefinition,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ActorDefinition */
const ACTOR_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
  'name',
  '_name',
  'title',
  '_title',
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
  'copyrightLabel',
  '_copyrightLabel',
  'type',
  '_type',
  'documentation',
  '_documentation',
  'reference',
  '_reference',
  'capabilities',
  '_capabilities',
  'derivedFrom',
  '_derivedFrom',
] as const;

/**
 * ActorDefinition - Describes an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.
 *
 * @see https://hl7.org/fhir/R4/actordefinition.html
 *
 * @example
 * const actorDefinition = new ActorDefinition({
 *   // ... properties
 * });
 */
export class ActorDefinition extends DomainResource implements IActorDefinition {
  readonly resourceType = 'ActorDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this actor definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the actor definition (business identifier) */
  identifier?: IIdentifier[];

  /** Business version of the actor definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this actor definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this actor definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the actor */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for actor definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this actor definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** person | system */
  type: ExampleScenarioActorTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Functionality associated with the actor */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Reference to more information about the actor */
  reference?: string[];

  /** Extension for reference */
  _reference?: IElement;

  /** CapabilityStatement for the actor (if applicable) */
  capabilities?: string;

  /** Extension for capabilities */
  _capabilities?: IElement;

  /** Definition of this actor in another context / IG */
  derivedFrom?: string[];

  /** Extension for derivedFrom */
  _derivedFrom?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IActorDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ACTOR_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ActorDefinition from a JSON object
   */
  static fromJSON(json: IActorDefinition): ActorDefinition {
    return new ActorDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ActorDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IActorDefinition>): ActorDefinition {
    return new ActorDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ActorDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IActorDefinition) => Partial<IActorDefinition>): ActorDefinition {
    const currentData = this.toJSON();
    return new ActorDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IActorDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IActorDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ACTOR_DEFINITION_PROPERTIES);
    return result as IActorDefinition;
  }

  /**
   * Create a deep clone of this ActorDefinition
   */
  clone(): ActorDefinition {
    return new ActorDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ActorDefinition
   */
  toString(): string {
    const parts: string[] = ['ActorDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
