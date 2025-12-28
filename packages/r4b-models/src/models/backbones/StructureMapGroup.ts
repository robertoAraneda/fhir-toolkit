import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroup,
  IStructureMapGroupInput,
  IStructureMapGroupRule,
  StructureMapGroupTypeModeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to StructureMapGroup */
const STRUCTURE_MAP_GROUP_PROPERTIES = [
  'name',
  '_name',
  'extends',
  '_extends',
  'typeMode',
  '_typeMode',
  'documentation',
  '_documentation',
  'input',
  'rule',
] as const;

/**
 * StructureMapGroup - Named sections for reader convenience
 *
 * @see https://hl7.org/fhir/R4B/structuremapgroup.html
 *
 * @example
 * const structureMapGroup = new StructureMapGroup({
 *   // ... properties
 * });
 */
export class StructureMapGroup extends BackboneElement implements IStructureMapGroup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Human-readable label */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Another group that this group adds rules to */
  extends?: string;

  /** Extension for extends */
  _extends?: IElement;

  /** none | types | type-and-types */
  typeMode: StructureMapGroupTypeModeType;

  /** Extension for typeMode */
  _typeMode?: IElement;

  /** Additional description/explanation for group */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Named instance provided when invoking the map */
  input: IStructureMapGroupInput[];

  /** Transform Rule from source to target */
  rule: IStructureMapGroupRule[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroup>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroup from a JSON object
   */
  static fromJSON(json: IStructureMapGroup): StructureMapGroup {
    return new StructureMapGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroup>): StructureMapGroup {
    return new StructureMapGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroup) => Partial<IStructureMapGroup>): StructureMapGroup {
    const currentData = this.toJSON();
    return new StructureMapGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_PROPERTIES);
    return result as IStructureMapGroup;
  }

  /**
   * Create a deep clone of this StructureMapGroup
   */
  clone(): StructureMapGroup {
    return new StructureMapGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroup
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroup'];
    return parts.join(', ');
  }
}
