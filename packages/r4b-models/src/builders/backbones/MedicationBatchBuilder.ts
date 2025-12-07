import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationBatch } from '../../models/backbones/MedicationBatch.js';
import type {
  IMedicationBatch,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationBatchBuilder - Fluent builder for MedicationBatch backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationBatch = new MedicationBatchBuilder()
 *   .setLotNumber(value)
 *   .build();
 */
export class MedicationBatchBuilder extends BackboneElementBuilder<MedicationBatch, IMedicationBatch> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set lotNumber
   * Identifier assigned to batch
   */
  setLotNumber(lotNumber: string): this {
    this.data.lotNumber = lotNumber;
    return this;
  }

  /**
   * Set expirationDate
   * When batch will expire
   */
  setExpirationDate(expirationDate: string): this {
    this.data.expirationDate = expirationDate;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationBatch instance
   */
  build(): MedicationBatch {
    return new MedicationBatch(this.data);
  }

  /**
   * Build and validate the MedicationBatch instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationBatch> {
    const medicationBatch = this.build();
    await medicationBatch.validateOrThrow();
    return medicationBatch;
  }
}
