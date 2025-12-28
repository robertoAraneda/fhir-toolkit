import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IResearchStudyAssociatedParty } from '../backbones/IResearchStudyAssociatedParty.js';
import type { IResearchStudyComparisonGroup } from '../backbones/IResearchStudyComparisonGroup.js';
import type { IResearchStudyLabel } from '../backbones/IResearchStudyLabel.js';
import type { IResearchStudyObjective } from '../backbones/IResearchStudyObjective.js';
import type { IResearchStudyOutcomeMeasure } from '../backbones/IResearchStudyOutcomeMeasure.js';
import type { IResearchStudyProgressStatus } from '../backbones/IResearchStudyProgressStatus.js';
import type { IResearchStudyRecruitment } from '../backbones/IResearchStudyRecruitment.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ResearchStudy Interface
 * 
 * A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 * 
 *
 * @see https://hl7.org/fhir/R5/researchstudy.html
 */
export interface IResearchStudy extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ResearchStudy';

  /**
   * Canonical identifier for this study resource
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business Identifier for study
   */
  identifier?: IIdentifier[];

  /**
   * The business version for the study record
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this study (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Human readable name of the study
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Additional names for the study
   */
  label?: IResearchStudyLabel[];

  /**
   * Steps followed in executing study
   */
  protocol?: IReference<'PlanDefinition'>[];

  /**
   * Part of larger study
   */
  partOf?: IReference<'ResearchStudy'>[];

  /**
   * References, URLs, and attachments
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Date the resource last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility
   */
  primaryPurposeType?: ICodeableConcept;

  /**
   * n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4
   */
  phase?: ICodeableConcept;

  /**
   * Classifications of the study design characteristics
   */
  studyDesign?: ICodeableConcept[];

  /**
   * Drugs, devices, etc. under study
   */
  focus?: ICodeableReference[];

  /**
   * Condition being studied
   */
  condition?: ICodeableConcept[];

  /**
   * Used to search for the study
   */
  keyword?: ICodeableConcept[];

  /**
   * Geographic area for the study
   */
  region?: ICodeableConcept[];

  /**
   * Brief text explaining the study
   */
  descriptionSummary?: string;
  /**
   * Extension for descriptionSummary
   */
  _descriptionSummary?: IElement;

  /**
   * Detailed narrative of the study
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * When the study began and ended
   */
  period?: IPeriod;

  /**
   * Facility where study activities are conducted
   */
  site?: IReference<'Location' | 'ResearchStudy' | 'Organization'>[];

  /**
   * Comments made about the study
   */
  note?: IAnnotation[];

  /**
   * Classification for the study
   */
  classifier?: ICodeableConcept[];

  /**
   * Sponsors, collaborators, and other parties
   */
  associatedParty?: IResearchStudyAssociatedParty[];

  /**
   * Status of study with time for that status
   */
  progressStatus?: IResearchStudyProgressStatus[];

  /**
   * accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
   */
  whyStopped?: ICodeableConcept;

  /**
   * Target or actual group of participants enrolled in study
   */
  recruitment?: IResearchStudyRecruitment;

  /**
   * Defined path through the study for a subject
   */
  comparisonGroup?: IResearchStudyComparisonGroup[];

  /**
   * A goal for the study
   */
  objective?: IResearchStudyObjective[];

  /**
   * A variable measured during the study
   */
  outcomeMeasure?: IResearchStudyOutcomeMeasure[];

  /**
   * Link to results generated during the study
   */
  result?: IReference<'EvidenceReport' | 'Citation' | 'DiagnosticReport'>[];

}
