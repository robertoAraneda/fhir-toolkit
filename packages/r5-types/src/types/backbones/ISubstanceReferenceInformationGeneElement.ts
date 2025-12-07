import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * SubstanceReferenceInformationGeneElement Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformationgeneelement.html
 */
export interface ISubstanceReferenceInformationGeneElement extends IBackboneElement {
  /**
   * Todo
   */
  type?: ICodeableConcept;

  /**
   * Todo
   */
  element?: IIdentifier;

  /**
   * Todo
   */
  source?: IReference<'DocumentReference'>[];

}
