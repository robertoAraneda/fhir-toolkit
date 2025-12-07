import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceStatisticAttributeEstimate } from '../../models/backbones/EvidenceStatisticAttributeEstimate.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEvidenceStatisticAttributeEstimate,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceStatisticAttributeEstimateBuilder - Fluent builder for EvidenceStatisticAttributeEstimate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceStatisticAttributeEstimate = new EvidenceStatisticAttributeEstimateBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceStatisticAttributeEstimateBuilder extends BackboneElementBuilder<EvidenceStatisticAttributeEstimate, IEvidenceStatisticAttributeEstimate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Textual description of the attribute estimate
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * The type of attribute estimate, e.g., confidence interval or p value
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set quantity
   * The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set level
   * Level of confidence interval, e.g., 0.95 for 95% confidence interval
   */
  setLevel(level: number): this {
    this.data.level = level;
    return this;
  }

  /**
   * Set range
   * Lower and upper bound values of the attribute estimate
   */
  setRange(range: IRange): this {
    this.data.range = range;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Footnote or explanatory note about the estimate
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add attributeEstimate
   * A nested attribute estimate; which is the attribute estimate of an attribute estimate
   */
  addAttributeEstimate(attributeEstimate: IEvidenceStatisticAttributeEstimate): this {
    return this.addToArray('attributeEstimate', attributeEstimate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceStatisticAttributeEstimate instance
   */
  build(): EvidenceStatisticAttributeEstimate {
    return new EvidenceStatisticAttributeEstimate(this.data);
  }

  /**
   * Build and validate the EvidenceStatisticAttributeEstimate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceStatisticAttributeEstimate> {
    const evidenceStatisticAttributeEstimate = this.build();
    await evidenceStatisticAttributeEstimate.validateOrThrow();
    return evidenceStatisticAttributeEstimate;
  }
}
