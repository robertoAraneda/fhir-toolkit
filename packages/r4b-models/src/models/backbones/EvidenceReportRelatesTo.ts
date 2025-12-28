import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IEvidenceReportRelatesTo,
  IIdentifier,
  IReference,
  ReportRelationshipTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceReportRelatesTo */
const EVIDENCE_REPORT_RELATES_TO_PROPERTIES = [
  'code',
  '_code',
  'targetIdentifier',
  'targetReference',
] as const;

/**
 * EvidenceReportRelatesTo - Relationships to other compositions/documents
 *
 * @see https://hl7.org/fhir/R4B/evidencereportrelatesto.html
 *
 * @example
 * const evidenceReportRelatesTo = new EvidenceReportRelatesTo({
 *   // ... properties
 * });
 */
export class EvidenceReportRelatesTo extends BackboneElement implements IEvidenceReportRelatesTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith */
  code: ReportRelationshipTypeType;

  /** Extension for code */
  _code?: IElement;

  /** Target of the relationship */
  targetIdentifier?: IIdentifier;

  /** Target of the relationship */
  targetReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceReportRelatesTo>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_REPORT_RELATES_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceReportRelatesTo from a JSON object
   */
  static fromJSON(json: IEvidenceReportRelatesTo): EvidenceReportRelatesTo {
    return new EvidenceReportRelatesTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceReportRelatesTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceReportRelatesTo>): EvidenceReportRelatesTo {
    return new EvidenceReportRelatesTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceReportRelatesTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceReportRelatesTo) => Partial<IEvidenceReportRelatesTo>): EvidenceReportRelatesTo {
    const currentData = this.toJSON();
    return new EvidenceReportRelatesTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceReportRelatesTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceReportRelatesTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_REPORT_RELATES_TO_PROPERTIES);
    return result as IEvidenceReportRelatesTo;
  }

  /**
   * Create a deep clone of this EvidenceReportRelatesTo
   */
  clone(): EvidenceReportRelatesTo {
    return new EvidenceReportRelatesTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceReportRelatesTo
   */
  toString(): string {
    const parts: string[] = ['EvidenceReportRelatesTo'];
    return parts.join(', ');
  }
}
