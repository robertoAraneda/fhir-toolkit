import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationActionRelatedAction } from '../../models/backbones/RequestOrchestrationActionRelatedAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IRange,
  IRequestOrchestrationActionRelatedAction,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionRelatedActionBuilder - Fluent builder for RequestOrchestrationActionRelatedAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationActionRelatedAction = new RequestOrchestrationActionRelatedActionBuilder()
 *   .setTargetId(value)
 *   .build();
 */
export class RequestOrchestrationActionRelatedActionBuilder extends BackboneElementBuilder<RequestOrchestrationActionRelatedAction, IRequestOrchestrationActionRelatedAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set targetId
   * What action this is related to
   */
  setTargetId(targetId: string): this {
    this.data.targetId = targetId;
    return this;
  }

  /**
   * Set relationship
   * before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
   */
  setRelationship(relationship: ActionRelationshipTypeType): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set endRelationship
   * before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
   */
  setEndRelationship(endRelationship: ActionRelationshipTypeType): this {
    this.data.endRelationship = endRelationship;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set offset choice type (offsetDuration, offsetRange)
   * @param type - 'Duration' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOffset('Duration', value)
   */
  setOffset<T extends 'Duration' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `offset${type}` as keyof IRequestOrchestrationActionRelatedAction;
    const otherKeys: (keyof IRequestOrchestrationActionRelatedAction)[] = [];
    if (type !== 'Duration') {
      otherKeys.push('offsetDuration' as keyof IRequestOrchestrationActionRelatedAction);
      otherKeys.push('_offsetDuration' as keyof IRequestOrchestrationActionRelatedAction);
    }
    if (type !== 'Range') {
      otherKeys.push('offsetRange' as keyof IRequestOrchestrationActionRelatedAction);
      otherKeys.push('_offsetRange' as keyof IRequestOrchestrationActionRelatedAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestOrchestrationActionRelatedAction instance
   */
  build(): RequestOrchestrationActionRelatedAction {
    return new RequestOrchestrationActionRelatedAction(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationActionRelatedAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationActionRelatedAction> {
    const requestOrchestrationActionRelatedAction = this.build();
    await requestOrchestrationActionRelatedAction.validateOrThrow();
    return requestOrchestrationActionRelatedAction;
  }
}
