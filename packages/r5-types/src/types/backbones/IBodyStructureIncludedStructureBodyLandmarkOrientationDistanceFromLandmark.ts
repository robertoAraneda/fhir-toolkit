import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark Interface
 * 
 * Landmark relative location
 * 
 *
 * @see https://hl7.org/fhir/R5/bodystructureincludedstructurebodylandmarkorientationdistancefromlandmark.html
 */
export interface IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark extends IBackboneElement {
  /**
   * Measurement device
   */
  device?: ICodeableReference[];

  /**
   * Measured distance from body landmark
   */
  value?: IQuantity[];

}
