import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureSupplementalData } from '../../models/backbones/MeasureSupplementalData.js';
import type {
  ICodeableConcept,
  IExpression,
  IMeasureSupplementalData,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureSupplementalDataBuilder - Fluent builder for MeasureSupplementalData backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureSupplementalData = new MeasureSupplementalDataBuilder()
 *   .setLinkId(value)
 *   .addUsage({ ... })
 *   .build();
 */
export class MeasureSupplementalDataBuilder extends BackboneElementBuilder<MeasureSupplementalData, IMeasureSupplementalData> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Unique id for supplementalData in measure
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set code
   * Meaning of the supplemental data
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * The human readable description of this supplemental data
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set criteria
   * Expression describing additional data to be reported
   */
  setCriteria(criteria: IExpression): this {
    this.data.criteria = criteria;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add usage
   * supplemental-data | risk-adjustment-factor
   */
  addUsage(usage: ICodeableConcept): this {
    return this.addToArray('usage', usage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureSupplementalData instance
   */
  build(): MeasureSupplementalData {
    return new MeasureSupplementalData(this.data);
  }

  /**
   * Build and validate the MeasureSupplementalData instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureSupplementalData> {
    const measureSupplementalData = this.build();
    await measureSupplementalData.validateOrThrow();
    return measureSupplementalData;
  }
}
