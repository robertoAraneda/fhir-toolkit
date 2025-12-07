import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifierStratumComponent } from '../../models/backbones/MeasureReportGroupStratifierStratumComponent.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifierStratumComponent,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureReportGroupStratifierStratumComponentBuilder - Fluent builder for MeasureReportGroupStratifierStratumComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifierStratumComponent = new MeasureReportGroupStratifierStratumComponentBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MeasureReportGroupStratifierStratumComponentBuilder extends BackboneElementBuilder<MeasureReportGroupStratifierStratumComponent, IMeasureReportGroupStratifierStratumComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * What stratifier component of the group
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set value
   * The stratum component value, e.g. male
   */
  setValue(value: ICodeableConcept): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroupStratifierStratumComponent instance
   */
  build(): MeasureReportGroupStratifierStratumComponent {
    return new MeasureReportGroupStratifierStratumComponent(this.data);
  }

  /**
   * Build and validate the MeasureReportGroupStratifierStratumComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroupStratifierStratumComponent> {
    const measureReportGroupStratifierStratumComponent = this.build();
    await measureReportGroupStratifierStratumComponent.validateOrThrow();
    return measureReportGroupStratifierStratumComponent;
  }
}
