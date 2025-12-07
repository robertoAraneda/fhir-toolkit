import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISubstancePolymerMonomerSet } from '../backbones/ISubstancePolymerMonomerSet.js';
import type { ISubstancePolymerRepeat } from '../backbones/ISubstancePolymerRepeat.js';

/**
 * SubstancePolymer Interface
 * 
 * Properties of a substance specific to it being a polymer.
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymer.html
 */
export interface ISubstancePolymer extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubstancePolymer';

  /**
   * A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier
   */
  identifier?: IIdentifier;

  /**
   * Overall type of the polymer
   */
  class?: ICodeableConcept;

  /**
   * Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic
   */
  geometry?: ICodeableConcept;

  /**
   * Descrtibes the copolymer sequence type (polymer connectivity)
   */
  copolymerConnectivity?: ICodeableConcept[];

  /**
   * Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder
   */
  modification?: string;
  /**
   * Extension for modification
   */
  _modification?: IElement;

  /**
   * Todo
   */
  monomerSet?: ISubstancePolymerMonomerSet[];

  /**
   * Specifies and quantifies the repeated units and their configuration
   */
  repeat?: ISubstancePolymerRepeat[];

}
