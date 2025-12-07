import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Medication } from '../../models/resources/Medication.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedication,
  IMedicationBatch,
  IMedicationIngredient,
  IQuantity,
  IReference,
  MedicationStatusType,
} from '@fhir-toolkit/r5-types';

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
   * Set marketingAuthorizationHolder
   * Organization that has authorization to market medication
   */
  setMarketingAuthorizationHolder(marketingAuthorizationHolder: IReference<'Organization'>): this {
    this.data.marketingAuthorizationHolder = marketingAuthorizationHolder;
    return this;
  }

  /**
   * Set doseForm
   * powder | tablets | capsule +
   */
  setDoseForm(doseForm: ICodeableConcept): this {
    this.data.doseForm = doseForm;
    return this;
  }

  /**
   * Set totalVolume
   * When the specified product code does not infer a package size, this is the specific amount of drug in the product
   */
  setTotalVolume(totalVolume: IQuantity): this {
    this.data.totalVolume = totalVolume;
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

  /**
   * Set definition
   * Knowledge about this medication
   */
  setDefinition(definition: IReference<'MedicationKnowledge'>): this {
    this.data.definition = definition;
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
