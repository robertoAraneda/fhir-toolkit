import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { InventoryReport } from '../../models/resources/InventoryReport.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IInventoryReport,
  IInventoryReportInventoryListing,
  IPeriod,
  IReference,
  InventoryCountTypeType,
  InventoryReportStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryReportBuilder - Fluent builder for InventoryReport resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryReport = new InventoryReportBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class InventoryReportBuilder extends DomainResourceBuilder<InventoryReport, IInventoryReport> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | requested | active | entered-in-error
   */
  setStatus(status: InventoryReportStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set countType
   * snapshot | difference
   */
  setCountType(countType: InventoryCountTypeType): this {
    this.data.countType = countType;
    return this;
  }

  /**
   * Set operationType
   * addition | subtraction
   */
  setOperationType(operationType: ICodeableConcept): this {
    this.data.operationType = operationType;
    return this;
  }

  /**
   * Set operationTypeReason
   * The reason for this count - regular count, ad-hoc count, new arrivals, etc
   */
  setOperationTypeReason(operationTypeReason: ICodeableConcept): this {
    this.data.operationTypeReason = operationTypeReason;
    return this;
  }

  /**
   * Set reportedDateTime
   * When the report has been submitted
   */
  setReportedDateTime(reportedDateTime: string): this {
    this.data.reportedDateTime = reportedDateTime;
    return this;
  }

  /**
   * Set reporter
   * Who submits the report
   */
  setReporter(reporter: IReference<'Practitioner' | 'Patient' | 'RelatedPerson' | 'Device'>): this {
    this.data.reporter = reporter;
    return this;
  }

  /**
   * Set reportingPeriod
   * The period the report refers to
   */
  setReportingPeriod(reportingPeriod: IPeriod): this {
    this.data.reportingPeriod = reportingPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for the report
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add inventoryListing
   * An inventory listing section (grouped by any of the attributes)
   */
  addInventoryListing(inventoryListing: IInventoryReportInventoryListing): this {
    return this.addToArray('inventoryListing', inventoryListing);
  }

  /**
   * Add note
   * A note associated with the InventoryReport
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryReport instance
   */
  build(): InventoryReport {
    return new InventoryReport(this.data);
  }

  /**
   * Build and validate the InventoryReport instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryReport> {
    const inventoryReport = this.build();
    await inventoryReport.validateOrThrow();
    return inventoryReport;
  }
}
