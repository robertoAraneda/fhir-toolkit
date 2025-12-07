import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationAdministrationDosage } from '../../models/backbones/MedicationAdministrationDosage.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationAdministrationDosage,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationAdministrationDosageBuilder - Fluent builder for MedicationAdministrationDosage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationAdministrationDosage = new MedicationAdministrationDosageBuilder()
 *   .setText(value)
 *   .build();
 */
export class MedicationAdministrationDosageBuilder extends BackboneElementBuilder<MedicationAdministrationDosage, IMedicationAdministrationDosage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set text
   * Free text dosage instructions e.g. SIG
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set site
   * Body site administered to
   */
  setSite(site: ICodeableConcept): this {
    this.data.site = site;
    return this;
  }

  /**
   * Set route
   * Path of substance into body
   */
  setRoute(route: ICodeableConcept): this {
    this.data.route = route;
    return this;
  }

  /**
   * Set method
   * How drug was administered
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set dose
   * Amount of medication per dose
   */
  setDose(dose: IQuantity): this {
    this.data.dose = dose;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set rate choice type
   * @param type - 'Ratio' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setRate('Ratio', value)
   */
  setRate<T extends 'Ratio' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `rate${type}` as keyof IMedicationAdministrationDosage;
    const otherKeys: (keyof IMedicationAdministrationDosage)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('rateRatio' as keyof IMedicationAdministrationDosage);
      otherKeys.push('_rateRatio' as keyof IMedicationAdministrationDosage);
    }
    if (type !== 'Quantity') {
      otherKeys.push('rateQuantity' as keyof IMedicationAdministrationDosage);
      otherKeys.push('_rateQuantity' as keyof IMedicationAdministrationDosage);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationAdministrationDosage instance
   */
  build(): MedicationAdministrationDosage {
    return new MedicationAdministrationDosage(this.data);
  }

  /**
   * Build and validate the MedicationAdministrationDosage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationAdministrationDosage> {
    const medicationAdministrationDosage = this.build();
    await medicationAdministrationDosage.validateOrThrow();
    return medicationAdministrationDosage;
  }
}
