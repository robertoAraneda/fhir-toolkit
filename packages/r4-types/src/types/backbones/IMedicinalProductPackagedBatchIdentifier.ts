import type { IBackboneElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * MedicinalProductPackagedBatchIdentifier Interface
 * 
 * Batch numbering
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpackagedbatchidentifier.html
 */
export interface IMedicinalProductPackagedBatchIdentifier extends IBackboneElement {
  /**
   * A number appearing on the outer packaging of a specific batch
   */
  outerPackaging: IIdentifier;

  /**
   * A number appearing on the immediate packaging (and not the outer packaging)
   */
  immediatePackaging?: IIdentifier;

}
