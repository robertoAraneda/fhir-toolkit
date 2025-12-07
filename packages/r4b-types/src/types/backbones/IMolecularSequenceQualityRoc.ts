import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MolecularSequenceQualityRoc Interface
 * 
 * Receiver Operator Characteristic (ROC) Curve
 * 
 *
 * @see https://hl7.org/fhir/R4/molecularsequencequalityroc.html
 */
export interface IMolecularSequenceQualityRoc extends IBackboneElement {
  /**
   * Genotype quality score
   */
  score?: number[];
  /**
   * Extension for score
   */
  _score?: IElement;

  /**
   * Roc score true positive numbers
   */
  numTP?: number[];
  /**
   * Extension for numTP
   */
  _numTP?: IElement;

  /**
   * Roc score false positive numbers
   */
  numFP?: number[];
  /**
   * Extension for numFP
   */
  _numFP?: IElement;

  /**
   * Roc score false negative numbers
   */
  numFN?: number[];
  /**
   * Extension for numFN
   */
  _numFN?: IElement;

  /**
   * Precision of the GQ score
   */
  precision?: number[];
  /**
   * Extension for precision
   */
  _precision?: IElement;

  /**
   * Sensitivity of the GQ score
   */
  sensitivity?: number[];
  /**
   * Extension for sensitivity
   */
  _sensitivity?: IElement;

  /**
   * FScore of the GQ score
   */
  fMeasure?: number[];
  /**
   * Extension for fMeasure
   */
  _fMeasure?: IElement;

}
