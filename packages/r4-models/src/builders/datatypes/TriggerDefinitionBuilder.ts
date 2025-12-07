import { ElementBuilder } from '../base/ElementBuilder.js';
import { TriggerDefinition } from '../../models/datatypes/TriggerDefinition.js';
import type {
  IDataRequirement,
  IExpression,
  IReference,
  ITiming,
  ITriggerDefinition,
  TriggerTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * TriggerDefinitionBuilder - Fluent builder for TriggerDefinition datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const triggerDefinition = new TriggerDefinitionBuilder()
 *   .setType(value)
 *   .addData({ ... })
 *   .build();
 */
export class TriggerDefinitionBuilder extends ElementBuilder<TriggerDefinition, ITriggerDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended
   */
  setType(type: TriggerTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set name
   * Name or URI that identifies the event
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set condition
   * Whether the event triggers (boolean expression)
   */
  setCondition(condition: IExpression): this {
    this.data.condition = condition;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set timing choice type
   * @param type - 'Timing' | 'Reference' | 'Date' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTiming('Timing', value)
   */
  setTiming<T extends 'Timing' | 'Reference' | 'Date' | 'DateTime'>(
    type: T,
    value: string
  ): this {
    const key = `timing${type}` as keyof ITriggerDefinition;
    const otherKeys: (keyof ITriggerDefinition)[] = [];
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof ITriggerDefinition);
      otherKeys.push('_timingTiming' as keyof ITriggerDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('timingReference' as keyof ITriggerDefinition);
      otherKeys.push('_timingReference' as keyof ITriggerDefinition);
    }
    if (type !== 'Date') {
      otherKeys.push('timingDate' as keyof ITriggerDefinition);
      otherKeys.push('_timingDate' as keyof ITriggerDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof ITriggerDefinition);
      otherKeys.push('_timingDateTime' as keyof ITriggerDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add data
   * Triggering data of the event (multiple = 'and')
   */
  addData(data: IDataRequirement): this {
    return this.addToArray('data', data);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TriggerDefinition instance
   */
  build(): TriggerDefinition {
    return new TriggerDefinition(this.data);
  }

  /**
   * Build and validate the TriggerDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TriggerDefinition> {
    const triggerDefinition = this.build();
    await triggerDefinition.validateOrThrow();
    return triggerDefinition;
  }
}
