import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Schedule } from '../../models/resources/Schedule.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  ISchedule,
} from '@fhir-toolkit/r4b-types';

/**
 * ScheduleBuilder - Fluent builder for Schedule resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const schedule = new ScheduleBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ScheduleBuilder extends DomainResourceBuilder<Schedule, ISchedule> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this schedule is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set planningHorizon
   * Period of time covered by schedule
   */
  setPlanningHorizon(planningHorizon: IPeriod): this {
    this.data.planningHorizon = planningHorizon;
    return this;
  }

  /**
   * Set comment
   * Comments on availability
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Ids for this item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add serviceCategory
   * High-level category
   */
  addServiceCategory(serviceCategory: ICodeableConcept): this {
    return this.addToArray('serviceCategory', serviceCategory);
  }

  /**
   * Add serviceType
   * Specific service
   */
  addServiceType(serviceType: ICodeableConcept): this {
    return this.addToArray('serviceType', serviceType);
  }

  /**
   * Add specialty
   * Type of specialty needed
   */
  addSpecialty(specialty: ICodeableConcept): this {
    return this.addToArray('specialty', specialty);
  }

  /**
   * Add actor
   * Resource(s) that availability information is being provided for
   */
  addActor(actor: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>): this {
    return this.addToArray('actor', actor);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Schedule instance
   */
  build(): Schedule {
    return new Schedule(this.data);
  }

  /**
   * Build and validate the Schedule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Schedule> {
    const schedule = this.build();
    await schedule.validateOrThrow();
    return schedule;
  }
}
