import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionRelatedAction } from '../../models/backbones/PlanDefinitionActionRelatedAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IPlanDefinitionActionRelatedAction,
  IRange,
} from '@fhir-toolkit/r4-types';

/**
 * PlanDefinitionActionRelatedActionBuilder - Fluent builder for PlanDefinitionActionRelatedAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionRelatedAction = new PlanDefinitionActionRelatedActionBuilder()
 *   .setActionId(value)
 *   .build();
 */
export class PlanDefinitionActionRelatedActionBuilder extends BackboneElementBuilder<PlanDefinitionActionRelatedAction, IPlanDefinitionActionRelatedAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set actionId
   * What action is this related to
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
    const key = `offset${type}` as keyof IPlanDefinitionActionRelatedAction;
    const otherKeys: (keyof IPlanDefinitionActionRelatedAction)[] = [];
    if (type !== 'Duration') {
      otherKeys.push('offsetDuration' as keyof IPlanDefinitionActionRelatedAction);
      otherKeys.push('_offsetDuration' as keyof IPlanDefinitionActionRelatedAction);
    }
    if (type !== 'Range') {
      otherKeys.push('offsetRange' as keyof IPlanDefinitionActionRelatedAction);
      otherKeys.push('_offsetRange' as keyof IPlanDefinitionActionRelatedAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActionRelatedAction instance
   */
  build(): PlanDefinitionActionRelatedAction {
    return new PlanDefinitionActionRelatedAction(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionRelatedAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionRelatedAction> {
    const planDefinitionActionRelatedAction = this.build();
    await planDefinitionActionRelatedAction.validateOrThrow();
    return planDefinitionActionRelatedAction;
  }
}
