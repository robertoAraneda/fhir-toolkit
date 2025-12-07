import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Task } from '../../models/resources/Task.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
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

/**
 * TaskBuilder - Fluent builder for Task resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const task = new TaskBuilder()
 *   .setId('123')
 *   .setInstantiatesCanonical(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class TaskBuilder extends DomainResourceBuilder<Task, ITask> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set instantiatesCanonical
   * Formal definition of task
   */
  setInstantiatesCanonical(instantiatesCanonical: string): this {
    this.data.instantiatesCanonical = instantiatesCanonical;
    return this;
  }

  /**
   * Set instantiatesUri
   * Formal definition of task
   */
  setInstantiatesUri(instantiatesUri: string): this {
    this.data.instantiatesUri = instantiatesUri;
    return this;
  }

  /**
   * Set groupIdentifier
   * Requisition or grouper id
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
    return this;
  }

  /**
   * Set status
   * draft | requested | received | accepted | +
   */
  setStatus(status: TaskStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Reason for current status
   */
  setStatusReason(statusReason: ICodeableReference): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set businessStatus
   * E.g. "Specimen collected", "IV prepped"
   */
  setBusinessStatus(businessStatus: ICodeableConcept): this {
    this.data.businessStatus = businessStatus;
    return this;
  }

  /**
   * Set intent
   * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: TaskIntentType): this {
    this.data.intent = intent;
    return this;
  }

  /**
   * Set priority
   * routine | urgent | asap | stat
   */
  setPriority(priority: RequestPriorityType): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set doNotPerform
   * True if Task is prohibiting action
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set code
   * Task Type
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * Human-readable explanation of task
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set focus
   * What task is acting on
   */
  setFocus(focus: IReference<'Resource'>): this {
    this.data.focus = focus;
    return this;
  }

  /**
   * Set for
   * Beneficiary of the Task
   */
  setFor(_for: IReference<'Resource'>): this {
    this.data.for = _for;
    return this;
  }

  /**
   * Set encounter
   * Healthcare event during which this task originated
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set requestedPeriod
   * When the task should be performed
   */
  setRequestedPeriod(requestedPeriod: IPeriod): this {
    this.data.requestedPeriod = requestedPeriod;
    return this;
  }

  /**
   * Set executionPeriod
   * Start and end time of execution
   */
  setExecutionPeriod(executionPeriod: IPeriod): this {
    this.data.executionPeriod = executionPeriod;
    return this;
  }

  /**
   * Set authoredOn
   * Task Creation Date
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set lastModified
   * Task Last Modified Date
   */
  setLastModified(lastModified: string): this {
    this.data.lastModified = lastModified;
    return this;
  }

  /**
   * Set requester
   * Who is asking for task to be done
   */
  setRequester(requester: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set owner
   * Responsible individual
   */
  setOwner(owner: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>): this {
    this.data.owner = owner;
    return this;
  }

  /**
   * Set location
   * Where task occurs
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set restriction
   * Constraints on fulfillment tasks
   */
  setRestriction(restriction: ITaskRestriction): this {
    this.data.restriction = restriction;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Task Instance Identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Request fulfilled by this task
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Composite task
   */
  addPartOf(partOf: IReference<'Task'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add requestedPerformer
   * Who should perform Task
   */
  addRequestedPerformer(requestedPerformer: ICodeableReference): this {
    return this.addToArray('requestedPerformer', requestedPerformer);
  }

  /**
   * Add performer
   * Who or what performed the task
   */
  addPerformer(performer: ITaskPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add reason
   * Why task is needed
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add insurance
   * Associated insurance coverage
   */
  addInsurance(insurance: IReference<'Coverage' | 'ClaimResponse'>): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add note
   * Comments made about the task
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add relevantHistory
   * Key events in history of the Task
   */
  addRelevantHistory(relevantHistory: IReference<'Provenance'>): this {
    return this.addToArray('relevantHistory', relevantHistory);
  }

  /**
   * Add input
   * Information used to perform task
   */
  addInput(input: ITaskInput): this {
    return this.addToArray('input', input);
  }

  /**
   * Add output
   * Information produced as part of task
   */
  addOutput(output: ITaskOutput): this {
    return this.addToArray('output', output);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Task instance
   */
  build(): Task {
    return new Task(this.data);
  }

  /**
   * Build and validate the Task instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Task> {
    const task = this.build();
    await task.validateOrThrow();
    return task;
  }
}
