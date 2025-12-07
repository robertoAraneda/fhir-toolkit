import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureGroupStratifier } from '../../models/backbones/MeasureGroupStratifier.js';
import type {
  ICodeableConcept,
  IExpression,
  IMeasureGroupStratifier,
  IMeasureGroupStratifierComponent,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureGroupStratifierBuilder - Fluent builder for MeasureGroupStratifier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureGroupStratifier = new MeasureGroupStratifierBuilder()
 *   .setCode(value)
 *   .addComponent({ ... })
 *   .build();
 */
export class MeasureGroupStratifierBuilder extends BackboneElementBuilder<MeasureGroupStratifier, IMeasureGroupStratifier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Meaning of the stratifier
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * The human readable description of this stratifier
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set criteria
   * How the measure should be stratified
   */
  setCriteria(criteria: IExpression): this {
    this.data.criteria = criteria;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add component
   * Stratifier criteria component for the measure
   */
  addComponent(component: IMeasureGroupStratifierComponent): this {
    return this.addToArray('component', component);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureGroupStratifier instance
   */
  build(): MeasureGroupStratifier {
    return new MeasureGroupStratifier(this.data);
  }

  /**
   * Build and validate the MeasureGroupStratifier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureGroupStratifier> {
    const measureGroupStratifier = this.build();
    await measureGroupStratifier.validateOrThrow();
    return measureGroupStratifier;
  }
}
