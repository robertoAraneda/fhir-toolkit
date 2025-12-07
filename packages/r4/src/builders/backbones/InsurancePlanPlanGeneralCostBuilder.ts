import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanPlanGeneralCost } from '../../models/backbones/InsurancePlanPlanGeneralCost.js';
import type {
  ICodeableConcept,
  IInsurancePlanPlanGeneralCost,
  IMoney,
} from '@fhir-toolkit/r4-types';

/**
 * InsurancePlanPlanGeneralCostBuilder - Fluent builder for InsurancePlanPlanGeneralCost backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanPlanGeneralCost = new InsurancePlanPlanGeneralCostBuilder()
 *   .setType(value)
 *   .build();
 */
export class InsurancePlanPlanGeneralCostBuilder extends BackboneElementBuilder<InsurancePlanPlanGeneralCost, IInsurancePlanPlanGeneralCost> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of cost
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set groupSize
   * Number of enrollees
   */
  setGroupSize(groupSize: number): this {
    this.data.groupSize = groupSize;
    return this;
  }

  /**
   * Set cost
   * Cost value
   */
  setCost(cost: IMoney): this {
    this.data.cost = cost;
    return this;
  }

  /**
   * Set comment
   * Additional cost information
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanPlanGeneralCost instance
   */
  build(): InsurancePlanPlanGeneralCost {
    return new InsurancePlanPlanGeneralCost(this.data);
  }

  /**
   * Build and validate the InsurancePlanPlanGeneralCost instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanPlanGeneralCost> {
    const insurancePlanPlanGeneralCost = this.build();
    await insurancePlanPlanGeneralCost.validateOrThrow();
    return insurancePlanPlanGeneralCost;
  }
}
