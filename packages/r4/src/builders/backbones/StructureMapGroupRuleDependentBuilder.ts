import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupRuleDependent } from '../../models/backbones/StructureMapGroupRuleDependent.js';
import type {
  IStructureMapGroupRuleDependent,
} from '@fhir-toolkit/r4-types';

/**
 * StructureMapGroupRuleDependentBuilder - Fluent builder for StructureMapGroupRuleDependent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupRuleDependent = new StructureMapGroupRuleDependentBuilder()
 *   .setName(value)
 *   .addVariable({ ... })
 *   .build();
 */
export class StructureMapGroupRuleDependentBuilder extends BackboneElementBuilder<StructureMapGroupRuleDependent, IStructureMapGroupRuleDependent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of a rule or group to apply
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add variable
   * Variable to pass to the rule or group
   */
  addVariable(variable: string): this {
    return this.addToArray('variable', variable);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupRuleDependent instance
   */
  build(): StructureMapGroupRuleDependent {
    return new StructureMapGroupRuleDependent(this.data);
  }

  /**
   * Build and validate the StructureMapGroupRuleDependent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupRuleDependent> {
    const structureMapGroupRuleDependent = this.build();
    await structureMapGroupRuleDependent.validateOrThrow();
    return structureMapGroupRuleDependent;
  }
}
