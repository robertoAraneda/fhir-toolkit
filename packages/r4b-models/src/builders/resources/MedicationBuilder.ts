import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Medication } from '../../models/resources/Medication.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedication,
  IMedicationBatch,
  IMedicationIngredient,
  IRatio,
  IReference,
  MedicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationBuilder - Fluent builder for Medication resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medication = new MedicationBuilder()
 *   .setId('123')
 *   .setCode(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationBuilder extends DomainResourceBuilder<Medication, IMedication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Codes that identify this medication
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * active | inactive | entered-in-error
   */
  setStatus(status: MedicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set manufacturer
   * Manufacturer of the item
   */
  setManufacturer(manufacturer: IReference<'Organization'>): this {
    this.data.manufacturer = manufacturer;
    return this;
  }

  /**
   * Set form
   * powder | tablets | capsule +
   */
  setForm(form: ICodeableConcept): this {
    this.data.form = form;
    return this;
  }

  /**
   * Set amount
   * Amount of drug in package
   */
  setAmount(amount: IRatio): this {
    this.data.amount = amount;
    return this;
  }

  /**
   * Set batch
   * Details about packaged medications
   */
  setBatch(batch: IMedicationBatch): this {
    this.data.batch = batch;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this medication
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add ingredient
   * Active or inactive ingredient
   */
  addIngredient(ingredient: IMedicationIngredient): this {
    return this.addToArray('ingredient', ingredient);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Medication instance
   */
  build(): Medication {
    return new Medication(this.data);
  }

  /**
   * Build and validate the Medication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Medication> {
    const medication = this.build();
    await medication.validateOrThrow();
    return medication;
  }
}
