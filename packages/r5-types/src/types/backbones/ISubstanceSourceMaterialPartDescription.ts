import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * SubstanceSourceMaterialPartDescription Interface
 * 
 * To do
 * 
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialpartdescription.html
 */
export interface ISubstanceSourceMaterialPartDescription extends IBackboneElement {
  /**
   * Entity of anatomical origin of source material within an organism
   */
  part?: ICodeableConcept;

  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply
   */
  partLocation?: ICodeableConcept;

}
