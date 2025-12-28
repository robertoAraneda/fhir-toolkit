import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark } from './IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark.js';

/**
 * BodyStructureIncludedStructureBodyLandmarkOrientation Interface
 * 
 * Landmark relative location
 * 
 *
 * @see https://hl7.org/fhir/R5/bodystructureincludedstructurebodylandmarkorientation.html
 */
export interface IBodyStructureIncludedStructureBodyLandmarkOrientation extends IBackboneElement {
  /**
   * Body ]andmark description
   */
  landmarkDescription?: ICodeableConcept[];

  /**
   * Clockface orientation
   */
  clockFacePosition?: ICodeableConcept[];

  /**
   * Landmark relative location
   */
  distanceFromLandmark?: IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark[];

  /**
   * Relative landmark surface orientation
   */
  surfaceOrientation?: ICodeableConcept[];

}
