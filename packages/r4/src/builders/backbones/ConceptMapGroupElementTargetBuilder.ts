import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupElementTarget } from '../../models/backbones/ConceptMapGroupElementTarget.js';
import type {
  ConceptMapEquivalenceType,
  IConceptMapGroupElementTarget,
  IConceptMapGroupElementTargetDependsOn,
} from '@fhir-toolkit/r4-types';

/**
 * ConceptMapGroupElementTargetBuilder - Fluent builder for ConceptMapGroupElementTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupElementTarget = new ConceptMapGroupElementTargetBuilder()
 *   .setCode(value)
 *   .addDependsOn({ ... })
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
   * Set equivalence
   * relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
   */
  setEquivalence(equivalence: ConceptMapEquivalenceType): this {
    this.data.equivalence = equivalence;
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
   * Add dependsOn
   * Other elements required for this mapping (from context)
   */
  addDependsOn(dependsOn: IConceptMapGroupElementTargetDependsOn): this {
    return this.addToArray('dependsOn', dependsOn);
  }

  /**
   * Add product
   * Other concepts that this mapping also produces
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
