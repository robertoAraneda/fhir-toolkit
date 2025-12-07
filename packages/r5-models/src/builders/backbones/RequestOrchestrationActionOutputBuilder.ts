import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationActionOutput } from '../../models/backbones/RequestOrchestrationActionOutput.js';
import type {
  IDataRequirement,
  IRequestOrchestrationActionOutput,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionOutputBuilder - Fluent builder for RequestOrchestrationActionOutput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationActionOutput = new RequestOrchestrationActionOutputBuilder()
 *   .setTitle(value)
 *   .build();
 */
export class RequestOrchestrationActionOutputBuilder extends BackboneElementBuilder<RequestOrchestrationActionOutput, IRequestOrchestrationActionOutput> {
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
   * Build the RequestOrchestrationActionOutput instance
   */
  build(): RequestOrchestrationActionOutput {
    return new RequestOrchestrationActionOutput(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationActionOutput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationActionOutput> {
    const requestOrchestrationActionOutput = this.build();
    await requestOrchestrationActionOutput.validateOrThrow();
    return requestOrchestrationActionOutput;
  }
}
