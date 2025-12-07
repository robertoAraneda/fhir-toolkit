import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductContraindication } from '../../models/resources/MedicinalProductContraindication.js';
import type {
  ICodeableConcept,
  IMedicinalProductContraindication,
  IMedicinalProductContraindicationOtherTherapy,
  IPopulation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductContraindicationBuilder - Fluent builder for MedicinalProductContraindication resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductContraindication = new MedicinalProductContraindicationBuilder()
 *   .setId('123')
 *   .setDisease(value)
 *   .addSubject({ ... })
 *   .build();
 */
export class MedicinalProductContraindicationBuilder extends DomainResourceBuilder<MedicinalProductContraindication, IMedicinalProductContraindication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set disease
   * The disease, symptom or procedure for the contraindication
   */
  setDisease(disease: ICodeableConcept): this {
    this.data.disease = disease;
    return this;
  }

  /**
   * Set diseaseStatus
   * The status of the disease or symptom for the contraindication
   */
  setDiseaseStatus(diseaseStatus: ICodeableConcept): this {
    this.data.diseaseStatus = diseaseStatus;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subject
   * The medication for which this is an indication
   */
  addSubject(subject: IReference<'MedicinalProduct' | 'Medication'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add comorbidity
   * A comorbidity (concurrent condition) or coinfection
   */
  addComorbidity(comorbidity: ICodeableConcept): this {
    return this.addToArray('comorbidity', comorbidity);
  }

  /**
   * Add therapeuticIndication
   * Information about the use of the medicinal product in relation to other therapies as part of the indication
   */
  addTherapeuticIndication(therapeuticIndication: IReference<'MedicinalProductIndication'>): this {
    return this.addToArray('therapeuticIndication', therapeuticIndication);
  }

  /**
   * Add otherTherapy
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication
   */
  addOtherTherapy(otherTherapy: IMedicinalProductContraindicationOtherTherapy): this {
    return this.addToArray('otherTherapy', otherTherapy);
  }

  /**
   * Add population
   * The population group to which this applies
   */
  addPopulation(population: IPopulation): this {
    return this.addToArray('population', population);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductContraindication instance
   */
  build(): MedicinalProductContraindication {
    return new MedicinalProductContraindication(this.data);
  }

  /**
   * Build and validate the MedicinalProductContraindication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductContraindication> {
    const medicinalProductContraindication = this.build();
    await medicinalProductContraindication.validateOrThrow();
    return medicinalProductContraindication;
  }
}
