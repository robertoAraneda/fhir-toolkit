import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ClinicalImpression } from '../../models/resources/ClinicalImpression.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EventStatusType,
  IAnnotation,
  IClinicalImpression,
  IClinicalImpressionFinding,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

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
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  setStatus(status: EventStatusType): this {
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
   * The Encounter during which this ClinicalImpression was created
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
   * Set performer
   * The clinician performing the assessment
   */
  setPerformer(performer: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.performer = performer;
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
   * Set changePattern
   * Change in the status/pattern of a subject's condition since previously assessed, such as worsening, improving, or no change
   */
  setChangePattern(changePattern: ICodeableConcept): this {
    this.data.changePattern = changePattern;
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
   * Set effective choice type (effectiveDateTime, effectivePeriod)
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
   * Add prognosisCodeableConcept
   * Estimate of likely outcome
   */
  addPrognosisCodeableConcept(prognosisCodeableConcept: ICodeableConcept): this {
    return this.addToArray('prognosisCodeableConcept', prognosisCodeableConcept);
  }

  /**
   * Add prognosisReference
   * RiskAssessment expressing likely outcome
   */
  addPrognosisReference(prognosisReference: IReference<'RiskAssessment'>): this {
    return this.addToArray('prognosisReference', prognosisReference);
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
