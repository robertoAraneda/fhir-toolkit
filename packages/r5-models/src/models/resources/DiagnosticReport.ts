import { DomainResource } from '../base/DomainResource.js';
import type {
  DiagnosticReportStatusType,
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  IDiagnosticReport,
  IDiagnosticReportMedia,
  IDiagnosticReportSupportingInfo,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DiagnosticReport */
const DIAGNOSTIC_REPORT_PROPERTIES = [
  'identifier',
  'basedOn',
  'status',
  '_status',
  'category',
  'code',
  'subject',
  'encounter',
  'effectiveDateTime',
  '_effectiveDateTime',
  'effectivePeriod',
  'issued',
  '_issued',
  'performer',
  'resultsInterpreter',
  'specimen',
  'result',
  'note',
  'study',
  'supportingInfo',
  'media',
  'composition',
  'conclusion',
  '_conclusion',
  'conclusionCode',
  'presentedForm',
] as const;

/**
 * DiagnosticReport - The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances.
 *
 * @see https://hl7.org/fhir/R4/diagnosticreport.html
 *
 * @example
 * const diagnosticReport = new DiagnosticReport({
 *   // ... properties
 * });
 */
export class DiagnosticReport extends DomainResource implements IDiagnosticReport {
  readonly resourceType = 'DiagnosticReport' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for report */
  identifier?: IIdentifier[];

  /** What was requested */
  basedOn?: IReference<'CarePlan' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest'>[];

  /** registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown */
  status: DiagnosticReportStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Service category */
  category?: ICodeableConcept[];

  /** Name/Code for this diagnostic report */
  code: ICodeableConcept;

  /** The subject of the report - usually, but not always, the patient */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct'>;

  /** Health care event when test ordered */
  encounter?: IReference<'Encounter'>;

  /** Clinically relevant time/time-period for report */
  effectiveDateTime?: string;

  /** Extension for effectiveDateTime */
  _effectiveDateTime?: IElement;

  /** Clinically relevant time/time-period for report */
  effectivePeriod?: IPeriod;

  /** DateTime this version was made */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** Responsible Diagnostic Service */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam'>[];

  /** Primary result interpreter */
  resultsInterpreter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam'>[];

  /** Specimens this report is based on */
  specimen?: IReference<'Specimen'>[];

  /** Observations */
  result?: IReference<'Observation'>[];

  /** Comments about the diagnostic report */
  note?: IAnnotation[];

  /** Reference to full details of an analysis associated with the diagnostic report */
  study?: IReference<'GenomicStudy' | 'ImagingStudy'>[];

  /** Additional information supporting the diagnostic report */
  supportingInfo?: IDiagnosticReportSupportingInfo[];

  /** Key images or data associated with this report */
  media?: IDiagnosticReportMedia[];

  /** Reference to a Composition resource for the DiagnosticReport structure */
  composition?: IReference<'Composition'>;

  /** Clinical conclusion (interpretation) of test results */
  conclusion?: string;

  /** Extension for conclusion */
  _conclusion?: IElement;

  /** Codes for the clinical conclusion of test results */
  conclusionCode?: ICodeableConcept[];

  /** Entire report as issued */
  presentedForm?: IAttachment[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDiagnosticReport>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DIAGNOSTIC_REPORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DiagnosticReport from a JSON object
   */
  static fromJSON(json: IDiagnosticReport): DiagnosticReport {
    return new DiagnosticReport(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DiagnosticReport with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDiagnosticReport>): DiagnosticReport {
    return new DiagnosticReport({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DiagnosticReport by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDiagnosticReport) => Partial<IDiagnosticReport>): DiagnosticReport {
    const currentData = this.toJSON();
    return new DiagnosticReport({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDiagnosticReport)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDiagnosticReport {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DIAGNOSTIC_REPORT_PROPERTIES);
    return result as IDiagnosticReport;
  }

  /**
   * Create a deep clone of this DiagnosticReport
   */
  clone(): DiagnosticReport {
    return new DiagnosticReport(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DiagnosticReport
   */
  toString(): string {
    const parts: string[] = ['DiagnosticReport'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
