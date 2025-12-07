import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceStatistic } from '../../models/backbones/EvidenceStatistic.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEvidenceStatistic,
  IEvidenceStatisticAttributeEstimate,
  IEvidenceStatisticModelCharacteristic,
  IEvidenceStatisticSampleSize,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceStatisticBuilder - Fluent builder for EvidenceStatistic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceStatistic = new EvidenceStatisticBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceStatisticBuilder extends BackboneElementBuilder<EvidenceStatistic, IEvidenceStatistic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of content
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set statisticType
   * Type of statistic, eg relative risk
   */
  setStatisticType(statisticType: ICodeableConcept): this {
    this.data.statisticType = statisticType;
    return this;
  }

  /**
   * Set category
   * Associated category for categorical variable
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set quantity
   * Statistic value
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set numberOfEvents
   * The number of events associated with the statistic
   */
  setNumberOfEvents(numberOfEvents: number): this {
    this.data.numberOfEvents = numberOfEvents;
    return this;
  }

  /**
   * Set numberAffected
   * The number of participants affected
   */
  setNumberAffected(numberAffected: number): this {
    this.data.numberAffected = numberAffected;
    return this;
  }

  /**
   * Set sampleSize
   * Number of samples in the statistic
   */
  setSampleSize(sampleSize: IEvidenceStatisticSampleSize): this {
    this.data.sampleSize = sampleSize;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Footnotes and/or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add attributeEstimate
   * An attribute of the Statistic
   */
  addAttributeEstimate(attributeEstimate: IEvidenceStatisticAttributeEstimate): this {
    return this.addToArray('attributeEstimate', attributeEstimate);
  }

  /**
   * Add modelCharacteristic
   * An aspect of the statistical model
   */
  addModelCharacteristic(modelCharacteristic: IEvidenceStatisticModelCharacteristic): this {
    return this.addToArray('modelCharacteristic', modelCharacteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceStatistic instance
   */
  build(): EvidenceStatistic {
    return new EvidenceStatistic(this.data);
  }

  /**
   * Build and validate the EvidenceStatistic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceStatistic> {
    const evidenceStatistic = this.build();
    await evidenceStatistic.validateOrThrow();
    return evidenceStatistic;
  }
}
