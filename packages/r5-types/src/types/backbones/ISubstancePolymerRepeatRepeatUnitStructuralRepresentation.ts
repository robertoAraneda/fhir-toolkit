import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentation Interface
 * 
 * A graphical structure for this SRU
 * 
 *
 * @see https://hl7.org/fhir/R5/substancepolymerrepeatrepeatunitstructuralrepresentation.html
 */
export interface ISubstancePolymerRepeatRepeatUnitStructuralRepresentation extends IBackboneElement {
  /**
   * The type of structure (e.g. Full, Partial, Representative)
   */
  type?: ICodeableConcept;

  /**
   * The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF
   */
  representation?: string;
  /**
   * Extension for representation
   */
  _representation?: IElement;

  /**
   * The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF
   */
  format?: ICodeableConcept;

  /**
   * An attached file with the structural representation
   */
  attachment?: IAttachment;

}
