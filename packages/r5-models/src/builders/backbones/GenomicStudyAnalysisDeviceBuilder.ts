import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GenomicStudyAnalysisDevice } from '../../models/backbones/GenomicStudyAnalysisDevice.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisDevice,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GenomicStudyAnalysisDeviceBuilder - Fluent builder for GenomicStudyAnalysisDevice backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const genomicStudyAnalysisDevice = new GenomicStudyAnalysisDeviceBuilder()
 *   .setDevice(value)
 *   .build();
 */
export class GenomicStudyAnalysisDeviceBuilder extends BackboneElementBuilder<GenomicStudyAnalysisDevice, IGenomicStudyAnalysisDevice> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set device
   * Device used for the analysis
   */
  setDevice(device: IReference<'Device'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set function
   * Specific function for the device used for the analysis
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GenomicStudyAnalysisDevice instance
   */
  build(): GenomicStudyAnalysisDevice {
    return new GenomicStudyAnalysisDevice(this.data);
  }

  /**
   * Build and validate the GenomicStudyAnalysisDevice instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GenomicStudyAnalysisDevice> {
    const genomicStudyAnalysisDevice = this.build();
    await genomicStudyAnalysisDevice.validateOrThrow();
    return genomicStudyAnalysisDevice;
  }
}
