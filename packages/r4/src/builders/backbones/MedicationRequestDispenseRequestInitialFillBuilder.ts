import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationRequestDispenseRequestInitialFill } from '../../models/backbones/MedicationRequestDispenseRequestInitialFill.js';
import type {
  IDuration,
  IMedicationRequestDispenseRequestInitialFill,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationRequestDispenseRequestInitialFillBuilder - Fluent builder for MedicationRequestDispenseRequestInitialFill backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationRequestDispenseRequestInitialFill = new MedicationRequestDispenseRequestInitialFillBuilder()
 *   .setQuantity(value)
 *   .build();
 */
export class MedicationRequestDispenseRequestInitialFillBuilder extends BackboneElementBuilder<MedicationRequestDispenseRequestInitialFill, IMedicationRequestDispenseRequestInitialFill> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set quantity
   * First fill quantity
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set duration
   * First fill duration
   */
  setDuration(duration: IDuration): this {
    this.data.duration = duration;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationRequestDispenseRequestInitialFill instance
   */
  build(): MedicationRequestDispenseRequestInitialFill {
    return new MedicationRequestDispenseRequestInitialFill(this.data);
  }

  /**
   * Build and validate the MedicationRequestDispenseRequestInitialFill instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationRequestDispenseRequestInitialFill> {
    const medicationRequestDispenseRequestInitialFill = this.build();
    await medicationRequestDispenseRequestInitialFill.validateOrThrow();
    return medicationRequestDispenseRequestInitialFill;
  }
}
