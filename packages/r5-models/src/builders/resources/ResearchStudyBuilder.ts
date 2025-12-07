import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ResearchStudy } from '../../models/resources/ResearchStudy.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchStudy,
  IResearchStudyAssociatedParty,
  IResearchStudyComparisonGroup,
  IResearchStudyLabel,
  IResearchStudyObjective,
  IResearchStudyOutcomeMeasure,
  IResearchStudyProgressStatus,
  IResearchStudyRecruitment,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyBuilder - Fluent builder for ResearchStudy resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudy = new ResearchStudyBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ResearchStudyBuilder extends DomainResourceBuilder<ResearchStudy, IResearchStudy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this study resource
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * The business version for the study record
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this study (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Human readable name of the study
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set date
   * Date the resource last changed
   */
  setDate(date: string): this {
    this.data.date = date;
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
   * Set primaryPurposeType
   * treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility
   */
  setPrimaryPurposeType(primaryPurposeType: ICodeableConcept): this {
    this.data.primaryPurposeType = primaryPurposeType;
    return this;
  }

  /**
   * Set phase
   * n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4
   */
  setPhase(phase: ICodeableConcept): this {
    this.data.phase = phase;
    return this;
  }

  /**
   * Set descriptionSummary
   * Brief text explaining the study
   */
  setDescriptionSummary(descriptionSummary: string): this {
    this.data.descriptionSummary = descriptionSummary;
    return this;
  }

  /**
   * Set description
   * Detailed narrative of the study
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set period
   * When the study began and ended
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set whyStopped
   * accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
   */
  setWhyStopped(whyStopped: ICodeableConcept): this {
    this.data.whyStopped = whyStopped;
    return this;
  }

  /**
   * Set recruitment
   * Target or actual group of participants enrolled in study
   */
  setRecruitment(recruitment: IResearchStudyRecruitment): this {
    this.data.recruitment = recruitment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for study
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add label
   * Additional names for the study
   */
  addLabel(label: IResearchStudyLabel): this {
    return this.addToArray('label', label);
  }

  /**
   * Add protocol
   * Steps followed in executing study
   */
  addProtocol(protocol: IReference<'PlanDefinition'>): this {
    return this.addToArray('protocol', protocol);
  }

  /**
   * Add partOf
   * Part of larger study
   */
  addPartOf(partOf: IReference<'ResearchStudy'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add relatedArtifact
   * References, URLs, and attachments
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add studyDesign
   * Classifications of the study design characteristics
   */
  addStudyDesign(studyDesign: ICodeableConcept): this {
    return this.addToArray('studyDesign', studyDesign);
  }

  /**
   * Add focus
   * Drugs, devices, etc. under study
   */
  addFocus(focu: ICodeableReference): this {
    return this.addToArray('focus', focu);
  }

  /**
   * Add condition
   * Condition being studied
   */
  addCondition(condition: ICodeableConcept): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add keyword
   * Used to search for the study
   */
  addKeyword(keyword: ICodeableConcept): this {
    return this.addToArray('keyword', keyword);
  }

  /**
   * Add region
   * Geographic area for the study
   */
  addRegion(region: ICodeableConcept): this {
    return this.addToArray('region', region);
  }

  /**
   * Add site
   * Facility where study activities are conducted
   */
  addSite(site: IReference<'Location' | 'ResearchStudy' | 'Organization'>): this {
    return this.addToArray('site', site);
  }

  /**
   * Add note
   * Comments made about the study
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add classifier
   * Classification for the study
   */
  addClassifier(classifier: ICodeableConcept): this {
    return this.addToArray('classifier', classifier);
  }

  /**
   * Add associatedParty
   * Sponsors, collaborators, and other parties
   */
  addAssociatedParty(associatedParty: IResearchStudyAssociatedParty): this {
    return this.addToArray('associatedParty', associatedParty);
  }

  /**
   * Add progressStatus
   * Status of study with time for that status
   */
  addProgressStatus(progressStatu: IResearchStudyProgressStatus): this {
    return this.addToArray('progressStatus', progressStatu);
  }

  /**
   * Add comparisonGroup
   * Defined path through the study for a subject
   */
  addComparisonGroup(comparisonGroup: IResearchStudyComparisonGroup): this {
    return this.addToArray('comparisonGroup', comparisonGroup);
  }

  /**
   * Add objective
   * A goal for the study
   */
  addObjective(objective: IResearchStudyObjective): this {
    return this.addToArray('objective', objective);
  }

  /**
   * Add outcomeMeasure
   * A variable measured during the study
   */
  addOutcomeMeasure(outcomeMeasure: IResearchStudyOutcomeMeasure): this {
    return this.addToArray('outcomeMeasure', outcomeMeasure);
  }

  /**
   * Add result
   * Link to results generated during the study
   */
  addResult(result: IReference<'EvidenceReport' | 'Citation' | 'DiagnosticReport'>): this {
    return this.addToArray('result', result);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudy instance
   */
  build(): ResearchStudy {
    return new ResearchStudy(this.data);
  }

  /**
   * Build and validate the ResearchStudy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudy> {
    const researchStudy = this.build();
    await researchStudy.validateOrThrow();
    return researchStudy;
  }
}
