import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureTerm } from '../../models/backbones/MeasureTerm.js';
import type {
  ICodeableConcept,
  IMeasureTerm,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureTermBuilder - Fluent builder for MeasureTerm backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureTerm = new MeasureTermBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MeasureTermBuilder extends BackboneElementBuilder<MeasureTerm, IMeasureTerm> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * What term?
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set definition
   * Meaning of the term
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureTerm instance
   */
  build(): MeasureTerm {
    return new MeasureTerm(this.data);
  }

  /**
   * Build and validate the MeasureTerm instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureTerm> {
    const measureTerm = this.build();
    await measureTerm.validateOrThrow();
    return measureTerm;
  }
}
