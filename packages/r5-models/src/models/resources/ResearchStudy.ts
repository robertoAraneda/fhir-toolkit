import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchStudy,
  IResearchStudyAssociatedParty,
  IResearchStudyComparisonGroup,
  IResearchStudyLabel,
  IResearchStudyObjective,
  IResearchStudyOutcomeMeasure,
  IResearchStudyProgressStatus,
  IResearchStudyRecruitment,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ResearchStudy */
const RESEARCH_STUDY_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'label',
  'protocol',
  'partOf',
  'relatedArtifact',
  'date',
  '_date',
  'status',
  '_status',
  'primaryPurposeType',
  'phase',
  'studyDesign',
  'focus',
  'condition',
  'keyword',
  'region',
  'descriptionSummary',
  '_descriptionSummary',
  'description',
  '_description',
  'period',
  'site',
  'note',
  'classifier',
  'associatedParty',
  'progressStatus',
  'whyStopped',
  'recruitment',
  'comparisonGroup',
  'objective',
  'outcomeMeasure',
  'result',
] as const;

/**
 * ResearchStudy - A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 *
 * @see https://hl7.org/fhir/R4/researchstudy.html
 *
 * @example
 * const researchStudy = new ResearchStudy({
 *   resourceType: 'ResearchStudy',
 *   // ... properties
 * });
 */
export class ResearchStudy extends DomainResource implements IResearchStudy {
  readonly resourceType = 'ResearchStudy' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this study resource */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business Identifier for study */
  identifier?: IIdentifier[];

  /** The business version for the study record */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this study (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Human readable name of the study */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Additional names for the study */
  label?: IResearchStudyLabel[];

  /** Steps followed in executing study */
  protocol?: IReference<'PlanDefinition'>[];

  /** Part of larger study */
  partOf?: IReference<'ResearchStudy'>[];

  /** References, URLs, and attachments */
  relatedArtifact?: IRelatedArtifact[];

  /** Date the resource last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: ICodeableConcept;

  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: ICodeableConcept;

  /** Classifications of the study design characteristics */
  studyDesign?: ICodeableConcept[];

  /** Drugs, devices, etc. under study */
  focus?: ICodeableReference[];

  /** Condition being studied */
  condition?: ICodeableConcept[];

  /** Used to search for the study */
  keyword?: ICodeableConcept[];

  /** Geographic area for the study */
  region?: ICodeableConcept[];

  /** Brief text explaining the study */
  descriptionSummary?: string;

  /** Extension for descriptionSummary */
  _descriptionSummary?: IElement;

  /** Detailed narrative of the study */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** When the study began and ended */
  period?: IPeriod;

  /** Facility where study activities are conducted */
  site?: IReference<'Location' | 'ResearchStudy' | 'Organization'>[];

  /** Comments made about the study */
  note?: IAnnotation[];

  /** Classification for the study */
  classifier?: ICodeableConcept[];

  /** Sponsors, collaborators, and other parties */
  associatedParty?: IResearchStudyAssociatedParty[];

  /** Status of study with time for that status */
  progressStatus?: IResearchStudyProgressStatus[];

  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  whyStopped?: ICodeableConcept;

  /** Target or actual group of participants enrolled in study */
  recruitment?: IResearchStudyRecruitment;

  /** Defined path through the study for a subject */
  comparisonGroup?: IResearchStudyComparisonGroup[];

  /** A goal for the study */
  objective?: IResearchStudyObjective[];

  /** A variable measured during the study */
  outcomeMeasure?: IResearchStudyOutcomeMeasure[];

  /** Link to results generated during the study */
  result?: IReference<'EvidenceReport' | 'Citation' | 'DiagnosticReport'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchStudy>) {
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
