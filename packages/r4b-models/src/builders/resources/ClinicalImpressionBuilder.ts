import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ClinicalImpression } from '../../models/resources/ClinicalImpression.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ClinicalImpressionStatusType,
  IAnnotation,
  IClinicalImpression,
  IClinicalImpressionFinding,
  IClinicalImpressionInvestigation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClinicalImpressionBuilder - Fluent builder for ClinicalImpression resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalImpression = new ClinicalImpressionBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ClinicalImpressionBuilder extends DomainResourceBuilder<ClinicalImpression, IClinicalImpression> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * in-progress | completed | entered-in-error
   */
  setStatus(status: ClinicalImpressionStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Reason for current status
   */
  setStatusReason(statusReason: ICodeableConcept): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set code
   * Kind of assessment performed
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * Why/how the assessment was performed
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set subject
   * Patient or group assessed
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
   * Set date
   * When the assessment was documented
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set assessor
   * The clinician performing the assessment
   */
  setAssessor(assessor: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.assessor = assessor;
    return this;
  }

  /**
   * Set previous
   * Reference to last assessment
   */
  setPrevious(previous: IReference<'ClinicalImpression'>): this {
    this.data.previous = previous;
    return this;
  }

  /**
   * Set summary
   * Summary of the assessment
   */
  setSummary(summary: string): this {
    this.data.summary = summary;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set effective choice type
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEffective('DateTime', value)
   */
  setEffective<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `effective${type}` as keyof IClinicalImpression;
    const otherKeys: (keyof IClinicalImpression)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('effectiveDateTime' as keyof IClinicalImpression);
      otherKeys.push('_effectiveDateTime' as keyof IClinicalImpression);
    }
    if (type !== 'Period') {
      otherKeys.push('effectivePeriod' as keyof IClinicalImpression);
      otherKeys.push('_effectivePeriod' as keyof IClinicalImpression);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set prognosis choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPrognosis('CodeableConcept', value)
   */
  setPrognosis<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `prognosis${type}` as keyof IClinicalImpression;
    const otherKeys: (keyof IClinicalImpression)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('prognosisCodeableConcept' as keyof IClinicalImpression);
      otherKeys.push('_prognosisCodeableConcept' as keyof IClinicalImpression);
    }
    if (type !== 'Reference') {
      otherKeys.push('prognosisReference' as keyof IClinicalImpression);
      otherKeys.push('_prognosisReference' as keyof IClinicalImpression);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add problem
   * Relevant impressions of patient state
   */
  addProblem(problem: IReference<'Condition' | 'AllergyIntolerance'>): this {
    return this.addToArray('problem', problem);
  }

  /**
   * Add investigation
   * One or more sets of investigations (signs, symptoms, etc.)
   */
  addInvestigation(investigation: IClinicalImpressionInvestigation): this {
    return this.addToArray('investigation', investigation);
  }

  /**
   * Add protocol
   * Clinical Protocol followed
   */
  addProtocol(protocol: string): this {
    return this.addToArray('protocol', protocol);
  }

  /**
   * Add finding
   * Possible or likely findings and diagnoses
   */
  addFinding(finding: IClinicalImpressionFinding): this {
    return this.addToArray('finding', finding);
  }

  /**
   * Add supportingInfo
   * Information supporting the clinical impression
   */
  addSupportingInfo(supportingInfo: IReference<'Resource'>): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add note
   * Comments made about the ClinicalImpression
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalImpression instance
   */
  build(): ClinicalImpression {
    return new ClinicalImpression(this.data);
  }

  /**
   * Build and validate the ClinicalImpression instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalImpression> {
    const clinicalImpression = this.build();
    await clinicalImpression.validateOrThrow();
    return clinicalImpression;
  }
}
