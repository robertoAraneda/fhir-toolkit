import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisInput,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GenomicStudyAnalysisInput */
const GENOMIC_STUDY_ANALYSIS_INPUT_PROPERTIES = [
  'file',
  'type',
  'generatedByIdentifier',
  'generatedByReference',
] as const;

/**
 * GenomicStudyAnalysisInput - Inputs for the analysis event
 *
 * @see https://hl7.org/fhir/R5/genomicstudyanalysisinput.html
 *
 * @example
 * const genomicStudyAnalysisInput = new GenomicStudyAnalysisInput({
 *   // ... properties
 * });
 */
export class GenomicStudyAnalysisInput extends BackboneElement implements IGenomicStudyAnalysisInput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** File containing input data */
  file?: IReference<'DocumentReference'>;

  /** Type of input data (e.g., BAM, CRAM, or FASTA) */
  type?: ICodeableConcept;

  /** The analysis event or other GenomicStudy that generated this input file */
  generatedByIdentifier?: IIdentifier;

  /** The analysis event or other GenomicStudy that generated this input file */
  generatedByReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGenomicStudyAnalysisInput>) {
    super(data);
    if (data) {
      this.assignProps(data, GENOMIC_STUDY_ANALYSIS_INPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GenomicStudyAnalysisInput from a JSON object
   */
  static fromJSON(json: IGenomicStudyAnalysisInput): GenomicStudyAnalysisInput {
    return new GenomicStudyAnalysisInput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GenomicStudyAnalysisInput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGenomicStudyAnalysisInput>): GenomicStudyAnalysisInput {
    return new GenomicStudyAnalysisInput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GenomicStudyAnalysisInput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGenomicStudyAnalysisInput) => Partial<IGenomicStudyAnalysisInput>): GenomicStudyAnalysisInput {
    const currentData = this.toJSON();
    return new GenomicStudyAnalysisInput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGenomicStudyAnalysisInput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGenomicStudyAnalysisInput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GENOMIC_STUDY_ANALYSIS_INPUT_PROPERTIES);
    return result as IGenomicStudyAnalysisInput;
  }

  /**
   * Create a deep clone of this GenomicStudyAnalysisInput
   */
  clone(): GenomicStudyAnalysisInput {
    return new GenomicStudyAnalysisInput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GenomicStudyAnalysisInput
   */
  toString(): string {
    const parts: string[] = ['GenomicStudyAnalysisInput'];
    return parts.join(', ');
  }
}
