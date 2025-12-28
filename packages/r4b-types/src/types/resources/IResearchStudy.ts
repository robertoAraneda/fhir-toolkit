import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IResearchStudyArm } from '../backbones/IResearchStudyArm.js';
import type { IResearchStudyObjective } from '../backbones/IResearchStudyObjective.js';
import type { ResearchStudyStatusType } from '../../valuesets/index.js';

/**
 * ResearchStudy Interface
 * 
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 * 
 *
 * @see https://hl7.org/fhir/R4B/researchstudy.html
 */
export interface IResearchStudy extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ResearchStudy';

  /**
   * Business Identifier for study
   */
  identifier?: IIdentifier[];

  /**
   * Name for this study
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Steps followed in executing study
   */
  protocol?: IReference<'PlanDefinition'>[];

  /**
   * Part of larger study
   */
  partOf?: IReference<'ResearchStudy'>[];

  /**
   * active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn
   */
  status: ResearchStudyStatusType;
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
   * Classifications for the study
   */
  category?: ICodeableConcept[];

  /**
   * Drugs, devices, etc. under study
   */
  focus?: ICodeableConcept[];

  /**
   * Condition being studied
   */
  condition?: ICodeableConcept[];

  /**
   * Contact details for the study
   */
  contact?: IContactDetail[];

  /**
   * References and dependencies
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Used to search for the study
   */
  keyword?: ICodeableConcept[];

  /**
   * Geographic region(s) for study
   */
  location?: ICodeableConcept[];

  /**
   * What this is study doing
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Inclusion & exclusion criteria
   */
  enrollment?: IReference<'Group'>[];

  /**
   * When the study began and ended
   */
  period?: IPeriod;

  /**
   * Organization that initiates and is legally responsible for the study
   */
  sponsor?: IReference<'Organization'>;

  /**
   * Researcher who oversees multiple aspects of the study
   */
  principalInvestigator?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Facility where study activities are conducted
   */
  site?: IReference<'Location'>[];

  /**
   * accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
   */
  reasonStopped?: ICodeableConcept;

  /**
   * Comments made about the study
   */
  note?: IAnnotation[];

  /**
   * Defined path through the study for a subject
   */
  arm?: IResearchStudyArm[];

  /**
   * A goal for the study
   */
  objective?: IResearchStudyObjective[];

}
