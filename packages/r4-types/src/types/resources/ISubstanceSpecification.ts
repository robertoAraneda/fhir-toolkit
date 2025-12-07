import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISubstanceSpecificationCode } from '../backbones/ISubstanceSpecificationCode.js';
import type { ISubstanceSpecificationMoiety } from '../backbones/ISubstanceSpecificationMoiety.js';
import type { ISubstanceSpecificationName } from '../backbones/ISubstanceSpecificationName.js';
import type { ISubstanceSpecificationProperty } from '../backbones/ISubstanceSpecificationProperty.js';
import type { ISubstanceSpecificationRelationship } from '../backbones/ISubstanceSpecificationRelationship.js';
import type { ISubstanceSpecificationStructure } from '../backbones/ISubstanceSpecificationStructure.js';
import type { ISubstanceSpecificationStructureIsotopeMolecularWeight } from '../backbones/ISubstanceSpecificationStructureIsotopeMolecularWeight.js';

/**
 * SubstanceSpecification Interface
 * 
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecification.html
 */
export interface ISubstanceSpecification extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubstanceSpecification';

  /**
   * Identifier by which this substance is known
   */
  identifier?: IIdentifier;

  /**
   * High level categorization, e.g. polymer or nucleic acid
   */
  type?: ICodeableConcept;

  /**
   * Status of substance within the catalogue e.g. approved
   */
  status?: ICodeableConcept;

  /**
   * If the substance applies to only human or veterinary use
   */
  domain?: ICodeableConcept;

  /**
   * Textual description of the substance
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

  /**
   * Textual comment about this record of a substance
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Moiety, for structural modifications
   */
  moiety?: ISubstanceSpecificationMoiety[];

  /**
   * General specifications for this substance, including how it is related to other substances
   */
  property?: ISubstanceSpecificationProperty[];

  /**
   * General information detailing this substance
   */
  referenceInformation?: IReference<'SubstanceReferenceInformation'>;

  /**
   * Structural information
   */
  structure?: ISubstanceSpecificationStructure;

  /**
   * Codes associated with the substance
   */
  code?: ISubstanceSpecificationCode[];

  /**
   * Names applicable to this substance
   */
  name?: ISubstanceSpecificationName[];

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids)
   */
  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight[];

  /**
   * A link between this substance and another, with details of the relationship
   */
  relationship?: ISubstanceSpecificationRelationship[];

  /**
   * Data items specific to nucleic acids
   */
  nucleicAcid?: IReference<'SubstanceNucleicAcid'>;

  /**
   * Data items specific to polymers
   */
  polymer?: IReference<'SubstancePolymer'>;

  /**
   * Data items specific to proteins
   */
  protein?: IReference<'SubstanceProtein'>;

  /**
   * Material or taxonomic/anatomical source for the substance
   */
  sourceMaterial?: IReference<'SubstanceSourceMaterial'>;

}
