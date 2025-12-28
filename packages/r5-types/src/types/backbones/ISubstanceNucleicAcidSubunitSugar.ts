import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * SubstanceNucleicAcidSubunitSugar Interface
 * 
 * 5.3.6.8.1 Sugar ID (Mandatory)
 * 
 *
 * @see https://hl7.org/fhir/R5/substancenucleicacidsubunitsugar.html
 */
export interface ISubstanceNucleicAcidSubunitSugar extends IBackboneElement {
  /**
   * The Substance ID of the sugar or sugar-like component that make up the nucleotide
   */
  identifier?: IIdentifier;

  /**
   * The name of the sugar or sugar-like component that make up the nucleotide
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above
   */
  residueSite?: string;
  /**
   * Extension for residueSite
   */
  _residueSite?: IElement;

}
