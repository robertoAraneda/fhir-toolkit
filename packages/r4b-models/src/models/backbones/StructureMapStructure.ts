import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapStructure,
  StructureMapModelModeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to StructureMapStructure */
const STRUCTURE_MAP_STRUCTURE_PROPERTIES = [
  'url',
  '_url',
  'mode',
  '_mode',
  'alias',
  '_alias',
  'documentation',
  '_documentation',
] as const;

/**
 * StructureMapStructure - Structure Definition used by this map
 *
 * @see https://hl7.org/fhir/R4B/structuremapstructure.html
 *
 * @example
 * const structureMapStructure = new StructureMapStructure({
 *   // ... properties
 * });
 */
export class StructureMapStructure extends BackboneElement implements IStructureMapStructure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical reference to structure definition */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** source | queried | target | produced */
  mode: StructureMapModelModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Name for type in this map */
  alias?: string;

  /** Extension for alias */
  _alias?: IElement;

  /** Documentation on use of structure */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapStructure>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_STRUCTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapStructure from a JSON object
   */
  static fromJSON(json: IStructureMapStructure): StructureMapStructure {
    return new StructureMapStructure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapStructure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapStructure>): StructureMapStructure {
    return new StructureMapStructure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapStructure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapStructure) => Partial<IStructureMapStructure>): StructureMapStructure {
    const currentData = this.toJSON();
    return new StructureMapStructure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapStructure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapStructure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_STRUCTURE_PROPERTIES);
    return result as IStructureMapStructure;
  }

  /**
   * Create a deep clone of this StructureMapStructure
   */
  clone(): StructureMapStructure {
    return new StructureMapStructure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapStructure
   */
  toString(): string {
    const parts: string[] = ['StructureMapStructure'];
    return parts.join(', ');
  }
}
