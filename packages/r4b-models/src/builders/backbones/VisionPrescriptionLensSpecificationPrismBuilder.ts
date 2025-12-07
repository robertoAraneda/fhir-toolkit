import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { VisionPrescriptionLensSpecificationPrism } from '../../models/backbones/VisionPrescriptionLensSpecificationPrism.js';
import type {
  IVisionPrescriptionLensSpecificationPrism,
  VisionBaseType,
} from '@fhir-toolkit/r4b-types';

/**
 * VisionPrescriptionLensSpecificationPrismBuilder - Fluent builder for VisionPrescriptionLensSpecificationPrism backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const visionPrescriptionLensSpecificationPrism = new VisionPrescriptionLensSpecificationPrismBuilder()
 *   .setAmount(value)
 *   .build();
 */
export class VisionPrescriptionLensSpecificationPrismBuilder extends BackboneElementBuilder<VisionPrescriptionLensSpecificationPrism, IVisionPrescriptionLensSpecificationPrism> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set amount
   * Amount of adjustment
   */
  setAmount(amount: number): this {
    this.data.amount = amount;
    return this;
  }

  /**
   * Set base
   * up | down | in | out
   */
  setBase(base: VisionBaseType): this {
    this.data.base = base;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VisionPrescriptionLensSpecificationPrism instance
   */
  build(): VisionPrescriptionLensSpecificationPrism {
    return new VisionPrescriptionLensSpecificationPrism(this.data);
  }

  /**
   * Build and validate the VisionPrescriptionLensSpecificationPrism instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VisionPrescriptionLensSpecificationPrism> {
    const visionPrescriptionLensSpecificationPrism = this.build();
    await visionPrescriptionLensSpecificationPrism.validateOrThrow();
    return visionPrescriptionLensSpecificationPrism;
  }
}
