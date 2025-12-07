import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceVariant } from '../../models/backbones/MolecularSequenceVariant.js';
import type {
  IMolecularSequenceVariant,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MolecularSequenceVariantBuilder - Fluent builder for MolecularSequenceVariant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceVariant = new MolecularSequenceVariantBuilder()
 *   .setStart(value)
 *   .build();
 */
export class MolecularSequenceVariantBuilder extends BackboneElementBuilder<MolecularSequenceVariant, IMolecularSequenceVariant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set start
   * Start position of the variant on the  reference sequence
   */
  setStart(start: number): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * End position of the variant on the reference sequence
   */
  setEnd(end: number): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set observedAllele
   * Allele that was observed
   */
  setObservedAllele(observedAllele: string): this {
    this.data.observedAllele = observedAllele;
    return this;
  }

  /**
   * Set referenceAllele
   * Allele in the reference sequence
   */
  setReferenceAllele(referenceAllele: string): this {
    this.data.referenceAllele = referenceAllele;
    return this;
  }

  /**
   * Set cigar
   * Extended CIGAR string for aligning the sequence with reference bases
   */
  setCigar(cigar: string): this {
    this.data.cigar = cigar;
    return this;
  }

  /**
   * Set variantPointer
   * Pointer to observed variant information
   */
  setVariantPointer(variantPointer: IReference<'Observation'>): this {
    this.data.variantPointer = variantPointer;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceVariant instance
   */
  build(): MolecularSequenceVariant {
    return new MolecularSequenceVariant(this.data);
  }

  /**
   * Build and validate the MolecularSequenceVariant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceVariant> {
    const molecularSequenceVariant = this.build();
    await molecularSequenceVariant.validateOrThrow();
    return molecularSequenceVariant;
  }
}
