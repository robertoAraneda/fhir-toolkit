import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PermissionRuleData } from '../../models/backbones/PermissionRuleData.js';
import type {
  ICoding,
  IExpression,
  IPeriod,
  IPermissionRuleData,
  IPermissionRuleDataResource,
} from '@fhir-toolkit/r5-types';

/**
 * PermissionRuleDataBuilder - Fluent builder for PermissionRuleData backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const permissionRuleData = new PermissionRuleDataBuilder()
 *   .setExpression(value)
 *   .addResource({ ... })
 *   .build();
 */
export class PermissionRuleDataBuilder extends BackboneElementBuilder<PermissionRuleData, IPermissionRuleData> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set expression
   * Expression identifying the data
   */
  setExpression(expression: IExpression): this {
    this.data.expression = expression;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add resource
   * Explicit FHIR Resource references
   */
  addResource(resource: IPermissionRuleDataResource): this {
    return this.addToArray('resource', resource);
  }

  /**
   * Add security
   * Security tag code on .meta.security
   */
  addSecurity(security: ICoding): this {
    return this.addToArray('security', security);
  }

  /**
   * Add period
   * Timeframe encompasing data create/update
   */
  addPeriod(period: IPeriod): this {
    return this.addToArray('period', period);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PermissionRuleData instance
   */
  build(): PermissionRuleData {
    return new PermissionRuleData(this.data);
  }

  /**
   * Build and validate the PermissionRuleData instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PermissionRuleData> {
    const permissionRuleData = this.build();
    await permissionRuleData.validateOrThrow();
    return permissionRuleData;
  }
}
