import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifier } from '../../models/backbones/MeasureReportGroupStratifier.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifier,
  IMeasureReportGroupStratifierStratum,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureReportGroupStratifierBuilder - Fluent builder for MeasureReportGroupStratifier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifier = new MeasureReportGroupStratifierBuilder()
 *   .addCode({ ... })
 *   .build();
 */
export class MeasureReportGroupStratifierBuilder extends BackboneElementBuilder<MeasureReportGroupStratifier, IMeasureReportGroupStratifier> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * What stratifier of the group
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

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
