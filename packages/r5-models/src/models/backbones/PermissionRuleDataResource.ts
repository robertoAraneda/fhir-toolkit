import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConsentDataMeaningType,
  IElement,
  IPermissionRuleDataResource,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PermissionRuleDataResource */
const PERMISSION_RULE_DATA_RESOURCE_PROPERTIES = [
  'meaning',
  '_meaning',
  'reference',
] as const;

/**
 * PermissionRuleDataResource - Explicit FHIR Resource references
 *
 * @see https://hl7.org/fhir/R5/permissionruledataresource.html
 *
 * @example
 * const permissionRuleDataResource = new PermissionRuleDataResource({
 *   // ... properties
 * });
 */
export class PermissionRuleDataResource extends BackboneElement implements IPermissionRuleDataResource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** instance | related | dependents | authoredby */
  meaning: ConsentDataMeaningType;

  /** Extension for meaning */
  _meaning?: IElement;

  /** The actual data reference */
  reference: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPermissionRuleDataResource>) {
    super(data);
    if (data) {
      this.assignProps(data, PERMISSION_RULE_DATA_RESOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PermissionRuleDataResource from a JSON object
   */
  static fromJSON(json: IPermissionRuleDataResource): PermissionRuleDataResource {
    return new PermissionRuleDataResource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PermissionRuleDataResource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPermissionRuleDataResource>): PermissionRuleDataResource {
    return new PermissionRuleDataResource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PermissionRuleDataResource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPermissionRuleDataResource) => Partial<IPermissionRuleDataResource>): PermissionRuleDataResource {
    const currentData = this.toJSON();
    return new PermissionRuleDataResource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPermissionRuleDataResource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPermissionRuleDataResource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERMISSION_RULE_DATA_RESOURCE_PROPERTIES);
    return result as IPermissionRuleDataResource;
  }

  /**
   * Create a deep clone of this PermissionRuleDataResource
   */
  clone(): PermissionRuleDataResource {
    return new PermissionRuleDataResource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PermissionRuleDataResource
   */
  toString(): string {
    const parts: string[] = ['PermissionRuleDataResource'];
    return parts.join(', ');
  }
}
