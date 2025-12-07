import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ISubstanceAmount } from '../datatypes/ISubstanceAmount.js';

/**
 * SubstancePolymerMonomerSetStartingMaterial Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymermonomersetstartingmaterial.html
 */
export interface ISubstancePolymerMonomerSetStartingMaterial extends IBackboneElement {
  /**
   * Todo
   */
  material?: ICodeableConcept;

  /**
   * Todo
   */
  type?: ICodeableConcept;

  /**
   * Todo
   */
  isDefining?: boolean;
  /**
   * Extension for isDefining
   */
  _isDefining?: IElement;

  /**
   * Todo
   */
  amount?: ISubstanceAmount;

}
