import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IVisionPrescriptionLensSpecificationPrism } from './IVisionPrescriptionLensSpecificationPrism.js';
import type { VisionEyesType } from '../../valuesets/index.js';

/**
 * VisionPrescriptionLensSpecification Interface
 * 
 * Vision lens authorization
 * 
 *
 * @see https://hl7.org/fhir/R4B/visionprescriptionlensspecification.html
 */
export interface IVisionPrescriptionLensSpecification extends IBackboneElement {
  /**
   * Product to be supplied
   */
  product: ICodeableConcept;

  /**
   * right | left
   */
  eye: VisionEyesType;
  /**
   * Extension for eye
   */
  _eye?: IElement;

  /**
   * Power of the lens
   */
  sphere?: number;
  /**
   * Extension for sphere
   */
  _sphere?: IElement;

  /**
   * Lens power for astigmatism
   */
  cylinder?: number;
  /**
   * Extension for cylinder
   */
  _cylinder?: IElement;

  /**
   * Lens meridian which contain no power for astigmatism
   */
  axis?: number;
  /**
   * Extension for axis
   */
  _axis?: IElement;

  /**
   * Eye alignment compensation
   */
  prism?: IVisionPrescriptionLensSpecificationPrism[];

  /**
   * Added power for multifocal levels
   */
  add?: number;
  /**
   * Extension for add
   */
  _add?: IElement;

  /**
   * Contact lens power
   */
  power?: number;
  /**
   * Extension for power
   */
  _power?: IElement;

  /**
   * Contact lens back curvature
   */
  backCurve?: number;
  /**
   * Extension for backCurve
   */
  _backCurve?: IElement;

  /**
   * Contact lens diameter
   */
  diameter?: number;
  /**
   * Extension for diameter
   */
  _diameter?: IElement;

  /**
   * Lens wear duration
   */
  duration?: IQuantity;

  /**
   * Color required
   */
  color?: string;
  /**
   * Extension for color
   */
  _color?: IElement;

  /**
   * Brand required
   */
  brand?: string;
  /**
   * Extension for brand
   */
  _brand?: IElement;

  /**
   * Notes for coatings
   */
  note?: IAnnotation[];

}
