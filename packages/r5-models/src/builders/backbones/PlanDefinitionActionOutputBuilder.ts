import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionOutput } from '../../models/backbones/PlanDefinitionActionOutput.js';
import type {
  IDataRequirement,
  IPlanDefinitionActionOutput,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionActionOutputBuilder - Fluent builder for PlanDefinitionActionOutput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionOutput = new PlanDefinitionActionOutputBuilder()
 *   .setTitle(value)
 *   .build();
 */
export class PlanDefinitionActionOutputBuilder extends BackboneElementBuilder<PlanDefinitionActionOutput, IPlanDefinitionActionOutput> {
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
   * Build the PlanDefinitionActionOutput instance
   */
  build(): PlanDefinitionActionOutput {
    return new PlanDefinitionActionOutput(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionOutput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionOutput> {
    const planDefinitionActionOutput = this.build();
    await planDefinitionActionOutput.validateOrThrow();
    return planDefinitionActionOutput;
  }
}
