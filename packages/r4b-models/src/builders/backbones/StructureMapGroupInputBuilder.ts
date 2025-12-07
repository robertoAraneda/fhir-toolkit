import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupInput } from '../../models/backbones/StructureMapGroupInput.js';
import type {
  IStructureMapGroupInput,
  StructureMapInputModeType,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureMapGroupInputBuilder - Fluent builder for StructureMapGroupInput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupInput = new StructureMapGroupInputBuilder()
 *   .setName(value)
 *   .build();
 */
export class StructureMapGroupInputBuilder extends BackboneElementBuilder<StructureMapGroupInput, IStructureMapGroupInput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name for this instance of data
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * Type for this instance of data
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set mode
   * source | target
   */
  setMode(mode: StructureMapInputModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set documentation
   * Documentation for this instance of data
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupInput instance
   */
  build(): StructureMapGroupInput {
    return new StructureMapGroupInput(this.data);
  }

  /**
   * Build and validate the StructureMapGroupInput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupInput> {
    const structureMapGroupInput = this.build();
    await structureMapGroupInput.validateOrThrow();
    return structureMapGroupInput;
  }
}
