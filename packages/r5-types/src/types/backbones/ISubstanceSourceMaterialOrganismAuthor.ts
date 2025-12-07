import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubstanceSourceMaterialOrganismAuthor Interface
 * 
 * 4.9.13.6.1 Author type (Conditional)
 * 
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialorganismauthor.html
 */
export interface ISubstanceSourceMaterialOrganismAuthor extends IBackboneElement {
  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name
   */
  authorType?: ICodeableConcept;

  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank)
   */
  authorDescription?: string;
  /**
   * Extension for authorDescription
   */
  _authorDescription?: IElement;

}
