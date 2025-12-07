import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GenomicStudyAnalysis } from '../../models/backbones/GenomicStudyAnalysis.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IGenomicStudyAnalysis,
  IGenomicStudyAnalysisDevice,
  IGenomicStudyAnalysisInput,
  IGenomicStudyAnalysisOutput,
  IGenomicStudyAnalysisPerformer,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GenomicStudyAnalysisBuilder - Fluent builder for GenomicStudyAnalysis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const genomicStudyAnalysis = new GenomicStudyAnalysisBuilder()
 *   .setGenomeBuild(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class GenomicStudyAnalysisBuilder extends BackboneElementBuilder<GenomicStudyAnalysis, IGenomicStudyAnalysis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set genomeBuild
   * Genome build that is used in this analysis
   */
  setGenomeBuild(genomeBuild: ICodeableConcept): this {
    this.data.genomeBuild = genomeBuild;
    return this;
  }

  /**
   * Set instantiatesCanonical
   * The defined protocol that describes the analysis
   */
  setInstantiatesCanonical(instantiatesCanonical: string): this {
    this.data.instantiatesCanonical = instantiatesCanonical;
    return this;
  }

  /**
   * Set instantiatesUri
   * The URL pointing to an externally maintained protocol that describes the analysis
   */
  setInstantiatesUri(instantiatesUri: string): this {
    this.data.instantiatesUri = instantiatesUri;
    return this;
  }

  /**
   * Set title
   * Name of the analysis event (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set date
   * The date of the analysis event
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set protocolPerformed
   * The protocol that was performed for the analysis event
   */
  setProtocolPerformed(protocolPerformed: IReference<'Procedure' | 'Task'>): this {
    this.data.protocolPerformed = protocolPerformed;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifiers for the analysis event
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add methodType
   * Type of the methods used in the analysis (e.g., FISH, Karyotyping, MSI)
   */
  addMethodType(methodType: ICodeableConcept): this {
    return this.addToArray('methodType', methodType);
  }

  /**
   * Add changeType
   * Type of the genomic changes studied in the analysis (e.g., DNA, RNA, or AA change)
   */
  addChangeType(changeType: ICodeableConcept): this {
    return this.addToArray('changeType', changeType);
  }

  /**
   * Add focus
   * What the genomic analysis is about, when it is not about the subject of record
   */
  addFocus(focu: IReference<'Resource'>): this {
    return this.addToArray('focus', focu);
  }

  /**
   * Add specimen
   * The specimen used in the analysis event
   */
  addSpecimen(specimen: IReference<'Specimen'>): this {
    return this.addToArray('specimen', specimen);
  }

  /**
   * Add note
   * Any notes capture with the analysis event
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add regionsStudied
   * The genomic regions to be studied in the analysis (BED file)
   */
  addRegionsStudied(regionsStudied: IReference<'DocumentReference' | 'Observation'>): this {
    return this.addToArray('regionsStudied', regionsStudied);
  }

  /**
   * Add regionsCalled
   * Genomic regions actually called in the analysis event (BED file)
   */
  addRegionsCalled(regionsCalled: IReference<'DocumentReference' | 'Observation'>): this {
    return this.addToArray('regionsCalled', regionsCalled);
  }

  /**
   * Add input
   * Inputs for the analysis event
   */
  addInput(input: IGenomicStudyAnalysisInput): this {
    return this.addToArray('input', input);
  }

  /**
   * Add output
   * Outputs for the analysis event
   */
  addOutput(output: IGenomicStudyAnalysisOutput): this {
    return this.addToArray('output', output);
  }

  /**
   * Add performer
   * Performer for the analysis event
   */
  addPerformer(performer: IGenomicStudyAnalysisPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add device
   * Devices used for the analysis (e.g., instruments, software), with settings and parameters
   */
  addDevice(device: IGenomicStudyAnalysisDevice): this {
    return this.addToArray('device', device);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GenomicStudyAnalysis instance
   */
  build(): GenomicStudyAnalysis {
    return new GenomicStudyAnalysis(this.data);
  }

  /**
   * Build and validate the GenomicStudyAnalysis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GenomicStudyAnalysis> {
    const genomicStudyAnalysis = this.build();
    await genomicStudyAnalysis.validateOrThrow();
    return genomicStudyAnalysis;
  }
}
