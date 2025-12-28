import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IPermissionRuleActivity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PermissionRuleActivity */
const PERMISSION_RULE_ACTIVITY_PROPERTIES = [
  'actor',
  'action',
  'purpose',
] as const;

/**
 * PermissionRuleActivity - A description or definition of which activities are allowed to be done on the data
 *
 * @see https://hl7.org/fhir/R5/permissionruleactivity.html
 *
 * @example
 * const permissionRuleActivity = new PermissionRuleActivity({
 *   // ... properties
 * });
 */
export class PermissionRuleActivity extends BackboneElement implements IPermissionRuleActivity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Authorized actor(s) */
  actor?: IReference<'Device' | 'Group' | 'CareTeam' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /** Actions controlled by this rule */
  action?: ICodeableConcept[];

  /** The purpose for which the permission is given */
  purpose?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPermissionRuleActivity>) {
    super(data);
    if (data) {
      this.assignProps(data, PERMISSION_RULE_ACTIVITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PermissionRuleActivity from a JSON object
   */
  static fromJSON(json: IPermissionRuleActivity): PermissionRuleActivity {
    return new PermissionRuleActivity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PermissionRuleActivity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPermissionRuleActivity>): PermissionRuleActivity {
    return new PermissionRuleActivity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PermissionRuleActivity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPermissionRuleActivity) => Partial<IPermissionRuleActivity>): PermissionRuleActivity {
    const currentData = this.toJSON();
    return new PermissionRuleActivity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPermissionRuleActivity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPermissionRuleActivity {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERMISSION_RULE_ACTIVITY_PROPERTIES);
    return result as IPermissionRuleActivity;
  }

  /**
   * Create a deep clone of this PermissionRuleActivity
   */
  clone(): PermissionRuleActivity {
    return new PermissionRuleActivity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PermissionRuleActivity
   */
  toString(): string {
    const parts: string[] = ['PermissionRuleActivity'];
    return parts.join(', ');
  }
}
