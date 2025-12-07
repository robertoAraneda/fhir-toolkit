import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationAction } from '../../models/backbones/RequestOrchestrationAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ActionCardinalityBehaviorType,
  ActionGroupingBehaviorType,
  ActionPrecheckBehaviorType,
  ActionRequiredBehaviorType,
  ActionSelectionBehaviorType,
  IAge,
  ICodeableConcept,
  ICodeableReference,
  IDuration,
  IPeriod,
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestOrchestrationAction,
  IRequestOrchestrationActionCondition,
  IRequestOrchestrationActionDynamicValue,
  IRequestOrchestrationActionInput,
  IRequestOrchestrationActionOutput,
  IRequestOrchestrationActionParticipant,
  IRequestOrchestrationActionRelatedAction,
  ITiming,
  RequestPriorityType,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionBuilder - Fluent builder for RequestOrchestrationAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationAction = new RequestOrchestrationActionBuilder()
 *   .setLinkId(value)
 *   .addCode({ ... })
 *   .build();
 */
export class RequestOrchestrationActionBuilder extends BackboneElementBuilder<RequestOrchestrationAction, IRequestOrchestrationAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Pointer to specific item from the PlanDefinition
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set prefix
   * User-visible prefix for the action (e.g. 1. or A.)
   */
  setPrefix(prefix: string): this {
    this.data.prefix = prefix;
    return this;
  }

  /**
   * Set title
   * User-visible title
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Short description of the action
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set textEquivalent
   * Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
   */
  setTextEquivalent(textEquivalent: string): this {
    this.data.textEquivalent = textEquivalent;
    return this;
  }

  /**
   * Set priority
   * routine | urgent | asap | stat
   */
  setPriority(priority: RequestPriorityType): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set location
   * Where it should happen
   */
  setLocation(location: ICodeableReference): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set type
   * create | update | remove | fire-event
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set groupingBehavior
   * visual-group | logical-group | sentence-group
   */
  setGroupingBehavior(groupingBehavior: ActionGroupingBehaviorType): this {
    this.data.groupingBehavior = groupingBehavior;
    return this;
  }

  /**
   * Set selectionBehavior
   * any | all | all-or-none | exactly-one | at-most-one | one-or-more
   */
  setSelectionBehavior(selectionBehavior: ActionSelectionBehaviorType): this {
    this.data.selectionBehavior = selectionBehavior;
    return this;
  }

  /**
   * Set requiredBehavior
   * must | could | must-unless-documented
   */
  setRequiredBehavior(requiredBehavior: ActionRequiredBehaviorType): this {
    this.data.requiredBehavior = requiredBehavior;
    return this;
  }

  /**
   * Set precheckBehavior
   * yes | no
   */
  setPrecheckBehavior(precheckBehavior: ActionPrecheckBehaviorType): this {
    this.data.precheckBehavior = precheckBehavior;
    return this;
  }

  /**
   * Set cardinalityBehavior
   * single | multiple
   */
  setCardinalityBehavior(cardinalityBehavior: ActionCardinalityBehaviorType): this {
    this.data.cardinalityBehavior = cardinalityBehavior;
    return this;
  }

  /**
   * Set resource
   * The target of the action
   */
  setResource(resource: IReference<'Resource'>): this {
    this.data.resource = resource;
    return this;
  }

  /**
   * Set transform
   * Transform to apply the template
   */
  setTransform(transform: string): this {
    this.data.transform = transform;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set timing choice type (timingDateTime, timingAge, timingPeriod, timingDuration, timingRange, timingTiming)
   * @param type - 'DateTime' | 'Age' | 'Period' | 'Duration' | 'Range' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTiming('DateTime', value)
   */
  setTiming<T extends 'DateTime' | 'Age' | 'Period' | 'Duration' | 'Range' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `timing${type}` as keyof IRequestOrchestrationAction;
    const otherKeys: (keyof IRequestOrchestrationAction)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof IRequestOrchestrationAction);
      otherKeys.push('_timingDateTime' as keyof IRequestOrchestrationAction);
    }
    if (type !== 'Age') {
      otherKeys.push('timingAge' as keyof IRequestOrchestrationAction);
      otherKeys.push('_timingAge' as keyof IRequestOrchestrationAction);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IRequestOrchestrationAction);
      otherKeys.push('_timingPeriod' as keyof IRequestOrchestrationAction);
    }
    if (type !== 'Duration') {
      otherKeys.push('timingDuration' as keyof IRequestOrchestrationAction);
      otherKeys.push('_timingDuration' as keyof IRequestOrchestrationAction);
    }
    if (type !== 'Range') {
      otherKeys.push('timingRange' as keyof IRequestOrchestrationAction);
      otherKeys.push('_timingRange' as keyof IRequestOrchestrationAction);
    }
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof IRequestOrchestrationAction);
      otherKeys.push('_timingTiming' as keyof IRequestOrchestrationAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set definition choice type (definitionCanonical, definitionUri)
   * @param type - 'Canonical' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefinition('Canonical', value)
   */
  setDefinition<T extends 'Canonical' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `definition${type}` as keyof IRequestOrchestrationAction;
    const otherKeys: (keyof IRequestOrchestrationAction)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('definitionCanonical' as keyof IRequestOrchestrationAction);
      otherKeys.push('_definitionCanonical' as keyof IRequestOrchestrationAction);
    }
    if (type !== 'Uri') {
      otherKeys.push('definitionUri' as keyof IRequestOrchestrationAction);
      otherKeys.push('_definitionUri' as keyof IRequestOrchestrationAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * Code representing the meaning of the action or sub-actions
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add documentation
   * Supporting documentation for the intended performer of the action
   */
  addDocumentation(documentation: IRelatedArtifact): this {
    return this.addToArray('documentation', documentation);
  }

  /**
   * Add goal
   * What goals
   */
  addGoal(goal: IReference<'Goal'>): this {
    return this.addToArray('goal', goal);
  }

  /**
   * Add condition
   * Whether or not the action is applicable
   */
  addCondition(condition: IRequestOrchestrationActionCondition): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add input
   * Input data requirements
   */
  addInput(input: IRequestOrchestrationActionInput): this {
    return this.addToArray('input', input);
  }

  /**
   * Add output
   * Output data definition
   */
  addOutput(output: IRequestOrchestrationActionOutput): this {
    return this.addToArray('output', output);
  }

  /**
   * Add relatedAction
   * Relationship to another action
   */
  addRelatedAction(relatedAction: IRequestOrchestrationActionRelatedAction): this {
    return this.addToArray('relatedAction', relatedAction);
  }

  /**
   * Add participant
   * Who should perform the action
   */
  addParticipant(participant: IRequestOrchestrationActionParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add dynamicValue
   * Dynamic aspects of the definition
   */
  addDynamicValue(dynamicValue: IRequestOrchestrationActionDynamicValue): this {
    return this.addToArray('dynamicValue', dynamicValue);
  }

  /**
   * Add action
   * Sub action
   */
  addAction(action: IRequestOrchestrationAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestOrchestrationAction instance
   */
  build(): RequestOrchestrationAction {
    return new RequestOrchestrationAction(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationAction> {
    const requestOrchestrationAction = this.build();
    await requestOrchestrationAction.validateOrThrow();
    return requestOrchestrationAction;
  }
}
