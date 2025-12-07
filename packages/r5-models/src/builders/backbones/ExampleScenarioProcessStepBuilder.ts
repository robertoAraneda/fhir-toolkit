import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioProcessStep } from '../../models/backbones/ExampleScenarioProcessStep.js';
import type {
  IExampleScenarioProcess,
  IExampleScenarioProcessStep,
  IExampleScenarioProcessStepAlternative,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioProcessStepBuilder - Fluent builder for ExampleScenarioProcessStep backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioProcessStep = new ExampleScenarioProcessStepBuilder()
 *   .setNumber(value)
 *   .addAlternative({ ... })
 *   .build();
 */
export class ExampleScenarioProcessStepBuilder extends BackboneElementBuilder<ExampleScenarioProcessStep, IExampleScenarioProcessStep> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set number
   * Sequential number of the step
   */
  setNumber(number: string): this {
    this.data.number = number;
    return this;
  }

  /**
   * Set process
   * Step is nested process
   */
  setProcess(process: IExampleScenarioProcess): this {
    this.data.process = process;
    return this;
  }

  /**
   * Set workflow
   * Step is nested workflow
   */
  setWorkflow(workflow: string): this {
    this.data.workflow = workflow;
    return this;
  }

  /**
   * Set operation
   * Step is simple action
   */
  setOperation(operation: IExampleScenarioProcessStepOperation): this {
    this.data.operation = operation;
    return this;
  }

  /**
   * Set pause
   * Pause in the flow?
   */
  setPause(pause: boolean): this {
    this.data.pause = pause;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

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
