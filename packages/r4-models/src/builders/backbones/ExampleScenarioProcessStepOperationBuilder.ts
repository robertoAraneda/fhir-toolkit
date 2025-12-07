import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioProcessStepOperation } from '../../models/backbones/ExampleScenarioProcessStepOperation.js';
import type {
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r4-types';

/**
 * ExampleScenarioProcessStepOperationBuilder - Fluent builder for ExampleScenarioProcessStepOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioProcessStepOperation = new ExampleScenarioProcessStepOperationBuilder()
 *   .setNumber(value)
 *   .build();
 */
export class ExampleScenarioProcessStepOperationBuilder extends BackboneElementBuilder<ExampleScenarioProcessStepOperation, IExampleScenarioProcessStepOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set number
   * The sequential number of the interaction
   */
  setNumber(number: string): this {
    this.data.number = number;
    return this;
  }

  /**
   * Set type
   * The type of operation - CRUD
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set name
   * The human-friendly name of the interaction
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set initiator
   * Who starts the transaction
   */
  setInitiator(initiator: string): this {
    this.data.initiator = initiator;
    return this;
  }

  /**
   * Set receiver
   * Who receives the transaction
   */
  setReceiver(receiver: string): this {
    this.data.receiver = receiver;
    return this;
  }

  /**
   * Set description
   * A comment to be inserted in the diagram
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set initiatorActive
   * Whether the initiator is deactivated right after the transaction
   */
  setInitiatorActive(initiatorActive: boolean): this {
    this.data.initiatorActive = initiatorActive;
    return this;
  }

  /**
   * Set receiverActive
   * Whether the receiver is deactivated right after the transaction
   */
  setReceiverActive(receiverActive: boolean): this {
    this.data.receiverActive = receiverActive;
    return this;
  }

  /**
   * Set request
   * Each resource instance used by the initiator
   */
  setRequest(request: IExampleScenarioInstanceContainedInstance): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set response
   * Each resource instance used by the responder
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
