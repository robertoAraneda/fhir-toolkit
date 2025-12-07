import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ExposureStateType } from '../../valuesets/index.js';

/**
 * EffectEvidenceSynthesisResultsByExposure Interface
 * 
 * What was the result per exposure?
 * 
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesisresultsbyexposure.html
 */
export interface IEffectEvidenceSynthesisResultsByExposure extends IBackboneElement {
  /**
   * Description of results by exposure
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * exposure | exposure-alternative
   */
  exposureState?: ExposureStateType;
  /**
   * Extension for exposureState
   */
  _exposureState?: IElement;

  /**
   * Variant exposure states
   */
  variantState?: ICodeableConcept;

  /**
   * Risk evidence synthesis
   */
  riskEvidenceSynthesis: IReference<'RiskEvidenceSynthesis'>;

}
