import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SpecimenFeature Interface
 * 
 * The physical feature of a specimen
 * 
 *
 * @see https://hl7.org/fhir/R5/specimenfeature.html
 */
export interface ISpecimenFeature extends IBackboneElement {
  /**
   * Highlighted feature
   */
  type: ICodeableConcept;

  /**
   * Information about the feature
   */
  description: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
