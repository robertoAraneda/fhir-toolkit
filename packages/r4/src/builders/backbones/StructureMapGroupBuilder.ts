import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroup } from '../../models/backbones/StructureMapGroup.js';
import type {
  IStructureMapGroup,
  IStructureMapGroupInput,
  IStructureMapGroupRule,
  StructureMapGroupTypeModeType,
} from '@fhir-toolkit/r4-types';

/**
 * StructureMapGroupBuilder - Fluent builder for StructureMapGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroup = new StructureMapGroupBuilder()
 *   .setName(value)
 *   .addInput({ ... })
 *   .build();
 */
export class StructureMapGroupBuilder extends BackboneElementBuilder<StructureMapGroup, IStructureMapGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Human-readable label
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set extends
   * Another group that this group adds rules to
   */
  setExtends(_extends: string): this {
    this.data.extends = _extends;
    return this;
  }

  /**
   * Set typeMode
   * none | types | type-and-types
   */
  setTypeMode(typeMode: StructureMapGroupTypeModeType): this {
    this.data.typeMode = typeMode;
    return this;
  }

  /**
   * Set documentation
   * Additional description/explanation for group
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add input
   * Named instance provided when invoking the map
   */
  addInput(input: IStructureMapGroupInput): this {
    return this.addToArray('input', input);
  }

  /**
   * Add rule
   * Transform Rule from source to target
   */
  addRule(rule: IStructureMapGroupRule): this {
    return this.addToArray('rule', rule);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroup instance
   */
  build(): StructureMapGroup {
    return new StructureMapGroup(this.data);
  }

  /**
   * Build and validate the StructureMapGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroup> {
    const structureMapGroup = this.build();
    await structureMapGroup.validateOrThrow();
    return structureMapGroup;
  }
}
