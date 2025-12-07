import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeKinetics } from '../../models/backbones/MedicationKnowledgeKinetics.js';
import type {
  IDuration,
  IMedicationKnowledgeKinetics,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeKineticsBuilder - Fluent builder for MedicationKnowledgeKinetics backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeKinetics = new MedicationKnowledgeKineticsBuilder()
 *   .setHalfLifePeriod(value)
 *   .addAreaUnderCurve({ ... })
 *   .build();
 */
export class MedicationKnowledgeKineticsBuilder extends BackboneElementBuilder<MedicationKnowledgeKinetics, IMedicationKnowledgeKinetics> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set halfLifePeriod
   * Time required for concentration in the body to decrease by half
   */
  setHalfLifePeriod(halfLifePeriod: IDuration): this {
    this.data.halfLifePeriod = halfLifePeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add areaUnderCurve
   * The drug concentration measured at certain discrete points in time
   */
  addAreaUnderCurve(areaUnderCurve: IQuantity): this {
    return this.addToArray('areaUnderCurve', areaUnderCurve);
  }

  /**
   * Add lethalDose50
   * The median lethal dose of a drug
   */
  addLethalDose50(lethalDose50: IQuantity): this {
    return this.addToArray('lethalDose50', lethalDose50);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeKinetics instance
   */
  build(): MedicationKnowledgeKinetics {
    return new MedicationKnowledgeKinetics(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeKinetics instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeKinetics> {
    const medicationKnowledgeKinetics = this.build();
    await medicationKnowledgeKinetics.validateOrThrow();
    return medicationKnowledgeKinetics;
  }
}
