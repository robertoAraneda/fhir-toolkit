import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * MedicinalProductDefinitionCrossReference Interface
 * 
 * Reference to another product, e.g. for linking authorised to investigational product
 * 
 *
 * @see https://hl7.org/fhir/R5/medicinalproductdefinitioncrossreference.html
 */
export interface IMedicinalProductDefinitionCrossReference extends IBackboneElement {
  /**
   * Reference to another product, e.g. for linking authorised to investigational product
   */
  product: ICodeableReference;

  /**
   * The type of relationship, for instance branded to generic or virtual to actual product
   */
  type?: ICodeableConcept;

}
