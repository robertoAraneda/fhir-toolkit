import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionAction } from '../../models/backbones/PlanDefinitionAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ActionCardinalityBehaviorType,
  ActionGroupingBehaviorType,
  ActionPrecheckBehaviorType,
  ActionRequiredBehaviorType,
  ActionSelectionBehaviorType,
  IAge,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IPeriod,
  IPlanDefinitionAction,
  IPlanDefinitionActionCondition,
  IPlanDefinitionActionDynamicValue,
  IPlanDefinitionActionParticipant,
  IPlanDefinitionActionRelatedAction,
  IRange,
  IReference,
  IRelatedArtifact,
  ITiming,
  ITriggerDefinition,
  RequestPriorityType,
} from '@fhir-toolkit/r4b-types';

/**
 * PlanDefinitionActionBuilder - Fluent builder for PlanDefinitionAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionAction = new PlanDefinitionActionBuilder()
 *   .setPrefix(value)
 *   .addCode({ ... })
 *   .build();
 */
export class PlanDefinitionActionBuilder extends BackboneElementBuilder<PlanDefinitionAction, IPlanDefinitionAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

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
   * Brief description of the action
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
   * Set subject choice type
   * @param type - 'CodeableConcept' | 'Reference' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof IPlanDefinitionAction;
    const otherKeys: (keyof IPlanDefinitionAction)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IPlanDefinitionAction);
      otherKeys.push('_subjectCodeableConcept' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IPlanDefinitionAction);
      otherKeys.push('_subjectReference' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Canonical') {
      otherKeys.push('subjectCanonical' as keyof IPlanDefinitionAction);
      otherKeys.push('_subjectCanonical' as keyof IPlanDefinitionAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set timing choice type
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
    const key = `timing${type}` as keyof IPlanDefinitionAction;
    const otherKeys: (keyof IPlanDefinitionAction)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof IPlanDefinitionAction);
      otherKeys.push('_timingDateTime' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Age') {
      otherKeys.push('timingAge' as keyof IPlanDefinitionAction);
      otherKeys.push('_timingAge' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IPlanDefinitionAction);
      otherKeys.push('_timingPeriod' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Duration') {
      otherKeys.push('timingDuration' as keyof IPlanDefinitionAction);
      otherKeys.push('_timingDuration' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Range') {
      otherKeys.push('timingRange' as keyof IPlanDefinitionAction);
      otherKeys.push('_timingRange' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof IPlanDefinitionAction);
      otherKeys.push('_timingTiming' as keyof IPlanDefinitionAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set definition choice type
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
    const key = `definition${type}` as keyof IPlanDefinitionAction;
    const otherKeys: (keyof IPlanDefinitionAction)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('definitionCanonical' as keyof IPlanDefinitionAction);
      otherKeys.push('_definitionCanonical' as keyof IPlanDefinitionAction);
    }
    if (type !== 'Uri') {
      otherKeys.push('definitionUri' as keyof IPlanDefinitionAction);
      otherKeys.push('_definitionUri' as keyof IPlanDefinitionAction);
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
   * Add reason
   * Why the action should be performed
   */
  addReason(reason: ICodeableConcept): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add documentation
   * Supporting documentation for the intended performer of the action
   */
  addDocumentation(documentation: IRelatedArtifact): this {
    return this.addToArray('documentation', documentation);
  }

  /**
   * Add goalId
   * What goals this action supports
   */
  addGoalId(goalId: string): this {
    return this.addToArray('goalId', goalId);
  }

  /**
   * Add trigger
   * When the action should be triggered
   */
  addTrigger(trigger: ITriggerDefinition): this {
    return this.addToArray('trigger', trigger);
  }

  /**
   * Add condition
   * Whether or not the action is applicable
   */
  addCondition(condition: IPlanDefinitionActionCondition): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add input
   * Input data requirements
   */
  addInput(input: IDataRequirement): this {
    return this.addToArray('input', input);
  }

  /**
   * Add output
   * Output data definition
   */
  addOutput(output: IDataRequirement): this {
    return this.addToArray('output', output);
  }

  /**
   * Add relatedAction
   * Relationship to another action
   */
  addRelatedAction(relatedAction: IPlanDefinitionActionRelatedAction): this {
    return this.addToArray('relatedAction', relatedAction);
  }

  /**
   * Add participant
   * Who should participate in the action
   */
  addParticipant(participant: IPlanDefinitionActionParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add dynamicValue
   * Dynamic aspects of the definition
   */
  addDynamicValue(dynamicValue: IPlanDefinitionActionDynamicValue): this {
    return this.addToArray('dynamicValue', dynamicValue);
  }

  /**
   * Add action
   * A sub-action
   */
  addAction(action: IPlanDefinitionAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionAction instance
   */
  build(): PlanDefinitionAction {
    return new PlanDefinitionAction(this.data);
  }

  /**
   * Build and validate the PlanDefinitionAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionAction> {
    const planDefinitionAction = this.build();
    await planDefinitionAction.validateOrThrow();
    return planDefinitionAction;
  }
}
