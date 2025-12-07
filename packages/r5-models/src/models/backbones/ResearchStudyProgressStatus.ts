import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPeriod,
  IResearchStudyProgressStatus,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudyProgressStatus */
const RESEARCH_STUDY_PROGRESS_STATUS_PROPERTIES = [
  'state',
  'actual',
  '_actual',
  'period',
] as const;

/**
 * ResearchStudyProgressStatus - Status of study with time for that status
 *
 * @see https://hl7.org/fhir/R4/researchstudyprogressstatus.html
 *
 * @example
 * const researchStudyProgressStatus = new ResearchStudyProgressStatus({
 *   // ... properties
 * });
 */
export class ResearchStudyProgressStatus extends BackboneElement implements IResearchStudyProgressStatus {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for status or state (e.g. recruitment status) */
  state: ICodeableConcept;

  /** Actual if true else anticipated */
  actual?: boolean;

  /** Extension for actual */
  _actual?: IElement;

  /** Date range */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyProgressStatus>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_PROGRESS_STATUS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyProgressStatus from a JSON object
   */
  static fromJSON(json: IResearchStudyProgressStatus): ResearchStudyProgressStatus {
    return new ResearchStudyProgressStatus(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyProgressStatus with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyProgressStatus>): ResearchStudyProgressStatus {
    return new ResearchStudyProgressStatus({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyProgressStatus by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyProgressStatus) => Partial<IResearchStudyProgressStatus>): ResearchStudyProgressStatus {
    const currentData = this.toJSON();
    return new ResearchStudyProgressStatus({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyProgressStatus)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyProgressStatus {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_PROGRESS_STATUS_PROPERTIES);
    return result as IResearchStudyProgressStatus;
  }

  /**
   * Create a deep clone of this ResearchStudyProgressStatus
   */
  clone(): ResearchStudyProgressStatus {
    return new ResearchStudyProgressStatus(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyProgressStatus
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyProgressStatus'];
    return parts.join(', ');
  }
}
