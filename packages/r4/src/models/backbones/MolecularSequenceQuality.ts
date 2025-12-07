import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMolecularSequenceQuality,
  IMolecularSequenceQualityRoc,
  IQuantity,
  QualityTypeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MolecularSequenceQuality */
const MOLECULAR_SEQUENCE_QUALITY_PROPERTIES = [
  'type',
  '_type',
  'standardSequence',
  'start',
  '_start',
  'end',
  '_end',
  'score',
  'method',
  'truthTP',
  '_truthTP',
  'queryTP',
  '_queryTP',
  'truthFN',
  '_truthFN',
  'queryFP',
  '_queryFP',
  'gtFP',
  '_gtFP',
  'precision',
  '_precision',
  'recall',
  '_recall',
  'fScore',
  '_fScore',
  'roc',
] as const;

/**
 * MolecularSequenceQuality - An set of value as quality of sequence
 *
 * @see https://hl7.org/fhir/R4/molecularsequencequality.html
 *
 * @example
 * const molecularSequenceQuality = new MolecularSequenceQuality({
 *   // ... properties
 * });
 */
export class MolecularSequenceQuality extends BackboneElement implements IMolecularSequenceQuality {

  // ============================================================================
  // Properties
  // ============================================================================

  /** indel | snp | unknown */
  type: QualityTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Standard sequence for comparison */
  standardSequence?: ICodeableConcept;

  /** Start position of the sequence */
  start?: number;

  /** Extension for start */
  _start?: IElement;

  /** End position of the sequence */
  end?: number;

  /** Extension for end */
  _end?: IElement;

  /** Quality score for the comparison */
  score?: IQuantity;

  /** Method to get quality */
  method?: ICodeableConcept;

  /** True positives from the perspective of the truth data */
  truthTP?: number;

  /** Extension for truthTP */
  _truthTP?: IElement;

  /** True positives from the perspective of the query data */
  queryTP?: number;

  /** Extension for queryTP */
  _queryTP?: IElement;

  /** False negatives */
  truthFN?: number;

  /** Extension for truthFN */
  _truthFN?: IElement;

  /** False positives */
  queryFP?: number;

  /** Extension for queryFP */
  _queryFP?: IElement;

  /** False positives where the non-REF alleles in the Truth and Query Call Sets match */
  gtFP?: number;

  /** Extension for gtFP */
  _gtFP?: IElement;

  /** Precision of comparison */
  precision?: number;

  /** Extension for precision */
  _precision?: IElement;

  /** Recall of comparison */
  recall?: number;

  /** Extension for recall */
  _recall?: IElement;

  /** F-score */
  fScore?: number;

  /** Extension for fScore */
  _fScore?: IElement;

  /** Receiver Operator Characteristic (ROC) Curve */
  roc?: IMolecularSequenceQualityRoc;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceQuality>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_QUALITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceQuality from a JSON object
   */
  static fromJSON(json: IMolecularSequenceQuality): MolecularSequenceQuality {
    return new MolecularSequenceQuality(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceQuality with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceQuality>): MolecularSequenceQuality {
    return new MolecularSequenceQuality({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceQuality by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceQuality) => Partial<IMolecularSequenceQuality>): MolecularSequenceQuality {
    const currentData = this.toJSON();
    return new MolecularSequenceQuality({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceQuality)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceQuality {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_QUALITY_PROPERTIES);
    return result as IMolecularSequenceQuality;
  }

  /**
   * Create a deep clone of this MolecularSequenceQuality
   */
  clone(): MolecularSequenceQuality {
    return new MolecularSequenceQuality(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceQuality
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceQuality'];
    return parts.join(', ');
  }
}
