import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifier } from '../../models/backbones/MeasureReportGroupStratifier.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifier,
  IMeasureReportGroupStratifierStratum,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureReportGroupStratifierBuilder - Fluent builder for MeasureReportGroupStratifier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifier = new MeasureReportGroupStratifierBuilder()
 *   .setLinkId(value)
 *   .addStratum({ ... })
 *   .build();
 */
export class MeasureReportGroupStratifierBuilder extends BackboneElementBuilder<MeasureReportGroupStratifier, IMeasureReportGroupStratifier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Pointer to specific stratifier from Measure
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set code
   * What stratifier of the group
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add stratum
   * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
   */
  addStratum(stratum: IMeasureReportGroupStratifierStratum): this {
    return this.addToArray('stratum', stratum);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroupStratifier instance
   */
  build(): MeasureReportGroupStratifier {
    return new MeasureReportGroupStratifier(this.data);
  }

  /**
   * Build and validate the MeasureReportGroupStratifier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroupStratifier> {
    const measureReportGroupStratifier = this.build();
    await measureReportGroupStratifier.validateOrThrow();
    return measureReportGroupStratifier;
  }
}
