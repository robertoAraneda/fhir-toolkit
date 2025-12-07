import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceProteinSubunit } from '../../models/backbones/SubstanceProteinSubunit.js';
import type {
  IAttachment,
  IIdentifier,
  ISubstanceProteinSubunit,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceProteinSubunitBuilder - Fluent builder for SubstanceProteinSubunit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceProteinSubunit = new SubstanceProteinSubunitBuilder()
 *   .setSubunit(value)
 *   .build();
 */
export class SubstanceProteinSubunitBuilder extends BackboneElementBuilder<SubstanceProteinSubunit, ISubstanceProteinSubunit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set subunit
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
   */
  setSubunit(subunit: number): this {
    this.data.subunit = subunit;
    return this;
  }

  /**
   * Set sequence
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
   */
  setSequence(sequence: string): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set length
   * Length of linear sequences of amino acids contained in the subunit
   */
  setLength(length: number): this {
    this.data.length = length;
    return this;
  }

  /**
   * Set sequenceAttachment
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
   */
  setSequenceAttachment(sequenceAttachment: IAttachment): this {
    this.data.sequenceAttachment = sequenceAttachment;
    return this;
  }

  /**
   * Set nTerminalModificationId
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
   */
  setNTerminalModificationId(nTerminalModificationId: IIdentifier): this {
    this.data.nTerminalModificationId = nTerminalModificationId;
    return this;
  }

  /**
   * Set nTerminalModification
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified
   */
  setNTerminalModification(nTerminalModification: string): this {
    this.data.nTerminalModification = nTerminalModification;
    return this;
  }

  /**
   * Set cTerminalModificationId
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
   */
  setCTerminalModificationId(cTerminalModificationId: IIdentifier): this {
    this.data.cTerminalModificationId = cTerminalModificationId;
    return this;
  }

  /**
   * Set cTerminalModification
   * The modification at the C-terminal shall be specified
   */
  setCTerminalModification(cTerminalModification: string): this {
    this.data.cTerminalModification = cTerminalModification;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceProteinSubunit instance
   */
  build(): SubstanceProteinSubunit {
    return new SubstanceProteinSubunit(this.data);
  }

  /**
   * Build and validate the SubstanceProteinSubunit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceProteinSubunit> {
    const substanceProteinSubunit = this.build();
    await substanceProteinSubunit.validateOrThrow();
    return substanceProteinSubunit;
  }
}
