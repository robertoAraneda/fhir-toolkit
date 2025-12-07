import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ISignature } from '../datatypes/ISignature.js';
import type { IProvenanceAgent } from '../backbones/IProvenanceAgent.js';
import type { IProvenanceEntity } from '../backbones/IProvenanceEntity.js';

/**
 * Provenance Interface
 * 
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 * 
 *
 * @see https://hl7.org/fhir/R4/provenance.html
 */
export interface IProvenance extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Provenance';

  /**
   * Target Reference(s) (usually version specific)
   */
  target: IReference<'Resource'>[];

  /**
   * When the activity occurred
   */
  occurredPeriod?: IPeriod;

  /**
   * When the activity occurred
   */
  occurredDateTime?: string;
  /**
   * Extension for occurredDateTime
   */
  _occurredDateTime?: IElement;

  /**
   * When the activity was recorded / updated
   */
  recorded?: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * Policy or plan the activity was defined by
   */
  policy?: string[];
  /**
   * Extension for policy
   */
  _policy?: IElement;

  /**
   * Where the activity occurred, if relevant
   */
  location?: IReference<'Location'>;

  /**
   * Authorization (purposeOfUse) related to the event
   */
  authorization?: ICodeableReference[];

  /**
   * Activity that occurred
   */
  activity?: ICodeableConcept;

  /**
   * Workflow authorization within which this event occurred
   */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'Task'>[];

  /**
   * The patient is the subject of the data created/updated (.target) by the activity
   */
  patient?: IReference<'Patient'>;

  /**
   * Encounter within which this event occurred or which the event is tightly associated
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Actor involved
   */
  agent: IProvenanceAgent[];

  /**
   * An entity used in this activity
   */
  entity?: IProvenanceEntity[];

  /**
   * Signature on target
   */
  signature?: ISignature[];

}
