import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceDefinitionMolecularWeight Interface
 * 
 * The molecular weight or weight range
 * 
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionmolecularweight.html
 */
export interface ISubstanceDefinitionMolecularWeight extends IBackboneElement {
  /**
   * The method by which the weight was determined
   */
  method?: ICodeableConcept;

  /**
   * Type of molecular weight e.g. exact, average, weight average
   */
  type?: ICodeableConcept;

  /**
   * Used to capture quantitative values for a variety of elements
   */
  amount: IQuantity;

}
