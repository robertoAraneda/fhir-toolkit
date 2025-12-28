import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ISubstanceSourceMaterialOrganismAuthor } from './ISubstanceSourceMaterialOrganismAuthor.js';
import type { ISubstanceSourceMaterialOrganismHybrid } from './ISubstanceSourceMaterialOrganismHybrid.js';
import type { ISubstanceSourceMaterialOrganismOrganismGeneral } from './ISubstanceSourceMaterialOrganismOrganismGeneral.js';

/**
 * SubstanceSourceMaterialOrganism Interface
 * 
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 * 
 *
 * @see https://hl7.org/fhir/R5/substancesourcematerialorganism.html
 */
export interface ISubstanceSourceMaterialOrganism extends IBackboneElement {
  /**
   * The family of an organism shall be specified
   */
  family?: ICodeableConcept;

  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies
   */
  genus?: ICodeableConcept;

  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies
   */
  species?: ICodeableConcept;

  /**
   * The Intraspecific type of an organism shall be specified
   */
  intraspecificType?: ICodeableConcept;

  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention
   */
  intraspecificDescription?: string;
  /**
   * Extension for intraspecificDescription
   */
  _intraspecificDescription?: IElement;

  /**
   * 4.9.13.6.1 Author type (Conditional)
   */
  author?: ISubstanceSourceMaterialOrganismAuthor[];

  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
   */
  hybrid?: ISubstanceSourceMaterialOrganismHybrid;

  /**
   * 4.9.13.7.1 Kingdom (Conditional)
   */
  organismGeneral?: ISubstanceSourceMaterialOrganismOrganismGeneral;

}
