import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IExpression,
  IPeriod,
  IPermissionRuleData,
  IPermissionRuleDataResource,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PermissionRuleData */
const PERMISSION_RULE_DATA_PROPERTIES = [
  'resource',
  'security',
  'period',
  'expression',
] as const;

/**
 * PermissionRuleData - The selection criteria to identify data that is within scope of this provision
 *
 * @see https://hl7.org/fhir/R4/permissionruledata.html
 *
 * @example
 * const permissionRuleData = new PermissionRuleData({
 *   // ... properties
 * });
 */
export class PermissionRuleData extends BackboneElement implements IPermissionRuleData {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Explicit FHIR Resource references */
  resource?: IPermissionRuleDataResource[];

  /** Security tag code on .meta.security */
  security?: ICoding[];

  /** Timeframe encompasing data create/update */
  period?: IPeriod[];

  /** Expression identifying the data */
  expression?: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPermissionRuleData>) {
    super(data);
    if (data) {
      this.assignProps(data, PERMISSION_RULE_DATA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PermissionRuleData from a JSON object
   */
  static fromJSON(json: IPermissionRuleData): PermissionRuleData {
    return new PermissionRuleData(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PermissionRuleData with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPermissionRuleData>): PermissionRuleData {
    return new PermissionRuleData({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PermissionRuleData by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPermissionRuleData) => Partial<IPermissionRuleData>): PermissionRuleData {
    const currentData = this.toJSON();
    return new PermissionRuleData({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPermissionRuleData)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPermissionRuleData {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERMISSION_RULE_DATA_PROPERTIES);
    return result as IPermissionRuleData;
  }

  /**
   * Create a deep clone of this PermissionRuleData
   */
  clone(): PermissionRuleData {
    return new PermissionRuleData(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PermissionRuleData
   */
  toString(): string {
    const parts: string[] = ['PermissionRuleData'];
    return parts.join(', ');
  }
}
