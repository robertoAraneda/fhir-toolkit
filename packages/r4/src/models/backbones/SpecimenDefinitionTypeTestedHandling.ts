import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IElement,
  IRange,
  ISpecimenDefinitionTypeTestedHandling,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SpecimenDefinitionTypeTestedHandling */
const SPECIMEN_DEFINITION_TYPE_TESTED_HANDLING_PROPERTIES = [
  'temperatureQualifier',
  'temperatureRange',
  'maxDuration',
  'instruction',
  '_instruction',
] as const;

/**
 * SpecimenDefinitionTypeTestedHandling - Specimen handling before testing
 *
 * @see https://hl7.org/fhir/R4/specimendefinitiontypetestedhandling.html
 *
 * @example
 * const specimenDefinitionTypeTestedHandling = new SpecimenDefinitionTypeTestedHandling({
 *   // ... properties
 * });
 */
export class SpecimenDefinitionTypeTestedHandling extends BackboneElement implements ISpecimenDefinitionTypeTestedHandling {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Temperature qualifier */
  temperatureQualifier?: ICodeableConcept;

  /** Temperature range */
  temperatureRange?: IRange;

  /** Maximum preservation time */
  maxDuration?: IDuration;

  /** Preservation instruction */
  instruction?: string;

  /** Extension for instruction */
  _instruction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenDefinitionTypeTestedHandling>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_DEFINITION_TYPE_TESTED_HANDLING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenDefinitionTypeTestedHandling from a JSON object
   */
  static fromJSON(json: ISpecimenDefinitionTypeTestedHandling): SpecimenDefinitionTypeTestedHandling {
    return new SpecimenDefinitionTypeTestedHandling(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenDefinitionTypeTestedHandling with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenDefinitionTypeTestedHandling>): SpecimenDefinitionTypeTestedHandling {
    return new SpecimenDefinitionTypeTestedHandling({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenDefinitionTypeTestedHandling by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenDefinitionTypeTestedHandling) => Partial<ISpecimenDefinitionTypeTestedHandling>): SpecimenDefinitionTypeTestedHandling {
    const currentData = this.toJSON();
    return new SpecimenDefinitionTypeTestedHandling({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenDefinitionTypeTestedHandling)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenDefinitionTypeTestedHandling {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_DEFINITION_TYPE_TESTED_HANDLING_PROPERTIES);
    return result as ISpecimenDefinitionTypeTestedHandling;
  }

  /**
   * Create a deep clone of this SpecimenDefinitionTypeTestedHandling
   */
  clone(): SpecimenDefinitionTypeTestedHandling {
    return new SpecimenDefinitionTypeTestedHandling(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenDefinitionTypeTestedHandling
   */
  toString(): string {
    const parts: string[] = ['SpecimenDefinitionTypeTestedHandling'];
    return parts.join(', ');
  }
}
