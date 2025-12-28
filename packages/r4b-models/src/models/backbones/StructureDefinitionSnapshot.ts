import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElementDefinition,
  IStructureDefinitionSnapshot,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to StructureDefinitionSnapshot */
const STRUCTURE_DEFINITION_SNAPSHOT_PROPERTIES = [
  'element',
] as const;

/**
 * StructureDefinitionSnapshot - Snapshot view of the structure
 *
 * @see https://hl7.org/fhir/R4B/structuredefinitionsnapshot.html
 *
 * @example
 * const structureDefinitionSnapshot = new StructureDefinitionSnapshot({
 *   // ... properties
 * });
 */
export class StructureDefinitionSnapshot extends BackboneElement implements IStructureDefinitionSnapshot {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Definition of elements in the resource (if no StructureDefinition) */
  element: IElementDefinition[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureDefinitionSnapshot>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_DEFINITION_SNAPSHOT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureDefinitionSnapshot from a JSON object
   */
  static fromJSON(json: IStructureDefinitionSnapshot): StructureDefinitionSnapshot {
    return new StructureDefinitionSnapshot(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureDefinitionSnapshot with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureDefinitionSnapshot>): StructureDefinitionSnapshot {
    return new StructureDefinitionSnapshot({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureDefinitionSnapshot by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureDefinitionSnapshot) => Partial<IStructureDefinitionSnapshot>): StructureDefinitionSnapshot {
    const currentData = this.toJSON();
    return new StructureDefinitionSnapshot({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureDefinitionSnapshot)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureDefinitionSnapshot {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_DEFINITION_SNAPSHOT_PROPERTIES);
    return result as IStructureDefinitionSnapshot;
  }

  /**
   * Create a deep clone of this StructureDefinitionSnapshot
   */
  clone(): StructureDefinitionSnapshot {
    return new StructureDefinitionSnapshot(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureDefinitionSnapshot
   */
  toString(): string {
    const parts: string[] = ['StructureDefinitionSnapshot'];
    return parts.join(', ');
  }
}
