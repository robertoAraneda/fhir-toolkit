import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioProcessStep } from '../../models/backbones/ExampleScenarioProcessStep.js';
import type {
  IExampleScenarioProcess,
  IExampleScenarioProcessStep,
  IExampleScenarioProcessStepAlternative,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r4-types';

/**
 * ExampleScenarioProcessStepBuilder - Fluent builder for ExampleScenarioProcessStep backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioProcessStep = new ExampleScenarioProcessStepBuilder()
 *   .setPause(value)
 *   .addProcess({ ... })
 *   .build();
 */
export class ExampleScenarioProcessStepBuilder extends BackboneElementBuilder<ExampleScenarioProcessStep, IExampleScenarioProcessStep> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set pause
   * If there is a pause in the flow
   */
  setPause(pause: boolean): this {
    this.data.pause = pause;
    return this;
  }

  /**
   * Set operation
   * Each interaction or action
   */
  setOperation(operation: IExampleScenarioProcessStepOperation): this {
    this.data.operation = operation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add process
   * Nested process
   */
  addProcess(process: IExampleScenarioProcess): this {
    return this.addToArray('process', process);
  }

  /**
   * Add alternative
   * Alternate non-typical step action
   */
  addAlternative(alternative: IExampleScenarioProcessStepAlternative): this {
    return this.addToArray('alternative', alternative);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioProcessStep instance
   */
  build(): ExampleScenarioProcessStep {
    return new ExampleScenarioProcessStep(this.data);
  }

  /**
   * Build and validate the ExampleScenarioProcessStep instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioProcessStep> {
    const exampleScenarioProcessStep = this.build();
    await exampleScenarioProcessStep.validateOrThrow();
    return exampleScenarioProcessStep;
  }
}
