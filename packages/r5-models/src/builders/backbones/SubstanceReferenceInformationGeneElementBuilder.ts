import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceReferenceInformationGeneElement } from '../../models/backbones/SubstanceReferenceInformationGeneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IReference,
  ISubstanceReferenceInformationGeneElement,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceReferenceInformationGeneElementBuilder - Fluent builder for SubstanceReferenceInformationGeneElement backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceReferenceInformationGeneElement = new SubstanceReferenceInformationGeneElementBuilder()
 *   .setType(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceReferenceInformationGeneElementBuilder extends BackboneElementBuilder<SubstanceReferenceInformationGeneElement, ISubstanceReferenceInformationGeneElement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Todo
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set element
   * Todo
   */
  setElement(element: IIdentifier): this {
    this.data.element = element;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add source
   * Todo
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceReferenceInformationGeneElement instance
   */
  build(): SubstanceReferenceInformationGeneElement {
    return new SubstanceReferenceInformationGeneElement(this.data);
  }

  /**
   * Build and validate the SubstanceReferenceInformationGeneElement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceReferenceInformationGeneElement> {
    const substanceReferenceInformationGeneElement = this.build();
    await substanceReferenceInformationGeneElement.validateOrThrow();
    return substanceReferenceInformationGeneElement;
  }
}
