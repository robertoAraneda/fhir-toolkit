import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MedicinalProductPharmaceuticalCharacteristics Interface
 * 
 * Characteristics e.g. a products onset of action
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalcharacteristics.html
 */
export interface IMedicinalProductPharmaceuticalCharacteristics extends IBackboneElement {
  /**
   * A coded characteristic
   */
  code: ICodeableConcept;

  /**
   * The status of characteristic e.g. assigned or pending
   */
  status?: ICodeableConcept;

}
