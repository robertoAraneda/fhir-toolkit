import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GoalTarget } from '../../models/backbones/GoalTarget.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IGoalTarget,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r4-types';

/**
 * GoalTargetBuilder - Fluent builder for GoalTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const goalTarget = new GoalTargetBuilder()
 *   .setMeasure(value)
 *   .build();
 */
export class GoalTargetBuilder extends BackboneElementBuilder<GoalTarget, IGoalTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set measure
   * The parameter whose value is being tracked
   */
  setMeasure(measure: ICodeableConcept): this {
    this.data.measure = measure;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set detail choice type (detailQuantity, detailRange, detailCodeableConcept, detailString, detailBoolean, detailInteger, detailRatio)
   * @param type - 'Quantity' | 'Range' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Ratio'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDetail('Quantity', value)
   */
  setDetail<T extends 'Quantity' | 'Range' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Ratio'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `detail${type}` as keyof IGoalTarget;
    const otherKeys: (keyof IGoalTarget)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('detailQuantity' as keyof IGoalTarget);
      otherKeys.push('_detailQuantity' as keyof IGoalTarget);
    }
    if (type !== 'Range') {
      otherKeys.push('detailRange' as keyof IGoalTarget);
      otherKeys.push('_detailRange' as keyof IGoalTarget);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('detailCodeableConcept' as keyof IGoalTarget);
      otherKeys.push('_detailCodeableConcept' as keyof IGoalTarget);
    }
    if (type !== 'String') {
      otherKeys.push('detailString' as keyof IGoalTarget);
      otherKeys.push('_detailString' as keyof IGoalTarget);
    }
    if (type !== 'Boolean') {
      otherKeys.push('detailBoolean' as keyof IGoalTarget);
      otherKeys.push('_detailBoolean' as keyof IGoalTarget);
    }
    if (type !== 'Integer') {
      otherKeys.push('detailInteger' as keyof IGoalTarget);
      otherKeys.push('_detailInteger' as keyof IGoalTarget);
    }
    if (type !== 'Ratio') {
      otherKeys.push('detailRatio' as keyof IGoalTarget);
      otherKeys.push('_detailRatio' as keyof IGoalTarget);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set due choice type (dueDate, dueDuration)
   * @param type - 'Date' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDue('Date', value)
   */
  setDue<T extends 'Date' | 'Duration'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `due${type}` as keyof IGoalTarget;
    const otherKeys: (keyof IGoalTarget)[] = [];
    if (type !== 'Date') {
      otherKeys.push('dueDate' as keyof IGoalTarget);
      otherKeys.push('_dueDate' as keyof IGoalTarget);
    }
    if (type !== 'Duration') {
      otherKeys.push('dueDuration' as keyof IGoalTarget);
      otherKeys.push('_dueDuration' as keyof IGoalTarget);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GoalTarget instance
   */
  build(): GoalTarget {
    return new GoalTarget(this.data);
  }

  /**
   * Build and validate the GoalTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GoalTarget> {
    const goalTarget = this.build();
    await goalTarget.validateOrThrow();
    return goalTarget;
  }
}
