import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioProcess } from '../../models/backbones/ExampleScenarioProcess.js';
import type {
  IExampleScenarioProcess,
  IExampleScenarioProcessStep,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioProcessBuilder - Fluent builder for ExampleScenarioProcess backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioProcess = new ExampleScenarioProcessBuilder()
 *   .setTitle(value)
 *   .addStep({ ... })
 *   .build();
 */
export class ExampleScenarioProcessBuilder extends BackboneElementBuilder<ExampleScenarioProcess, IExampleScenarioProcess> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * Label for procss
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Human-friendly description of the process
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set preConditions
   * Status before process starts
   */
  setPreConditions(preConditions: string): this {
    this.data.preConditions = preConditions;
    return this;
  }

  /**
   * Set postConditions
   * Status after successful completion
   */
  setPostConditions(postConditions: string): this {
    this.data.postConditions = postConditions;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add step
   * Event within of the process
   */
  addStep(step: IExampleScenarioProcessStep): this {
    return this.addToArray('step', step);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioProcess instance
   */
  build(): ExampleScenarioProcess {
    return new ExampleScenarioProcess(this.data);
  }

  /**
   * Build and validate the ExampleScenarioProcess instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioProcess> {
    const exampleScenarioProcess = this.build();
    await exampleScenarioProcess.validateOrThrow();
    return exampleScenarioProcess;
  }
}
