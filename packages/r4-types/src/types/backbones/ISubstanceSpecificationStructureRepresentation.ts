import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * SubstanceSpecificationStructureRepresentation Interface
 * 
 * Molecular structural representation
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructurerepresentation.html
 */
export interface ISubstanceSpecificationStructureRepresentation extends IBackboneElement {
  /**
   * The type of structure (e.g. Full, Partial, Representative)
   */
  type?: ICodeableConcept;

  /**
   * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX
   */
  representation?: string;
  /**
   * Extension for representation
   */
  _representation?: IElement;

  /**
   * An attached file with the structural representation
   */
  attachment?: IAttachment;

}
