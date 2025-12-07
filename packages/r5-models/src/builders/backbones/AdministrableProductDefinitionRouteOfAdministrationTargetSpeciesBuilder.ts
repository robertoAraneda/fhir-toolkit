import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdministrableProductDefinitionRouteOfAdministrationTargetSpecies } from '../../models/backbones/AdministrableProductDefinitionRouteOfAdministrationTargetSpecies.js';
import type {
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies,
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesBuilder - Fluent builder for AdministrableProductDefinitionRouteOfAdministrationTargetSpecies backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const administrableProductDefinitionRouteOfAdministrationTargetSpecies = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesBuilder()
 *   .setCode(value)
 *   .addWithdrawalPeriod({ ... })
 *   .build();
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesBuilder extends BackboneElementBuilder<AdministrableProductDefinitionRouteOfAdministrationTargetSpecies, IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies> {
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
  addWithdrawalPeriod(withdrawalPeriod: IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod): this {
    return this.addToArray('withdrawalPeriod', withdrawalPeriod);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdministrableProductDefinitionRouteOfAdministrationTargetSpecies instance
   */
  build(): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies(this.data);
  }

  /**
   * Build and validate the AdministrableProductDefinitionRouteOfAdministrationTargetSpecies instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdministrableProductDefinitionRouteOfAdministrationTargetSpecies> {
    const administrableProductDefinitionRouteOfAdministrationTargetSpecies = this.build();
    await administrableProductDefinitionRouteOfAdministrationTargetSpecies.validateOrThrow();
    return administrableProductDefinitionRouteOfAdministrationTargetSpecies;
  }
}
