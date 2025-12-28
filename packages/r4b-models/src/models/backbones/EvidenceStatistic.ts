import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IEvidenceStatistic,
  IEvidenceStatisticAttributeEstimate,
  IEvidenceStatisticModelCharacteristic,
  IEvidenceStatisticSampleSize,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceStatistic */
const EVIDENCE_STATISTIC_PROPERTIES = [
  'description',
  '_description',
  'note',
  'statisticType',
  'category',
  'quantity',
  'numberOfEvents',
  '_numberOfEvents',
  'numberAffected',
  '_numberAffected',
  'sampleSize',
  'attributeEstimate',
  'modelCharacteristic',
] as const;

/**
 * EvidenceStatistic - Values and parameters for a single statistic
 *
 * @see https://hl7.org/fhir/R4B/evidencestatistic.html
 *
 * @example
 * const evidenceStatistic = new EvidenceStatistic({
 *   // ... properties
 * });
 */
export class EvidenceStatistic extends BackboneElement implements IEvidenceStatistic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of content */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Footnotes and/or explanatory notes */
  note?: IAnnotation[];

  /** Type of statistic, eg relative risk */
  statisticType?: ICodeableConcept;

  /** Associated category for categorical variable */
  category?: ICodeableConcept;

  /** Statistic value */
  quantity?: IQuantity;

  /** The number of events associated with the statistic */
  numberOfEvents?: number;

  /** Extension for numberOfEvents */
  _numberOfEvents?: IElement;

  /** The number of participants affected */
  numberAffected?: number;

  /** Extension for numberAffected */
  _numberAffected?: IElement;

  /** Number of samples in the statistic */
  sampleSize?: IEvidenceStatisticSampleSize;

  /** An attribute of the Statistic */
  attributeEstimate?: IEvidenceStatisticAttributeEstimate[];

  /** An aspect of the statistical model */
  modelCharacteristic?: IEvidenceStatisticModelCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceStatistic>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_STATISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceStatistic from a JSON object
   */
  static fromJSON(json: IEvidenceStatistic): EvidenceStatistic {
    return new EvidenceStatistic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceStatistic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceStatistic>): EvidenceStatistic {
    return new EvidenceStatistic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceStatistic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceStatistic) => Partial<IEvidenceStatistic>): EvidenceStatistic {
    const currentData = this.toJSON();
    return new EvidenceStatistic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceStatistic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceStatistic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_STATISTIC_PROPERTIES);
    return result as IEvidenceStatistic;
  }

  /**
   * Create a deep clone of this EvidenceStatistic
   */
  clone(): EvidenceStatistic {
    return new EvidenceStatistic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceStatistic
   */
  toString(): string {
    const parts: string[] = ['EvidenceStatistic'];
    return parts.join(', ');
  }
}
