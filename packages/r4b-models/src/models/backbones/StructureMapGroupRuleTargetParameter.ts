import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IStructureMapGroupRuleTargetParameter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to StructureMapGroupRuleTargetParameter */
const STRUCTURE_MAP_GROUP_RULE_TARGET_PARAMETER_PROPERTIES = [
  'valueId',
  '_valueId',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueDecimal',
  '_valueDecimal',
] as const;

/**
 * StructureMapGroupRuleTargetParameter - Parameters to the transform
 *
 * @see https://hl7.org/fhir/R4/structuremapgroupruletargetparameter.html
 *
 * @example
 * const structureMapGroupRuleTargetParameter = new StructureMapGroupRuleTargetParameter({
 *   // ... properties
 * });
 */
export class StructureMapGroupRuleTargetParameter extends BackboneElement implements IStructureMapGroupRuleTargetParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Parameter value - variable or literal */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Parameter value - variable or literal */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Parameter value - variable or literal */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Parameter value - variable or literal */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Parameter value - variable or literal */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupRuleTargetParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_RULE_TARGET_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupRuleTargetParameter from a JSON object
   */
  static fromJSON(json: IStructureMapGroupRuleTargetParameter): StructureMapGroupRuleTargetParameter {
    return new StructureMapGroupRuleTargetParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupRuleTargetParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupRuleTargetParameter>): StructureMapGroupRuleTargetParameter {
    return new StructureMapGroupRuleTargetParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupRuleTargetParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupRuleTargetParameter) => Partial<IStructureMapGroupRuleTargetParameter>): StructureMapGroupRuleTargetParameter {
    const currentData = this.toJSON();
    return new StructureMapGroupRuleTargetParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupRuleTargetParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupRuleTargetParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_RULE_TARGET_PARAMETER_PROPERTIES);
    return result as IStructureMapGroupRuleTargetParameter;
  }

  /**
   * Create a deep clone of this StructureMapGroupRuleTargetParameter
   */
  clone(): StructureMapGroupRuleTargetParameter {
    return new StructureMapGroupRuleTargetParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupRuleTargetParameter
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupRuleTargetParameter'];
    return parts.join(', ');
  }
}
