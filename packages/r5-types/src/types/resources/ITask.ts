import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITaskInput } from '../backbones/ITaskInput.js';
import type { ITaskOutput } from '../backbones/ITaskOutput.js';
import type { ITaskPerformer } from '../backbones/ITaskPerformer.js';
import type { ITaskRestriction } from '../backbones/ITaskRestriction.js';
import type { RequestPriorityType, TaskIntentType, TaskStatusType } from '../../valuesets/index.js';

/**
 * Task Interface
 * 
 * A task to be performed.
 * 
 *
 * @see https://hl7.org/fhir/R5/task.html
 */
export interface ITask extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Task';

  /**
   * Task Instance Identifier
   */
  identifier?: IIdentifier[];

  /**
   * Formal definition of task
   */
  instantiatesCanonical?: string;
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Formal definition of task
   */
  instantiatesUri?: string;
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Request fulfilled by this task
   */
  basedOn?: IReference<'Resource'>[];

  /**
   * Requisition or grouper id
   */
  groupIdentifier?: IIdentifier;

  /**
   * Composite task
   */
  partOf?: IReference<'Task'>[];

  /**
   * draft | requested | received | accepted | +
   */
  status: TaskStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableReference;

  /**
   * E.g. "Specimen collected", "IV prepped"
   */
  businessStatus?: ICodeableConcept;

  /**
   * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: TaskIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * True if Task is prohibiting action
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * Task Type
   */
  code?: ICodeableConcept;

  /**
   * Human-readable explanation of task
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * What task is acting on
   */
  focus?: IReference<'Resource'>;

  /**
   * Beneficiary of the Task
   */
  for?: IReference<'Resource'>;

  /**
   * Healthcare event during which this task originated
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the task should be performed
   */
  requestedPeriod?: IPeriod;

  /**
   * Start and end time of execution
   */
  executionPeriod?: IPeriod;

  /**
   * Task Creation Date
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Task Last Modified Date
   */
  lastModified?: string;
  /**
   * Extension for lastModified
   */
  _lastModified?: IElement;

  /**
   * Who is asking for task to be done
   */
  requester?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Who should perform Task
   */
  requestedPerformer?: ICodeableReference[];

  /**
   * Responsible individual
   */
  owner?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>;

  /**
   * Who or what performed the task
   */
  performer?: ITaskPerformer[];

  /**
   * Where task occurs
   */
  location?: IReference<'Location'>;

  /**
   * Why task is needed
   */
  reason?: ICodeableReference[];

  /**
   * Associated insurance coverage
   */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /**
   * Comments made about the task
   */
  note?: IAnnotation[];

  /**
   * Key events in history of the Task
   */
  relevantHistory?: IReference<'Provenance'>[];

  /**
   * Constraints on fulfillment tasks
   */
  restriction?: ITaskRestriction;

  /**
   * Information used to perform task
   */
  input?: ITaskInput[];

  /**
   * Information produced as part of task
   */
  output?: ITaskOutput[];

}
