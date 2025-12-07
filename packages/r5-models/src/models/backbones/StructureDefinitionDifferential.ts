import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElementDefinition,
  IStructureDefinitionDifferential,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureDefinitionDifferential */
const STRUCTURE_DEFINITION_DIFFERENTIAL_PROPERTIES = [
  'element',
] as const;

/**
 * StructureDefinitionDifferential - Differential view of the structure
 *
 * @see https://hl7.org/fhir/R4/structuredefinitiondifferential.html
 *
 * @example
 * const structureDefinitionDifferential = new StructureDefinitionDifferential({
 *   // ... properties
 * });
 */
export class StructureDefinitionDifferential extends BackboneElement implements IStructureDefinitionDifferential {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Definition of elements in the resource (if no StructureDefinition) */
  element: IElementDefinition[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureDefinitionDifferential>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_DEFINITION_DIFFERENTIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureDefinitionDifferential from a JSON object
   */
  static fromJSON(json: IStructureDefinitionDifferential): StructureDefinitionDifferential {
    return new StructureDefinitionDifferential(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureDefinitionDifferential with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureDefinitionDifferential>): StructureDefinitionDifferential {
    return new StructureDefinitionDifferential({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureDefinitionDifferential by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureDefinitionDifferential) => Partial<IStructureDefinitionDifferential>): StructureDefinitionDifferential {
    const currentData = this.toJSON();
    return new StructureDefinitionDifferential({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureDefinitionDifferential)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureDefinitionDifferential {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_DEFINITION_DIFFERENTIAL_PROPERTIES);
    return result as IStructureDefinitionDifferential;
  }

  /**
   * Create a deep clone of this StructureDefinitionDifferential
   */
  clone(): StructureDefinitionDifferential {
    return new StructureDefinitionDifferential(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureDefinitionDifferential
   */
  toString(): string {
    const parts: string[] = ['StructureDefinitionDifferential'];
    return parts.join(', ');
  }
}
