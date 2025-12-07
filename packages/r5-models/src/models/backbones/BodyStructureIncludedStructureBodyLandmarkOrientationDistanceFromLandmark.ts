import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark,
  ICodeableReference,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark */
const BODY_STRUCTURE_INCLUDED_STRUCTURE_BODY_LANDMARK_ORIENTATION_DISTANCE_FROM_LANDMARK_PROPERTIES = [
  'device',
  'value',
] as const;

/**
 * BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark - Landmark relative location
 *
 * @see https://hl7.org/fhir/R4/bodystructureincludedstructurebodylandmarkorientationdistancefromlandmark.html
 *
 * @example
 * const bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark = new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark({
 *   // ... properties
 * });
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark extends BackboneElement implements IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Measurement device */
  device?: ICodeableReference[];

  /** Measured distance from body landmark */
  value?: IQuantity[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark>) {
    super(data);
    if (data) {
      this.assignProps(data, BODY_STRUCTURE_INCLUDED_STRUCTURE_BODY_LANDMARK_ORIENTATION_DISTANCE_FROM_LANDMARK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark from a JSON object
   */
  static fromJSON(json: IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    return new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark>): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    return new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark) => Partial<IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark>): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    const currentData = this.toJSON();
    return new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BODY_STRUCTURE_INCLUDED_STRUCTURE_BODY_LANDMARK_ORIENTATION_DISTANCE_FROM_LANDMARK_PROPERTIES);
    return result as IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark;
  }

  /**
   * Create a deep clone of this BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark
   */
  clone(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    return new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark
   */
  toString(): string {
    const parts: string[] = ['BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark'];
    return parts.join(', ');
  }
}
