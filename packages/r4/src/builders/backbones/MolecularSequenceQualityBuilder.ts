import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceQuality } from '../../models/backbones/MolecularSequenceQuality.js';
import type {
  ICodeableConcept,
  IMolecularSequenceQuality,
  IMolecularSequenceQualityRoc,
  IQuantity,
  QualityTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * MolecularSequenceQualityBuilder - Fluent builder for MolecularSequenceQuality backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceQuality = new MolecularSequenceQualityBuilder()
 *   .setType(value)
 *   .build();
 */
export class MolecularSequenceQualityBuilder extends BackboneElementBuilder<MolecularSequenceQuality, IMolecularSequenceQuality> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * indel | snp | unknown
   */
  setType(type: QualityTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set standardSequence
   * Standard sequence for comparison
   */
  setStandardSequence(standardSequence: ICodeableConcept): this {
    this.data.standardSequence = standardSequence;
    return this;
  }

  /**
   * Set start
   * Start position of the sequence
   */
  setStart(start: number): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * End position of the sequence
   */
  setEnd(end: number): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set score
   * Quality score for the comparison
   */
  setScore(score: IQuantity): this {
    this.data.score = score;
    return this;
  }

  /**
   * Set method
   * Method to get quality
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set truthTP
   * True positives from the perspective of the truth data
   */
  setTruthTP(truthTP: number): this {
    this.data.truthTP = truthTP;
    return this;
  }

  /**
   * Set queryTP
   * True positives from the perspective of the query data
   */
  setQueryTP(queryTP: number): this {
    this.data.queryTP = queryTP;
    return this;
  }

  /**
   * Set truthFN
   * False negatives
   */
  setTruthFN(truthFN: number): this {
    this.data.truthFN = truthFN;
    return this;
  }

  /**
   * Set queryFP
   * False positives
   */
  setQueryFP(queryFP: number): this {
    this.data.queryFP = queryFP;
    return this;
  }

  /**
   * Set gtFP
   * False positives where the non-REF alleles in the Truth and Query Call Sets match
   */
  setGtFP(gtFP: number): this {
    this.data.gtFP = gtFP;
    return this;
  }

  /**
   * Set precision
   * Precision of comparison
   */
  setPrecision(precision: number): this {
    this.data.precision = precision;
    return this;
  }

  /**
   * Set recall
   * Recall of comparison
   */
  setRecall(recall: number): this {
    this.data.recall = recall;
    return this;
  }

  /**
   * Set fScore
   * F-score
   */
  setFScore(fScore: number): this {
    this.data.fScore = fScore;
    return this;
  }

  /**
   * Set roc
   * Receiver Operator Characteristic (ROC) Curve
   */
  setRoc(roc: IMolecularSequenceQualityRoc): this {
    this.data.roc = roc;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceQuality instance
   */
  build(): MolecularSequenceQuality {
    return new MolecularSequenceQuality(this.data);
  }

  /**
   * Build and validate the MolecularSequenceQuality instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceQuality> {
    const molecularSequenceQuality = this.build();
    await molecularSequenceQuality.validateOrThrow();
    return molecularSequenceQuality;
  }
}
