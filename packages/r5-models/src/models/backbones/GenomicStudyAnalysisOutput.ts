import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisOutput,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GenomicStudyAnalysisOutput */
const GENOMIC_STUDY_ANALYSIS_OUTPUT_PROPERTIES = [
  'file',
  'type',
] as const;

/**
 * GenomicStudyAnalysisOutput - Outputs for the analysis event
 *
 * @see https://hl7.org/fhir/R4/genomicstudyanalysisoutput.html
 *
 * @example
 * const genomicStudyAnalysisOutput = new GenomicStudyAnalysisOutput({
 *   // ... properties
 * });
 */
export class GenomicStudyAnalysisOutput extends BackboneElement implements IGenomicStudyAnalysisOutput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** File containing output data */
  file?: IReference<'DocumentReference'>;

  /** Type of output data (e.g., VCF, MAF, or BAM) */
  type?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGenomicStudyAnalysisOutput>) {
    super(data);
    if (data) {
      this.assignProps(data, GENOMIC_STUDY_ANALYSIS_OUTPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GenomicStudyAnalysisOutput from a JSON object
   */
  static fromJSON(json: IGenomicStudyAnalysisOutput): GenomicStudyAnalysisOutput {
    return new GenomicStudyAnalysisOutput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GenomicStudyAnalysisOutput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGenomicStudyAnalysisOutput>): GenomicStudyAnalysisOutput {
    return new GenomicStudyAnalysisOutput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GenomicStudyAnalysisOutput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGenomicStudyAnalysisOutput) => Partial<IGenomicStudyAnalysisOutput>): GenomicStudyAnalysisOutput {
    const currentData = this.toJSON();
    return new GenomicStudyAnalysisOutput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGenomicStudyAnalysisOutput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGenomicStudyAnalysisOutput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GENOMIC_STUDY_ANALYSIS_OUTPUT_PROPERTIES);
    return result as IGenomicStudyAnalysisOutput;
  }

  /**
   * Create a deep clone of this GenomicStudyAnalysisOutput
   */
  clone(): GenomicStudyAnalysisOutput {
    return new GenomicStudyAnalysisOutput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GenomicStudyAnalysisOutput
   */
  toString(): string {
    const parts: string[] = ['GenomicStudyAnalysisOutput'];
    return parts.join(', ');
  }
}
