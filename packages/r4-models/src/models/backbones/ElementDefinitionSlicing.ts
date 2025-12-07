import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IElementDefinitionSlicing,
  IElementDefinitionSlicingDiscriminator,
  SlicingRulesType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ElementDefinitionSlicing */
const ELEMENT_DEFINITION_SLICING_PROPERTIES = [
  'discriminator',
  'description',
  '_description',
  'ordered',
  '_ordered',
  'rules',
  '_rules',
] as const;

/**
 * ElementDefinitionSlicing - This element is sliced - slices follow
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionslicing.html
 *
 * @example
 * const elementDefinitionSlicing = new ElementDefinitionSlicing({
 *   // ... properties
 * });
 */
export class ElementDefinitionSlicing extends BackboneElement implements IElementDefinitionSlicing {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Element values that are used to distinguish the slices */
  discriminator?: IElementDefinitionSlicingDiscriminator[];

  /** Text description of how slicing works (or not) */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** If elements must be in same order as slices */
  ordered?: boolean;

  /** Extension for ordered */
  _ordered?: IElement;

  /** closed | open | openAtEnd */
  rules: SlicingRulesType;

  /** Extension for rules */
  _rules?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionSlicing>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_SLICING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionSlicing from a JSON object
   */
  static fromJSON(json: IElementDefinitionSlicing): ElementDefinitionSlicing {
    return new ElementDefinitionSlicing(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionSlicing with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionSlicing>): ElementDefinitionSlicing {
    return new ElementDefinitionSlicing({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionSlicing by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionSlicing) => Partial<IElementDefinitionSlicing>): ElementDefinitionSlicing {
    const currentData = this.toJSON();
    return new ElementDefinitionSlicing({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionSlicing)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionSlicing {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_SLICING_PROPERTIES);
    return result as IElementDefinitionSlicing;
  }

  /**
   * Create a deep clone of this ElementDefinitionSlicing
   */
  clone(): ElementDefinitionSlicing {
    return new ElementDefinitionSlicing(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionSlicing
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionSlicing'];
    return parts.join(', ');
  }
}
