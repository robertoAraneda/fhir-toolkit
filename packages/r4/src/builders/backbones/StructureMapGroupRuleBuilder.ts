import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupRule } from '../../models/backbones/StructureMapGroupRule.js';
import type {
  IStructureMapGroupRule,
  IStructureMapGroupRuleDependent,
  IStructureMapGroupRuleSource,
  IStructureMapGroupRuleTarget,
} from '@fhir-toolkit/r4-types';

/**
 * StructureMapGroupRuleBuilder - Fluent builder for StructureMapGroupRule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupRule = new StructureMapGroupRuleBuilder()
 *   .setName(value)
 *   .addSource({ ... })
 *   .build();
 */
export class StructureMapGroupRuleBuilder extends BackboneElementBuilder<StructureMapGroupRule, IStructureMapGroupRule> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of the rule for internal references
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set documentation
   * Documentation for this instance of data
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add source
   * Source inputs to the mapping
   */
  addSource(source: IStructureMapGroupRuleSource): this {
    return this.addToArray('source', source);
  }

  /**
   * Add target
   * Content to create because of this mapping rule
   */
  addTarget(target: IStructureMapGroupRuleTarget): this {
    return this.addToArray('target', target);
  }

  /**
   * Add rule
   * Rules contained in this rule
   */
  addRule(rule: IStructureMapGroupRule): this {
    return this.addToArray('rule', rule);
  }

  /**
   * Add dependent
   * Which other rules to apply in the context of this rule
   */
  addDependent(dependent: IStructureMapGroupRuleDependent): this {
    return this.addToArray('dependent', dependent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupRule instance
   */
  build(): StructureMapGroupRule {
    return new StructureMapGroupRule(this.data);
  }

  /**
   * Build and validate the StructureMapGroupRule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupRule> {
    const structureMapGroupRule = this.build();
    await structureMapGroupRule.validateOrThrow();
    return structureMapGroupRule;
  }
}
