import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMolecularSequenceQualityRoc } from './IMolecularSequenceQualityRoc.js';
import type { QualityTypeType } from '../../valuesets/index.js';

/**
 * MolecularSequenceQuality Interface
 * 
 * An set of value as quality of sequence
 * 
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencequality.html
 */
export interface IMolecularSequenceQuality extends IBackboneElement {
  /**
   * indel | snp | unknown
   */
  type: QualityTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Standard sequence for comparison
   */
  standardSequence?: ICodeableConcept;

  /**
   * Start position of the sequence
   */
  start?: number;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * End position of the sequence
   */
  end?: number;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * Quality score for the comparison
   */
  score?: IQuantity;

  /**
   * Method to get quality
   */
  method?: ICodeableConcept;

  /**
   * True positives from the perspective of the truth data
   */
  truthTP?: number;
  /**
   * Extension for truthTP
   */
  _truthTP?: IElement;

  /**
   * True positives from the perspective of the query data
   */
  queryTP?: number;
  /**
   * Extension for queryTP
   */
  _queryTP?: IElement;

  /**
   * False negatives
   */
  truthFN?: number;
  /**
   * Extension for truthFN
   */
  _truthFN?: IElement;

  /**
   * False positives
   */
  queryFP?: number;
  /**
   * Extension for queryFP
   */
  _queryFP?: IElement;

  /**
   * False positives where the non-REF alleles in the Truth and Query Call Sets match
   */
  gtFP?: number;
  /**
   * Extension for gtFP
   */
  _gtFP?: IElement;

  /**
   * Precision of comparison
   */
  precision?: number;
  /**
   * Extension for precision
   */
  _precision?: IElement;

  /**
   * Recall of comparison
   */
  recall?: number;
  /**
   * Extension for recall
   */
  _recall?: IElement;

  /**
   * F-score
   */
  fScore?: number;
  /**
   * Extension for fScore
   */
  _fScore?: IElement;

  /**
   * Receiver Operator Characteristic (ROC) Curve
   */
  roc?: IMolecularSequenceQualityRoc;

}
