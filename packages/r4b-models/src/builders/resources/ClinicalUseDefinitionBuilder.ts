import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ClinicalUseDefinition } from '../../models/resources/ClinicalUseDefinition.js';
import type {
  ClinicalUseDefinitionTypeType,
  IClinicalUseDefinition,
  IClinicalUseDefinitionContraindication,
  IClinicalUseDefinitionIndication,
  IClinicalUseDefinitionInteraction,
  IClinicalUseDefinitionUndesirableEffect,
  IClinicalUseDefinitionWarning,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClinicalUseDefinitionBuilder - Fluent builder for ClinicalUseDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinition = new ClinicalUseDefinitionBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ClinicalUseDefinitionBuilder extends DomainResourceBuilder<ClinicalUseDefinition, IClinicalUseDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * indication | contraindication | interaction | undesirable-effect | warning
   */
  setType(type: ClinicalUseDefinitionTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * Whether this is a current issue or one that has been retired etc
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set contraindication
   * Specifics for when this is a contraindication
   */
  setContraindication(contraindication: IClinicalUseDefinitionContraindication): this {
    this.data.contraindication = contraindication;
    return this;
  }

  /**
   * Set indication
   * Specifics for when this is an indication
   */
  setIndication(indication: IClinicalUseDefinitionIndication): this {
    this.data.indication = indication;
    return this;
  }

  /**
   * Set interaction
   * Specifics for when this is an interaction
   */
  setInteraction(interaction: IClinicalUseDefinitionInteraction): this {
    this.data.interaction = interaction;
    return this;
  }

  /**
   * Set undesirableEffect
   * A possible negative outcome from the use of this treatment
   */
  setUndesirableEffect(undesirableEffect: IClinicalUseDefinitionUndesirableEffect): this {
    this.data.undesirableEffect = undesirableEffect;
    return this;
  }

  /**
   * Set warning
   * Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'
   */
  setWarning(warning: IClinicalUseDefinitionWarning): this {
    this.data.warning = warning;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this issue
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose"
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add subject
   * The medication or procedure for which this is an indication
   */
  addSubject(subject: IReference<'MedicinalProductDefinition' | 'Medication' | 'ActivityDefinition' | 'PlanDefinition' | 'Device' | 'DeviceDefinition' | 'Substance'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add population
   * The population group to which this applies
   */
  addPopulation(population: IReference<'Group'>): this {
    return this.addToArray('population', population);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinition instance
   */
  build(): ClinicalUseDefinition {
    return new ClinicalUseDefinition(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinition> {
    const clinicalUseDefinition = this.build();
    await clinicalUseDefinition.validateOrThrow();
    return clinicalUseDefinition;
  }
}
