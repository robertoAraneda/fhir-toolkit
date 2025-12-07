import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventMitigatingAction,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdverseEventMitigatingAction */
const ADVERSE_EVENT_MITIGATING_ACTION_PROPERTIES = [
  'itemReference',
  'itemCodeableConcept',
] as const;

/**
 * AdverseEventMitigatingAction - Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
 *
 * @see https://hl7.org/fhir/R4/adverseeventmitigatingaction.html
 *
 * @example
 * const adverseEventMitigatingAction = new AdverseEventMitigatingAction({
 *   // ... properties
 * });
 */
export class AdverseEventMitigatingAction extends BackboneElement implements IAdverseEventMitigatingAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm */
  itemReference?: IReference;

  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm */
  itemCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventMitigatingAction>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_MITIGATING_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventMitigatingAction from a JSON object
   */
  static fromJSON(json: IAdverseEventMitigatingAction): AdverseEventMitigatingAction {
    return new AdverseEventMitigatingAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventMitigatingAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventMitigatingAction>): AdverseEventMitigatingAction {
    return new AdverseEventMitigatingAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventMitigatingAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventMitigatingAction) => Partial<IAdverseEventMitigatingAction>): AdverseEventMitigatingAction {
    const currentData = this.toJSON();
    return new AdverseEventMitigatingAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventMitigatingAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventMitigatingAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_MITIGATING_ACTION_PROPERTIES);
    return result as IAdverseEventMitigatingAction;
  }

  /**
   * Create a deep clone of this AdverseEventMitigatingAction
   */
  clone(): AdverseEventMitigatingAction {
    return new AdverseEventMitigatingAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventMitigatingAction
   */
  toString(): string {
    const parts: string[] = ['AdverseEventMitigatingAction'];
    return parts.join(', ');
  }
}
