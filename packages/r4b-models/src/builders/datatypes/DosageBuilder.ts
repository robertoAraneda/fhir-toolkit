import { ElementBuilder } from '../base/ElementBuilder.js';
import { Dosage } from '../../models/datatypes/Dosage.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDosage,
  IDosageDoseAndRate,
  IQuantity,
  IRatio,
  ITiming,
} from '@fhir-toolkit/r4b-types';

/**
 * DosageBuilder - Fluent builder for Dosage datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const dosage = new DosageBuilder()
 *   .setSequence(value)
 *   .addAdditionalInstruction({ ... })
 *   .build();
 */
export class DosageBuilder extends ElementBuilder<Dosage, IDosage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * The order of the dosage instructions
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set text
   * Free text dosage instructions e.g. SIG
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set patientInstruction
   * Patient or consumer oriented instructions
   */
  setPatientInstruction(patientInstruction: string): this {
    this.data.patientInstruction = patientInstruction;
    return this;
  }

  /**
   * Set timing
   * When medication should be administered
   */
  setTiming(timing: ITiming): this {
    this.data.timing = timing;
    return this;
  }

  /**
   * Set site
   * Body site to administer to
   */
  setSite(site: ICodeableConcept): this {
    this.data.site = site;
    return this;
  }

  /**
   * Set route
   * How drug should enter body
   */
  setRoute(route: ICodeableConcept): this {
    this.data.route = route;
    return this;
  }

  /**
   * Set method
   * Technique for administering medication
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set maxDosePerPeriod
   * Upper limit on medication per unit of time
   */
  setMaxDosePerPeriod(maxDosePerPeriod: IRatio): this {
    this.data.maxDosePerPeriod = maxDosePerPeriod;
    return this;
  }

  /**
   * Set maxDosePerAdministration
   * Upper limit on medication per administration
   */
  setMaxDosePerAdministration(maxDosePerAdministration: IQuantity): this {
    this.data.maxDosePerAdministration = maxDosePerAdministration;
    return this;
  }

  /**
   * Set maxDosePerLifetime
   * Upper limit on medication per lifetime of the patient
   */
  setMaxDosePerLifetime(maxDosePerLifetime: IQuantity): this {
    this.data.maxDosePerLifetime = maxDosePerLifetime;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set asNeeded choice type (asNeededBoolean, asNeededCodeableConcept)
   * @param type - 'Boolean' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAsNeeded('Boolean', value)
   */
  setAsNeeded<T extends 'Boolean' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `asNeeded${type}` as keyof IDosage;
    const otherKeys: (keyof IDosage)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('asNeededBoolean' as keyof IDosage);
      otherKeys.push('_asNeededBoolean' as keyof IDosage);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('asNeededCodeableConcept' as keyof IDosage);
      otherKeys.push('_asNeededCodeableConcept' as keyof IDosage);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add additionalInstruction
   * Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness"
   */
  addAdditionalInstruction(additionalInstruction: ICodeableConcept): this {
    return this.addToArray('additionalInstruction', additionalInstruction);
  }

  /**
   * Add doseAndRate
   * Amount of medication administered
   */
  addDoseAndRate(doseAndRate: IDosageDoseAndRate): this {
    return this.addToArray('doseAndRate', doseAndRate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Dosage instance
   */
  build(): Dosage {
    return new Dosage(this.data);
  }

  /**
   * Build and validate the Dosage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Dosage> {
    const dosage = this.build();
    await dosage.validateOrThrow();
    return dosage;
  }
}
