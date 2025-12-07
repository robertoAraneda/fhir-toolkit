import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CarePlan } from '../../models/resources/CarePlan.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  CarePlanIntentType,
  IAnnotation,
  ICarePlan,
  ICarePlanActivity,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  RequestStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * CarePlanBuilder - Fluent builder for CarePlan resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const carePlan = new CarePlanBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CarePlanBuilder extends DomainResourceBuilder<CarePlan, ICarePlan> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  setStatus(status: RequestStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set intent
   * proposal | plan | order | option
   */
  setIntent(intent: CarePlanIntentType): this {
    this.data.intent = intent;
    return this;
  }

  /**
   * Set title
   * Human-friendly name for the care plan
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Summary of nature of plan
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set subject
   * Who the care plan is for
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter created as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set period
   * Time period plan covers
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set created
   * Date record was first recorded
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set author
   * Who is the designated responsible party
   */
  setAuthor(author: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'RelatedPerson' | 'Organization' | 'CareTeam'>): this {
    this.data.author = author;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instantiates choice type
   * @param type - 'Canonical' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstantiates('Canonical', value)
   */
  setInstantiates<T extends 'Canonical' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `instantiates${type}` as keyof ICarePlan;
    const otherKeys: (keyof ICarePlan)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof ICarePlan);
      otherKeys.push('_instantiatesCanonical' as keyof ICarePlan);
    }
    if (type !== 'Uri') {
      otherKeys.push('instantiatesUri' as keyof ICarePlan);
      otherKeys.push('_instantiatesUri' as keyof ICarePlan);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Ids for this plan
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Fulfills CarePlan
   */
  addBasedOn(basedOn: IReference<'CarePlan'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add replaces
   * CarePlan replaced by this CarePlan
   */
  addReplaces(replac: IReference<'CarePlan'>): this {
    return this.addToArray('replaces', replac);
  }

  /**
   * Add partOf
   * Part of referenced CarePlan
   */
  addPartOf(partOf: IReference<'CarePlan'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add category
   * Type of plan
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add contributor
   * Who provided the content of the care plan
   */
  addContributor(contributor: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'RelatedPerson' | 'Organization' | 'CareTeam'>): this {
    return this.addToArray('contributor', contributor);
  }

  /**
   * Add careTeam
   * Who's involved in plan?
   */
  addCareTeam(careTeam: IReference<'CareTeam'>): this {
    return this.addToArray('careTeam', careTeam);
  }

  /**
   * Add addresses
   * Health issues this plan addresses
   */
  addAddresses(addresse: IReference<'Condition'>): this {
    return this.addToArray('addresses', addresse);
  }

  /**
   * Add supportingInfo
   * Information considered as part of plan
   */
  addSupportingInfo(supportingInfo: IReference<'Resource'>): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add goal
   * Desired outcome of plan
   */
  addGoal(goal: IReference<'Goal'>): this {
    return this.addToArray('goal', goal);
  }

  /**
   * Add activity
   * Action to occur as part of plan
   */
  addActivity(activity: ICarePlanActivity): this {
    return this.addToArray('activity', activity);
  }

  /**
   * Add note
   * Comments about the plan
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CarePlan instance
   */
  build(): CarePlan {
    return new CarePlan(this.data);
  }

  /**
   * Build and validate the CarePlan instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CarePlan> {
    const carePlan = this.build();
    await carePlan.validateOrThrow();
    return carePlan;
  }
}
