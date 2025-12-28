import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBodyStructureIncludedStructureBodyLandmarkOrientation,
  IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BodyStructureIncludedStructureBodyLandmarkOrientation */
const BODY_STRUCTURE_INCLUDED_STRUCTURE_BODY_LANDMARK_ORIENTATION_PROPERTIES = [
  'landmarkDescription',
  'clockFacePosition',
  'distanceFromLandmark',
  'surfaceOrientation',
] as const;

/**
 * BodyStructureIncludedStructureBodyLandmarkOrientation - Landmark relative location
 *
 * @see https://hl7.org/fhir/R5/bodystructureincludedstructurebodylandmarkorientation.html
 *
 * @example
 * const bodyStructureIncludedStructureBodyLandmarkOrientation = new BodyStructureIncludedStructureBodyLandmarkOrientation({
 *   // ... properties
 * });
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientation extends BackboneElement implements IBodyStructureIncludedStructureBodyLandmarkOrientation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Body ]andmark description */
  landmarkDescription?: ICodeableConcept[];

  /** Clockface orientation */
  clockFacePosition?: ICodeableConcept[];

  /** Landmark relative location */
  distanceFromLandmark?: IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark[];

  /** Relative landmark surface orientation */
  surfaceOrientation?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBodyStructureIncludedStructureBodyLandmarkOrientation>) {
    super(data);
    if (data) {
      this.assignProps(data, BODY_STRUCTURE_INCLUDED_STRUCTURE_BODY_LANDMARK_ORIENTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BodyStructureIncludedStructureBodyLandmarkOrientation from a JSON object
   */
  static fromJSON(json: IBodyStructureIncludedStructureBodyLandmarkOrientation): BodyStructureIncludedStructureBodyLandmarkOrientation {
    return new BodyStructureIncludedStructureBodyLandmarkOrientation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BodyStructureIncludedStructureBodyLandmarkOrientation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBodyStructureIncludedStructureBodyLandmarkOrientation>): BodyStructureIncludedStructureBodyLandmarkOrientation {
    return new BodyStructureIncludedStructureBodyLandmarkOrientation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BodyStructureIncludedStructureBodyLandmarkOrientation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBodyStructureIncludedStructureBodyLandmarkOrientation) => Partial<IBodyStructureIncludedStructureBodyLandmarkOrientation>): BodyStructureIncludedStructureBodyLandmarkOrientation {
    const currentData = this.toJSON();
    return new BodyStructureIncludedStructureBodyLandmarkOrientation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBodyStructureIncludedStructureBodyLandmarkOrientation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBodyStructureIncludedStructureBodyLandmarkOrientation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BODY_STRUCTURE_INCLUDED_STRUCTURE_BODY_LANDMARK_ORIENTATION_PROPERTIES);
    return result as IBodyStructureIncludedStructureBodyLandmarkOrientation;
  }

  /**
   * Create a deep clone of this BodyStructureIncludedStructureBodyLandmarkOrientation
   */
  clone(): BodyStructureIncludedStructureBodyLandmarkOrientation {
    return new BodyStructureIncludedStructureBodyLandmarkOrientation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BodyStructureIncludedStructureBodyLandmarkOrientation
   */
  toString(): string {
    const parts: string[] = ['BodyStructureIncludedStructureBodyLandmarkOrientation'];
    return parts.join(', ');
  }
}
