import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioProcessStepOperation } from '../../models/backbones/ExampleScenarioProcessStepOperation.js';
import type {
  ICoding,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioProcessStepOperationBuilder - Fluent builder for ExampleScenarioProcessStepOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioProcessStepOperation = new ExampleScenarioProcessStepOperationBuilder()
 *   .setType(value)
 *   .build();
 */
export class ExampleScenarioProcessStepOperationBuilder extends BackboneElementBuilder<ExampleScenarioProcessStepOperation, IExampleScenarioProcessStepOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Kind of action
   */
  setType(type: ICoding): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set title
   * Label for step
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set initiator
   * Who starts the operation
   */
  setInitiator(initiator: string): this {
    this.data.initiator = initiator;
    return this;
  }

  /**
   * Set receiver
   * Who receives the operation
   */
  setReceiver(receiver: string): this {
    this.data.receiver = receiver;
    return this;
  }

  /**
   * Set description
   * Human-friendly description of the operation
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set initiatorActive
   * Initiator stays active?
   */
  setInitiatorActive(initiatorActive: boolean): this {
    this.data.initiatorActive = initiatorActive;
    return this;
  }

  /**
   * Set receiverActive
   * Receiver stays active?
   */
  setReceiverActive(receiverActive: boolean): this {
    this.data.receiverActive = receiverActive;
    return this;
  }

  /**
   * Set request
   * Instance transmitted on invocation
   */
  setRequest(request: IExampleScenarioInstanceContainedInstance): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set response
   * Instance transmitted on invocation response
   */
  setResponse(response: IExampleScenarioInstanceContainedInstance): this {
    this.data.response = response;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioProcessStepOperation instance
   */
  build(): ExampleScenarioProcessStepOperation {
    return new ExampleScenarioProcessStepOperation(this.data);
  }

  /**
   * Build and validate the ExampleScenarioProcessStepOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioProcessStepOperation> {
    const exampleScenarioProcessStepOperation = this.build();
    await exampleScenarioProcessStepOperation.validateOrThrow();
    return exampleScenarioProcessStepOperation;
  }
}
