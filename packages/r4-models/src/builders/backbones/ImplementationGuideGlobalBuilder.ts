import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideGlobal } from '../../models/backbones/ImplementationGuideGlobal.js';
import type {
  IImplementationGuideGlobal,
} from '@fhir-toolkit/r4-types';

/**
 * ImplementationGuideGlobalBuilder - Fluent builder for ImplementationGuideGlobal backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideGlobal = new ImplementationGuideGlobalBuilder()
 *   .setType(value)
 *   .build();
 */
export class ImplementationGuideGlobalBuilder extends BackboneElementBuilder<ImplementationGuideGlobal, IImplementationGuideGlobal> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type this profile applies to
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set profile
   * Profile that all resources must conform to
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideGlobal instance
   */
  build(): ImplementationGuideGlobal {
    return new ImplementationGuideGlobal(this.data);
  }

  /**
   * Build and validate the ImplementationGuideGlobal instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideGlobal> {
    const implementationGuideGlobal = this.build();
    await implementationGuideGlobal.validateOrThrow();
    return implementationGuideGlobal;
  }
}
