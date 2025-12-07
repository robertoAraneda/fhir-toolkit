import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IElementDefinitionMapping,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ElementDefinitionMapping */
const ELEMENT_DEFINITION_MAPPING_PROPERTIES = [
  'identity',
  '_identity',
  'language',
  '_language',
  'map',
  '_map',
  'comment',
  '_comment',
] as const;

/**
 * ElementDefinitionMapping - Map element to another set of definitions
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionmapping.html
 *
 * @example
 * const elementDefinitionMapping = new ElementDefinitionMapping({
 *   // ... properties
 * });
 */
export class ElementDefinitionMapping extends BackboneElement implements IElementDefinitionMapping {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to mapping declaration */
  identity: string;

  /** Extension for identity */
  _identity?: IElement;

  /** Computable language of mapping */
  language?: string;

  /** Extension for language */
  _language?: IElement;

  /** Details of the mapping */
  map: string;

  /** Extension for map */
  _map?: IElement;

  /** Comments about the mapping or its use */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionMapping>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_MAPPING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionMapping from a JSON object
   */
  static fromJSON(json: IElementDefinitionMapping): ElementDefinitionMapping {
    return new ElementDefinitionMapping(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionMapping with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionMapping>): ElementDefinitionMapping {
    return new ElementDefinitionMapping({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionMapping by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionMapping) => Partial<IElementDefinitionMapping>): ElementDefinitionMapping {
    const currentData = this.toJSON();
    return new ElementDefinitionMapping({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionMapping)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionMapping {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_MAPPING_PROPERTIES);
    return result as IElementDefinitionMapping;
  }

  /**
   * Create a deep clone of this ElementDefinitionMapping
   */
  clone(): ElementDefinitionMapping {
    return new ElementDefinitionMapping(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionMapping
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionMapping'];
    return parts.join(', ');
  }
}
