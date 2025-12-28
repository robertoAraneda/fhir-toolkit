import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
  IRequestGroup,
  IRequestGroupAction,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RequestGroup */
const REQUEST_GROUP_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'replaces',
  'groupIdentifier',
  'status',
  '_status',
  'intent',
  '_intent',
  'priority',
  '_priority',
  'code',
  'subject',
  'encounter',
  'authoredOn',
  '_authoredOn',
  'author',
  'reasonCode',
  'reasonReference',
  'note',
  'action',
] as const;

/**
 * RequestGroup - A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 *
 * @see https://hl7.org/fhir/R4B/requestgroup.html
 *
 * @example
 * const requestGroup = new RequestGroup({
 *   // ... properties
 * });
 */
export class RequestGroup extends DomainResource implements IRequestGroup {
  readonly resourceType = 'RequestGroup' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Fulfills plan, proposal, or order */
  basedOn?: IReference<'Resource'>[];

  /** Request(s) replaced by this request */
  replaces?: IReference<'Resource'>[];

  /** Composite request this is part of */
  groupIdentifier?: IIdentifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
  status: RequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: RequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** What's being requested/ordered */
  code?: ICodeableConcept;

  /** Who the request group is about */
  subject?: IReference<'Patient' | 'Group'>;

  /** Created as part of */
  encounter?: IReference<'Encounter'>;

  /** When the request group was authored */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Device or practitioner that authored the request group */
  author?: IReference<'Device' | 'Practitioner' | 'PractitionerRole'>;

  /** Why the request group is needed */
  reasonCode?: ICodeableConcept[];

  /** Why the request group is needed */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Additional notes about the response */
  note?: IAnnotation[];

  /** Proposed actions, if any */
  action?: IRequestGroupAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IRequestGroup>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestGroup from a JSON object
   */
  static fromJSON(json: IRequestGroup): RequestGroup {
    return new RequestGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestGroup>): RequestGroup {
    return new RequestGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestGroup) => Partial<IRequestGroup>): RequestGroup {
    const currentData = this.toJSON();
    return new RequestGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestGroup {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, REQUEST_GROUP_PROPERTIES);
    return result as IRequestGroup;
  }

  /**
   * Create a deep clone of this RequestGroup
   */
  clone(): RequestGroup {
    return new RequestGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestGroup
   */
  toString(): string {
    const parts: string[] = ['RequestGroup'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
