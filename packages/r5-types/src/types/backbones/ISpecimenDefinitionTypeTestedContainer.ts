import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ISpecimenDefinitionTypeTestedContainerAdditive } from './ISpecimenDefinitionTypeTestedContainerAdditive.js';

/**
 * SpecimenDefinitionTypeTestedContainer Interface
 * 
 * The specimen's container
 * 
 *
 * @see https://hl7.org/fhir/R5/specimendefinitiontypetestedcontainer.html
 */
export interface ISpecimenDefinitionTypeTestedContainer extends IBackboneElement {
  /**
   * The material type used for the container
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
   * The description of the kind of container
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The capacity of this kind of container
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
   * Special processing applied to the container for this specimen type
   */
  preparation?: string;
  /**
   * Extension for preparation
   */
  _preparation?: IElement;

}
