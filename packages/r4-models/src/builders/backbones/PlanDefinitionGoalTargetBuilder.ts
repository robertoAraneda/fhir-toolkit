import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionGoalTarget } from '../../models/backbones/PlanDefinitionGoalTarget.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IPlanDefinitionGoalTarget,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4-types';

/**
 * PlanDefinitionGoalTargetBuilder - Fluent builder for PlanDefinitionGoalTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionGoalTarget = new PlanDefinitionGoalTargetBuilder()
 *   .setMeasure(value)
 *   .build();
 */
export class PlanDefinitionGoalTargetBuilder extends BackboneElementBuilder<PlanDefinitionGoalTarget, IPlanDefinitionGoalTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set measure
   * The parameter whose value is to be tracked
   */
  setMeasure(measure: ICodeableConcept): this {
    this.data.measure = measure;
    return this;
  }

  /**
   * Set due
   * Reach goal within
   */
  setDue(due: IDuration): this {
    this.data.due = due;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set detail choice type (detailQuantity, detailRange, detailCodeableConcept)
   * @param type - 'Quantity' | 'Range' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDetail('Quantity', value)
   */
  setDetail<T extends 'Quantity' | 'Range' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `detail${type}` as keyof IPlanDefinitionGoalTarget;
    const otherKeys: (keyof IPlanDefinitionGoalTarget)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('detailQuantity' as keyof IPlanDefinitionGoalTarget);
      otherKeys.push('_detailQuantity' as keyof IPlanDefinitionGoalTarget);
    }
    if (type !== 'Range') {
      otherKeys.push('detailRange' as keyof IPlanDefinitionGoalTarget);
      otherKeys.push('_detailRange' as keyof IPlanDefinitionGoalTarget);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('detailCodeableConcept' as keyof IPlanDefinitionGoalTarget);
      otherKeys.push('_detailCodeableConcept' as keyof IPlanDefinitionGoalTarget);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionGoalTarget instance
   */
  build(): PlanDefinitionGoalTarget {
    return new PlanDefinitionGoalTarget(this.data);
  }

  /**
   * Build and validate the PlanDefinitionGoalTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionGoalTarget> {
    const planDefinitionGoalTarget = this.build();
    await planDefinitionGoalTarget.validateOrThrow();
    return planDefinitionGoalTarget;
  }
}
