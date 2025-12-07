import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestGroupAction } from '../../models/backbones/RequestGroupAction.js';
import type {
  ActionCardinalityBehaviorType,
  ActionGroupingBehaviorType,
  ActionPrecheckBehaviorType,
  ActionRequiredBehaviorType,
  ActionSelectionBehaviorType,
  IAge,
  ICodeableConcept,
  IDuration,
  IPeriod,
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestGroupAction,
  IRequestGroupActionCondition,
  IRequestGroupActionRelatedAction,
  ITiming,
  RequestPriorityType,
} from '@fhir-toolkit/r4-types';

/**
 * RequestGroupActionBuilder - Fluent builder for RequestGroupAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestGroupAction = new RequestGroupActionBuilder()
 *   .setPrefix(value)
 *   .addCode({ ... })
 *   .build();
 */
export class RequestGroupActionBuilder extends BackboneElementBuilder<RequestGroupAction, IRequestGroupAction> {
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

  // ============================================================================
  // Choice Types
  // ============================================================================

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
    value: string
  ): this {
    const key = `timing${type}` as keyof IRequestGroupAction;
    const otherKeys: (keyof IRequestGroupAction)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof IRequestGroupAction);
      otherKeys.push('_timingDateTime' as keyof IRequestGroupAction);
    }
    if (type !== 'Age') {
      otherKeys.push('timingAge' as keyof IRequestGroupAction);
      otherKeys.push('_timingAge' as keyof IRequestGroupAction);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IRequestGroupAction);
      otherKeys.push('_timingPeriod' as keyof IRequestGroupAction);
    }
    if (type !== 'Duration') {
      otherKeys.push('timingDuration' as keyof IRequestGroupAction);
      otherKeys.push('_timingDuration' as keyof IRequestGroupAction);
    }
    if (type !== 'Range') {
      otherKeys.push('timingRange' as keyof IRequestGroupAction);
      otherKeys.push('_timingRange' as keyof IRequestGroupAction);
    }
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof IRequestGroupAction);
      otherKeys.push('_timingTiming' as keyof IRequestGroupAction);
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
   * Add condition
   * Whether or not the action is applicable
   */
  addCondition(condition: IRequestGroupActionCondition): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add relatedAction
   * Relationship to another action
   */
  addRelatedAction(relatedAction: IRequestGroupActionRelatedAction): this {
    return this.addToArray('relatedAction', relatedAction);
  }

  /**
   * Add participant
   * Who should perform the action
   */
  addParticipant(participant: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device'>): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add action
   * Sub action
   */
  addAction(action: IRequestGroupAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestGroupAction instance
   */
  build(): RequestGroupAction {
    return new RequestGroupAction(this.data);
  }

  /**
   * Build and validate the RequestGroupAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestGroupAction> {
    const requestGroupAction = this.build();
    await requestGroupAction.validateOrThrow();
    return requestGroupAction;
  }
}
