import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ITask,
  ITaskInput,
  ITaskOutput,
  ITaskPerformer,
  ITaskRestriction,
  RequestPriorityType,
  TaskIntentType,
  TaskStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Task */
const TASK_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'groupIdentifier',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'businessStatus',
  'intent',
  '_intent',
  'priority',
  '_priority',
  'doNotPerform',
  '_doNotPerform',
  'code',
  'description',
  '_description',
  'focus',
  'for',
  'encounter',
  'requestedPeriod',
  'executionPeriod',
  'authoredOn',
  '_authoredOn',
  'lastModified',
  '_lastModified',
  'requester',
  'requestedPerformer',
  'owner',
  'performer',
  'location',
  'reason',
  'insurance',
  'note',
  'relevantHistory',
  'restriction',
  'input',
  'output',
] as const;

/**
 * Task - A task to be performed.
 *
 * @see https://hl7.org/fhir/R4/task.html
 *
 * @example
 * const task = new Task({
 *   // ... properties
 * });
 */
export class Task extends DomainResource implements ITask {
  readonly resourceType = 'Task' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Task Instance Identifier */
  identifier?: IIdentifier[];

  /** Formal definition of task */
  instantiatesCanonical?: string;

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Formal definition of task */
  instantiatesUri?: string;

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Request fulfilled by this task */
  basedOn?: IReference<'Resource'>[];

  /** Requisition or grouper id */
  groupIdentifier?: IIdentifier;

  /** Composite task */
  partOf?: IReference<'Task'>[];

  /** draft | requested | received | accepted | + */
  status: TaskStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableReference;

  /** E.g. "Specimen collected", "IV prepped" */
  businessStatus?: ICodeableConcept;

  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: TaskIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** True if Task is prohibiting action */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** Task Type */
  code?: ICodeableConcept;

  /** Human-readable explanation of task */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** What task is acting on */
  focus?: IReference<'Resource'>;

  /** Beneficiary of the Task */
  for?: IReference<'Resource'>;

  /** Healthcare event during which this task originated */
  encounter?: IReference<'Encounter'>;

  /** When the task should be performed */
  requestedPeriod?: IPeriod;

  /** Start and end time of execution */
  executionPeriod?: IPeriod;

  /** Task Creation Date */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Task Last Modified Date */
  lastModified?: string;

  /** Extension for lastModified */
  _lastModified?: IElement;

  /** Who is asking for task to be done */
  requester?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Who should perform Task */
  requestedPerformer?: ICodeableReference[];

  /** Responsible individual */
  owner?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>;

  /** Who or what performed the task */
  performer?: ITaskPerformer[];

  /** Where task occurs */
  location?: IReference<'Location'>;

  /** Why task is needed */
  reason?: ICodeableReference[];

  /** Associated insurance coverage */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /** Comments made about the task */
  note?: IAnnotation[];

  /** Key events in history of the Task */
  relevantHistory?: IReference<'Provenance'>[];

  /** Constraints on fulfillment tasks */
  restriction?: ITaskRestriction;

  /** Information used to perform task */
  input?: ITaskInput[];

  /** Information produced as part of task */
  output?: ITaskOutput[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ITask>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, TASK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Task from a JSON object
   */
  static fromJSON(json: ITask): Task {
    return new Task(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Task with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITask>): Task {
    return new Task({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Task by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITask) => Partial<ITask>): Task {
    const currentData = this.toJSON();
    return new Task({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITask)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITask {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, TASK_PROPERTIES);
    return result as ITask;
  }

  /**
   * Create a deep clone of this Task
   */
  clone(): Task {
    return new Task(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Task
   */
  toString(): string {
    const parts: string[] = ['Task'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
