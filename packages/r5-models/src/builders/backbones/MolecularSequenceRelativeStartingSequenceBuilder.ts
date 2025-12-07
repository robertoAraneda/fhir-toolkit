import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceRelativeStartingSequence } from '../../models/backbones/MolecularSequenceRelativeStartingSequence.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMolecularSequenceRelativeStartingSequence,
  IReference,
  OrientationTypeType,
  StrandTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * MolecularSequenceRelativeStartingSequenceBuilder - Fluent builder for MolecularSequenceRelativeStartingSequence backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceRelativeStartingSequence = new MolecularSequenceRelativeStartingSequenceBuilder()
 *   .setGenomeAssembly(value)
 *   .build();
 */
export class MolecularSequenceRelativeStartingSequenceBuilder extends BackboneElementBuilder<MolecularSequenceRelativeStartingSequence, IMolecularSequenceRelativeStartingSequence> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set genomeAssembly
   * The genome assembly used for starting sequence, e.g. GRCh38
   */
  setGenomeAssembly(genomeAssembly: ICodeableConcept): this {
    this.data.genomeAssembly = genomeAssembly;
    return this;
  }

  /**
   * Set chromosome
   * Chromosome Identifier
   */
  setChromosome(chromosome: ICodeableConcept): this {
    this.data.chromosome = chromosome;
    return this;
  }

  /**
   * Set windowStart
   * Start position of the window on the starting sequence
   */
  setWindowStart(windowStart: number): this {
    this.data.windowStart = windowStart;
    return this;
  }

  /**
   * Set windowEnd
   * End position of the window on the starting sequence
   */
  setWindowEnd(windowEnd: number): this {
    this.data.windowEnd = windowEnd;
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
   * Set strand
   * watson | crick
   */
  setStrand(strand: StrandTypeType): this {
    this.data.strand = strand;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set sequence choice type (sequenceCodeableConcept, sequenceString, sequenceReference)
   * @param type - 'CodeableConcept' | 'String' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSequence('CodeableConcept', value)
   */
  setSequence<T extends 'CodeableConcept' | 'String' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `sequence${type}` as keyof IMolecularSequenceRelativeStartingSequence;
    const otherKeys: (keyof IMolecularSequenceRelativeStartingSequence)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('sequenceCodeableConcept' as keyof IMolecularSequenceRelativeStartingSequence);
      otherKeys.push('_sequenceCodeableConcept' as keyof IMolecularSequenceRelativeStartingSequence);
    }
    if (type !== 'String') {
      otherKeys.push('sequenceString' as keyof IMolecularSequenceRelativeStartingSequence);
      otherKeys.push('_sequenceString' as keyof IMolecularSequenceRelativeStartingSequence);
    }
    if (type !== 'Reference') {
      otherKeys.push('sequenceReference' as keyof IMolecularSequenceRelativeStartingSequence);
      otherKeys.push('_sequenceReference' as keyof IMolecularSequenceRelativeStartingSequence);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceRelativeStartingSequence instance
   */
  build(): MolecularSequenceRelativeStartingSequence {
    return new MolecularSequenceRelativeStartingSequence(this.data);
  }

  /**
   * Build and validate the MolecularSequenceRelativeStartingSequence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceRelativeStartingSequence> {
    const molecularSequenceRelativeStartingSequence = this.build();
    await molecularSequenceRelativeStartingSequence.validateOrThrow();
    return molecularSequenceRelativeStartingSequence;
  }
}
