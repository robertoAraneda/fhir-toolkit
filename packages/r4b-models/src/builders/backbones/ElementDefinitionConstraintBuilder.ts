import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionConstraint } from '../../models/backbones/ElementDefinitionConstraint.js';
import type {
  ConstraintSeverityType,
  IElementDefinitionConstraint,
} from '@fhir-toolkit/r4b-types';

/**
 * ElementDefinitionConstraintBuilder - Fluent builder for ElementDefinitionConstraint backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionConstraint = new ElementDefinitionConstraintBuilder()
 *   .setKey(value)
 *   .build();
 */
export class ElementDefinitionConstraintBuilder extends BackboneElementBuilder<ElementDefinitionConstraint, IElementDefinitionConstraint> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set key
   * Target of 'condition' reference above
   */
  setKey(key: string): this {
    this.data.key = key;
    return this;
  }

  /**
   * Set requirements
   * Why this constraint is necessary or appropriate
   */
  setRequirements(requirements: string): this {
    this.data.requirements = requirements;
    return this;
  }

  /**
   * Set severity
   * error | warning
   */
  setSeverity(severity: ConstraintSeverityType): this {
    this.data.severity = severity;
    return this;
  }

  /**
   * Set human
   * Human description of constraint
   */
  setHuman(human: string): this {
    this.data.human = human;
    return this;
  }

  /**
   * Set expression
   * FHIRPath expression of constraint
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  /**
   * Set xpath
   * XPath expression of constraint
   */
  setXpath(xpath: string): this {
    this.data.xpath = xpath;
    return this;
  }

  /**
   * Set source
   * Reference to original source of constraint
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionConstraint instance
   */
  build(): ElementDefinitionConstraint {
    return new ElementDefinitionConstraint(this.data);
  }

  /**
   * Build and validate the ElementDefinitionConstraint instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionConstraint> {
    const elementDefinitionConstraint = this.build();
    await elementDefinitionConstraint.validateOrThrow();
    return elementDefinitionConstraint;
  }
}
