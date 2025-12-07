import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDiagnosticReportSupportingInfo,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DiagnosticReportSupportingInfo */
const DIAGNOSTIC_REPORT_SUPPORTING_INFO_PROPERTIES = [
  'type',
  'reference',
] as const;

/**
 * DiagnosticReportSupportingInfo - Additional information supporting the diagnostic report
 *
 * @see https://hl7.org/fhir/R4/diagnosticreportsupportinginfo.html
 *
 * @example
 * const diagnosticReportSupportingInfo = new DiagnosticReportSupportingInfo({
 *   // ... properties
 * });
 */
export class DiagnosticReportSupportingInfo extends BackboneElement implements IDiagnosticReportSupportingInfo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Supporting information role code */
  type: ICodeableConcept;

  /** Supporting information reference */
  reference: IReference<'Procedure' | 'Observation' | 'DiagnosticReport' | 'Citation'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDiagnosticReportSupportingInfo>) {
    super(data);
    if (data) {
      this.assignProps(data, DIAGNOSTIC_REPORT_SUPPORTING_INFO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DiagnosticReportSupportingInfo from a JSON object
   */
  static fromJSON(json: IDiagnosticReportSupportingInfo): DiagnosticReportSupportingInfo {
    return new DiagnosticReportSupportingInfo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DiagnosticReportSupportingInfo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDiagnosticReportSupportingInfo>): DiagnosticReportSupportingInfo {
    return new DiagnosticReportSupportingInfo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DiagnosticReportSupportingInfo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDiagnosticReportSupportingInfo) => Partial<IDiagnosticReportSupportingInfo>): DiagnosticReportSupportingInfo {
    const currentData = this.toJSON();
    return new DiagnosticReportSupportingInfo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDiagnosticReportSupportingInfo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDiagnosticReportSupportingInfo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DIAGNOSTIC_REPORT_SUPPORTING_INFO_PROPERTIES);
    return result as IDiagnosticReportSupportingInfo;
  }

  /**
   * Create a deep clone of this DiagnosticReportSupportingInfo
   */
  clone(): DiagnosticReportSupportingInfo {
    return new DiagnosticReportSupportingInfo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DiagnosticReportSupportingInfo
   */
  toString(): string {
    const parts: string[] = ['DiagnosticReportSupportingInfo'];
    return parts.join(', ');
  }
}
