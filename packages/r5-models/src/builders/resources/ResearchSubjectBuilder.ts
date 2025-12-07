import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ResearchSubject } from '../../models/resources/ResearchSubject.js';
import type {
  IIdentifier,
  IPeriod,
  IReference,
  IResearchSubject,
  IResearchSubjectProgress,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchSubjectBuilder - Fluent builder for ResearchSubject resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchSubject = new ResearchSubjectBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ResearchSubjectBuilder extends DomainResourceBuilder<ResearchSubject, IResearchSubject> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set period
   * Start and end of participation
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set study
   * Study subject is part of
   */
  setStudy(study: IReference<'ResearchStudy'>): this {
    this.data.study = study;
    return this;
  }

  /**
   * Set subject
   * Who or what is part of study
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Specimen' | 'Device' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set assignedComparisonGroup
   * What path should be followed
   */
  setAssignedComparisonGroup(assignedComparisonGroup: string): this {
    this.data.assignedComparisonGroup = assignedComparisonGroup;
    return this;
  }

  /**
   * Set actualComparisonGroup
   * What path was followed
   */
  setActualComparisonGroup(actualComparisonGroup: string): this {
    this.data.actualComparisonGroup = actualComparisonGroup;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for research subject in a study
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add progress
   * Subject status
   */
  addProgress(progress: IResearchSubjectProgress): this {
    return this.addToArray('progress', progress);
  }

  /**
   * Add consent
   * Agreement to participate in study
   */
  addConsent(consent: IReference<'Consent'>): this {
    return this.addToArray('consent', consent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchSubject instance
   */
  build(): ResearchSubject {
    return new ResearchSubject(this.data);
  }

  /**
   * Build and validate the ResearchSubject instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchSubject> {
    const researchSubject = this.build();
    await researchSubject.validateOrThrow();
    return researchSubject;
  }
}
