import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ISpecimenDefinitionTypeTestedContainerAdditive } from './ISpecimenDefinitionTypeTestedContainerAdditive.js';

/**
 * SpecimenDefinitionTypeTestedContainer Interface
 * 
 * The specimen's container
 * 
 *
 * @see https://hl7.org/fhir/R4/specimendefinitiontypetestedcontainer.html
 */
export interface ISpecimenDefinitionTypeTestedContainer extends IBackboneElement {
  /**
   * Container material
   */
  material?: ICodeableConcept;

  /**
   * Kind of container associated with the kind of specimen
   */
  type?: ICodeableConcept;

  /**
   * Color of container cap
   */
  cap?: ICodeableConcept;

  /**
   * Container description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Container capacity
   */
  capacity?: IQuantity;

  /**
   * Minimum volume
   */
  minimumVolumeQuantity?: IQuantity;

  /**
   * Minimum volume
   */
  minimumVolumeString?: string;
  /**
   * Extension for minimumVolumeString
   */
  _minimumVolumeString?: IElement;

  /**
   * Additive associated with container
   */
  additive?: ISpecimenDefinitionTypeTestedContainerAdditive[];

  /**
   * Specimen container preparation
   */
  preparation?: string;
  /**
   * Extension for preparation
   */
  _preparation?: IElement;

}
