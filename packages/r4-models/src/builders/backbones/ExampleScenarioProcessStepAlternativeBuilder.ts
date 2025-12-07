import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioProcessStepAlternative } from '../../models/backbones/ExampleScenarioProcessStepAlternative.js';
import type {
  IExampleScenarioProcessStep,
  IExampleScenarioProcessStepAlternative,
} from '@fhir-toolkit/r4-types';

/**
 * ExampleScenarioProcessStepAlternativeBuilder - Fluent builder for ExampleScenarioProcessStepAlternative backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioProcessStepAlternative = new ExampleScenarioProcessStepAlternativeBuilder()
 *   .setTitle(value)
 *   .addStep({ ... })
 *   .build();
 */
export class ExampleScenarioProcessStepAlternativeBuilder extends BackboneElementBuilder<ExampleScenarioProcessStepAlternative, IExampleScenarioProcessStepAlternative> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * Label for alternative
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * A human-readable description of each option
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add step
   * What happens in each alternative option
   */
  addStep(step: IExampleScenarioProcessStep): this {
    return this.addToArray('step', step);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioProcessStepAlternative instance
   */
  build(): ExampleScenarioProcessStepAlternative {
    return new ExampleScenarioProcessStepAlternative(this.data);
  }

  /**
   * Build and validate the ExampleScenarioProcessStepAlternative instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioProcessStepAlternative> {
    const exampleScenarioProcessStepAlternative = this.build();
    await exampleScenarioProcessStepAlternative.validateOrThrow();
    return exampleScenarioProcessStepAlternative;
  }
}
