import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DeviceCorrectiveActionScopeType,
  IDeviceDefinitionCorrectiveAction,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionCorrectiveAction */
const DEVICE_DEFINITION_CORRECTIVE_ACTION_PROPERTIES = [
  'recall',
  '_recall',
  'scope',
  '_scope',
  'period',
] as const;

/**
 * DeviceDefinitionCorrectiveAction - Tracking of latest field safety corrective action
 *
 * @see https://hl7.org/fhir/R5/devicedefinitioncorrectiveaction.html
 *
 * @example
 * const deviceDefinitionCorrectiveAction = new DeviceDefinitionCorrectiveAction({
 *   // ... properties
 * });
 */
export class DeviceDefinitionCorrectiveAction extends BackboneElement implements IDeviceDefinitionCorrectiveAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether the corrective action was a recall */
  recall: boolean;

  /** Extension for recall */
  _recall?: IElement;

  /** model | lot-numbers | serial-numbers */
  scope?: DeviceCorrectiveActionScopeType;

  /** Extension for scope */
  _scope?: IElement;

  /** Start and end dates of the  corrective action */
  period: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionCorrectiveAction>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_CORRECTIVE_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionCorrectiveAction from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionCorrectiveAction): DeviceDefinitionCorrectiveAction {
    return new DeviceDefinitionCorrectiveAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionCorrectiveAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionCorrectiveAction>): DeviceDefinitionCorrectiveAction {
    return new DeviceDefinitionCorrectiveAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionCorrectiveAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionCorrectiveAction) => Partial<IDeviceDefinitionCorrectiveAction>): DeviceDefinitionCorrectiveAction {
    const currentData = this.toJSON();
    return new DeviceDefinitionCorrectiveAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionCorrectiveAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionCorrectiveAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_CORRECTIVE_ACTION_PROPERTIES);
    return result as IDeviceDefinitionCorrectiveAction;
  }

  /**
   * Create a deep clone of this DeviceDefinitionCorrectiveAction
   */
  clone(): DeviceDefinitionCorrectiveAction {
    return new DeviceDefinitionCorrectiveAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionCorrectiveAction
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionCorrectiveAction'];
    return parts.join(', ');
  }
}
