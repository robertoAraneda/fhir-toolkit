import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupRuleTarget } from '../../models/backbones/StructureMapGroupRuleTarget.js';
import type {
  IStructureMapGroupRuleTarget,
  IStructureMapGroupRuleTargetParameter,
  StructureMapTargetListModeType,
  StructureMapTransformType,
} from '@fhir-toolkit/r5-types';

/**
 * StructureMapGroupRuleTargetBuilder - Fluent builder for StructureMapGroupRuleTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupRuleTarget = new StructureMapGroupRuleTargetBuilder()
 *   .setContext(value)
 *   .addListMode({ ... })
 *   .build();
 */
export class StructureMapGroupRuleTargetBuilder extends BackboneElementBuilder<StructureMapGroupRuleTarget, IStructureMapGroupRuleTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set context
   * Variable this rule applies to
   */
  setContext(context: string): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set element
   * Field to create in the context
   */
  setElement(element: string): this {
    this.data.element = element;
    return this;
  }

  /**
   * Set variable
   * Named context for field, if desired, and a field is specified
   */
  setVariable(variable: string): this {
    this.data.variable = variable;
    return this;
  }

  /**
   * Set listRuleId
   * Internal rule reference for shared list items
   */
  setListRuleId(listRuleId: string): this {
    this.data.listRuleId = listRuleId;
    return this;
  }

  /**
   * Set transform
   * create | copy +
   */
  setTransform(transform: StructureMapTransformType): this {
    this.data.transform = transform;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add listMode
   * first | share | last | single
   */
  addListMode(listMode: StructureMapTargetListModeType): this {
    return this.addToArray('listMode', listMode);
  }

  /**
   * Add parameter
   * Parameters to the transform
   */
  addParameter(parameter: IStructureMapGroupRuleTargetParameter): this {
    return this.addToArray('parameter', parameter);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupRuleTarget instance
   */
  build(): StructureMapGroupRuleTarget {
    return new StructureMapGroupRuleTarget(this.data);
  }

  /**
   * Build and validate the StructureMapGroupRuleTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupRuleTarget> {
    const structureMapGroupRuleTarget = this.build();
    await structureMapGroupRuleTarget.validateOrThrow();
    return structureMapGroupRuleTarget;
  }
}
