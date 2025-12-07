import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  IEvidenceReportSubject,
  IEvidenceReportSubjectCharacteristic,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceReportSubject */
const EVIDENCE_REPORT_SUBJECT_PROPERTIES = [
  'characteristic',
  'note',
] as const;

/**
 * EvidenceReportSubject - Focus of the report
 *
 * @see https://hl7.org/fhir/R4/evidencereportsubject.html
 *
 * @example
 * const evidenceReportSubject = new EvidenceReportSubject({
 *   // ... properties
 * });
 */
export class EvidenceReportSubject extends BackboneElement implements IEvidenceReportSubject {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Characteristic */
  characteristic?: IEvidenceReportSubjectCharacteristic[];

  /** Footnotes and/or explanatory notes */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceReportSubject>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_REPORT_SUBJECT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceReportSubject from a JSON object
   */
  static fromJSON(json: IEvidenceReportSubject): EvidenceReportSubject {
    return new EvidenceReportSubject(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceReportSubject with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceReportSubject>): EvidenceReportSubject {
    return new EvidenceReportSubject({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceReportSubject by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceReportSubject) => Partial<IEvidenceReportSubject>): EvidenceReportSubject {
    const currentData = this.toJSON();
    return new EvidenceReportSubject({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceReportSubject)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceReportSubject {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_REPORT_SUBJECT_PROPERTIES);
    return result as IEvidenceReportSubject;
  }

  /**
   * Create a deep clone of this EvidenceReportSubject
   */
  clone(): EvidenceReportSubject {
    return new EvidenceReportSubject(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceReportSubject
   */
  toString(): string {
    const parts: string[] = ['EvidenceReportSubject'];
    return parts.join(', ');
  }
}
