import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceQualityRoc } from '../../models/backbones/MolecularSequenceQualityRoc.js';
import type {
  IMolecularSequenceQualityRoc,
} from '@fhir-toolkit/r4-types';

/**
 * MolecularSequenceQualityRocBuilder - Fluent builder for MolecularSequenceQualityRoc backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceQualityRoc = new MolecularSequenceQualityRocBuilder()
 *   .addScore({ ... })
 *   .build();
 */
export class MolecularSequenceQualityRocBuilder extends BackboneElementBuilder<MolecularSequenceQualityRoc, IMolecularSequenceQualityRoc> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add score
   * Genotype quality score
   */
  addScore(score: number): this {
    return this.addToArray('score', score);
  }

  /**
   * Add numTP
   * Roc score true positive numbers
   */
  addNumTP(numTP: number): this {
    return this.addToArray('numTP', numTP);
  }

  /**
   * Add numFP
   * Roc score false positive numbers
   */
  addNumFP(numFP: number): this {
    return this.addToArray('numFP', numFP);
  }

  /**
   * Add numFN
   * Roc score false negative numbers
   */
  addNumFN(numFN: number): this {
    return this.addToArray('numFN', numFN);
  }

  /**
   * Add precision
   * Precision of the GQ score
   */
  addPrecision(precision: number): this {
    return this.addToArray('precision', precision);
  }

  /**
   * Add sensitivity
   * Sensitivity of the GQ score
   */
  addSensitivity(sensitivity: number): this {
    return this.addToArray('sensitivity', sensitivity);
  }

  /**
   * Add fMeasure
   * FScore of the GQ score
   */
  addFMeasure(fMeasure: number): this {
    return this.addToArray('fMeasure', fMeasure);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceQualityRoc instance
   */
  build(): MolecularSequenceQualityRoc {
    return new MolecularSequenceQualityRoc(this.data);
  }

  /**
   * Build and validate the MolecularSequenceQualityRoc instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceQualityRoc> {
    const molecularSequenceQualityRoc = this.build();
    await molecularSequenceQualityRoc.validateOrThrow();
    return molecularSequenceQualityRoc;
  }
}
