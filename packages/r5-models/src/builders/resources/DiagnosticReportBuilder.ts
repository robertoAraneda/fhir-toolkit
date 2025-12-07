import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DiagnosticReport } from '../../models/resources/DiagnosticReport.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  DiagnosticReportStatusType,
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  IDiagnosticReport,
  IDiagnosticReportMedia,
  IDiagnosticReportSupportingInfo,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DiagnosticReportBuilder - Fluent builder for DiagnosticReport resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const diagnosticReport = new DiagnosticReportBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DiagnosticReportBuilder extends DomainResourceBuilder<DiagnosticReport, IDiagnosticReport> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown
   */
  setStatus(status: DiagnosticReportStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * Name/Code for this diagnostic report
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * The subject of the report - usually, but not always, the patient
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Health care event when test ordered
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set issued
   * DateTime this version was made
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set composition
   * Reference to a Composition resource for the DiagnosticReport structure
   */
  setComposition(composition: IReference<'Composition'>): this {
    this.data.composition = composition;
    return this;
  }

  /**
   * Set conclusion
   * Clinical conclusion (interpretation) of test results
   */
  setConclusion(conclusion: string): this {
    this.data.conclusion = conclusion;
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
    const key = `effective${type}` as keyof IDiagnosticReport;
    const otherKeys: (keyof IDiagnosticReport)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('effectiveDateTime' as keyof IDiagnosticReport);
      otherKeys.push('_effectiveDateTime' as keyof IDiagnosticReport);
    }
    if (type !== 'Period') {
      otherKeys.push('effectivePeriod' as keyof IDiagnosticReport);
      otherKeys.push('_effectivePeriod' as keyof IDiagnosticReport);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for report
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * What was requested
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add category
   * Service category
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add performer
   * Responsible Diagnostic Service
   */
  addPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam'>): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add resultsInterpreter
   * Primary result interpreter
   */
  addResultsInterpreter(resultsInterpreter: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam'>): this {
    return this.addToArray('resultsInterpreter', resultsInterpreter);
  }

  /**
   * Add specimen
   * Specimens this report is based on
   */
  addSpecimen(specimen: IReference<'Specimen'>): this {
    return this.addToArray('specimen', specimen);
  }

  /**
   * Add result
   * Observations
   */
  addResult(result: IReference<'Observation'>): this {
    return this.addToArray('result', result);
  }

  /**
   * Add note
   * Comments about the diagnostic report
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add study
   * Reference to full details of an analysis associated with the diagnostic report
   */
  addStudy(study: IReference<'GenomicStudy' | 'ImagingStudy'>): this {
    return this.addToArray('study', study);
  }

  /**
   * Add supportingInfo
   * Additional information supporting the diagnostic report
   */
  addSupportingInfo(supportingInfo: IDiagnosticReportSupportingInfo): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add media
   * Key images or data associated with this report
   */
  addMedia(media: IDiagnosticReportMedia): this {
    return this.addToArray('media', media);
  }

  /**
   * Add conclusionCode
   * Codes for the clinical conclusion of test results
   */
  addConclusionCode(conclusionCode: ICodeableConcept): this {
    return this.addToArray('conclusionCode', conclusionCode);
  }

  /**
   * Add presentedForm
   * Entire report as issued
   */
  addPresentedForm(presentedForm: IAttachment): this {
    return this.addToArray('presentedForm', presentedForm);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DiagnosticReport instance
   */
  build(): DiagnosticReport {
    return new DiagnosticReport(this.data);
  }

  /**
   * Build and validate the DiagnosticReport instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DiagnosticReport> {
    const diagnosticReport = this.build();
    await diagnosticReport.validateOrThrow();
    return diagnosticReport;
  }
}
