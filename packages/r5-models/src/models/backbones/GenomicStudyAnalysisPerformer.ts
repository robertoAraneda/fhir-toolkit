import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisPerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GenomicStudyAnalysisPerformer */
const GENOMIC_STUDY_ANALYSIS_PERFORMER_PROPERTIES = [
  'actor',
  'role',
] as const;

/**
 * GenomicStudyAnalysisPerformer - Performer for the analysis event
 *
 * @see https://hl7.org/fhir/R5/genomicstudyanalysisperformer.html
 *
 * @example
 * const genomicStudyAnalysisPerformer = new GenomicStudyAnalysisPerformer({
 *   // ... properties
 * });
 */
export class GenomicStudyAnalysisPerformer extends BackboneElement implements IGenomicStudyAnalysisPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The organization, healthcare professional, or others who participated in performing this analysis */
  actor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device'>;

  /** Role of the actor for this analysis */
  role?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGenomicStudyAnalysisPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, GENOMIC_STUDY_ANALYSIS_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GenomicStudyAnalysisPerformer from a JSON object
   */
  static fromJSON(json: IGenomicStudyAnalysisPerformer): GenomicStudyAnalysisPerformer {
    return new GenomicStudyAnalysisPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GenomicStudyAnalysisPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGenomicStudyAnalysisPerformer>): GenomicStudyAnalysisPerformer {
    return new GenomicStudyAnalysisPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GenomicStudyAnalysisPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGenomicStudyAnalysisPerformer) => Partial<IGenomicStudyAnalysisPerformer>): GenomicStudyAnalysisPerformer {
    const currentData = this.toJSON();
    return new GenomicStudyAnalysisPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGenomicStudyAnalysisPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGenomicStudyAnalysisPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GENOMIC_STUDY_ANALYSIS_PERFORMER_PROPERTIES);
    return result as IGenomicStudyAnalysisPerformer;
  }

  /**
   * Create a deep clone of this GenomicStudyAnalysisPerformer
   */
  clone(): GenomicStudyAnalysisPerformer {
    return new GenomicStudyAnalysisPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GenomicStudyAnalysisPerformer
   */
  toString(): string {
    const parts: string[] = ['GenomicStudyAnalysisPerformer'];
    return parts.join(', ');
  }
}
