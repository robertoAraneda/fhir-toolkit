import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionType } from '../../models/backbones/ElementDefinitionType.js';
import type {
  AggregationModeType,
  IElementDefinitionType,
  ReferenceVersionRulesType,
} from '@fhir-toolkit/r4b-types';

/**
 * ElementDefinitionTypeBuilder - Fluent builder for ElementDefinitionType backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionType = new ElementDefinitionTypeBuilder()
 *   .setCode(value)
 *   .addProfile({ ... })
 *   .build();
 */
export class ElementDefinitionTypeBuilder extends BackboneElementBuilder<ElementDefinitionType, IElementDefinitionType> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Data type or Resource (reference to definition)
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set versioning
   * either | independent | specific
   */
  setVersioning(versioning: ReferenceVersionRulesType): this {
    this.data.versioning = versioning;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add profile
   * Profiles (StructureDefinition or IG) - one must apply
   */
  addProfile(profile: string): this {
    return this.addToArray('profile', profile);
  }

  /**
   * Add targetProfile
   * Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply
   */
  addTargetProfile(targetProfile: string): this {
    return this.addToArray('targetProfile', targetProfile);
  }

  /**
   * Add aggregation
   * contained | referenced | bundled - how aggregated
   */
  addAggregation(aggregation: AggregationModeType): this {
    return this.addToArray('aggregation', aggregation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionType instance
   */
  build(): ElementDefinitionType {
    return new ElementDefinitionType(this.data);
  }

  /**
   * Build and validate the ElementDefinitionType instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionType> {
    const elementDefinitionType = this.build();
    await elementDefinitionType.validateOrThrow();
    return elementDefinitionType;
  }
}
