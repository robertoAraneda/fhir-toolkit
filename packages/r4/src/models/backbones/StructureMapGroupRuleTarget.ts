import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroupRuleTarget,
  IStructureMapGroupRuleTargetParameter,
  StructureMapContextTypeType,
  StructureMapTargetListModeType,
  StructureMapTransformType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to StructureMapGroupRuleTarget */
const STRUCTURE_MAP_GROUP_RULE_TARGET_PROPERTIES = [
  'context',
  '_context',
  'contextType',
  '_contextType',
  'element',
  '_element',
  'variable',
  '_variable',
  'listMode',
  '_listMode',
  'listRuleId',
  '_listRuleId',
  'transform',
  '_transform',
  'parameter',
] as const;

/**
 * StructureMapGroupRuleTarget - Content to create because of this mapping rule
 *
 * @see https://hl7.org/fhir/R4/structuremapgroupruletarget.html
 *
 * @example
 * const structureMapGroupRuleTarget = new StructureMapGroupRuleTarget({
 *   // ... properties
 * });
 */
export class StructureMapGroupRuleTarget extends BackboneElement implements IStructureMapGroupRuleTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type or variable this rule applies to */
  context?: string;

  /** Extension for context */
  _context?: IElement;

  /** type | variable */
  contextType?: StructureMapContextTypeType;

  /** Extension for contextType */
  _contextType?: IElement;

  /** Field to create in the context */
  element?: string;

  /** Extension for element */
  _element?: IElement;

  /** Named context for field, if desired, and a field is specified */
  variable?: string;

  /** Extension for variable */
  _variable?: IElement;

  /** first | share | last | collate */
  listMode?: StructureMapTargetListModeType[];

  /** Extension for listMode */
  _listMode?: IElement;

  /** Internal rule reference for shared list items */
  listRuleId?: string;

  /** Extension for listRuleId */
  _listRuleId?: IElement;

  /** create | copy + */
  transform?: StructureMapTransformType;

  /** Extension for transform */
  _transform?: IElement;

  /** Parameters to the transform */
  parameter?: IStructureMapGroupRuleTargetParameter[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupRuleTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_RULE_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupRuleTarget from a JSON object
   */
  static fromJSON(json: IStructureMapGroupRuleTarget): StructureMapGroupRuleTarget {
    return new StructureMapGroupRuleTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupRuleTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupRuleTarget>): StructureMapGroupRuleTarget {
    return new StructureMapGroupRuleTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupRuleTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupRuleTarget) => Partial<IStructureMapGroupRuleTarget>): StructureMapGroupRuleTarget {
    const currentData = this.toJSON();
    return new StructureMapGroupRuleTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupRuleTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupRuleTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_RULE_TARGET_PROPERTIES);
    return result as IStructureMapGroupRuleTarget;
  }

  /**
   * Create a deep clone of this StructureMapGroupRuleTarget
   */
  clone(): StructureMapGroupRuleTarget {
    return new StructureMapGroupRuleTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupRuleTarget
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupRuleTarget'];
    return parts.join(', ');
  }
}
