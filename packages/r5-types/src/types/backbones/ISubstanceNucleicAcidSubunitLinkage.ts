import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * SubstanceNucleicAcidSubunitLinkage Interface
 * 
 * The linkages between sugar residues will also be captured
 * 
 *
 * @see https://hl7.org/fhir/R4/substancenucleicacidsubunitlinkage.html
 */
export interface ISubstanceNucleicAcidSubunitLinkage extends IBackboneElement {
  /**
   * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified
   */
  connectivity?: string;
  /**
   * Extension for connectivity
   */
  _connectivity?: IElement;

  /**
   * Each linkage will be registered as a fragment and have an ID
   */
  identifier?: IIdentifier;

  /**
   * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Residues shall be captured as described in 5.3.6.8.3
   */
  residueSite?: string;
  /**
   * Extension for residueSite
   */
  _residueSite?: IElement;

}
