import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  IElement,
  IEvidenceStatisticSampleSize,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceStatisticSampleSize */
const EVIDENCE_STATISTIC_SAMPLE_SIZE_PROPERTIES = [
  'description',
  '_description',
  'note',
  'numberOfStudies',
  '_numberOfStudies',
  'numberOfParticipants',
  '_numberOfParticipants',
  'knownDataCount',
  '_knownDataCount',
] as const;

/**
 * EvidenceStatisticSampleSize - Number of samples in the statistic
 *
 * @see https://hl7.org/fhir/R4/evidencestatisticsamplesize.html
 *
 * @example
 * const evidenceStatisticSampleSize = new EvidenceStatisticSampleSize({
 *   // ... properties
 * });
 */
export class EvidenceStatisticSampleSize extends BackboneElement implements IEvidenceStatisticSampleSize {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Textual description of sample size for statistic */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Footnote or explanatory note about the sample size */
  note?: IAnnotation[];

  /** Number of contributing studies */
  numberOfStudies?: number;

  /** Extension for numberOfStudies */
  _numberOfStudies?: IElement;

  /** Cumulative number of participants */
  numberOfParticipants?: number;

  /** Extension for numberOfParticipants */
  _numberOfParticipants?: IElement;

  /** Number of participants with known results for measured variables */
  knownDataCount?: number;

  /** Extension for knownDataCount */
  _knownDataCount?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceStatisticSampleSize>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_STATISTIC_SAMPLE_SIZE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceStatisticSampleSize from a JSON object
   */
  static fromJSON(json: IEvidenceStatisticSampleSize): EvidenceStatisticSampleSize {
    return new EvidenceStatisticSampleSize(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceStatisticSampleSize with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceStatisticSampleSize>): EvidenceStatisticSampleSize {
    return new EvidenceStatisticSampleSize({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceStatisticSampleSize by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceStatisticSampleSize) => Partial<IEvidenceStatisticSampleSize>): EvidenceStatisticSampleSize {
    const currentData = this.toJSON();
    return new EvidenceStatisticSampleSize({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceStatisticSampleSize)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceStatisticSampleSize {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_STATISTIC_SAMPLE_SIZE_PROPERTIES);
    return result as IEvidenceStatisticSampleSize;
  }

  /**
   * Create a deep clone of this EvidenceStatisticSampleSize
   */
  clone(): EvidenceStatisticSampleSize {
    return new EvidenceStatisticSampleSize(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceStatisticSampleSize
   */
  toString(): string {
    const parts: string[] = ['EvidenceStatisticSampleSize'];
    return parts.join(', ');
  }
}
