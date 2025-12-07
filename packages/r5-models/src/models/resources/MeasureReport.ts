import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMeasureReport,
  IMeasureReportGroup,
  IPeriod,
  IReference,
  MeasureReportStatusType,
  MeasureReportTypeType,
  SubmitDataUpdateTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MeasureReport */
const MEASURE_REPORT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  '_type',
  'dataUpdateType',
  '_dataUpdateType',
  'measure',
  '_measure',
  'subject',
  'date',
  '_date',
  'reporter',
  'reportingVendor',
  'location',
  'period',
  'inputParameters',
  'scoring',
  'improvementNotation',
  'group',
  'supplementalData',
  'evaluatedResource',
] as const;

/**
 * MeasureReport - The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 *
 * @see https://hl7.org/fhir/R4/measurereport.html
 *
 * @example
 * const measureReport = new MeasureReport({
 *   resourceType: 'MeasureReport',
 *   // ... properties
 * });
 */
export class MeasureReport extends DomainResource implements IMeasureReport {
  readonly resourceType = 'MeasureReport' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Additional identifier for the MeasureReport */
  identifier?: IIdentifier[];

  /** complete | pending | error */
  status: MeasureReportStatusType;

  /** Extension for status */
  _status?: IElement;

  /** individual | subject-list | summary | data-exchange */
  type: MeasureReportTypeType;

  /** Extension for type */
  _type?: IElement;

  /** incremental | snapshot */
  dataUpdateType?: SubmitDataUpdateTypeType;

  /** Extension for dataUpdateType */
  _dataUpdateType?: IElement;

  /** What measure was calculated */
  measure?: string;

  /** Extension for measure */
  _measure?: IElement;

  /** What individual(s) the report is for */
  subject?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** When the measure was calculated */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who is reporting the data */
  reporter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Group'>;

  /** What vendor prepared the data */
  reportingVendor?: IReference<'Organization'>;

  /** Where the reported data is from */
  location?: IReference<'Location'>;

  /** What period the report covers */
  period: IPeriod;

  /** What parameters were provided to the report */
  inputParameters?: IReference<'Parameters'>;

  /** What scoring method (e.g. proportion, ratio, continuous-variable) */
  scoring?: ICodeableConcept;

  /** increase | decrease */
  improvementNotation?: ICodeableConcept;

  /** Measure results for each group */
  group?: IMeasureReportGroup[];

  /** Additional information collected for the report */
  supplementalData?: IReference<'Resource'>[];

  /** What data was used to calculate the measure score */
  evaluatedResource?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReport>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReport from a JSON object
   */
  static fromJSON(json: IMeasureReport): MeasureReport {
    return new MeasureReport(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReport with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReport>): MeasureReport {
    return new MeasureReport({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReport by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReport) => Partial<IMeasureReport>): MeasureReport {
    const currentData = this.toJSON();
    return new MeasureReport({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReport)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReport {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_PROPERTIES);
    return result as IMeasureReport;
  }

  /**
   * Create a deep clone of this MeasureReport
   */
  clone(): MeasureReport {
    return new MeasureReport(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReport
   */
  toString(): string {
    const parts: string[] = ['MeasureReport'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
