import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IResearchSubjectProgress } from '../backbones/IResearchSubjectProgress.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ResearchSubject Interface
 * 
 * A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
 * 
 *
 * @see https://hl7.org/fhir/R5/researchsubject.html
 */
export interface IResearchSubject extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ResearchSubject';

  /**
   * Business Identifier for research subject in a study
   */
  identifier?: IIdentifier[];

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Subject status
   */
  progress?: IResearchSubjectProgress[];

  /**
   * Start and end of participation
   */
  period?: IPeriod;

  /**
   * Study subject is part of
   */
  study: IReference<'ResearchStudy'>;

  /**
   * Who or what is part of study
   */
  subject: IReference<'Patient' | 'Group' | 'Specimen' | 'Device' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct'>;

  /**
   * What path should be followed
   */
  assignedComparisonGroup?: string;
  /**
   * Extension for assignedComparisonGroup
   */
  _assignedComparisonGroup?: IElement;

  /**
   * What path was followed
   */
  actualComparisonGroup?: string;
  /**
   * Extension for actualComparisonGroup
   */
  _actualComparisonGroup?: IElement;

  /**
   * Agreement to participate in study
   */
  consent?: IReference<'Consent'>[];

}
