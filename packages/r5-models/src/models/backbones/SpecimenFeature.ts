import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISpecimenFeature,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SpecimenFeature */
const SPECIMEN_FEATURE_PROPERTIES = [
  'type',
  'description',
  '_description',
] as const;

/**
 * SpecimenFeature - The physical feature of a specimen
 *
 * @see https://hl7.org/fhir/R5/specimenfeature.html
 *
 * @example
 * const specimenFeature = new SpecimenFeature({
 *   // ... properties
 * });
 */
export class SpecimenFeature extends BackboneElement implements ISpecimenFeature {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Highlighted feature */
  type: ICodeableConcept;

  /** Information about the feature */
  description: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenFeature>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_FEATURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenFeature from a JSON object
   */
  static fromJSON(json: ISpecimenFeature): SpecimenFeature {
    return new SpecimenFeature(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenFeature with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenFeature>): SpecimenFeature {
    return new SpecimenFeature({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenFeature by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenFeature) => Partial<ISpecimenFeature>): SpecimenFeature {
    const currentData = this.toJSON();
    return new SpecimenFeature({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenFeature)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenFeature {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_FEATURE_PROPERTIES);
    return result as ISpecimenFeature;
  }

  /**
   * Create a deep clone of this SpecimenFeature
   */
  clone(): SpecimenFeature {
    return new SpecimenFeature(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenFeature
   */
  toString(): string {
    const parts: string[] = ['SpecimenFeature'];
    return parts.join(', ');
  }
}
