import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationActionInput } from '../../models/backbones/RequestOrchestrationActionInput.js';
import type {
  IDataRequirement,
  IRequestOrchestrationActionInput,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionInputBuilder - Fluent builder for RequestOrchestrationActionInput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationActionInput = new RequestOrchestrationActionInputBuilder()
 *   .setTitle(value)
 *   .build();
 */
export class RequestOrchestrationActionInputBuilder extends BackboneElementBuilder<RequestOrchestrationActionInput, IRequestOrchestrationActionInput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * User-visible title
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set requirement
   * What data is provided
   */
  setRequirement(requirement: IDataRequirement): this {
    this.data.requirement = requirement;
    return this;
  }

  /**
   * Set relatedData
   * What data is provided
   */
  setRelatedData(relatedData: string): this {
    this.data.relatedData = relatedData;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestOrchestrationActionInput instance
   */
  build(): RequestOrchestrationActionInput {
    return new RequestOrchestrationActionInput(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationActionInput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationActionInput> {
    const requestOrchestrationActionInput = this.build();
    await requestOrchestrationActionInput.validateOrThrow();
    return requestOrchestrationActionInput;
  }
}
