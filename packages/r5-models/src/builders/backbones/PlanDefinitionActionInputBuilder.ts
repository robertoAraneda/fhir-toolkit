import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionInput } from '../../models/backbones/PlanDefinitionActionInput.js';
import type {
  IDataRequirement,
  IPlanDefinitionActionInput,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionActionInputBuilder - Fluent builder for PlanDefinitionActionInput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionInput = new PlanDefinitionActionInputBuilder()
 *   .setTitle(value)
 *   .build();
 */
export class PlanDefinitionActionInputBuilder extends BackboneElementBuilder<PlanDefinitionActionInput, IPlanDefinitionActionInput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * User-visible title
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set requirement
   * What data is provided
   */
  setRequirement(requirement: IDataRequirement): this {
    this.data.requirement = requirement;
    return this;
  }

  /**
   * Set relatedData
   * What data is provided
   */
  setRelatedData(relatedData: string): this {
    this.data.relatedData = relatedData;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActionInput instance
   */
  build(): PlanDefinitionActionInput {
    return new PlanDefinitionActionInput(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionInput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionInput> {
    const planDefinitionActionInput = this.build();
    await planDefinitionActionInput.validateOrThrow();
    return planDefinitionActionInput;
  }
}
