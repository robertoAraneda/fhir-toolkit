import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * SubstanceSourceMaterialOrganismOrganismGeneral Interface
 * 
 * 4.9.13.7.1 Kingdom (Conditional)
 * 
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialorganismorganismgeneral.html
 */
export interface ISubstanceSourceMaterialOrganismOrganismGeneral extends IBackboneElement {
  /**
   * The kingdom of an organism shall be specified
   */
  kingdom?: ICodeableConcept;

  /**
   * The phylum of an organism shall be specified
   */
  phylum?: ICodeableConcept;

  /**
   * The class of an organism shall be specified
   */
  class?: ICodeableConcept;

  /**
   * The order of an organism shall be specified,
   */
  order?: ICodeableConcept;

}
