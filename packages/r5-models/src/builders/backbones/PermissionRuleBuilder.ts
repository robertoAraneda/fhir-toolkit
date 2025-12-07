import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PermissionRule } from '../../models/backbones/PermissionRule.js';
import type {
  ConsentProvisionTypeType,
  ICodeableConcept,
  IPermissionRule,
  IPermissionRuleActivity,
  IPermissionRuleData,
} from '@fhir-toolkit/r5-types';

/**
 * PermissionRuleBuilder - Fluent builder for PermissionRule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const permissionRule = new PermissionRuleBuilder()
 *   .setType(value)
 *   .addData({ ... })
 *   .build();
 */
export class PermissionRuleBuilder extends BackboneElementBuilder<PermissionRule, IPermissionRule> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * deny | permit
   */
  setType(type: ConsentProvisionTypeType): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add data
   * The selection criteria to identify data that is within scope of this provision
   */
  addData(data: IPermissionRuleData): this {
    return this.addToArray('data', data);
  }

  /**
   * Add activity
   * A description or definition of which activities are allowed to be done on the data
   */
  addActivity(activity: IPermissionRuleActivity): this {
    return this.addToArray('activity', activity);
  }

  /**
   * Add limit
   * What limits apply to the use of the data
   */
  addLimit(limit: ICodeableConcept): this {
    return this.addToArray('limit', limit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PermissionRule instance
   */
  build(): PermissionRule {
    return new PermissionRule(this.data);
  }

  /**
   * Build and validate the PermissionRule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PermissionRule> {
    const permissionRule = this.build();
    await permissionRule.validateOrThrow();
    return permissionRule;
  }
}
