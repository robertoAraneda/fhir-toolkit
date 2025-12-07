import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IRequestOrchestrationAction } from '../backbones/IRequestOrchestrationAction.js';
import type { RequestIntentType, RequestPriorityType, RequestStatusType } from '../../valuesets/index.js';

/**
 * RequestOrchestration Interface
 * 
 * A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 * 
 *
 * @see https://hl7.org/fhir/R4/requestorchestration.html
 */
export interface IRequestOrchestration extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'RequestOrchestration';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Fulfills plan, proposal, or order
   */
  basedOn?: IReference<'Resource'>[];

  /**
   * Request(s) replaced by this request
   */
  replaces?: IReference<'Resource'>[];

  /**
   * Composite request this is part of
   */
  groupIdentifier?: IIdentifier;

  /**
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  status: RequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: RequestIntentType;
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
   * What's being requested/ordered
   */
  code?: ICodeableConcept;

  /**
   * Who the request orchestration is about
   */
  subject?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Created as part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the request orchestration was authored
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Device or practitioner that authored the request orchestration
   */
  author?: IReference<'Device' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Why the request orchestration is needed
   */
  reason?: ICodeableReference[];

  /**
   * What goals
   */
  goal?: IReference<'Goal'>[];

  /**
   * Additional notes about the response
   */
  note?: IAnnotation[];

  /**
   * Proposed actions, if any
   */
  action?: IRequestOrchestrationAction[];

}
