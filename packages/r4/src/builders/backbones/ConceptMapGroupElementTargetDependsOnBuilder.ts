import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupElementTargetDependsOn } from '../../models/backbones/ConceptMapGroupElementTargetDependsOn.js';
import type {
  IConceptMapGroupElementTargetDependsOn,
} from '@fhir-toolkit/r4-types';

/**
 * ConceptMapGroupElementTargetDependsOnBuilder - Fluent builder for ConceptMapGroupElementTargetDependsOn backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupElementTargetDependsOn = new ConceptMapGroupElementTargetDependsOnBuilder()
 *   .setProperty(value)
 *   .build();
 */
export class ConceptMapGroupElementTargetDependsOnBuilder extends BackboneElementBuilder<ConceptMapGroupElementTargetDependsOn, IConceptMapGroupElementTargetDependsOn> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set property
   * Reference to property mapping depends on
   */
  setProperty(property: string): this {
    this.data.property = property;
    return this;
  }

  /**
   * Set system
   * Code System (if necessary)
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set value
   * Value of the referenced element
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set display
   * Display for the code (if value is a code)
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroupElementTargetDependsOn instance
   */
  build(): ConceptMapGroupElementTargetDependsOn {
    return new ConceptMapGroupElementTargetDependsOn(this.data);
  }

  /**
   * Build and validate the ConceptMapGroupElementTargetDependsOn instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroupElementTargetDependsOn> {
    const conceptMapGroupElementTargetDependsOn = this.build();
    await conceptMapGroupElementTargetDependsOn.validateOrThrow();
    return conceptMapGroupElementTargetDependsOn;
  }
}
