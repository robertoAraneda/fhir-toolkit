import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMolecularSequenceQualityRoc,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MolecularSequenceQualityRoc */
const MOLECULAR_SEQUENCE_QUALITY_ROC_PROPERTIES = [
  'score',
  '_score',
  'numTP',
  '_numTP',
  'numFP',
  '_numFP',
  'numFN',
  '_numFN',
  'precision',
  '_precision',
  'sensitivity',
  '_sensitivity',
  'fMeasure',
  '_fMeasure',
] as const;

/**
 * MolecularSequenceQualityRoc - Receiver Operator Characteristic (ROC) Curve
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencequalityroc.html
 *
 * @example
 * const molecularSequenceQualityRoc = new MolecularSequenceQualityRoc({
 *   // ... properties
 * });
 */
export class MolecularSequenceQualityRoc extends BackboneElement implements IMolecularSequenceQualityRoc {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Genotype quality score */
  score?: number[];

  /** Extension for score */
  _score?: IElement;

  /** Roc score true positive numbers */
  numTP?: number[];

  /** Extension for numTP */
  _numTP?: IElement;

  /** Roc score false positive numbers */
  numFP?: number[];

  /** Extension for numFP */
  _numFP?: IElement;

  /** Roc score false negative numbers */
  numFN?: number[];

  /** Extension for numFN */
  _numFN?: IElement;

  /** Precision of the GQ score */
  precision?: number[];

  /** Extension for precision */
  _precision?: IElement;

  /** Sensitivity of the GQ score */
  sensitivity?: number[];

  /** Extension for sensitivity */
  _sensitivity?: IElement;

  /** FScore of the GQ score */
  fMeasure?: number[];

  /** Extension for fMeasure */
  _fMeasure?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceQualityRoc>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_QUALITY_ROC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceQualityRoc from a JSON object
   */
  static fromJSON(json: IMolecularSequenceQualityRoc): MolecularSequenceQualityRoc {
    return new MolecularSequenceQualityRoc(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceQualityRoc with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceQualityRoc>): MolecularSequenceQualityRoc {
    return new MolecularSequenceQualityRoc({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceQualityRoc by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceQualityRoc) => Partial<IMolecularSequenceQualityRoc>): MolecularSequenceQualityRoc {
    const currentData = this.toJSON();
    return new MolecularSequenceQualityRoc({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceQualityRoc)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceQualityRoc {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_QUALITY_ROC_PROPERTIES);
    return result as IMolecularSequenceQualityRoc;
  }

  /**
   * Create a deep clone of this MolecularSequenceQualityRoc
   */
  clone(): MolecularSequenceQualityRoc {
    return new MolecularSequenceQualityRoc(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceQualityRoc
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceQualityRoc'];
    return parts.join(', ');
  }
}
