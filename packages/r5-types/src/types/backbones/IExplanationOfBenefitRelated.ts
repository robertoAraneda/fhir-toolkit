import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * ExplanationOfBenefitRelated Interface
 * 
 * Prior or corollary claims
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitrelated.html
 */
export interface IExplanationOfBenefitRelated extends IBackboneElement {
  /**
   * Reference to the related claim
   */
  claim?: IReference<'Claim'>;

  /**
   * How the reference claim is related
   */
  relationship?: ICodeableConcept;

  /**
   * File or case reference
   */
  reference?: IIdentifier;

}
