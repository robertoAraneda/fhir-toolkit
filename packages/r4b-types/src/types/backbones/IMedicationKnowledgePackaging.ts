import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationKnowledgePackaging Interface
 * 
 * Details about packaged medications
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgepackaging.html
 */
export interface IMedicationKnowledgePackaging extends IBackboneElement {
  /**
   * A code that defines the specific type of packaging that the medication can be found in
   */
  type?: ICodeableConcept;

  /**
   * The number of product units the package would contain if fully loaded
   */
  quantity?: IQuantity;

}
