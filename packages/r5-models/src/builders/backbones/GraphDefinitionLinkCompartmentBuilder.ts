import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GraphDefinitionLinkCompartment } from '../../models/backbones/GraphDefinitionLinkCompartment.js';
import type {
  CompartmentTypeType,
  GraphCompartmentRuleType,
  GraphCompartmentUseType,
  IGraphDefinitionLinkCompartment,
} from '@fhir-toolkit/r5-types';

/**
 * GraphDefinitionLinkCompartmentBuilder - Fluent builder for GraphDefinitionLinkCompartment backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinitionLinkCompartment = new GraphDefinitionLinkCompartmentBuilder()
 *   .setUse(value)
 *   .build();
 */
export class GraphDefinitionLinkCompartmentBuilder extends BackboneElementBuilder<GraphDefinitionLinkCompartment, IGraphDefinitionLinkCompartment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * where | requires
   */
  setUse(use: GraphCompartmentUseType): this {
    this.data.use = use;
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
   * Set code
   * Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare
   */
  setCode(code: CompartmentTypeType): this {
    this.data.code = code;
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
   * Build the GraphDefinitionLinkCompartment instance
   */
  build(): GraphDefinitionLinkCompartment {
    return new GraphDefinitionLinkCompartment(this.data);
  }

  /**
   * Build and validate the GraphDefinitionLinkCompartment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GraphDefinitionLinkCompartment> {
    const graphDefinitionLinkCompartment = this.build();
    await graphDefinitionLinkCompartment.validateOrThrow();
    return graphDefinitionLinkCompartment;
  }
}
