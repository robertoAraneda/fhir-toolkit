import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConsentProvisionTypeType,
  ICodeableConcept,
  IElement,
  IPermissionRule,
  IPermissionRuleActivity,
  IPermissionRuleData,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PermissionRule */
const PERMISSION_RULE_PROPERTIES = [
  'type',
  '_type',
  'data',
  'activity',
  'limit',
] as const;

/**
 * PermissionRule - Constraints to the Permission
 *
 * @see https://hl7.org/fhir/R4/permissionrule.html
 *
 * @example
 * const permissionRule = new PermissionRule({
 *   // ... properties
 * });
 */
export class PermissionRule extends BackboneElement implements IPermissionRule {

  // ============================================================================
  // Properties
  // ============================================================================

  /** deny | permit */
  type?: ConsentProvisionTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The selection criteria to identify data that is within scope of this provision */
  data?: IPermissionRuleData[];

  /** A description or definition of which activities are allowed to be done on the data */
  activity?: IPermissionRuleActivity[];

  /** What limits apply to the use of the data */
  limit?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPermissionRule>) {
    super(data);
    if (data) {
      this.assignProps(data, PERMISSION_RULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PermissionRule from a JSON object
   */
  static fromJSON(json: IPermissionRule): PermissionRule {
    return new PermissionRule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PermissionRule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPermissionRule>): PermissionRule {
    return new PermissionRule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PermissionRule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPermissionRule) => Partial<IPermissionRule>): PermissionRule {
    const currentData = this.toJSON();
    return new PermissionRule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPermissionRule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPermissionRule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERMISSION_RULE_PROPERTIES);
    return result as IPermissionRule;
  }

  /**
   * Create a deep clone of this PermissionRule
   */
  clone(): PermissionRule {
    return new PermissionRule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PermissionRule
   */
  toString(): string {
    const parts: string[] = ['PermissionRule'];
    return parts.join(', ');
  }
}
