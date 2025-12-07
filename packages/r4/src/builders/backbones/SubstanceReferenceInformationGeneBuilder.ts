import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceReferenceInformationGene } from '../../models/backbones/SubstanceReferenceInformationGene.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceReferenceInformationGene,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceReferenceInformationGeneBuilder - Fluent builder for SubstanceReferenceInformationGene backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceReferenceInformationGene = new SubstanceReferenceInformationGeneBuilder()
 *   .setGeneSequenceOrigin(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceReferenceInformationGeneBuilder extends BackboneElementBuilder<SubstanceReferenceInformationGene, ISubstanceReferenceInformationGene> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set geneSequenceOrigin
   * Todo
   */
  setGeneSequenceOrigin(geneSequenceOrigin: ICodeableConcept): this {
    this.data.geneSequenceOrigin = geneSequenceOrigin;
    return this;
  }

  /**
   * Set gene
   * Todo
   */
  setGene(gene: ICodeableConcept): this {
    this.data.gene = gene;
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
   * Build the SubstanceReferenceInformationGene instance
   */
  build(): SubstanceReferenceInformationGene {
    return new SubstanceReferenceInformationGene(this.data);
  }

  /**
   * Build and validate the SubstanceReferenceInformationGene instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceReferenceInformationGene> {
    const substanceReferenceInformationGene = this.build();
    await substanceReferenceInformationGene.validateOrThrow();
    return substanceReferenceInformationGene;
  }
}
