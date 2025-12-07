import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IResearchStudyObjective,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ResearchStudyObjective */
const RESEARCH_STUDY_OBJECTIVE_PROPERTIES = [
  'name',
  '_name',
  'type',
] as const;

/**
 * ResearchStudyObjective - A goal for the study
 *
 * @see https://hl7.org/fhir/R4/researchstudyobjective.html
 *
 * @example
 * const researchStudyObjective = new ResearchStudyObjective({
 *   // ... properties
 * });
 */
export class ResearchStudyObjective extends BackboneElement implements IResearchStudyObjective {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for the objective */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** primary | secondary | exploratory */
  type?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyObjective>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_OBJECTIVE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyObjective from a JSON object
   */
  static fromJSON(json: IResearchStudyObjective): ResearchStudyObjective {
    return new ResearchStudyObjective(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyObjective with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyObjective>): ResearchStudyObjective {
    return new ResearchStudyObjective({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyObjective by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyObjective) => Partial<IResearchStudyObjective>): ResearchStudyObjective {
    const currentData = this.toJSON();
    return new ResearchStudyObjective({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyObjective)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyObjective {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_OBJECTIVE_PROPERTIES);
    return result as IResearchStudyObjective;
  }

  /**
   * Create a deep clone of this ResearchStudyObjective
   */
  clone(): ResearchStudyObjective {
    return new ResearchStudyObjective(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyObjective
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyObjective'];
    return parts.join(', ');
  }
}
