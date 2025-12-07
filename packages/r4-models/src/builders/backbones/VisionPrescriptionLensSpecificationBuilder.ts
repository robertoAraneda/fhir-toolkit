import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { VisionPrescriptionLensSpecification } from '../../models/backbones/VisionPrescriptionLensSpecification.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IQuantity,
  IVisionPrescriptionLensSpecification,
  IVisionPrescriptionLensSpecificationPrism,
  VisionEyesType,
} from '@fhir-toolkit/r4-types';

/**
 * VisionPrescriptionLensSpecificationBuilder - Fluent builder for VisionPrescriptionLensSpecification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const visionPrescriptionLensSpecification = new VisionPrescriptionLensSpecificationBuilder()
 *   .setProduct(value)
 *   .addPrism({ ... })
 *   .build();
 */
export class VisionPrescriptionLensSpecificationBuilder extends BackboneElementBuilder<VisionPrescriptionLensSpecification, IVisionPrescriptionLensSpecification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set product
   * Product to be supplied
   */
  setProduct(product: ICodeableConcept): this {
    this.data.product = product;
    return this;
  }

  /**
   * Set eye
   * right | left
   */
  setEye(eye: VisionEyesType): this {
    this.data.eye = eye;
    return this;
  }

  /**
   * Set sphere
   * Power of the lens
   */
  setSphere(sphere: number): this {
    this.data.sphere = sphere;
    return this;
  }

  /**
   * Set cylinder
   * Lens power for astigmatism
   */
  setCylinder(cylinder: number): this {
    this.data.cylinder = cylinder;
    return this;
  }

  /**
   * Set axis
   * Lens meridian which contain no power for astigmatism
   */
  setAxis(axis: number): this {
    this.data.axis = axis;
    return this;
  }

  /**
   * Set add
   * Added power for multifocal levels
   */
  setAdd(add: number): this {
    this.data.add = add;
    return this;
  }

  /**
   * Set power
   * Contact lens power
   */
  setPower(power: number): this {
    this.data.power = power;
    return this;
  }

  /**
   * Set backCurve
   * Contact lens back curvature
   */
  setBackCurve(backCurve: number): this {
    this.data.backCurve = backCurve;
    return this;
  }

  /**
   * Set diameter
   * Contact lens diameter
   */
  setDiameter(diameter: number): this {
    this.data.diameter = diameter;
    return this;
  }

  /**
   * Set duration
   * Lens wear duration
   */
  setDuration(duration: IQuantity): this {
    this.data.duration = duration;
    return this;
  }

  /**
   * Set color
   * Color required
   */
  setColor(color: string): this {
    this.data.color = color;
    return this;
  }

  /**
   * Set brand
   * Brand required
   */
  setBrand(brand: string): this {
    this.data.brand = brand;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add prism
   * Eye alignment compensation
   */
  addPrism(prism: IVisionPrescriptionLensSpecificationPrism): this {
    return this.addToArray('prism', prism);
  }

  /**
   * Add note
   * Notes for coatings
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VisionPrescriptionLensSpecification instance
   */
  build(): VisionPrescriptionLensSpecification {
    return new VisionPrescriptionLensSpecification(this.data);
  }

  /**
   * Build and validate the VisionPrescriptionLensSpecification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VisionPrescriptionLensSpecification> {
    const visionPrescriptionLensSpecification = this.build();
    await visionPrescriptionLensSpecification.validateOrThrow();
    return visionPrescriptionLensSpecification;
  }
}
