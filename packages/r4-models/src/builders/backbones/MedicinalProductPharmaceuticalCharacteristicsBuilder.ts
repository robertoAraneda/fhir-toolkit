import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductPharmaceuticalCharacteristics } from '../../models/backbones/MedicinalProductPharmaceuticalCharacteristics.js';
import type {
  ICodeableConcept,
  IMedicinalProductPharmaceuticalCharacteristics,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPharmaceuticalCharacteristicsBuilder - Fluent builder for MedicinalProductPharmaceuticalCharacteristics backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPharmaceuticalCharacteristics = new MedicinalProductPharmaceuticalCharacteristicsBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MedicinalProductPharmaceuticalCharacteristicsBuilder extends BackboneElementBuilder<MedicinalProductPharmaceuticalCharacteristics, IMedicinalProductPharmaceuticalCharacteristics> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * A coded characteristic
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * The status of characteristic e.g. assigned or pending
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPharmaceuticalCharacteristics instance
   */
  build(): MedicinalProductPharmaceuticalCharacteristics {
    return new MedicinalProductPharmaceuticalCharacteristics(this.data);
  }

  /**
   * Build and validate the MedicinalProductPharmaceuticalCharacteristics instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPharmaceuticalCharacteristics> {
    const medicinalProductPharmaceuticalCharacteristics = this.build();
    await medicinalProductPharmaceuticalCharacteristics.validateOrThrow();
    return medicinalProductPharmaceuticalCharacteristics;
  }
}
