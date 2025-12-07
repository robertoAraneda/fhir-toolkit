import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MolecularSequence } from '../../models/resources/MolecularSequence.js';
import type {
  IAttachment,
  IIdentifier,
  IMolecularSequence,
  IMolecularSequenceRelative,
  IReference,
  SequenceTypeType,
} from '@fhir-toolkit/r5-types';

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
   * Set subject
   * Subject this sequence is associated too
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>): this {
    this.data.subject = subject;
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
   * Set literal
   * Sequence that was observed
   */
  setLiteral(literal: string): this {
    this.data.literal = literal;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique ID for this particular sequence
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add focus
   * What the molecular sequence is about, when it is not about the subject of record
   */
  addFocus(focu: IReference<'Resource'>): this {
    return this.addToArray('focus', focu);
  }

  /**
   * Add formatted
   * Embedded file or a link (URL) which contains content to represent the sequence
   */
  addFormatted(formatted: IAttachment): this {
    return this.addToArray('formatted', formatted);
  }

  /**
   * Add relative
   * A sequence defined relative to another sequence
   */
  addRelative(relative: IMolecularSequenceRelative): this {
    return this.addToArray('relative', relative);
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
