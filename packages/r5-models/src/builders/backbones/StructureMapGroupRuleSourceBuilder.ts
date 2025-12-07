import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupRuleSource } from '../../models/backbones/StructureMapGroupRuleSource.js';
import type {
  IStructureMapGroupRuleSource,
  StructureMapSourceListModeType,
} from '@fhir-toolkit/r5-types';

/**
 * StructureMapGroupRuleSourceBuilder - Fluent builder for StructureMapGroupRuleSource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupRuleSource = new StructureMapGroupRuleSourceBuilder()
 *   .setContext(value)
 *   .build();
 */
export class StructureMapGroupRuleSourceBuilder extends BackboneElementBuilder<StructureMapGroupRuleSource, IStructureMapGroupRuleSource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set context
   * Type or variable this rule applies to
   */
  setContext(context: string): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set min
   * Specified minimum cardinality
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Specified maximum cardinality (number or *)
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  /**
   * Set type
   * Rule only applies if source has this type
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set defaultValue
   * Default value if no value exists
   */
  setDefaultValue(defaultValue: string): this {
    this.data.defaultValue = defaultValue;
    return this;
  }

  /**
   * Set element
   * Optional field for this source
   */
  setElement(element: string): this {
    this.data.element = element;
    return this;
  }

  /**
   * Set listMode
   * first | not_first | last | not_last | only_one
   */
  setListMode(listMode: StructureMapSourceListModeType): this {
    this.data.listMode = listMode;
    return this;
  }

  /**
   * Set variable
   * Named context for field, if a field is specified
   */
  setVariable(variable: string): this {
    this.data.variable = variable;
    return this;
  }

  /**
   * Set condition
   * FHIRPath expression  - must be true or the rule does not apply
   */
  setCondition(condition: string): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set check
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing
   */
  setCheck(check: string): this {
    this.data.check = check;
    return this;
  }

  /**
   * Set logMessage
   * Message to put in log if source exists (FHIRPath)
   */
  setLogMessage(logMessage: string): this {
    this.data.logMessage = logMessage;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupRuleSource instance
   */
  build(): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource(this.data);
  }

  /**
   * Build and validate the StructureMapGroupRuleSource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupRuleSource> {
    const structureMapGroupRuleSource = this.build();
    await structureMapGroupRuleSource.validateOrThrow();
    return structureMapGroupRuleSource;
  }
}
