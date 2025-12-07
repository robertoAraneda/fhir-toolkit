import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IReference,
  IRequestOrchestration,
  IRequestOrchestrationAction,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestration */
const REQUEST_ORCHESTRATION_PROPERTIES = [
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
  'reason',
  'goal',
  'note',
  'action',
] as const;

/**
 * RequestOrchestration - A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 *
 * @see https://hl7.org/fhir/R4/requestorchestration.html
 *
 * @example
 * const requestOrchestration = new RequestOrchestration({
 *   resourceType: 'RequestOrchestration',
 *   // ... properties
 * });
 */
export class RequestOrchestration extends DomainResource implements IRequestOrchestration {
  readonly resourceType = 'RequestOrchestration' as const;

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

  /** Who the request orchestration is about */
  subject?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Created as part of */
  encounter?: IReference<'Encounter'>;

  /** When the request orchestration was authored */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Device or practitioner that authored the request orchestration */
  author?: IReference<'Device' | 'Practitioner' | 'PractitionerRole'>;

  /** Why the request orchestration is needed */
  reason?: ICodeableReference[];

  /** What goals */
  goal?: IReference<'Goal'>[];

  /** Additional notes about the response */
  note?: IAnnotation[];

  /** Proposed actions, if any */
  action?: IRequestOrchestrationAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestOrchestration>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestration from a JSON object
   */
  static fromJSON(json: IRequestOrchestration): RequestOrchestration {
    return new RequestOrchestration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestration>): RequestOrchestration {
    return new RequestOrchestration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestration) => Partial<IRequestOrchestration>): RequestOrchestration {
    const currentData = this.toJSON();
    return new RequestOrchestration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestration {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_PROPERTIES);
    return result as IRequestOrchestration;
  }

  /**
   * Create a deep clone of this RequestOrchestration
   */
  clone(): RequestOrchestration {
    return new RequestOrchestration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestration
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestration'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
