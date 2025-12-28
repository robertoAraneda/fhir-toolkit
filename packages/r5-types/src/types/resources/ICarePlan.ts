import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICarePlanActivity } from '../backbones/ICarePlanActivity.js';
import type { CarePlanIntentType, RequestStatusType } from '../../valuesets/index.js';

/**
 * CarePlan Interface
 * 
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 * 
 *
 * @see https://hl7.org/fhir/R5/careplan.html
 */
export interface ICarePlan extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CarePlan';

  /**
   * External Ids for this plan
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
   * Fulfills plan, proposal or order
   */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'RequestOrchestration' | 'NutritionOrder'>[];

  /**
   * CarePlan replaced by this CarePlan
   */
  replaces?: IReference<'CarePlan'>[];

  /**
   * Part of referenced CarePlan
   */
  partOf?: IReference<'CarePlan'>[];

  /**
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  status: RequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * proposal | plan | order | option | directive
   */
  intent: CarePlanIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * Type of plan
   */
  category?: ICodeableConcept[];

  /**
   * Human-friendly name for the care plan
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Summary of nature of plan
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Who the care plan is for
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * The Encounter during which this CarePlan was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Time period plan covers
   */
  period?: IPeriod;

  /**
   * Date record was first recorded
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Who is the designated responsible party
   */
  custodian?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'RelatedPerson' | 'Organization' | 'CareTeam'>;

  /**
   * Who provided the content of the care plan
   */
  contributor?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'RelatedPerson' | 'Organization' | 'CareTeam'>[];

  /**
   * Who's involved in plan?
   */
  careTeam?: IReference<'CareTeam'>[];

  /**
   * Health issues this plan addresses
   */
  addresses?: ICodeableReference[];

  /**
   * Information considered as part of plan
   */
  supportingInfo?: IReference<'Resource'>[];

  /**
   * Desired outcome of plan
   */
  goal?: IReference<'Goal'>[];

  /**
   * Action to occur or has occurred as part of plan
   */
  activity?: ICarePlanActivity[];

  /**
   * Comments about the plan
   */
  note?: IAnnotation[];

}
