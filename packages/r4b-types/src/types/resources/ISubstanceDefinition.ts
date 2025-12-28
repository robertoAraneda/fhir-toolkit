import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISubstanceDefinitionCode } from '../backbones/ISubstanceDefinitionCode.js';
import type { ISubstanceDefinitionMoiety } from '../backbones/ISubstanceDefinitionMoiety.js';
import type { ISubstanceDefinitionMolecularWeight } from '../backbones/ISubstanceDefinitionMolecularWeight.js';
import type { ISubstanceDefinitionName } from '../backbones/ISubstanceDefinitionName.js';
import type { ISubstanceDefinitionProperty } from '../backbones/ISubstanceDefinitionProperty.js';
import type { ISubstanceDefinitionRelationship } from '../backbones/ISubstanceDefinitionRelationship.js';
import type { ISubstanceDefinitionSourceMaterial } from '../backbones/ISubstanceDefinitionSourceMaterial.js';
import type { ISubstanceDefinitionStructure } from '../backbones/ISubstanceDefinitionStructure.js';

/**
 * SubstanceDefinition Interface
 * 
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 * 
 *
 * @see https://hl7.org/fhir/R4B/substancedefinition.html
 */
export interface ISubstanceDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubstanceDefinition';

  /**
   * Identifier by which this substance is known
   */
  identifier?: IIdentifier[];

  /**
   * A business level version identifier of the substance
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Status of substance within the catalogue e.g. active, retired
   */
  status?: ICodeableConcept;

  /**
   * A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity
   */
  classification?: ICodeableConcept[];

  /**
   * If the substance applies to human or veterinary use
   */
  domain?: ICodeableConcept;

  /**
   * The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP)
   */
  grade?: ICodeableConcept[];

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
  informationSource?: IReference<'Citation'>[];

  /**
   * Textual comment about the substance's catalogue or registry record
   */
  note?: IAnnotation[];

  /**
   * The entity that creates, makes, produces or fabricates the substance
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * An entity that is the source for the substance. It may be different from the manufacturer
   */
  supplier?: IReference<'Organization'>[];

  /**
   * Moiety, for structural modifications
   */
  moiety?: ISubstanceDefinitionMoiety[];

  /**
   * General specifications for this substance
   */
  property?: ISubstanceDefinitionProperty[];

  /**
   * The molecular weight or weight range
   */
  molecularWeight?: ISubstanceDefinitionMolecularWeight[];

  /**
   * Structural information
   */
  structure?: ISubstanceDefinitionStructure;

  /**
   * Codes associated with the substance
   */
  code?: ISubstanceDefinitionCode[];

  /**
   * Names applicable to this substance
   */
  name?: ISubstanceDefinitionName[];

  /**
   * A link between this substance and another
   */
  relationship?: ISubstanceDefinitionRelationship[];

  /**
   * Material or taxonomic/anatomical source
   */
  sourceMaterial?: ISubstanceDefinitionSourceMaterial;

}
