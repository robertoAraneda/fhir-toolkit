import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ResearchStudy } from '../../models/resources/ResearchStudy.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchStudy,
  IResearchStudyArm,
  IResearchStudyObjective,
  ResearchStudyStatusType,
} from '@fhir-toolkit/r4-types';

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
 *   .setTitle(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ResearchStudyBuilder extends DomainResourceBuilder<ResearchStudy, IResearchStudy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * Name for this study
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set status
   * active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn
   */
  setStatus(status: ResearchStudyStatusType): this {
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
   * Set description
   * What this is study doing
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
   * Set sponsor
   * Organization that initiates and is legally responsible for the study
   */
  setSponsor(sponsor: IReference<'Organization'>): this {
    this.data.sponsor = sponsor;
    return this;
  }

  /**
   * Set principalInvestigator
   * Researcher who oversees multiple aspects of the study
   */
  setPrincipalInvestigator(principalInvestigator: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.principalInvestigator = principalInvestigator;
    return this;
  }

  /**
   * Set reasonStopped
   * accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
   */
  setReasonStopped(reasonStopped: ICodeableConcept): this {
    this.data.reasonStopped = reasonStopped;
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
   * Add category
   * Classifications for the study
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add focus
   * Drugs, devices, etc. under study
   */
  addFocus(focu: ICodeableConcept): this {
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
   * Add contact
   * Contact details for the study
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add relatedArtifact
   * References and dependencies
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add keyword
   * Used to search for the study
   */
  addKeyword(keyword: ICodeableConcept): this {
    return this.addToArray('keyword', keyword);
  }

  /**
   * Add location
   * Geographic region(s) for study
   */
  addLocation(location: ICodeableConcept): this {
    return this.addToArray('location', location);
  }

  /**
   * Add enrollment
   * Inclusion & exclusion criteria
   */
  addEnrollment(enrollment: IReference<'Group'>): this {
    return this.addToArray('enrollment', enrollment);
  }

  /**
   * Add site
   * Facility where study activities are conducted
   */
  addSite(site: IReference<'Location'>): this {
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
   * Add arm
   * Defined path through the study for a subject
   */
  addArm(arm: IResearchStudyArm): this {
    return this.addToArray('arm', arm);
  }

  /**
   * Add objective
   * A goal for the study
   */
  addObjective(objective: IResearchStudyObjective): this {
    return this.addToArray('objective', objective);
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
