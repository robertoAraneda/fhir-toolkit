import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDiagnosticReportMedia,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DiagnosticReportMedia */
const DIAGNOSTIC_REPORT_MEDIA_PROPERTIES = [
  'comment',
  '_comment',
  'link',
] as const;

/**
 * DiagnosticReportMedia - Key images or data associated with this report
 *
 * @see https://hl7.org/fhir/R4/diagnosticreportmedia.html
 *
 * @example
 * const diagnosticReportMedia = new DiagnosticReportMedia({
 *   // ... properties
 * });
 */
export class DiagnosticReportMedia extends BackboneElement implements IDiagnosticReportMedia {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Comment about the image or data (e.g. explanation) */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Reference to the image or data source */
  link: IReference<'DocumentReference'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDiagnosticReportMedia>) {
    super(data);
    if (data) {
      this.assignProps(data, DIAGNOSTIC_REPORT_MEDIA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DiagnosticReportMedia from a JSON object
   */
  static fromJSON(json: IDiagnosticReportMedia): DiagnosticReportMedia {
    return new DiagnosticReportMedia(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DiagnosticReportMedia with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDiagnosticReportMedia>): DiagnosticReportMedia {
    return new DiagnosticReportMedia({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DiagnosticReportMedia by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDiagnosticReportMedia) => Partial<IDiagnosticReportMedia>): DiagnosticReportMedia {
    const currentData = this.toJSON();
    return new DiagnosticReportMedia({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDiagnosticReportMedia)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDiagnosticReportMedia {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DIAGNOSTIC_REPORT_MEDIA_PROPERTIES);
    return result as IDiagnosticReportMedia;
  }

  /**
   * Create a deep clone of this DiagnosticReportMedia
   */
  clone(): DiagnosticReportMedia {
    return new DiagnosticReportMedia(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DiagnosticReportMedia
   */
  toString(): string {
    const parts: string[] = ['DiagnosticReportMedia'];
    return parts.join(', ');
  }
}
