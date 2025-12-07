import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionCorrectiveAction } from '../../models/backbones/DeviceDefinitionCorrectiveAction.js';
import type {
  DeviceCorrectiveActionScopeType,
  IDeviceDefinitionCorrectiveAction,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionCorrectiveActionBuilder - Fluent builder for DeviceDefinitionCorrectiveAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionCorrectiveAction = new DeviceDefinitionCorrectiveActionBuilder()
 *   .setRecall(value)
 *   .build();
 */
export class DeviceDefinitionCorrectiveActionBuilder extends BackboneElementBuilder<DeviceDefinitionCorrectiveAction, IDeviceDefinitionCorrectiveAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set recall
   * Whether the corrective action was a recall
   */
  setRecall(recall: boolean): this {
    this.data.recall = recall;
    return this;
  }

  /**
   * Set scope
   * model | lot-numbers | serial-numbers
   */
  setScope(scope: DeviceCorrectiveActionScopeType): this {
    this.data.scope = scope;
    return this;
  }

  /**
   * Set period
   * Start and end dates of the  corrective action
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionCorrectiveAction instance
   */
  build(): DeviceDefinitionCorrectiveAction {
    return new DeviceDefinitionCorrectiveAction(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionCorrectiveAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionCorrectiveAction> {
    const deviceDefinitionCorrectiveAction = this.build();
    await deviceDefinitionCorrectiveAction.validateOrThrow();
    return deviceDefinitionCorrectiveAction;
  }
}
