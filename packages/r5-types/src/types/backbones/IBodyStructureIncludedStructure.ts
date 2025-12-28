import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IBodyStructureIncludedStructureBodyLandmarkOrientation } from './IBodyStructureIncludedStructureBodyLandmarkOrientation.js';

/**
 * BodyStructureIncludedStructure Interface
 * 
 * Included anatomic location(s)
 * 
 *
 * @see https://hl7.org/fhir/R5/bodystructureincludedstructure.html
 */
export interface IBodyStructureIncludedStructure extends IBackboneElement {
  /**
   * Code that represents the included structure
   */
  structure: ICodeableConcept;

  /**
   * Code that represents the included structure laterality
   */
  laterality?: ICodeableConcept;

  /**
   * Landmark relative location
   */
  bodyLandmarkOrientation?: IBodyStructureIncludedStructureBodyLandmarkOrientation[];

  /**
   * Cartesian reference for structure
   */
  spatialReference?: IReference<'ImagingSelection'>[];

  /**
   * Code that represents the included structure qualifier
   */
  qualifier?: ICodeableConcept[];

}
