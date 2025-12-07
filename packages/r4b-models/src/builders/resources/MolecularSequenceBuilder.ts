import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MolecularSequence } from '../../models/resources/MolecularSequence.js';
import type {
  IIdentifier,
  IMolecularSequence,
  IMolecularSequenceQuality,
  IMolecularSequenceReferenceSeq,
  IMolecularSequenceRepository,
  IMolecularSequenceStructureVariant,
  IMolecularSequenceVariant,
  IQuantity,
  IReference,
  SequenceTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * MolecularSequenceBuilder - Fluent builder for MolecularSequence resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequence = new MolecularSequenceBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MolecularSequenceBuilder extends DomainResourceBuilder<MolecularSequence, IMolecularSequence> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * aa | dna | rna
   */
  setType(type: SequenceTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set coordinateSystem
   * Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end)
   */
  setCoordinateSystem(coordinateSystem: number): this {
    this.data.coordinateSystem = coordinateSystem;
    return this;
  }

  /**
   * Set patient
   * Who and/or what this is about
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set specimen
   * Specimen used for sequencing
   */
  setSpecimen(specimen: IReference<'Specimen'>): this {
    this.data.specimen = specimen;
    return this;
  }

  /**
   * Set device
   * The method for sequencing
   */
  setDevice(device: IReference<'Device'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set performer
   * Who should be responsible for test result
   */
  setPerformer(performer: IReference<'Organization'>): this {
    this.data.performer = performer;
    return this;
  }

  /**
   * Set quantity
   * The number of copies of the sequence of interest.  (RNASeq)
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set referenceSeq
   * A sequence used as reference
   */
  setReferenceSeq(referenceSeq: IMolecularSequenceReferenceSeq): this {
    this.data.referenceSeq = referenceSeq;
    return this;
  }

  /**
   * Set observedSeq
   * Sequence that was observed
   */
  setObservedSeq(observedSeq: string): this {
    this.data.observedSeq = observedSeq;
    return this;
  }

  /**
   * Set readCoverage
   * Average number of reads representing a given nucleotide in the reconstructed sequence
   */
  setReadCoverage(readCoverage: number): this {
    this.data.readCoverage = readCoverage;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique ID for this particular sequence. This is a FHIR-defined id
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add variant
   * Variant in sequence
   */
  addVariant(variant: IMolecularSequenceVariant): this {
    return this.addToArray('variant', variant);
  }

  /**
   * Add quality
   * An set of value as quality of sequence
   */
  addQuality(quality: IMolecularSequenceQuality): this {
    return this.addToArray('quality', quality);
  }

  /**
   * Add repository
   * External repository which contains detailed report related with observedSeq in this resource
   */
  addRepository(repository: IMolecularSequenceRepository): this {
    return this.addToArray('repository', repository);
  }

  /**
   * Add pointer
   * Pointer to next atomic sequence
   */
  addPointer(pointer: IReference<'MolecularSequence'>): this {
    return this.addToArray('pointer', pointer);
  }

  /**
   * Add structureVariant
   * Structural variant
   */
  addStructureVariant(structureVariant: IMolecularSequenceStructureVariant): this {
    return this.addToArray('structureVariant', structureVariant);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequence instance
   */
  build(): MolecularSequence {
    return new MolecularSequence(this.data);
  }

  /**
   * Build and validate the MolecularSequence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequence> {
    const molecularSequence = this.build();
    await molecularSequence.validateOrThrow();
    return molecularSequence;
  }
}
