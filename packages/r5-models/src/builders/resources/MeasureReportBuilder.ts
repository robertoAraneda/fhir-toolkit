import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MeasureReport } from '../../models/resources/MeasureReport.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMeasureReport,
  IMeasureReportGroup,
  IPeriod,
  IReference,
  MeasureReportStatusType,
  MeasureReportTypeType,
  SubmitDataUpdateTypeType,
} from '@fhir-toolkit/r5-types';

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
   * individual | subject-list | summary | data-exchange
   */
  setType(type: MeasureReportTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set dataUpdateType
   * incremental | snapshot
   */
  setDataUpdateType(dataUpdateType: SubmitDataUpdateTypeType): this {
    this.data.dataUpdateType = dataUpdateType;
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
  setSubject(subject: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set date
   * When the measure was calculated
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set reporter
   * Who is reporting the data
   */
  setReporter(reporter: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Group'>): this {
    this.data.reporter = reporter;
    return this;
  }

  /**
   * Set reportingVendor
   * What vendor prepared the data
   */
  setReportingVendor(reportingVendor: IReference<'Organization'>): this {
    this.data.reportingVendor = reportingVendor;
    return this;
  }

  /**
   * Set location
   * Where the reported data is from
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
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
   * Set inputParameters
   * What parameters were provided to the report
   */
  setInputParameters(inputParameters: IReference<'Parameters'>): this {
    this.data.inputParameters = inputParameters;
    return this;
  }

  /**
   * Set scoring
   * What scoring method (e.g. proportion, ratio, continuous-variable)
   */
  setScoring(scoring: ICodeableConcept): this {
    this.data.scoring = scoring;
    return this;
  }

  /**
   * Set improvementNotation
   * increase | decrease
   */
  setImprovementNotation(improvementNotation: ICodeableConcept): this {
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
   * Add supplementalData
   * Additional information collected for the report
   */
  addSupplementalData(supplementalData: IReference<'Resource'>): this {
    return this.addToArray('supplementalData', supplementalData);
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
