import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from '../../models/backbones/AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod.js';
import type {
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  ICodeableConcept,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodBuilder - Fluent builder for AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodBuilder()
 *   .setTissue(value)
 *   .build();
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodBuilder extends BackboneElementBuilder<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod, IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set tissue
   * The type of tissue for which the withdrawal period applies, e.g. meat, milk
   */
  setTissue(tissue: ICodeableConcept): this {
    this.data.tissue = tissue;
    return this;
  }

  /**
   * Set value
   * A value for the time
   */
  setValue(value: IQuantity): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set supportingInformation
   * Extra information about the withdrawal period
   */
  setSupportingInformation(supportingInformation: string): this {
    this.data.supportingInformation = supportingInformation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod instance
   */
  build(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod(this.data);
  }

  /**
   * Build and validate the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod> {
    const administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod = this.build();
    await administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod.validateOrThrow();
    return administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }
}
