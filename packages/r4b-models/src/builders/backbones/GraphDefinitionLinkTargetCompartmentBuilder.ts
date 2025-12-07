import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GraphDefinitionLinkTargetCompartment } from '../../models/backbones/GraphDefinitionLinkTargetCompartment.js';
import type {
  CompartmentTypeType,
  GraphCompartmentRuleType,
  GraphCompartmentUseType,
  IGraphDefinitionLinkTargetCompartment,
} from '@fhir-toolkit/r4b-types';

/**
 * GraphDefinitionLinkTargetCompartmentBuilder - Fluent builder for GraphDefinitionLinkTargetCompartment backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinitionLinkTargetCompartment = new GraphDefinitionLinkTargetCompartmentBuilder()
 *   .setUse(value)
 *   .build();
 */
export class GraphDefinitionLinkTargetCompartmentBuilder extends BackboneElementBuilder<GraphDefinitionLinkTargetCompartment, IGraphDefinitionLinkTargetCompartment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * condition | requirement
   */
  setUse(use: GraphCompartmentUseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set code
   * Patient | Encounter | RelatedPerson | Practitioner | Device
   */
  setCode(code: CompartmentTypeType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set rule
   * identical | matching | different | custom
   */
  setRule(rule: GraphCompartmentRuleType): this {
    this.data.rule = rule;
    return this;
  }

  /**
   * Set expression
   * Custom rule, as a FHIRPath expression
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  /**
   * Set description
   * Documentation for FHIRPath expression
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GraphDefinitionLinkTargetCompartment instance
   */
  build(): GraphDefinitionLinkTargetCompartment {
    return new GraphDefinitionLinkTargetCompartment(this.data);
  }

  /**
   * Build and validate the GraphDefinitionLinkTargetCompartment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GraphDefinitionLinkTargetCompartment> {
    const graphDefinitionLinkTargetCompartment = this.build();
    await graphDefinitionLinkTargetCompartment.validateOrThrow();
    return graphDefinitionLinkTargetCompartment;
  }
}
