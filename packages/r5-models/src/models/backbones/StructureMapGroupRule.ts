import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroupRule,
  IStructureMapGroupRuleDependent,
  IStructureMapGroupRuleSource,
  IStructureMapGroupRuleTarget,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureMapGroupRule */
const STRUCTURE_MAP_GROUP_RULE_PROPERTIES = [
  'name',
  '_name',
  'source',
  'target',
  'rule',
  'dependent',
  'documentation',
  '_documentation',
] as const;

/**
 * StructureMapGroupRule - Transform Rule from source to target
 *
 * @see https://hl7.org/fhir/R4/structuremapgrouprule.html
 *
 * @example
 * const structureMapGroupRule = new StructureMapGroupRule({
 *   // ... properties
 * });
 */
export class StructureMapGroupRule extends BackboneElement implements IStructureMapGroupRule {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of the rule for internal references */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Source inputs to the mapping */
  source: IStructureMapGroupRuleSource[];

  /** Content to create because of this mapping rule */
  target?: IStructureMapGroupRuleTarget[];

  /** Rules contained in this rule */
  rule?: IStructureMapGroupRule[];

  /** Which other rules to apply in the context of this rule */
  dependent?: IStructureMapGroupRuleDependent[];

  /** Documentation for this instance of data */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupRule>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_RULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupRule from a JSON object
   */
  static fromJSON(json: IStructureMapGroupRule): StructureMapGroupRule {
    return new StructureMapGroupRule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupRule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupRule>): StructureMapGroupRule {
    return new StructureMapGroupRule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupRule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupRule) => Partial<IStructureMapGroupRule>): StructureMapGroupRule {
    const currentData = this.toJSON();
    return new StructureMapGroupRule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupRule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupRule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_RULE_PROPERTIES);
    return result as IStructureMapGroupRule;
  }

  /**
   * Create a deep clone of this StructureMapGroupRule
   */
  clone(): StructureMapGroupRule {
    return new StructureMapGroupRule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupRule
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupRule'];
    return parts.join(', ');
  }
}
