import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies } from '../../models/backbones/MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.js';
import type {
  ICodeableConcept,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesBuilder - Fluent builder for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesBuilder()
 *   .setCode(value)
 *   .addWithdrawalPeriod({ ... })
 *   .build();
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesBuilder extends BackboneElementBuilder<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies, IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Coded expression for the species
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add withdrawalPeriod
   * A species specific time during which consumption of animal product is not appropriate
   */
  addWithdrawalPeriod(withdrawalPeriod: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod): this {
    return this.addToArray('withdrawalPeriod', withdrawalPeriod);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies instance
   */
  build(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(this.data);
  }

  /**
   * Build and validate the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies> {
    const medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = this.build();
    await medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.validateOrThrow();
    return medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
  }
}
