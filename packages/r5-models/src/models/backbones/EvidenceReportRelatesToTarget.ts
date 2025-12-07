import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IEvidenceReportRelatesToTarget,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceReportRelatesToTarget */
const EVIDENCE_REPORT_RELATES_TO_TARGET_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'display',
  '_display',
  'resource',
] as const;

/**
 * EvidenceReportRelatesToTarget - Target of the relationship
 *
 * @see https://hl7.org/fhir/R4/evidencereportrelatestotarget.html
 *
 * @example
 * const evidenceReportRelatesToTarget = new EvidenceReportRelatesToTarget({
 *   // ... properties
 * });
 */
export class EvidenceReportRelatesToTarget extends BackboneElement implements IEvidenceReportRelatesToTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Target of the relationship URL */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Target of the relationship Identifier */
  identifier?: IIdentifier;

  /** Target of the relationship Display */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Target of the relationship Resource reference */
  resource?: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceReportRelatesToTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_REPORT_RELATES_TO_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceReportRelatesToTarget from a JSON object
   */
  static fromJSON(json: IEvidenceReportRelatesToTarget): EvidenceReportRelatesToTarget {
    return new EvidenceReportRelatesToTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceReportRelatesToTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceReportRelatesToTarget>): EvidenceReportRelatesToTarget {
    return new EvidenceReportRelatesToTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceReportRelatesToTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceReportRelatesToTarget) => Partial<IEvidenceReportRelatesToTarget>): EvidenceReportRelatesToTarget {
    const currentData = this.toJSON();
    return new EvidenceReportRelatesToTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceReportRelatesToTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceReportRelatesToTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_REPORT_RELATES_TO_TARGET_PROPERTIES);
    return result as IEvidenceReportRelatesToTarget;
  }

  /**
   * Create a deep clone of this EvidenceReportRelatesToTarget
   */
  clone(): EvidenceReportRelatesToTarget {
    return new EvidenceReportRelatesToTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceReportRelatesToTarget
   */
  toString(): string {
    const parts: string[] = ['EvidenceReportRelatesToTarget'];
    return parts.join(', ');
  }
}
