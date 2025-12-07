import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ClaimCareTeam Interface
 * 
 * Members of the care team
 * 
 *
 * @see https://hl7.org/fhir/R4/claimcareteam.html
 */
export interface IClaimCareTeam extends IBackboneElement {
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
   * Practitioner or provider specialization
   */
  specialty?: ICodeableConcept;

}
