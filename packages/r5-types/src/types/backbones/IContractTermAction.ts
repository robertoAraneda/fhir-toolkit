import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IContractTermActionSubject } from './IContractTermActionSubject.js';

/**
 * ContractTermAction Interface
 * 
 * Entity being ascribed responsibility
 * 
 *
 * @see https://hl7.org/fhir/R4/contracttermaction.html
 */
export interface IContractTermAction extends IBackboneElement {
  /**
   * True if the term prohibits the  action
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * Type or form of the action
   */
  type: ICodeableConcept;

  /**
   * Entity of the action
   */
  subject?: IContractTermActionSubject[];

  /**
   * Purpose for the Contract Term Action
   */
  intent: ICodeableConcept;

  /**
   * Pointer to specific item
   */
  linkId?: string[];
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * State of the action
   */
  status: ICodeableConcept;

  /**
   * Episode associated with action
   */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /**
   * Pointer to specific item
   */
  contextLinkId?: string[];
  /**
   * Extension for contextLinkId
   */
  _contextLinkId?: IElement;

  /**
   * When action happens
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When action happens
   */
  occurrencePeriod?: IPeriod;

  /**
   * When action happens
   */
  occurrenceTiming?: ITiming;

  /**
   * Who asked for action
   */
  requester?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>[];

  /**
   * Pointer to specific item
   */
  requesterLinkId?: string[];
  /**
   * Extension for requesterLinkId
   */
  _requesterLinkId?: IElement;

  /**
   * Kind of service performer
   */
  performerType?: ICodeableConcept[];

  /**
   * Competency of the performer
   */
  performerRole?: ICodeableConcept;

  /**
   * Actor that wil execute (or not) the action
   */
  performer?: IReference<'RelatedPerson' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'CareTeam' | 'Device' | 'Substance' | 'Organization' | 'Location'>;

  /**
   * Pointer to specific item
   */
  performerLinkId?: string[];
  /**
   * Extension for performerLinkId
   */
  _performerLinkId?: IElement;

  /**
   * Why is action (not) needed?
   */
  reason?: ICodeableReference[];

  /**
   * Pointer to specific item
   */
  reasonLinkId?: string[];
  /**
   * Extension for reasonLinkId
   */
  _reasonLinkId?: IElement;

  /**
   * Comments about the action
   */
  note?: IAnnotation[];

  /**
   * Action restriction numbers
   */
  securityLabelNumber?: number[];
  /**
   * Extension for securityLabelNumber
   */
  _securityLabelNumber?: IElement;

}
