import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventPreventiveAction,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdverseEventPreventiveAction */
const ADVERSE_EVENT_PREVENTIVE_ACTION_PROPERTIES = [
  'itemReference',
  'itemCodeableConcept',
] as const;

/**
 * AdverseEventPreventiveAction - Preventive actions that contributed to avoiding the adverse event
 *
 * @see https://hl7.org/fhir/R4/adverseeventpreventiveaction.html
 *
 * @example
 * const adverseEventPreventiveAction = new AdverseEventPreventiveAction({
 *   // ... properties
 * });
 */
export class AdverseEventPreventiveAction extends BackboneElement implements IAdverseEventPreventiveAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Action that contributed to avoiding the adverse event */
  itemReference?: IReference;

  /** Action that contributed to avoiding the adverse event */
  itemCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventPreventiveAction>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_PREVENTIVE_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventPreventiveAction from a JSON object
   */
  static fromJSON(json: IAdverseEventPreventiveAction): AdverseEventPreventiveAction {
    return new AdverseEventPreventiveAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventPreventiveAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventPreventiveAction>): AdverseEventPreventiveAction {
    return new AdverseEventPreventiveAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventPreventiveAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventPreventiveAction) => Partial<IAdverseEventPreventiveAction>): AdverseEventPreventiveAction {
    const currentData = this.toJSON();
    return new AdverseEventPreventiveAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventPreventiveAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventPreventiveAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_PREVENTIVE_ACTION_PROPERTIES);
    return result as IAdverseEventPreventiveAction;
  }

  /**
   * Create a deep clone of this AdverseEventPreventiveAction
   */
  clone(): AdverseEventPreventiveAction {
    return new AdverseEventPreventiveAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventPreventiveAction
   */
  toString(): string {
    const parts: string[] = ['AdverseEventPreventiveAction'];
    return parts.join(', ');
  }
}
