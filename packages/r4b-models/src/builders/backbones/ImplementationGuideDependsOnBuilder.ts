import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDependsOn } from '../../models/backbones/ImplementationGuideDependsOn.js';
import type {
  IImplementationGuideDependsOn,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideDependsOnBuilder - Fluent builder for ImplementationGuideDependsOn backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDependsOn = new ImplementationGuideDependsOnBuilder()
 *   .setUri(value)
 *   .build();
 */
export class ImplementationGuideDependsOnBuilder extends BackboneElementBuilder<ImplementationGuideDependsOn, IImplementationGuideDependsOn> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set uri
   * Identity of the IG that this depends on
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  /**
   * Set packageId
   * NPM Package name for IG this depends on
   */
  setPackageId(packageId: string): this {
    this.data.packageId = packageId;
    return this;
  }

  /**
   * Set version
   * Version of the IG
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDependsOn instance
   */
  build(): ImplementationGuideDependsOn {
    return new ImplementationGuideDependsOn(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDependsOn instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDependsOn> {
    const implementationGuideDependsOn = this.build();
    await implementationGuideDependsOn.validateOrThrow();
    return implementationGuideDependsOn;
  }
}
