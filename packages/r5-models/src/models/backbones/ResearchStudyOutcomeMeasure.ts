import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  IResearchStudyOutcomeMeasure,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudyOutcomeMeasure */
const RESEARCH_STUDY_OUTCOME_MEASURE_PROPERTIES = [
  'name',
  '_name',
  'type',
  'description',
  '_description',
  'reference',
] as const;

/**
 * ResearchStudyOutcomeMeasure - A variable measured during the study
 *
 * @see https://hl7.org/fhir/R4/researchstudyoutcomemeasure.html
 *
 * @example
 * const researchStudyOutcomeMeasure = new ResearchStudyOutcomeMeasure({
 *   // ... properties
 * });
 */
export class ResearchStudyOutcomeMeasure extends BackboneElement implements IResearchStudyOutcomeMeasure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for the outcome */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** primary | secondary | exploratory */
  type?: ICodeableConcept[];

  /** Description of the outcome */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Structured outcome definition */
  reference?: IReference<'EvidenceVariable'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyOutcomeMeasure>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_OUTCOME_MEASURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyOutcomeMeasure from a JSON object
   */
  static fromJSON(json: IResearchStudyOutcomeMeasure): ResearchStudyOutcomeMeasure {
    return new ResearchStudyOutcomeMeasure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyOutcomeMeasure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyOutcomeMeasure>): ResearchStudyOutcomeMeasure {
    return new ResearchStudyOutcomeMeasure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyOutcomeMeasure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyOutcomeMeasure) => Partial<IResearchStudyOutcomeMeasure>): ResearchStudyOutcomeMeasure {
    const currentData = this.toJSON();
    return new ResearchStudyOutcomeMeasure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyOutcomeMeasure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyOutcomeMeasure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_OUTCOME_MEASURE_PROPERTIES);
    return result as IResearchStudyOutcomeMeasure;
  }

  /**
   * Create a deep clone of this ResearchStudyOutcomeMeasure
   */
  clone(): ResearchStudyOutcomeMeasure {
    return new ResearchStudyOutcomeMeasure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyOutcomeMeasure
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyOutcomeMeasure'];
    return parts.join(', ');
  }
}
