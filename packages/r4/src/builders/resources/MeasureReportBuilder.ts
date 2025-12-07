import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MeasureReport } from '../../models/resources/MeasureReport.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMeasureReport,
  IMeasureReportGroup,
  IPeriod,
  IReference,
  MeasureImprovementNotationType,
  MeasureReportStatusType,
  MeasureReportTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureReportBuilder - Fluent builder for MeasureReport resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReport = new MeasureReportBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MeasureReportBuilder extends DomainResourceBuilder<MeasureReport, IMeasureReport> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * complete | pending | error
   */
  setStatus(status: MeasureReportStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set type
   * individual | subject-list | summary | data-collection
   */
  setType(type: MeasureReportTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set measure
   * What measure was calculated
   */
  setMeasure(measure: string): this {
    this.data.measure = measure;
    return this;
  }

  /**
   * Set subject
   * What individual(s) the report is for
   */
  setSubject(subject: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Location' | 'Device' | 'RelatedPerson' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set date
   * When the report was generated
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set reporter
   * Who is reporting the data
   */
  setReporter(reporter: IReference<'Practitioner' | 'PractitionerRole' | 'Location' | 'Organization'>): this {
    this.data.reporter = reporter;
    return this;
  }

  /**
   * Set period
   * What period the report covers
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the MeasureReport
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add group
   * Measure results for each group
   */
  addGroup(group: IMeasureReportGroup): this {
    return this.addToArray('group', group);
  }

  /**
   * Add evaluatedResource
   * What data was used to calculate the measure score
   */
  addEvaluatedResource(evaluatedResource: IReference<'Resource'>): this {
    return this.addToArray('evaluatedResource', evaluatedResource);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReport instance
   */
  build(): MeasureReport {
    return new MeasureReport(this.data);
  }

  /**
   * Build and validate the MeasureReport instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReport> {
    const measureReport = this.build();
    await measureReport.validateOrThrow();
    return measureReport;
  }
}
