import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SpecimenContainer Interface
 * 
 * Direct container of specimen (tube/slide, etc.)
 * 
 *
 * @see https://hl7.org/fhir/R4/specimencontainer.html
 */
export interface ISpecimenContainer extends IBackboneElement {
  /**
   * Device resource for the container
   */
  device: IReference<'Device'>;

  /**
   * Where the container is
   */
  location?: IReference<'Location'>;

  /**
   * Quantity of specimen within container
   */
  specimenQuantity?: IQuantity;

}
