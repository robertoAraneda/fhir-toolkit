import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureGroupStratifierComponent } from '../../models/backbones/MeasureGroupStratifierComponent.js';
import type {
  ICodeableConcept,
  IExpression,
  IMeasureGroupStratifierComponent,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureGroupStratifierComponentBuilder - Fluent builder for MeasureGroupStratifierComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureGroupStratifierComponent = new MeasureGroupStratifierComponentBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MeasureGroupStratifierComponentBuilder extends BackboneElementBuilder<MeasureGroupStratifierComponent, IMeasureGroupStratifierComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Meaning of the stratifier component
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * The human readable description of this stratifier component
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set criteria
   * Component of how the measure should be stratified
   */
  setCriteria(criteria: IExpression): this {
    this.data.criteria = criteria;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureGroupStratifierComponent instance
   */
  build(): MeasureGroupStratifierComponent {
    return new MeasureGroupStratifierComponent(this.data);
  }

  /**
   * Build and validate the MeasureGroupStratifierComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureGroupStratifierComponent> {
    const measureGroupStratifierComponent = this.build();
    await measureGroupStratifierComponent.validateOrThrow();
    return measureGroupStratifierComponent;
  }
}
