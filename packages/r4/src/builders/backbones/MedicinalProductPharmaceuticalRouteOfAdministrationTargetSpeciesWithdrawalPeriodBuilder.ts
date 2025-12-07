import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from '../../models/backbones/MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.js';
import type {
  ICodeableConcept,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodBuilder - Fluent builder for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodBuilder()
 *   .setTissue(value)
 *   .build();
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodBuilder extends BackboneElementBuilder<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod, IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set tissue
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk
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
   * Build the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod instance
   */
  build(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(this.data);
  }

  /**
   * Build and validate the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod> {
    const medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = this.build();
    await medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.validateOrThrow();
    return medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }
}
