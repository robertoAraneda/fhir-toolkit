import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDetectedIssueEvidence,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DetectedIssueEvidence */
const DETECTED_ISSUE_EVIDENCE_PROPERTIES = [
  'code',
  'detail',
] as const;

/**
 * DetectedIssueEvidence - Supporting evidence
 *
 * @see https://hl7.org/fhir/R4/detectedissueevidence.html
 *
 * @example
 * const detectedIssueEvidence = new DetectedIssueEvidence({
 *   // ... properties
 * });
 */
export class DetectedIssueEvidence extends BackboneElement implements IDetectedIssueEvidence {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Manifestation */
  code?: ICodeableConcept[];

  /** Supporting information */
  detail?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDetectedIssueEvidence>) {
    super(data);
    if (data) {
      this.assignProps(data, DETECTED_ISSUE_EVIDENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DetectedIssueEvidence from a JSON object
   */
  static fromJSON(json: IDetectedIssueEvidence): DetectedIssueEvidence {
    return new DetectedIssueEvidence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DetectedIssueEvidence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDetectedIssueEvidence>): DetectedIssueEvidence {
    return new DetectedIssueEvidence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DetectedIssueEvidence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDetectedIssueEvidence) => Partial<IDetectedIssueEvidence>): DetectedIssueEvidence {
    const currentData = this.toJSON();
    return new DetectedIssueEvidence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDetectedIssueEvidence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDetectedIssueEvidence {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DETECTED_ISSUE_EVIDENCE_PROPERTIES);
    return result as IDetectedIssueEvidence;
  }

  /**
   * Create a deep clone of this DetectedIssueEvidence
   */
  clone(): DetectedIssueEvidence {
    return new DetectedIssueEvidence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DetectedIssueEvidence
   */
  toString(): string {
    const parts: string[] = ['DetectedIssueEvidence'];
    return parts.join(', ');
  }
}
