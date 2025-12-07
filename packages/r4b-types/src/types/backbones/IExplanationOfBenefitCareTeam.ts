import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ExplanationOfBenefitCareTeam Interface
 * 
 * Care Team members
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitcareteam.html
 */
export interface IExplanationOfBenefitCareTeam extends IBackboneElement {
  /**
   * Order of care team
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Practitioner or organization
   */
  provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Indicator of the lead practitioner
   */
  responsible?: boolean;
  /**
   * Extension for responsible
   */
  _responsible?: IElement;

  /**
   * Function within the team
   */
  role?: ICodeableConcept;

  /**
   * Practitioner credential or specialization
   */
  qualification?: ICodeableConcept;

}
