import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionGuideline } from '../../models/backbones/DeviceDefinitionGuideline.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionGuideline,
  IRelatedArtifact,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionGuidelineBuilder - Fluent builder for DeviceDefinitionGuideline backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionGuideline = new DeviceDefinitionGuidelineBuilder()
 *   .setUsageInstruction(value)
 *   .addUseContext({ ... })
 *   .build();
 */
export class DeviceDefinitionGuidelineBuilder extends BackboneElementBuilder<DeviceDefinitionGuideline, IDeviceDefinitionGuideline> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set usageInstruction
   * Detailed written and visual directions for the user on how to use the device
   */
  setUsageInstruction(usageInstruction: string): this {
    this.data.usageInstruction = usageInstruction;
    return this;
  }

  /**
   * Set intendedUse
   * A description of the general purpose or medical use of the device or its function
   */
  setIntendedUse(intendedUse: string): this {
    this.data.intendedUse = intendedUse;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add useContext
   * The circumstances that form the setting for using the device
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add relatedArtifact
   * A source of information or reference for this guideline
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add indication
   * A clinical condition for which the device was designed to be used
   */
  addIndication(indication: ICodeableConcept): this {
    return this.addToArray('indication', indication);
  }

  /**
   * Add contraindication
   * A specific situation when a device should not be used because it may cause harm
   */
  addContraindication(contraindication: ICodeableConcept): this {
    return this.addToArray('contraindication', contraindication);
  }

  /**
   * Add warning
   * Specific hazard alert information that a user needs to know before using the device
   */
  addWarning(warning: ICodeableConcept): this {
    return this.addToArray('warning', warning);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionGuideline instance
   */
  build(): DeviceDefinitionGuideline {
    return new DeviceDefinitionGuideline(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionGuideline instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionGuideline> {
    const deviceDefinitionGuideline = this.build();
    await deviceDefinitionGuideline.validateOrThrow();
    return deviceDefinitionGuideline;
  }
}
