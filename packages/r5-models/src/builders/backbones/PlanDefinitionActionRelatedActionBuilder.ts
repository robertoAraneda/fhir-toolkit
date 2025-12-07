import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionRelatedAction } from '../../models/backbones/PlanDefinitionActionRelatedAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IPlanDefinitionActionRelatedAction,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionActionRelatedActionBuilder - Fluent builder for PlanDefinitionActionRelatedAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionRelatedAction = new PlanDefinitionActionRelatedActionBuilder()
 *   .setTargetId(value)
 *   .build();
 */
export class PlanDefinitionActionRelatedActionBuilder extends BackboneElementBuilder<PlanDefinitionActionRelatedAction, IPlanDefinitionActionRelatedAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set targetId
   * What action is this related to
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
