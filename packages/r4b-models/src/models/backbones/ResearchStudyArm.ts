import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IResearchStudyArm,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ResearchStudyArm */
const RESEARCH_STUDY_ARM_PROPERTIES = [
  'name',
  '_name',
  'type',
  'description',
  '_description',
] as const;

/**
 * ResearchStudyArm - Defined path through the study for a subject
 *
 * @see https://hl7.org/fhir/R4/researchstudyarm.html
 *
 * @example
 * const researchStudyArm = new ResearchStudyArm({
 *   // ... properties
 * });
 */
export class ResearchStudyArm extends BackboneElement implements IResearchStudyArm {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for study arm */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Categorization of study arm */
  type?: ICodeableConcept;

  /** Short explanation of study path */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyArm>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_ARM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyArm from a JSON object
   */
  static fromJSON(json: IResearchStudyArm): ResearchStudyArm {
    return new ResearchStudyArm(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyArm with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyArm>): ResearchStudyArm {
    return new ResearchStudyArm({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyArm by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyArm) => Partial<IResearchStudyArm>): ResearchStudyArm {
    const currentData = this.toJSON();
    return new ResearchStudyArm({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyArm)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyArm {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_ARM_PROPERTIES);
    return result as IResearchStudyArm;
  }

  /**
   * Create a deep clone of this ResearchStudyArm
   */
  clone(): ResearchStudyArm {
    return new ResearchStudyArm(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyArm
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyArm'];
    return parts.join(', ');
  }
}
