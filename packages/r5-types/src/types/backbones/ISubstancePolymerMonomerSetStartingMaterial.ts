import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstancePolymerMonomerSetStartingMaterial Interface
 * 
 * The starting materials - monomer(s) used in the synthesis of the polymer
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymermonomersetstartingmaterial.html
 */
export interface ISubstancePolymerMonomerSetStartingMaterial extends IBackboneElement {
  /**
   * The type of substance for this starting material
   */
  code?: ICodeableConcept;

  /**
   * Substance high level category, e.g. chemical substance
   */
  category?: ICodeableConcept;

  /**
   * Used to specify whether the attribute described is a defining element for the unique identification of the polymer
   */
  isDefining?: boolean;
  /**
   * Extension for isDefining
   */
  _isDefining?: IElement;

  /**
   * A percentage
   */
  amount?: IQuantity;

}
