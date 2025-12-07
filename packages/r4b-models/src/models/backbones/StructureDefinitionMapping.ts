import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureDefinitionMapping,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to StructureDefinitionMapping */
const STRUCTURE_DEFINITION_MAPPING_PROPERTIES = [
  'identity',
  '_identity',
  'uri',
  '_uri',
  'name',
  '_name',
  'comment',
  '_comment',
] as const;

/**
 * StructureDefinitionMapping - External specification that the content is mapped to
 *
 * @see https://hl7.org/fhir/R4/structuredefinitionmapping.html
 *
 * @example
 * const structureDefinitionMapping = new StructureDefinitionMapping({
 *   // ... properties
 * });
 */
export class StructureDefinitionMapping extends BackboneElement implements IStructureDefinitionMapping {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Internal id when this mapping is used */
  identity: string;

  /** Extension for identity */
  _identity?: IElement;

  /** Identifies what this mapping refers to */
  uri?: string;

  /** Extension for uri */
  _uri?: IElement;

  /** Names what this mapping refers to */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Versions, Issues, Scope limitations etc. */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureDefinitionMapping>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_DEFINITION_MAPPING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureDefinitionMapping from a JSON object
   */
  static fromJSON(json: IStructureDefinitionMapping): StructureDefinitionMapping {
    return new StructureDefinitionMapping(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureDefinitionMapping with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureDefinitionMapping>): StructureDefinitionMapping {
    return new StructureDefinitionMapping({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureDefinitionMapping by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureDefinitionMapping) => Partial<IStructureDefinitionMapping>): StructureDefinitionMapping {
    const currentData = this.toJSON();
    return new StructureDefinitionMapping({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureDefinitionMapping)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureDefinitionMapping {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_DEFINITION_MAPPING_PROPERTIES);
    return result as IStructureDefinitionMapping;
  }

  /**
   * Create a deep clone of this StructureDefinitionMapping
   */
  clone(): StructureDefinitionMapping {
    return new StructureDefinitionMapping(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureDefinitionMapping
   */
  toString(): string {
    const parts: string[] = ['StructureDefinitionMapping'];
    return parts.join(', ');
  }
}
