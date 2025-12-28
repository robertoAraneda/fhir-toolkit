import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * Schedule Interface
 * 
 * A container for slots of time that may be available for booking appointments.
 * 
 *
 * @see https://hl7.org/fhir/R4B/schedule.html
 */
export interface ISchedule extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Schedule';

  /**
   * External Ids for this item
   */
  identifier?: IIdentifier[];

  /**
   * Whether this schedule is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * High-level category
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * Specific service
   */
  serviceType?: ICodeableConcept[];

  /**
   * Type of specialty needed
   */
  specialty?: ICodeableConcept[];

  /**
   * Resource(s) that availability information is being provided for
   */
  actor: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>[];

  /**
   * Period of time covered by schedule
   */
  planningHorizon?: IPeriod;

  /**
   * Comments on availability
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
