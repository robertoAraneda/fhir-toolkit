import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPeriod,
  IReference,
  IResearchStudyAssociatedParty,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudyAssociatedParty */
const RESEARCH_STUDY_ASSOCIATED_PARTY_PROPERTIES = [
  'name',
  '_name',
  'role',
  'period',
  'classifier',
  'party',
] as const;

/**
 * ResearchStudyAssociatedParty - Sponsors, collaborators, and other parties
 *
 * @see https://hl7.org/fhir/R5/researchstudyassociatedparty.html
 *
 * @example
 * const researchStudyAssociatedParty = new ResearchStudyAssociatedParty({
 *   // ... properties
 * });
 */
export class ResearchStudyAssociatedParty extends BackboneElement implements IResearchStudyAssociatedParty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of associated party */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair */
  role: ICodeableConcept;

  /** When active in the role */
  period?: IPeriod[];

  /** nih | fda | government | nonprofit | academic | industry */
  classifier?: ICodeableConcept[];

  /** Individual or organization associated with study (use practitionerRole to specify their organisation) */
  party?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudyAssociatedParty>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_ASSOCIATED_PARTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudyAssociatedParty from a JSON object
   */
  static fromJSON(json: IResearchStudyAssociatedParty): ResearchStudyAssociatedParty {
    return new ResearchStudyAssociatedParty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudyAssociatedParty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudyAssociatedParty>): ResearchStudyAssociatedParty {
    return new ResearchStudyAssociatedParty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudyAssociatedParty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudyAssociatedParty) => Partial<IResearchStudyAssociatedParty>): ResearchStudyAssociatedParty {
    const currentData = this.toJSON();
    return new ResearchStudyAssociatedParty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudyAssociatedParty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudyAssociatedParty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_ASSOCIATED_PARTY_PROPERTIES);
    return result as IResearchStudyAssociatedParty;
  }

  /**
   * Create a deep clone of this ResearchStudyAssociatedParty
   */
  clone(): ResearchStudyAssociatedParty {
    return new ResearchStudyAssociatedParty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudyAssociatedParty
   */
  toString(): string {
    const parts: string[] = ['ResearchStudyAssociatedParty'];
    return parts.join(', ');
  }
}
