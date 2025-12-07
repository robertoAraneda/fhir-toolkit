import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ResearchSubject } from '../../models/resources/ResearchSubject.js';
import type {
  IIdentifier,
  IPeriod,
  IReference,
  IResearchSubject,
  ResearchSubjectStatusType,
} from '@fhir-toolkit/r4b-types';

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
   * candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
   */
  setStatus(status: ResearchSubjectStatusType): this {
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
   * Set individual
   * Who is part of study
   */
  setIndividual(individual: IReference<'Patient'>): this {
    this.data.individual = individual;
    return this;
  }

  /**
   * Set assignedArm
   * What path should be followed
   */
  setAssignedArm(assignedArm: string): this {
    this.data.assignedArm = assignedArm;
    return this;
  }

  /**
   * Set actualArm
   * What path was followed
   */
  setActualArm(actualArm: string): this {
    this.data.actualArm = actualArm;
    return this;
  }

  /**
   * Set consent
   * Agreement to participate in study
   */
  setConsent(consent: IReference<'Consent'>): this {
    this.data.consent = consent;
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
