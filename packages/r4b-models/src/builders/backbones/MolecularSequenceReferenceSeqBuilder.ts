import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceReferenceSeq } from '../../models/backbones/MolecularSequenceReferenceSeq.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMolecularSequenceReferenceSeq,
  IReference,
  OrientationTypeType,
  StrandTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * MolecularSequenceReferenceSeqBuilder - Fluent builder for MolecularSequenceReferenceSeq backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceReferenceSeq = new MolecularSequenceReferenceSeqBuilder()
 *   .setChromosome(value)
 *   .build();
 */
export class MolecularSequenceReferenceSeqBuilder extends BackboneElementBuilder<MolecularSequenceReferenceSeq, IMolecularSequenceReferenceSeq> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set chromosome
   * Chromosome containing genetic finding
   */
  setChromosome(chromosome: ICodeableConcept): this {
    this.data.chromosome = chromosome;
    return this;
  }

  /**
   * Set genomeBuild
   * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'
   */
  setGenomeBuild(genomeBuild: string): this {
    this.data.genomeBuild = genomeBuild;
    return this;
  }

  /**
   * Set orientation
   * sense | antisense
   */
  setOrientation(orientation: OrientationTypeType): this {
    this.data.orientation = orientation;
    return this;
  }

  /**
   * Set referenceSeqPointer
   * A pointer to another MolecularSequence entity as reference sequence
   */
  setReferenceSeqPointer(referenceSeqPointer: IReference<'MolecularSequence'>): this {
    this.data.referenceSeqPointer = referenceSeqPointer;
    return this;
  }

  /**
   * Set strand
   * watson | crick
   */
  setStrand(strand: StrandTypeType): this {
    this.data.strand = strand;
    return this;
  }

  /**
   * Set windowStart
   * Start position of the window on the  reference sequence
   */
  setWindowStart(windowStart: number): this {
    this.data.windowStart = windowStart;
    return this;
  }

  /**
   * Set windowEnd
   * End position of the window on the reference sequence
   */
  setWindowEnd(windowEnd: number): this {
    this.data.windowEnd = windowEnd;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set referenceSeq choice type
   * @param type - 'Id' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReferenceSeq('Id', value)
   */
  setReferenceSeq<T extends 'Id' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `referenceSeq${type}` as keyof IMolecularSequenceReferenceSeq;
    const otherKeys: (keyof IMolecularSequenceReferenceSeq)[] = [];
    if (type !== 'Id') {
      otherKeys.push('referenceSeqId' as keyof IMolecularSequenceReferenceSeq);
      otherKeys.push('_referenceSeqId' as keyof IMolecularSequenceReferenceSeq);
    }
    if (type !== 'String') {
      otherKeys.push('referenceSeqString' as keyof IMolecularSequenceReferenceSeq);
      otherKeys.push('_referenceSeqString' as keyof IMolecularSequenceReferenceSeq);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceReferenceSeq instance
   */
  build(): MolecularSequenceReferenceSeq {
    return new MolecularSequenceReferenceSeq(this.data);
  }

  /**
   * Build and validate the MolecularSequenceReferenceSeq instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceReferenceSeq> {
    const molecularSequenceReferenceSeq = this.build();
    await molecularSequenceReferenceSeq.validateOrThrow();
    return molecularSequenceReferenceSeq;
  }
}
