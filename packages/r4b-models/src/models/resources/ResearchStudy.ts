import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchStudy,
  IResearchStudyArm,
  IResearchStudyObjective,
  ResearchStudyStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ResearchStudy */
const RESEARCH_STUDY_PROPERTIES = [
  'identifier',
  'title',
  '_title',
  'protocol',
  'partOf',
  'status',
  '_status',
  'primaryPurposeType',
  'phase',
  'category',
  'focus',
  'condition',
  'contact',
  'relatedArtifact',
  'keyword',
  'location',
  'description',
  '_description',
  'enrollment',
  'period',
  'sponsor',
  'principalInvestigator',
  'site',
  'reasonStopped',
  'note',
  'arm',
  'objective',
] as const;

/**
 * ResearchStudy - A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 *
 * @see https://hl7.org/fhir/R4/researchstudy.html
 *
 * @example
 * const researchStudy = new ResearchStudy({
 *   // ... properties
 * });
 */
export class ResearchStudy extends DomainResource implements IResearchStudy {
  readonly resourceType = 'ResearchStudy' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for study */
  identifier?: IIdentifier[];

  /** Name for this study */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Steps followed in executing study */
  protocol?: IReference<'PlanDefinition'>[];

  /** Part of larger study */
  partOf?: IReference<'ResearchStudy'>[];

  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
  status: ResearchStudyStatusType;

  /** Extension for status */
  _status?: IElement;

  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: ICodeableConcept;

  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: ICodeableConcept;

  /** Classifications for the study */
  category?: ICodeableConcept[];

  /** Drugs, devices, etc. under study */
  focus?: ICodeableConcept[];

  /** Condition being studied */
  condition?: ICodeableConcept[];

  /** Contact details for the study */
  contact?: IContactDetail[];

  /** References and dependencies */
  relatedArtifact?: IRelatedArtifact[];

  /** Used to search for the study */
  keyword?: ICodeableConcept[];

  /** Geographic region(s) for study */
  location?: ICodeableConcept[];

  /** What this is study doing */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Inclusion & exclusion criteria */
  enrollment?: IReference<'Group'>[];

  /** When the study began and ended */
  period?: IPeriod;

  /** Organization that initiates and is legally responsible for the study */
  sponsor?: IReference<'Organization'>;

  /** Researcher who oversees multiple aspects of the study */
  principalInvestigator?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Facility where study activities are conducted */
  site?: IReference<'Location'>[];

  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  reasonStopped?: ICodeableConcept;

  /** Comments made about the study */
  note?: IAnnotation[];

  /** Defined path through the study for a subject */
  arm?: IResearchStudyArm[];

  /** A goal for the study */
  objective?: IResearchStudyObjective[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IResearchStudy>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_STUDY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchStudy from a JSON object
   */
  static fromJSON(json: IResearchStudy): ResearchStudy {
    return new ResearchStudy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchStudy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchStudy>): ResearchStudy {
    return new ResearchStudy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchStudy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchStudy) => Partial<IResearchStudy>): ResearchStudy {
    const currentData = this.toJSON();
    return new ResearchStudy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchStudy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchStudy {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RESEARCH_STUDY_PROPERTIES);
    return result as IResearchStudy;
  }

  /**
   * Create a deep clone of this ResearchStudy
   */
  clone(): ResearchStudy {
    return new ResearchStudy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchStudy
   */
  toString(): string {
    const parts: string[] = ['ResearchStudy'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
