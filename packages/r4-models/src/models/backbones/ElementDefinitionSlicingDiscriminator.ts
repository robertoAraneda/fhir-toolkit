import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DiscriminatorTypeType,
  IElement,
  IElementDefinitionSlicingDiscriminator,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ElementDefinitionSlicingDiscriminator */
const ELEMENT_DEFINITION_SLICING_DISCRIMINATOR_PROPERTIES = [
  'type',
  '_type',
  'path',
  '_path',
] as const;

/**
 * ElementDefinitionSlicingDiscriminator - Element values that are used to distinguish the slices
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionslicingdiscriminator.html
 *
 * @example
 * const elementDefinitionSlicingDiscriminator = new ElementDefinitionSlicingDiscriminator({
 *   // ... properties
 * });
 */
export class ElementDefinitionSlicingDiscriminator extends BackboneElement implements IElementDefinitionSlicingDiscriminator {

  // ============================================================================
  // Properties
  // ============================================================================

  /** value | exists | pattern | type | profile */
  type: DiscriminatorTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Path to element value */
  path: string;

  /** Extension for path */
  _path?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionSlicingDiscriminator>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_SLICING_DISCRIMINATOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionSlicingDiscriminator from a JSON object
   */
  static fromJSON(json: IElementDefinitionSlicingDiscriminator): ElementDefinitionSlicingDiscriminator {
    return new ElementDefinitionSlicingDiscriminator(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionSlicingDiscriminator with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionSlicingDiscriminator>): ElementDefinitionSlicingDiscriminator {
    return new ElementDefinitionSlicingDiscriminator({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionSlicingDiscriminator by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionSlicingDiscriminator) => Partial<IElementDefinitionSlicingDiscriminator>): ElementDefinitionSlicingDiscriminator {
    const currentData = this.toJSON();
    return new ElementDefinitionSlicingDiscriminator({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionSlicingDiscriminator)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionSlicingDiscriminator {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_SLICING_DISCRIMINATOR_PROPERTIES);
    return result as IElementDefinitionSlicingDiscriminator;
  }

  /**
   * Create a deep clone of this ElementDefinitionSlicingDiscriminator
   */
  clone(): ElementDefinitionSlicingDiscriminator {
    return new ElementDefinitionSlicingDiscriminator(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionSlicingDiscriminator
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionSlicingDiscriminator'];
    return parts.join(', ');
  }
}
