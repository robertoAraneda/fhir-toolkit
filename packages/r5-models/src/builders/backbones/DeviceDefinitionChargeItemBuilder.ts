import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionChargeItem } from '../../models/backbones/DeviceDefinitionChargeItem.js';
import type {
  ICodeableReference,
  IDeviceDefinitionChargeItem,
  IPeriod,
  IQuantity,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionChargeItemBuilder - Fluent builder for DeviceDefinitionChargeItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionChargeItem = new DeviceDefinitionChargeItemBuilder()
 *   .setChargeItemCode(value)
 *   .addUseContext({ ... })
 *   .build();
 */
export class DeviceDefinitionChargeItemBuilder extends BackboneElementBuilder<DeviceDefinitionChargeItem, IDeviceDefinitionChargeItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set chargeItemCode
   * The code or reference for the charge item
   */
  setChargeItemCode(chargeItemCode: ICodeableReference): this {
    this.data.chargeItemCode = chargeItemCode;
    return this;
  }

  /**
   * Set count
   * Coefficient applicable to the billing code
   */
  setCount(count: IQuantity): this {
    this.data.count = count;
    return this;
  }

  /**
   * Set effectivePeriod
   * A specific time period in which this charge item applies
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add useContext
   * The context to which this charge item applies
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionChargeItem instance
   */
  build(): DeviceDefinitionChargeItem {
    return new DeviceDefinitionChargeItem(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionChargeItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionChargeItem> {
    const deviceDefinitionChargeItem = this.build();
    await deviceDefinitionChargeItem.validateOrThrow();
    return deviceDefinitionChargeItem;
  }
}
