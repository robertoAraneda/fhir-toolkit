import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  IResearchStudyComparisonGroup,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudyComparisonGroup */
const RESEARCH_STUDY_COMPARISON_GROUP_PROPERTIES = [
  'linkId',
  '_linkId',
  'name',
  '_name',
  'type',
  'description',
  '_description',
  'intendedExposure',
  'observedGroup',
] as const;

/**
 * ResearchStudyComparisonGroup - Defined path through the study for a subject
 *
 * @see https://hl7.org/fhir/R5/researchstudycomparisongroup.html
 *
 * @example
 * const researchStudyComparisonGroup = new ResearchStudyComparisonGroup({
 *   // ... properties
 * });
 */
export class ResearchStudyComparisonGroup extends BackboneElement implements IResearchStudyComparisonGroup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily */
  linkId?: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** Label for study comparisonGroup */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Categorization of study comparisonGroup */
  type?: ICodeableConcept;

  /** Short explanation of study path */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Interventions or exposures in this comparisonGroup or cohort */
  intendedExposure?: IReference<'EvidenceVariable'>[];

  /** Group of participants who were enrolled in study comparisonGroup */
  observedGroup?: IReference<'Group'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyComparisonGroup>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_COMPARISON_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyComparisonGroup from a JSON object
   */
  static fromJSON(json: IResearchStudyComparisonGroup): ResearchStudyComparisonGroup {
    return new ResearchStudyComparisonGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyComparisonGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyComparisonGroup>): ResearchStudyComparisonGroup {
    return new ResearchStudyComparisonGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyComparisonGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyComparisonGroup) => Partial<IResearchStudyComparisonGroup>): ResearchStudyComparisonGroup {
    const currentData = this.toJSON();
    return new ResearchStudyComparisonGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyComparisonGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyComparisonGroup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_COMPARISON_GROUP_PROPERTIES);
    return result as IResearchStudyComparisonGroup;
  }

  /**
   * Create a deep clone of this ResearchStudyComparisonGroup
   */
  clone(): ResearchStudyComparisonGroup {
    return new ResearchStudyComparisonGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyComparisonGroup
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyComparisonGroup'];
    return parts.join(', ');
  }
}
