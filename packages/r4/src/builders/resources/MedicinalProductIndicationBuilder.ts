import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductIndication } from '../../models/resources/MedicinalProductIndication.js';
import type {
  ICodeableConcept,
  IMedicinalProductIndication,
  IMedicinalProductIndicationOtherTherapy,
  IPopulation,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIndicationBuilder - Fluent builder for MedicinalProductIndication resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIndication = new MedicinalProductIndicationBuilder()
 *   .setId('123')
 *   .setDiseaseSymptomProcedure(value)
 *   .addSubject({ ... })
 *   .build();
 */
export class MedicinalProductIndicationBuilder extends DomainResourceBuilder<MedicinalProductIndication, IMedicinalProductIndication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set diseaseSymptomProcedure
   * The disease, symptom or procedure that is the indication for treatment
   */
  setDiseaseSymptomProcedure(diseaseSymptomProcedure: ICodeableConcept): this {
    this.data.diseaseSymptomProcedure = diseaseSymptomProcedure;
    return this;
  }

  /**
   * Set diseaseStatus
   * The status of the disease or symptom for which the indication applies
   */
  setDiseaseStatus(diseaseStatus: ICodeableConcept): this {
    this.data.diseaseStatus = diseaseStatus;
    return this;
  }

  /**
   * Set intendedEffect
   * The intended effect, aim or strategy to be achieved by the indication
   */
  setIntendedEffect(intendedEffect: ICodeableConcept): this {
    this.data.intendedEffect = intendedEffect;
    return this;
  }

  /**
   * Set duration
   * Timing or duration information as part of the indication
   */
  setDuration(duration: IQuantity): this {
    this.data.duration = duration;
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
   * Comorbidity (concurrent condition) or co-infection as part of the indication
   */
  addComorbidity(comorbidity: ICodeableConcept): this {
    return this.addToArray('comorbidity', comorbidity);
  }

  /**
   * Add otherTherapy
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication
   */
  addOtherTherapy(otherTherapy: IMedicinalProductIndicationOtherTherapy): this {
    return this.addToArray('otherTherapy', otherTherapy);
  }

  /**
   * Add undesirableEffect
   * Describe the undesirable effects of the medicinal product
   */
  addUndesirableEffect(undesirableEffect: IReference<'MedicinalProductUndesirableEffect'>): this {
    return this.addToArray('undesirableEffect', undesirableEffect);
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
   * Build the MedicinalProductIndication instance
   */
  build(): MedicinalProductIndication {
    return new MedicinalProductIndication(this.data);
  }

  /**
   * Build and validate the MedicinalProductIndication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIndication> {
    const medicinalProductIndication = this.build();
    await medicinalProductIndication.validateOrThrow();
    return medicinalProductIndication;
  }
}
