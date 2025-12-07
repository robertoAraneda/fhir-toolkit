import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionPackaging } from '../../models/backbones/DeviceDefinitionPackaging.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionPackaging,
  IDeviceDefinitionPackagingDistributor,
  IDeviceDefinitionUdiDeviceIdentifier,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionPackagingBuilder - Fluent builder for DeviceDefinitionPackaging backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionPackaging = new DeviceDefinitionPackagingBuilder()
 *   .setIdentifier(value)
 *   .addDistributor({ ... })
 *   .build();
 */
export class DeviceDefinitionPackagingBuilder extends BackboneElementBuilder<DeviceDefinitionPackaging, IDeviceDefinitionPackaging> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Business identifier of the packaged medication
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set type
   * A code that defines the specific type of packaging
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set count
   * The number of items contained in the package (devices or sub-packages)
   */
  setCount(count: number): this {
    this.data.count = count;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add distributor
   * An organization that distributes the packaged device
   */
  addDistributor(distributor: IDeviceDefinitionPackagingDistributor): this {
    return this.addToArray('distributor', distributor);
  }

  /**
   * Add udiDeviceIdentifier
   * Unique Device Identifier (UDI) Barcode string on the packaging
   */
  addUdiDeviceIdentifier(udiDeviceIdentifier: IDeviceDefinitionUdiDeviceIdentifier): this {
    return this.addToArray('udiDeviceIdentifier', udiDeviceIdentifier);
  }

  /**
   * Add packaging
   * Allows packages within packages
   */
  addPackaging(packaging: IDeviceDefinitionPackaging): this {
    return this.addToArray('packaging', packaging);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionPackaging instance
   */
  build(): DeviceDefinitionPackaging {
    return new DeviceDefinitionPackaging(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionPackaging instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionPackaging> {
    const deviceDefinitionPackaging = this.build();
    await deviceDefinitionPackaging.validateOrThrow();
    return deviceDefinitionPackaging;
  }
}
