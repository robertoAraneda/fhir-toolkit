import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductPackagedBatchIdentifier } from '../../models/backbones/MedicinalProductPackagedBatchIdentifier.js';
import type {
  IIdentifier,
  IMedicinalProductPackagedBatchIdentifier,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPackagedBatchIdentifierBuilder - Fluent builder for MedicinalProductPackagedBatchIdentifier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPackagedBatchIdentifier = new MedicinalProductPackagedBatchIdentifierBuilder()
 *   .setOuterPackaging(value)
 *   .build();
 */
export class MedicinalProductPackagedBatchIdentifierBuilder extends BackboneElementBuilder<MedicinalProductPackagedBatchIdentifier, IMedicinalProductPackagedBatchIdentifier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set outerPackaging
   * A number appearing on the outer packaging of a specific batch
   */
  setOuterPackaging(outerPackaging: IIdentifier): this {
    this.data.outerPackaging = outerPackaging;
    return this;
  }

  /**
   * Set immediatePackaging
   * A number appearing on the immediate packaging (and not the outer packaging)
   */
  setImmediatePackaging(immediatePackaging: IIdentifier): this {
    this.data.immediatePackaging = immediatePackaging;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPackagedBatchIdentifier instance
   */
  build(): MedicinalProductPackagedBatchIdentifier {
    return new MedicinalProductPackagedBatchIdentifier(this.data);
  }

  /**
   * Build and validate the MedicinalProductPackagedBatchIdentifier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPackagedBatchIdentifier> {
    const medicinalProductPackagedBatchIdentifier = this.build();
    await medicinalProductPackagedBatchIdentifier.validateOrThrow();
    return medicinalProductPackagedBatchIdentifier;
  }
}
