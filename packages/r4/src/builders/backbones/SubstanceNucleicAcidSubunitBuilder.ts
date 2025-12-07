import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceNucleicAcidSubunit } from '../../models/backbones/SubstanceNucleicAcidSubunit.js';
import type {
  IAttachment,
  ICodeableConcept,
  ISubstanceNucleicAcidSubunit,
  ISubstanceNucleicAcidSubunitLinkage,
  ISubstanceNucleicAcidSubunitSugar,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceNucleicAcidSubunitBuilder - Fluent builder for SubstanceNucleicAcidSubunit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceNucleicAcidSubunit = new SubstanceNucleicAcidSubunitBuilder()
 *   .setSubunit(value)
 *   .addLinkage({ ... })
 *   .build();
 */
export class SubstanceNucleicAcidSubunitBuilder extends BackboneElementBuilder<SubstanceNucleicAcidSubunit, ISubstanceNucleicAcidSubunit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set subunit
   * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
   */
  setSubunit(subunit: number): this {
    this.data.subunit = subunit;
    return this;
  }

  /**
   * Set sequence
   * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured
   */
  setSequence(sequence: string): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set length
   * The length of the sequence shall be captured
   */
  setLength(length: number): this {
    this.data.length = length;
    return this;
  }

  /**
   * Set sequenceAttachment
   * (TBC)
   */
  setSequenceAttachment(sequenceAttachment: IAttachment): this {
    this.data.sequenceAttachment = sequenceAttachment;
    return this;
  }

  /**
   * Set fivePrime
   * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant
   */
  setFivePrime(fivePrime: ICodeableConcept): this {
    this.data.fivePrime = fivePrime;
    return this;
  }

  /**
   * Set threePrime
   * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant
   */
  setThreePrime(threePrime: ICodeableConcept): this {
    this.data.threePrime = threePrime;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add linkage
   * The linkages between sugar residues will also be captured
   */
  addLinkage(linkage: ISubstanceNucleicAcidSubunitLinkage): this {
    return this.addToArray('linkage', linkage);
  }

  /**
   * Add sugar
   * 5.3.6.8.1 Sugar ID (Mandatory)
   */
  addSugar(sugar: ISubstanceNucleicAcidSubunitSugar): this {
    return this.addToArray('sugar', sugar);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceNucleicAcidSubunit instance
   */
  build(): SubstanceNucleicAcidSubunit {
    return new SubstanceNucleicAcidSubunit(this.data);
  }

  /**
   * Build and validate the SubstanceNucleicAcidSubunit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceNucleicAcidSubunit> {
    const substanceNucleicAcidSubunit = this.build();
    await substanceNucleicAcidSubunit.validateOrThrow();
    return substanceNucleicAcidSubunit;
  }
}
