import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestGroupActionRelatedAction } from '../../models/backbones/RequestGroupActionRelatedAction.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IRange,
  IRequestGroupActionRelatedAction,
} from '@fhir-toolkit/r4-types';

/**
 * RequestGroupActionRelatedActionBuilder - Fluent builder for RequestGroupActionRelatedAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestGroupActionRelatedAction = new RequestGroupActionRelatedActionBuilder()
 *   .setActionId(value)
 *   .build();
 */
export class RequestGroupActionRelatedActionBuilder extends BackboneElementBuilder<RequestGroupActionRelatedAction, IRequestGroupActionRelatedAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set actionId
   * What action this is related to
   */
  setActionId(actionId: string): this {
    this.data.actionId = actionId;
    return this;
  }

  /**
   * Set relationship
   * before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
   */
  setRelationship(relationship: ActionRelationshipTypeType): this {
    this.data.relationship = relationship;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set offset choice type
   * @param type - 'Duration' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOffset('Duration', value)
   */
  setOffset<T extends 'Duration' | 'Range'>(
    type: T,
    value: string
  ): this {
    const key = `offset${type}` as keyof IRequestGroupActionRelatedAction;
    const otherKeys: (keyof IRequestGroupActionRelatedAction)[] = [];
    if (type !== 'Duration') {
      otherKeys.push('offsetDuration' as keyof IRequestGroupActionRelatedAction);
      otherKeys.push('_offsetDuration' as keyof IRequestGroupActionRelatedAction);
    }
    if (type !== 'Range') {
      otherKeys.push('offsetRange' as keyof IRequestGroupActionRelatedAction);
      otherKeys.push('_offsetRange' as keyof IRequestGroupActionRelatedAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestGroupActionRelatedAction instance
   */
  build(): RequestGroupActionRelatedAction {
    return new RequestGroupActionRelatedAction(this.data);
  }

  /**
   * Build and validate the RequestGroupActionRelatedAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestGroupActionRelatedAction> {
    const requestGroupActionRelatedAction = this.build();
    await requestGroupActionRelatedAction.validateOrThrow();
    return requestGroupActionRelatedAction;
  }
}
