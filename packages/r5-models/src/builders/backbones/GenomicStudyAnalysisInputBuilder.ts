import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GenomicStudyAnalysisInput } from '../../models/backbones/GenomicStudyAnalysisInput.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisInput,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GenomicStudyAnalysisInputBuilder - Fluent builder for GenomicStudyAnalysisInput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const genomicStudyAnalysisInput = new GenomicStudyAnalysisInputBuilder()
 *   .setFile(value)
 *   .build();
 */
export class GenomicStudyAnalysisInputBuilder extends BackboneElementBuilder<GenomicStudyAnalysisInput, IGenomicStudyAnalysisInput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set file
   * File containing input data
   */
  setFile(file: IReference<'DocumentReference'>): this {
    this.data.file = file;
    return this;
  }

  /**
   * Set type
   * Type of input data (e.g., BAM, CRAM, or FASTA)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set generatedBy choice type (generatedByIdentifier, generatedByReference)
   * @param type - 'Identifier' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setGeneratedBy('Identifier', value)
   */
  setGeneratedBy<T extends 'Identifier' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `generatedBy${type}` as keyof IGenomicStudyAnalysisInput;
    const otherKeys: (keyof IGenomicStudyAnalysisInput)[] = [];
    if (type !== 'Identifier') {
      otherKeys.push('generatedByIdentifier' as keyof IGenomicStudyAnalysisInput);
      otherKeys.push('_generatedByIdentifier' as keyof IGenomicStudyAnalysisInput);
    }
    if (type !== 'Reference') {
      otherKeys.push('generatedByReference' as keyof IGenomicStudyAnalysisInput);
      otherKeys.push('_generatedByReference' as keyof IGenomicStudyAnalysisInput);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GenomicStudyAnalysisInput instance
   */
  build(): GenomicStudyAnalysisInput {
    return new GenomicStudyAnalysisInput(this.data);
  }

  /**
   * Build and validate the GenomicStudyAnalysisInput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GenomicStudyAnalysisInput> {
    const genomicStudyAnalysisInput = this.build();
    await genomicStudyAnalysisInput.validateOrThrow();
    return genomicStudyAnalysisInput;
  }
}
