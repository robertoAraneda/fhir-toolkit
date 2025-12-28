import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubstanceSourceMaterialOrganismHybrid Interface
 * 
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 * 
 *
 * @see https://hl7.org/fhir/R5/substancesourcematerialorganismhybrid.html
 */
export interface ISubstanceSourceMaterialOrganismHybrid extends IBackboneElement {
  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal
   */
  maternalOrganismId?: string;
  /**
   * Extension for maternalOrganismId
   */
  _maternalOrganismId?: IElement;

  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal
   */
  maternalOrganismName?: string;
  /**
   * Extension for maternalOrganismName
   */
  _maternalOrganismName?: IElement;

  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary
   */
  paternalOrganismId?: string;
  /**
   * Extension for paternalOrganismId
   */
  _paternalOrganismId?: IElement;

  /**
   * The name of the paternal species constituting the hybrid organism shall be specified
   */
  paternalOrganismName?: string;
  /**
   * Extension for paternalOrganismName
   */
  _paternalOrganismName?: IElement;

  /**
   * The hybrid type of an organism shall be specified
   */
  hybridType?: ICodeableConcept;

}
