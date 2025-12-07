import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AggregationModeType,
  IElement,
  IElementDefinitionType,
  ReferenceVersionRulesType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ElementDefinitionType */
const ELEMENT_DEFINITION_TYPE_PROPERTIES = [
  'code',
  '_code',
  'profile',
  '_profile',
  'targetProfile',
  '_targetProfile',
  'aggregation',
  '_aggregation',
  'versioning',
  '_versioning',
] as const;

/**
 * ElementDefinitionType - Data type and Profile for this element
 *
 * @see https://hl7.org/fhir/R4/elementdefinitiontype.html
 *
 * @example
 * const elementDefinitionType = new ElementDefinitionType({
 *   // ... properties
 * });
 */
export class ElementDefinitionType extends BackboneElement implements IElementDefinitionType {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Data type or Resource (reference to definition) */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Profiles (StructureDefinition or IG) - one must apply */
  profile?: string[];

  /** Extension for profile */
  _profile?: IElement;

  /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
  targetProfile?: string[];

  /** Extension for targetProfile */
  _targetProfile?: IElement;

  /** contained | referenced | bundled - how aggregated */
  aggregation?: AggregationModeType[];

  /** Extension for aggregation */
  _aggregation?: IElement;

  /** either | independent | specific */
  versioning?: ReferenceVersionRulesType;

  /** Extension for versioning */
  _versioning?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionType>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_TYPE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionType from a JSON object
   */
  static fromJSON(json: IElementDefinitionType): ElementDefinitionType {
    return new ElementDefinitionType(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionType with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionType>): ElementDefinitionType {
    return new ElementDefinitionType({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionType by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionType) => Partial<IElementDefinitionType>): ElementDefinitionType {
    const currentData = this.toJSON();
    return new ElementDefinitionType({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionType)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionType {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_TYPE_PROPERTIES);
    return result as IElementDefinitionType;
  }

  /**
   * Create a deep clone of this ElementDefinitionType
   */
  clone(): ElementDefinitionType {
    return new ElementDefinitionType(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionType
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionType'];
    return parts.join(', ');
  }
}
