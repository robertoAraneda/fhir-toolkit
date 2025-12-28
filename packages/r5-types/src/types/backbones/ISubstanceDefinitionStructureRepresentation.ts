import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * SubstanceDefinitionStructureRepresentation Interface
 * 
 * A depiction of the structure of the substance
 * 
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionstructurerepresentation.html
 */
export interface ISubstanceDefinitionStructureRepresentation extends IBackboneElement {
  /**
   * The kind of structural representation (e.g. full, partial)
   */
  type?: ICodeableConcept;

  /**
   * The structural representation as a text string in a standard format
   */
  representation?: string;
  /**
   * Extension for representation
   */
  _representation?: IElement;

  /**
   * The format of the representation e.g. InChI, SMILES, MOLFILE (note: not the physical file format)
   */
  format?: ICodeableConcept;

  /**
   * An attachment with the structural representation e.g. a structure graphic or AnIML file
   */
  document?: IReference<'DocumentReference'>;

}
