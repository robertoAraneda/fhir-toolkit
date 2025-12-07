import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IResearchSubjectProgress,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchSubjectProgress */
const RESEARCH_SUBJECT_PROGRESS_PROPERTIES = [
  'type',
  'subjectState',
  'milestone',
  'reason',
  'startDate',
  '_startDate',
  'endDate',
  '_endDate',
] as const;

/**
 * ResearchSubjectProgress - Subject status
 *
 * @see https://hl7.org/fhir/R4/researchsubjectprogress.html
 *
 * @example
 * const researchSubjectProgress = new ResearchSubjectProgress({
 *   // ... properties
 * });
 */
export class ResearchSubjectProgress extends BackboneElement implements IResearchSubjectProgress {

  // ============================================================================
  // Properties
  // ============================================================================

  /** state | milestone */
  type?: ICodeableConcept;

  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
  subjectState?: ICodeableConcept;

  /** SignedUp | Screened | Randomized */
  milestone?: ICodeableConcept;

  /** State change reason */
  reason?: ICodeableConcept;

  /** State change date */
  startDate?: string;

  /** Extension for startDate */
  _startDate?: IElement;

  /** State change date */
  endDate?: string;

  /** Extension for endDate */
  _endDate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchSubjectProgress>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_SUBJECT_PROGRESS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchSubjectProgress from a JSON object
   */
  static fromJSON(json: IResearchSubjectProgress): ResearchSubjectProgress {
    return new ResearchSubjectProgress(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchSubjectProgress with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchSubjectProgress>): ResearchSubjectProgress {
    return new ResearchSubjectProgress({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchSubjectProgress by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchSubjectProgress) => Partial<IResearchSubjectProgress>): ResearchSubjectProgress {
    const currentData = this.toJSON();
    return new ResearchSubjectProgress({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchSubjectProgress)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchSubjectProgress {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_SUBJECT_PROGRESS_PROPERTIES);
    return result as IResearchSubjectProgress;
  }

  /**
   * Create a deep clone of this ResearchSubjectProgress
   */
  clone(): ResearchSubjectProgress {
    return new ResearchSubjectProgress(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchSubjectProgress
   */
  toString(): string {
    const parts: string[] = ['ResearchSubjectProgress'];
    return parts.join(', ');
  }
}
