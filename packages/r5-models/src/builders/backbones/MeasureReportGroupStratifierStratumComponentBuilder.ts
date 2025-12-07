import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifierStratumComponent } from '../../models/backbones/MeasureReportGroupStratifierStratumComponent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifierStratumComponent,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureReportGroupStratifierStratumComponentBuilder - Fluent builder for MeasureReportGroupStratifierStratumComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifierStratumComponent = new MeasureReportGroupStratifierStratumComponentBuilder()
 *   .setLinkId(value)
 *   .build();
 */
export class MeasureReportGroupStratifierStratumComponentBuilder extends BackboneElementBuilder<MeasureReportGroupStratifierStratumComponent, IMeasureReportGroupStratifierStratumComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Pointer to specific stratifier component from Measure
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set code
   * What stratifier component of the group
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueBoolean, valueQuantity, valueRange, valueReference)
   * @param type - 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMeasureReportGroupStratifierStratumComponent;
    const otherKeys: (keyof IMeasureReportGroupStratifierStratumComponent)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMeasureReportGroupStratifierStratumComponent);
      otherKeys.push('_valueCodeableConcept' as keyof IMeasureReportGroupStratifierStratumComponent);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IMeasureReportGroupStratifierStratumComponent);
      otherKeys.push('_valueBoolean' as keyof IMeasureReportGroupStratifierStratumComponent);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMeasureReportGroupStratifierStratumComponent);
      otherKeys.push('_valueQuantity' as keyof IMeasureReportGroupStratifierStratumComponent);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IMeasureReportGroupStratifierStratumComponent);
      otherKeys.push('_valueRange' as keyof IMeasureReportGroupStratifierStratumComponent);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IMeasureReportGroupStratifierStratumComponent);
      otherKeys.push('_valueReference' as keyof IMeasureReportGroupStratifierStratumComponent);
    }
    return this.setChoiceType(key, value, otherKeys);
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
