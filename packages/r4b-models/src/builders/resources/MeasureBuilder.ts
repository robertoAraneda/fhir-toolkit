import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Measure } from '../../models/resources/Measure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IMeasure,
  IMeasureGroup,
  IMeasureSupplementalData,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  MeasureImprovementNotationType,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * MeasureBuilder - Fluent builder for Measure resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const measure = new MeasureBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MeasureBuilder extends DomainResourceBuilder<Measure, IMeasure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this measure, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the measure
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this measure (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this measure (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate title of the measure
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
   * Natural language description of the measure
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this measure is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set usage
   * Describes the clinical usage of the measure
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
   * When the measure was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the measure was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the measure is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set disclaimer
   * Disclaimer for use of the measure or its referenced content
   */
  setDisclaimer(disclaimer: string): this {
    this.data.disclaimer = disclaimer;
    return this;
  }

  /**
   * Set scoring
   * proportion | ratio | continuous-variable | cohort
   */
  setScoring(scoring: ICodeableConcept): this {
    this.data.scoring = scoring;
    return this;
  }

  /**
   * Set compositeScoring
   * opportunity | all-or-nothing | linear | weighted
   */
  setCompositeScoring(compositeScoring: ICodeableConcept): this {
    this.data.compositeScoring = compositeScoring;
    return this;
  }

  /**
   * Set riskAdjustment
   * How risk adjustment is applied for this measure
   */
  setRiskAdjustment(riskAdjustment: string): this {
    this.data.riskAdjustment = riskAdjustment;
    return this;
  }

  /**
   * Set rateAggregation
   * How is rate aggregation performed for this measure
   */
  setRateAggregation(rateAggregation: string): this {
    this.data.rateAggregation = rateAggregation;
    return this;
  }

  /**
   * Set rationale
   * Detailed description of why the measure exists
   */
  setRationale(rationale: string): this {
    this.data.rationale = rationale;
    return this;
  }

  /**
   * Set clinicalRecommendationStatement
   * Summary of clinical guidelines
   */
  setClinicalRecommendationStatement(clinicalRecommendationStatement: string): this {
    this.data.clinicalRecommendationStatement = clinicalRecommendationStatement;
    return this;
  }

  /**
   * Set improvementNotation
   * increase | decrease
   */
  setImprovementNotation(improvementNotation: ICodeableConcept<MeasureImprovementNotationType>): this {
    this.data.improvementNotation = improvementNotation;
    return this;
  }

  /**
   * Set guidance
   * Additional guidance for implementers
   */
  setGuidance(guidance: string): this {
    this.data.guidance = guidance;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof IMeasure;
    const otherKeys: (keyof IMeasure)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IMeasure);
      otherKeys.push('_subjectCodeableConcept' as keyof IMeasure);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IMeasure);
      otherKeys.push('_subjectReference' as keyof IMeasure);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the measure
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
   * Intended jurisdiction for measure (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * The category of the measure, such as Education, Treatment, Assessment, etc.
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
   * Logic used by the measure
   */
  addLibrary(library: string): this {
    return this.addToArray('library', library);
  }

  /**
   * Add type
   * process | outcome | structure | patient-reported-outcome | composite
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add definition
   * Defined terms used in the measure documentation
   */
  addDefinition(definition: string): this {
    return this.addToArray('definition', definition);
  }

  /**
   * Add group
   * Population criteria group
   */
  addGroup(group: IMeasureGroup): this {
    return this.addToArray('group', group);
  }

  /**
   * Add supplementalData
   * What other data should be reported with the measure
   */
  addSupplementalData(supplementalData: IMeasureSupplementalData): this {
    return this.addToArray('supplementalData', supplementalData);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Measure instance
   */
  build(): Measure {
    return new Measure(this.data);
  }

  /**
   * Build and validate the Measure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Measure> {
    const measure = this.build();
    await measure.validateOrThrow();
    return measure;
  }
}
