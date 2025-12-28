import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBodyStructureIncludedStructure,
  IBodyStructureIncludedStructureBodyLandmarkOrientation,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BodyStructureIncludedStructure */
const BODY_STRUCTURE_INCLUDED_STRUCTURE_PROPERTIES = [
  'structure',
  'laterality',
  'bodyLandmarkOrientation',
  'spatialReference',
  'qualifier',
] as const;

/**
 * BodyStructureIncludedStructure - Included anatomic location(s)
 *
 * @see https://hl7.org/fhir/R5/bodystructureincludedstructure.html
 *
 * @example
 * const bodyStructureIncludedStructure = new BodyStructureIncludedStructure({
 *   // ... properties
 * });
 */
export class BodyStructureIncludedStructure extends BackboneElement implements IBodyStructureIncludedStructure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code that represents the included structure */
  structure: ICodeableConcept;

  /** Code that represents the included structure laterality */
  laterality?: ICodeableConcept;

  /** Landmark relative location */
  bodyLandmarkOrientation?: IBodyStructureIncludedStructureBodyLandmarkOrientation[];

  /** Cartesian reference for structure */
  spatialReference?: IReference<'ImagingSelection'>[];

  /** Code that represents the included structure qualifier */
  qualifier?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBodyStructureIncludedStructure>) {
    super(data);
    if (data) {
      this.assignProps(data, BODY_STRUCTURE_INCLUDED_STRUCTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BodyStructureIncludedStructure from a JSON object
   */
  static fromJSON(json: IBodyStructureIncludedStructure): BodyStructureIncludedStructure {
    return new BodyStructureIncludedStructure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BodyStructureIncludedStructure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBodyStructureIncludedStructure>): BodyStructureIncludedStructure {
    return new BodyStructureIncludedStructure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BodyStructureIncludedStructure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBodyStructureIncludedStructure) => Partial<IBodyStructureIncludedStructure>): BodyStructureIncludedStructure {
    const currentData = this.toJSON();
    return new BodyStructureIncludedStructure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBodyStructureIncludedStructure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBodyStructureIncludedStructure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BODY_STRUCTURE_INCLUDED_STRUCTURE_PROPERTIES);
    return result as IBodyStructureIncludedStructure;
  }

  /**
   * Create a deep clone of this BodyStructureIncludedStructure
   */
  clone(): BodyStructureIncludedStructure {
    return new BodyStructureIncludedStructure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BodyStructureIncludedStructure
   */
  toString(): string {
    const parts: string[] = ['BodyStructureIncludedStructure'];
    return parts.join(', ');
  }
}
