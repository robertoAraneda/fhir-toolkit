import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroupRuleSource,
  StructureMapSourceListModeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureMapGroupRuleSource */
const STRUCTURE_MAP_GROUP_RULE_SOURCE_PROPERTIES = [
  'context',
  '_context',
  'min',
  '_min',
  'max',
  '_max',
  'type',
  '_type',
  'defaultValue',
  '_defaultValue',
  'element',
  '_element',
  'listMode',
  '_listMode',
  'variable',
  '_variable',
  'condition',
  '_condition',
  'check',
  '_check',
  'logMessage',
  '_logMessage',
] as const;

/**
 * StructureMapGroupRuleSource - Source inputs to the mapping
 *
 * @see https://hl7.org/fhir/R5/structuremapgrouprulesource.html
 *
 * @example
 * const structureMapGroupRuleSource = new StructureMapGroupRuleSource({
 *   // ... properties
 * });
 */
export class StructureMapGroupRuleSource extends BackboneElement implements IStructureMapGroupRuleSource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type or variable this rule applies to */
  context: string;

  /** Extension for context */
  _context?: IElement;

  /** Specified minimum cardinality */
  min?: number;

  /** Extension for min */
  _min?: IElement;

  /** Specified maximum cardinality (number or *) */
  max?: string;

  /** Extension for max */
  _max?: IElement;

  /** Rule only applies if source has this type */
  type?: string;

  /** Extension for type */
  _type?: IElement;

  /** Default value if no value exists */
  defaultValue?: string;

  /** Extension for defaultValue */
  _defaultValue?: IElement;

  /** Optional field for this source */
  element?: string;

  /** Extension for element */
  _element?: IElement;

  /** first | not_first | last | not_last | only_one */
  listMode?: StructureMapSourceListModeType;

  /** Extension for listMode */
  _listMode?: IElement;

  /** Named context for field, if a field is specified */
  variable?: string;

  /** Extension for variable */
  _variable?: IElement;

  /** FHIRPath expression  - must be true or the rule does not apply */
  condition?: string;

  /** Extension for condition */
  _condition?: IElement;

  /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
  check?: string;

  /** Extension for check */
  _check?: IElement;

  /** Message to put in log if source exists (FHIRPath) */
  logMessage?: string;

  /** Extension for logMessage */
  _logMessage?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupRuleSource>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_RULE_SOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupRuleSource from a JSON object
   */
  static fromJSON(json: IStructureMapGroupRuleSource): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupRuleSource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupRuleSource>): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupRuleSource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupRuleSource) => Partial<IStructureMapGroupRuleSource>): StructureMapGroupRuleSource {
    const currentData = this.toJSON();
    return new StructureMapGroupRuleSource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupRuleSource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupRuleSource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_RULE_SOURCE_PROPERTIES);
    return result as IStructureMapGroupRuleSource;
  }

  /**
   * Create a deep clone of this StructureMapGroupRuleSource
   */
  clone(): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupRuleSource
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupRuleSource'];
    return parts.join(', ');
  }
}
