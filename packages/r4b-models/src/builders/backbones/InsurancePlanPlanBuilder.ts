import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanPlan } from '../../models/backbones/InsurancePlanPlan.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IInsurancePlanPlan,
  IInsurancePlanPlanGeneralCost,
  IInsurancePlanPlanSpecificCost,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * InsurancePlanPlanBuilder - Fluent builder for InsurancePlanPlan backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanPlan = new InsurancePlanPlanBuilder()
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class InsurancePlanPlanBuilder extends BackboneElementBuilder<InsurancePlanPlan, IInsurancePlanPlan> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of plan
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for Product
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add coverageArea
   * Where product applies
   */
  addCoverageArea(coverageArea: IReference<'Location'>): this {
    return this.addToArray('coverageArea', coverageArea);
  }

  /**
   * Add network
   * What networks provide coverage
   */
  addNetwork(network: IReference<'Organization'>): this {
    return this.addToArray('network', network);
  }

  /**
   * Add generalCost
   * Overall costs
   */
  addGeneralCost(generalCost: IInsurancePlanPlanGeneralCost): this {
    return this.addToArray('generalCost', generalCost);
  }

  /**
   * Add specificCost
   * Specific costs
   */
  addSpecificCost(specificCost: IInsurancePlanPlanSpecificCost): this {
    return this.addToArray('specificCost', specificCost);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanPlan instance
   */
  build(): InsurancePlanPlan {
    return new InsurancePlanPlan(this.data);
  }

  /**
   * Build and validate the InsurancePlanPlan instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanPlan> {
    const insurancePlanPlan = this.build();
    await insurancePlanPlan.validateOrThrow();
    return insurancePlanPlan;
  }
}
