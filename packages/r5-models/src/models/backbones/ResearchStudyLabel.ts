import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IResearchStudyLabel,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudyLabel */
const RESEARCH_STUDY_LABEL_PROPERTIES = [
  'type',
  'value',
  '_value',
] as const;

/**
 * ResearchStudyLabel - Additional names for the study
 *
 * @see https://hl7.org/fhir/R5/researchstudylabel.html
 *
 * @example
 * const researchStudyLabel = new ResearchStudyLabel({
 *   // ... properties
 * });
 */
export class ResearchStudyLabel extends BackboneElement implements IResearchStudyLabel {

  // ============================================================================
  // Properties
  // ============================================================================

  /** primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid */
  type?: ICodeableConcept;

  /** The name */
  value?: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyLabel>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_LABEL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyLabel from a JSON object
   */
  static fromJSON(json: IResearchStudyLabel): ResearchStudyLabel {
    return new ResearchStudyLabel(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyLabel with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyLabel>): ResearchStudyLabel {
    return new ResearchStudyLabel({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyLabel by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyLabel) => Partial<IResearchStudyLabel>): ResearchStudyLabel {
    const currentData = this.toJSON();
    return new ResearchStudyLabel({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyLabel)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyLabel {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_LABEL_PROPERTIES);
    return result as IResearchStudyLabel;
  }

  /**
   * Create a deep clone of this ResearchStudyLabel
   */
  clone(): ResearchStudyLabel {
    return new ResearchStudyLabel(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyLabel
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyLabel'];
    return parts.join(', ');
  }
}
