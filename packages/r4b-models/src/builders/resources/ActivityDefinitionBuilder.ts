import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ActivityDefinition } from '../../models/resources/ActivityDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IActivityDefinition,
  IActivityDefinitionDynamicValue,
  IActivityDefinitionParticipant,
  IAge,
  ICodeableConcept,
  IContactDetail,
  IDosage,
  IDuration,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
  IRelatedArtifact,
  ITiming,
  IUsageContext,
  PublicationStatusType,
  RequestIntentType,
  RequestPriorityType,
  RequestResourceTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * ActivityDefinitionBuilder - Fluent builder for ActivityDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const activityDefinition = new ActivityDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ActivityDefinitionBuilder extends DomainResourceBuilder<ActivityDefinition, IActivityDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this activity definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the activity definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this activity definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this activity definition (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate title of the activity definition
   */
  setSubtitle(subtitle: string): this {
    this.data.subtitle = subtitle;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set experimental
   * For testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the activity definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this activity definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set usage
   * Describes the clinical usage of the activity definition
   */
  setUsage(usage: string): this {
    this.data.usage = usage;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set approvalDate
   * When the activity definition was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the activity definition was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the activity definition is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set kind
   * Kind of resource
   */
  setKind(kind: RequestResourceTypeType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set profile
   * What profile the resource needs to conform to
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  /**
   * Set code
   * Detail type of activity
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set intent
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: RequestIntentType): this {
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
   * True if the activity should not be performed
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set location
   * Where it should happen
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set quantity
   * How much is administered/consumed/supplied
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set transform
   * Transform to apply the template
   */
  setTransform(transform: string): this {
    this.data.transform = transform;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type
   * @param type - 'CodeableConcept' | 'Reference' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof IActivityDefinition;
    const otherKeys: (keyof IActivityDefinition)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IActivityDefinition);
      otherKeys.push('_subjectCodeableConcept' as keyof IActivityDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IActivityDefinition);
      otherKeys.push('_subjectReference' as keyof IActivityDefinition);
    }
    if (type !== 'Canonical') {
      otherKeys.push('subjectCanonical' as keyof IActivityDefinition);
      otherKeys.push('_subjectCanonical' as keyof IActivityDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set timing choice type
   * @param type - 'Timing' | 'DateTime' | 'Age' | 'Period' | 'Range' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTiming('Timing', value)
   */
  setTiming<T extends 'Timing' | 'DateTime' | 'Age' | 'Period' | 'Range' | 'Duration'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `timing${type}` as keyof IActivityDefinition;
    const otherKeys: (keyof IActivityDefinition)[] = [];
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof IActivityDefinition);
      otherKeys.push('_timingTiming' as keyof IActivityDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof IActivityDefinition);
      otherKeys.push('_timingDateTime' as keyof IActivityDefinition);
    }
    if (type !== 'Age') {
      otherKeys.push('timingAge' as keyof IActivityDefinition);
      otherKeys.push('_timingAge' as keyof IActivityDefinition);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IActivityDefinition);
      otherKeys.push('_timingPeriod' as keyof IActivityDefinition);
    }
    if (type !== 'Range') {
      otherKeys.push('timingRange' as keyof IActivityDefinition);
      otherKeys.push('_timingRange' as keyof IActivityDefinition);
    }
    if (type !== 'Duration') {
      otherKeys.push('timingDuration' as keyof IActivityDefinition);
      otherKeys.push('_timingDuration' as keyof IActivityDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set product choice type
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setProduct('Reference', value)
   */
  setProduct<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `product${type}` as keyof IActivityDefinition;
    const otherKeys: (keyof IActivityDefinition)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('productReference' as keyof IActivityDefinition);
      otherKeys.push('_productReference' as keyof IActivityDefinition);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('productCodeableConcept' as keyof IActivityDefinition);
      otherKeys.push('_productCodeableConcept' as keyof IActivityDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the activity definition
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for activity definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * E.g. Education, Treatment, Assessment, etc.
   */
  addTopic(topic: ICodeableConcept): this {
    return this.addToArray('topic', topic);
  }

  /**
   * Add author
   * Who authored the content
   */
  addAuthor(author: IContactDetail): this {
    return this.addToArray('author', author);
  }

  /**
   * Add editor
   * Who edited the content
   */
  addEditor(editor: IContactDetail): this {
    return this.addToArray('editor', editor);
  }

  /**
   * Add reviewer
   * Who reviewed the content
   */
  addReviewer(reviewer: IContactDetail): this {
    return this.addToArray('reviewer', reviewer);
  }

  /**
   * Add endorser
   * Who endorsed the content
   */
  addEndorser(endorser: IContactDetail): this {
    return this.addToArray('endorser', endorser);
  }

  /**
   * Add relatedArtifact
   * Additional documentation, citations, etc.
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add library
   * Logic used by the activity definition
   */
  addLibrary(library: string): this {
    return this.addToArray('library', library);
  }

  /**
   * Add participant
   * Who should participate in the action
   */
  addParticipant(participant: IActivityDefinitionParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add dosage
   * Detailed dosage instructions
   */
  addDosage(dosage: IDosage): this {
    return this.addToArray('dosage', dosage);
  }

  /**
   * Add bodySite
   * What part of body to perform on
   */
  addBodySite(bodySite: ICodeableConcept): this {
    return this.addToArray('bodySite', bodySite);
  }

  /**
   * Add specimenRequirement
   * What specimens are required to perform this action
   */
  addSpecimenRequirement(specimenRequirement: IReference<'SpecimenDefinition'>): this {
    return this.addToArray('specimenRequirement', specimenRequirement);
  }

  /**
   * Add observationRequirement
   * What observations are required to perform this action
   */
  addObservationRequirement(observationRequirement: IReference<'ObservationDefinition'>): this {
    return this.addToArray('observationRequirement', observationRequirement);
  }

  /**
   * Add observationResultRequirement
   * What observations must be produced by this action
   */
  addObservationResultRequirement(observationResultRequirement: IReference<'ObservationDefinition'>): this {
    return this.addToArray('observationResultRequirement', observationResultRequirement);
  }

  /**
   * Add dynamicValue
   * Dynamic aspects of the definition
   */
  addDynamicValue(dynamicValue: IActivityDefinitionDynamicValue): this {
    return this.addToArray('dynamicValue', dynamicValue);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ActivityDefinition instance
   */
  build(): ActivityDefinition {
    return new ActivityDefinition(this.data);
  }

  /**
   * Build and validate the ActivityDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ActivityDefinition> {
    const activityDefinition = this.build();
    await activityDefinition.validateOrThrow();
    return activityDefinition;
  }
}
