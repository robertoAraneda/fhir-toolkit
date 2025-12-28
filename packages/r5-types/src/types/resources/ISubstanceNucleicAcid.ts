import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { ISubstanceNucleicAcidSubunit } from '../backbones/ISubstanceNucleicAcidSubunit.js';

/**
 * SubstanceNucleicAcid Interface
 * 
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 * 
 *
 * @see https://hl7.org/fhir/R5/substancenucleicacid.html
 */
export interface ISubstanceNucleicAcid extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubstanceNucleicAcid';

  /**
   * The type of the sequence shall be specified based on a controlled vocabulary
   */
  sequenceType?: ICodeableConcept;

  /**
   * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit
   */
  numberOfSubunits?: number;
  /**
   * Extension for numberOfSubunits
   */
  _numberOfSubunits?: IElement;

  /**
   * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”
   */
  areaOfHybridisation?: string;
  /**
   * Extension for areaOfHybridisation
   */
  _areaOfHybridisation?: IElement;

  /**
   * (TBC)
   */
  oligoNucleotideType?: ICodeableConcept;

  /**
   * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
   */
  subunit?: ISubstanceNucleicAcidSubunit[];

}
