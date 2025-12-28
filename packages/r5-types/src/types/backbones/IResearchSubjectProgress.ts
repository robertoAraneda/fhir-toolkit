import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ResearchSubjectProgress Interface
 * 
 * Subject status
 * 
 *
 * @see https://hl7.org/fhir/R5/researchsubjectprogress.html
 */
export interface IResearchSubjectProgress extends IBackboneElement {
  /**
   * state | milestone
   */
  type?: ICodeableConcept;

  /**
   * candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
   */
  subjectState?: ICodeableConcept;

  /**
   * SignedUp | Screened | Randomized
   */
  milestone?: ICodeableConcept;

  /**
   * State change reason
   */
  reason?: ICodeableConcept;

  /**
   * State change date
   */
  startDate?: string;
  /**
   * Extension for startDate
   */
  _startDate?: IElement;

  /**
   * State change date
   */
  endDate?: string;
  /**
   * Extension for endDate
   */
  _endDate?: IElement;

}
