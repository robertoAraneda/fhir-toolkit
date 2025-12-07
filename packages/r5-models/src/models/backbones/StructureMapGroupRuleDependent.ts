import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroupRuleDependent,
  IStructureMapGroupRuleTargetParameter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureMapGroupRuleDependent */
const STRUCTURE_MAP_GROUP_RULE_DEPENDENT_PROPERTIES = [
  'name',
  '_name',
  'parameter',
] as const;

/**
 * StructureMapGroupRuleDependent - Which other rules to apply in the context of this rule
 *
 * @see https://hl7.org/fhir/R4/structuremapgroupruledependent.html
 *
 * @example
 * const structureMapGroupRuleDependent = new StructureMapGroupRuleDependent({
 *   // ... properties
 * });
 */
export class StructureMapGroupRuleDependent extends BackboneElement implements IStructureMapGroupRuleDependent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of a rule or group to apply */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Parameter to pass to the rule or group */
  parameter: IStructureMapGroupRuleTargetParameter[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupRuleDependent>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_RULE_DEPENDENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupRuleDependent from a JSON object
   */
  static fromJSON(json: IStructureMapGroupRuleDependent): StructureMapGroupRuleDependent {
    return new StructureMapGroupRuleDependent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupRuleDependent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupRuleDependent>): StructureMapGroupRuleDependent {
    return new StructureMapGroupRuleDependent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupRuleDependent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupRuleDependent) => Partial<IStructureMapGroupRuleDependent>): StructureMapGroupRuleDependent {
    const currentData = this.toJSON();
    return new StructureMapGroupRuleDependent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupRuleDependent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupRuleDependent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_RULE_DEPENDENT_PROPERTIES);
    return result as IStructureMapGroupRuleDependent;
  }

  /**
   * Create a deep clone of this StructureMapGroupRuleDependent
   */
  clone(): StructureMapGroupRuleDependent {
    return new StructureMapGroupRuleDependent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupRuleDependent
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupRuleDependent'];
    return parts.join(', ');
  }
}
