import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroupInput,
  StructureMapInputModeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to StructureMapGroupInput */
const STRUCTURE_MAP_GROUP_INPUT_PROPERTIES = [
  'name',
  '_name',
  'type',
  '_type',
  'mode',
  '_mode',
  'documentation',
  '_documentation',
] as const;

/**
 * StructureMapGroupInput - Named instance provided when invoking the map
 *
 * @see https://hl7.org/fhir/R4/structuremapgroupinput.html
 *
 * @example
 * const structureMapGroupInput = new StructureMapGroupInput({
 *   // ... properties
 * });
 */
export class StructureMapGroupInput extends BackboneElement implements IStructureMapGroupInput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name for this instance of data */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Type for this instance of data */
  type?: string;

  /** Extension for type */
  _type?: IElement;

  /** source | target */
  mode: StructureMapInputModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Documentation for this instance of data */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupInput>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_INPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupInput from a JSON object
   */
  static fromJSON(json: IStructureMapGroupInput): StructureMapGroupInput {
    return new StructureMapGroupInput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupInput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupInput>): StructureMapGroupInput {
    return new StructureMapGroupInput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupInput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupInput) => Partial<IStructureMapGroupInput>): StructureMapGroupInput {
    const currentData = this.toJSON();
    return new StructureMapGroupInput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupInput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupInput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_INPUT_PROPERTIES);
    return result as IStructureMapGroupInput;
  }

  /**
   * Create a deep clone of this StructureMapGroupInput
   */
  clone(): StructureMapGroupInput {
    return new StructureMapGroupInput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupInput
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupInput'];
    return parts.join(', ');
  }
}
