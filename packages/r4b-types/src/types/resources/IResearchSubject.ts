import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ResearchSubjectStatusType } from '../../valuesets/index.js';

/**
 * ResearchSubject Interface
 * 
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 * 
 *
 * @see https://hl7.org/fhir/R4/researchsubject.html
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
   * candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
   */
  status: ResearchSubjectStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Start and end of participation
   */
  period?: IPeriod;

  /**
   * Study subject is part of
   */
  study: IReference<'ResearchStudy'>;

  /**
   * Who is part of study
   */
  individual: IReference<'Patient'>;

  /**
   * What path should be followed
   */
  assignedArm?: string;
  /**
   * Extension for assignedArm
   */
  _assignedArm?: IElement;

  /**
   * What path was followed
   */
  actualArm?: string;
  /**
   * Extension for actualArm
   */
  _actualArm?: IElement;

  /**
   * Agreement to participate in study
   */
  consent?: IReference<'Consent'>;

}
