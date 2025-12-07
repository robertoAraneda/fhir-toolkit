import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductPharmaceuticalRouteOfAdministration } from '../../models/backbones/MedicinalProductPharmaceuticalRouteOfAdministration.js';
import type {
  ICodeableConcept,
  IDuration,
  IMedicinalProductPharmaceuticalRouteOfAdministration,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationBuilder - Fluent builder for MedicinalProductPharmaceuticalRouteOfAdministration backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPharmaceuticalRouteOfAdministration = new MedicinalProductPharmaceuticalRouteOfAdministrationBuilder()
 *   .setCode(value)
 *   .addTargetSpecies({ ... })
 *   .build();
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationBuilder extends BackboneElementBuilder<MedicinalProductPharmaceuticalRouteOfAdministration, IMedicinalProductPharmaceuticalRouteOfAdministration> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Coded expression for the route
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set firstDose
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement
   */
  setFirstDose(firstDose: IQuantity): this {
    this.data.firstDose = firstDose;
    return this;
  }

  /**
   * Set maxSingleDose
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement
   */
  setMaxSingleDose(maxSingleDose: IQuantity): this {
    this.data.maxSingleDose = maxSingleDose;
    return this;
  }

  /**
   * Set maxDosePerDay
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation
   */
  setMaxDosePerDay(maxDosePerDay: IQuantity): this {
    this.data.maxDosePerDay = maxDosePerDay;
    return this;
  }

  /**
   * Set maxDosePerTreatmentPeriod
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation
   */
  setMaxDosePerTreatmentPeriod(maxDosePerTreatmentPeriod: IRatio): this {
    this.data.maxDosePerTreatmentPeriod = maxDosePerTreatmentPeriod;
    return this;
  }

  /**
   * Set maxTreatmentPeriod
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation
   */
  setMaxTreatmentPeriod(maxTreatmentPeriod: IDuration): this {
    this.data.maxTreatmentPeriod = maxTreatmentPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add targetSpecies
   * A species for which this route applies
   */
  addTargetSpecies(targetSpecy: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies): this {
    return this.addToArray('targetSpecies', targetSpecy);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPharmaceuticalRouteOfAdministration instance
   */
  build(): MedicinalProductPharmaceuticalRouteOfAdministration {
    return new MedicinalProductPharmaceuticalRouteOfAdministration(this.data);
  }

  /**
   * Build and validate the MedicinalProductPharmaceuticalRouteOfAdministration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPharmaceuticalRouteOfAdministration> {
    const medicinalProductPharmaceuticalRouteOfAdministration = this.build();
    await medicinalProductPharmaceuticalRouteOfAdministration.validateOrThrow();
    return medicinalProductPharmaceuticalRouteOfAdministration;
  }
}
