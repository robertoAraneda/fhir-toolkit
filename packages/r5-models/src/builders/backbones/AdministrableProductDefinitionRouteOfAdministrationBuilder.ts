import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdministrableProductDefinitionRouteOfAdministration } from '../../models/backbones/AdministrableProductDefinitionRouteOfAdministration.js';
import type {
  IAdministrableProductDefinitionRouteOfAdministration,
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies,
  ICodeableConcept,
  IDuration,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * AdministrableProductDefinitionRouteOfAdministrationBuilder - Fluent builder for AdministrableProductDefinitionRouteOfAdministration backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const administrableProductDefinitionRouteOfAdministration = new AdministrableProductDefinitionRouteOfAdministrationBuilder()
 *   .setCode(value)
 *   .addTargetSpecies({ ... })
 *   .build();
 */
export class AdministrableProductDefinitionRouteOfAdministrationBuilder extends BackboneElementBuilder<AdministrableProductDefinitionRouteOfAdministration, IAdministrableProductDefinitionRouteOfAdministration> {
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
   * The first dose (dose quantity) administered can be specified for the product
   */
  setFirstDose(firstDose: IQuantity): this {
    this.data.firstDose = firstDose;
    return this;
  }

  /**
   * Set maxSingleDose
   * The maximum single dose that can be administered
   */
  setMaxSingleDose(maxSingleDose: IQuantity): this {
    this.data.maxSingleDose = maxSingleDose;
    return this;
  }

  /**
   * Set maxDosePerDay
   * The maximum dose quantity to be administered in any one 24-h period
   */
  setMaxDosePerDay(maxDosePerDay: IQuantity): this {
    this.data.maxDosePerDay = maxDosePerDay;
    return this;
  }

  /**
   * Set maxDosePerTreatmentPeriod
   * The maximum dose per treatment period that can be administered
   */
  setMaxDosePerTreatmentPeriod(maxDosePerTreatmentPeriod: IRatio): this {
    this.data.maxDosePerTreatmentPeriod = maxDosePerTreatmentPeriod;
    return this;
  }

  /**
   * Set maxTreatmentPeriod
   * The maximum treatment period during which the product can be administered
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
  addTargetSpecies(targetSpecy: IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies): this {
    return this.addToArray('targetSpecies', targetSpecy);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdministrableProductDefinitionRouteOfAdministration instance
   */
  build(): AdministrableProductDefinitionRouteOfAdministration {
    return new AdministrableProductDefinitionRouteOfAdministration(this.data);
  }

  /**
   * Build and validate the AdministrableProductDefinitionRouteOfAdministration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdministrableProductDefinitionRouteOfAdministration> {
    const administrableProductDefinitionRouteOfAdministration = this.build();
    await administrableProductDefinitionRouteOfAdministration.validateOrThrow();
    return administrableProductDefinitionRouteOfAdministration;
  }
}
