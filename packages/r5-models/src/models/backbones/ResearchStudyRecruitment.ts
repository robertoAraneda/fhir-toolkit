import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  IResearchStudyRecruitment,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudyRecruitment */
const RESEARCH_STUDY_RECRUITMENT_PROPERTIES = [
  'targetNumber',
  '_targetNumber',
  'actualNumber',
  '_actualNumber',
  'eligibility',
  'actualGroup',
] as const;

/**
 * ResearchStudyRecruitment - Target or actual group of participants enrolled in study
 *
 * @see https://hl7.org/fhir/R4/researchstudyrecruitment.html
 *
 * @example
 * const researchStudyRecruitment = new ResearchStudyRecruitment({
 *   // ... properties
 * });
 */
export class ResearchStudyRecruitment extends BackboneElement implements IResearchStudyRecruitment {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Estimated total number of participants to be enrolled */
  targetNumber?: number;

  /** Extension for targetNumber */
  _targetNumber?: IElement;

  /** Actual total number of participants enrolled in study */
  actualNumber?: number;

  /** Extension for actualNumber */
  _actualNumber?: IElement;

  /** Inclusion and exclusion criteria */
  eligibility?: IReference<'Group' | 'EvidenceVariable'>;

  /** Group of participants who were enrolled in study */
  actualGroup?: IReference<'Group'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyRecruitment>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_RECRUITMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyRecruitment from a JSON object
   */
  static fromJSON(json: IResearchStudyRecruitment): ResearchStudyRecruitment {
    return new ResearchStudyRecruitment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyRecruitment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyRecruitment>): ResearchStudyRecruitment {
    return new ResearchStudyRecruitment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyRecruitment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyRecruitment) => Partial<IResearchStudyRecruitment>): ResearchStudyRecruitment {
    const currentData = this.toJSON();
    return new ResearchStudyRecruitment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyRecruitment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyRecruitment {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_RECRUITMENT_PROPERTIES);
    return result as IResearchStudyRecruitment;
  }

  /**
   * Create a deep clone of this ResearchStudyRecruitment
   */
  clone(): ResearchStudyRecruitment {
    return new ResearchStudyRecruitment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyRecruitment
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyRecruitment'];
    return parts.join(', ');
  }
}
