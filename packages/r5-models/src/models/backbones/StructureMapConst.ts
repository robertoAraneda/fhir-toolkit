import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapConst,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureMapConst */
const STRUCTURE_MAP_CONST_PROPERTIES = [
  'name',
  '_name',
  'value',
  '_value',
] as const;

/**
 * StructureMapConst - Definition of the constant value used in the map rules
 *
 * @see https://hl7.org/fhir/R4/structuremapconst.html
 *
 * @example
 * const structureMapConst = new StructureMapConst({
 *   // ... properties
 * });
 */
export class StructureMapConst extends BackboneElement implements IStructureMapConst {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Constant name */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** FHIRPath exression - value of the constant */
  value?: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapConst>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_CONST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapConst from a JSON object
   */
  static fromJSON(json: IStructureMapConst): StructureMapConst {
    return new StructureMapConst(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapConst with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapConst>): StructureMapConst {
    return new StructureMapConst({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapConst by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapConst) => Partial<IStructureMapConst>): StructureMapConst {
    const currentData = this.toJSON();
    return new StructureMapConst({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapConst)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapConst {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_CONST_PROPERTIES);
    return result as IStructureMapConst;
  }

  /**
   * Create a deep clone of this StructureMapConst
   */
  clone(): StructureMapConst {
    return new StructureMapConst(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapConst
   */
  toString(): string {
    const parts: string[] = ['StructureMapConst'];
    return parts.join(', ');
  }
}
