import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupElementTarget } from '../../models/backbones/ConceptMapGroupElementTarget.js';
import type {
  ConceptMapRelationshipType,
  IConceptMapGroupElementTarget,
  IConceptMapGroupElementTargetDependsOn,
  IConceptMapGroupElementTargetProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapGroupElementTargetBuilder - Fluent builder for ConceptMapGroupElementTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupElementTarget = new ConceptMapGroupElementTargetBuilder()
 *   .setCode(value)
 *   .addProperty({ ... })
 *   .build();
 */
export class ConceptMapGroupElementTargetBuilder extends BackboneElementBuilder<ConceptMapGroupElementTarget, IConceptMapGroupElementTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code that identifies the target element
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set display
   * Display for the code
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  /**
   * Set valueSet
   * Identifies the set of target concepts
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  /**
   * Set relationship
   * related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to
   */
  setRelationship(relationship: ConceptMapRelationshipType): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set comment
   * Description of status/issues in mapping
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add property
   * Property value for the source -> target mapping
   */
  addProperty(property: IConceptMapGroupElementTargetProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add dependsOn
   * Other properties required for this mapping
   */
  addDependsOn(dependsOn: IConceptMapGroupElementTargetDependsOn): this {
    return this.addToArray('dependsOn', dependsOn);
  }

  /**
   * Add product
   * Other data elements that this mapping also produces
   */
  addProduct(product: IConceptMapGroupElementTargetDependsOn): this {
    return this.addToArray('product', product);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroupElementTarget instance
   */
  build(): ConceptMapGroupElementTarget {
    return new ConceptMapGroupElementTarget(this.data);
  }

  /**
   * Build and validate the ConceptMapGroupElementTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroupElementTarget> {
    const conceptMapGroupElementTarget = this.build();
    await conceptMapGroupElementTarget.validateOrThrow();
    return conceptMapGroupElementTarget;
  }
}
