import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstanceReferenceInformation } from '../../models/resources/SubstanceReferenceInformation.js';
import type {
  ISubstanceReferenceInformation,
  ISubstanceReferenceInformationClassification,
  ISubstanceReferenceInformationGene,
  ISubstanceReferenceInformationGeneElement,
  ISubstanceReferenceInformationTarget,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceReferenceInformationBuilder - Fluent builder for SubstanceReferenceInformation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceReferenceInformation = new SubstanceReferenceInformationBuilder()
 *   .setId('123')
 *   .setComment(value)
 *   .addGene({ ... })
 *   .build();
 */
export class SubstanceReferenceInformationBuilder extends DomainResourceBuilder<SubstanceReferenceInformation, ISubstanceReferenceInformation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set comment
   * Todo
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add gene
   * Todo
   */
  addGene(gene: ISubstanceReferenceInformationGene): this {
    return this.addToArray('gene', gene);
  }

  /**
   * Add geneElement
   * Todo
   */
  addGeneElement(geneElement: ISubstanceReferenceInformationGeneElement): this {
    return this.addToArray('geneElement', geneElement);
  }

  /**
   * Add classification
   * Todo
   */
  addClassification(classification: ISubstanceReferenceInformationClassification): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add target
   * Todo
   */
  addTarget(target: ISubstanceReferenceInformationTarget): this {
    return this.addToArray('target', target);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceReferenceInformation instance
   */
  build(): SubstanceReferenceInformation {
    return new SubstanceReferenceInformation(this.data);
  }

  /**
   * Build and validate the SubstanceReferenceInformation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceReferenceInformation> {
    const substanceReferenceInformation = this.build();
    await substanceReferenceInformation.validateOrThrow();
    return substanceReferenceInformation;
  }
}
