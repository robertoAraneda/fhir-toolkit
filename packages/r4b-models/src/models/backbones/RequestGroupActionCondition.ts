import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionConditionKindType,
  IElement,
  IExpression,
  IRequestGroupActionCondition,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RequestGroupActionCondition */
const REQUEST_GROUP_ACTION_CONDITION_PROPERTIES = [
  'kind',
  '_kind',
  'expression',
] as const;

/**
 * RequestGroupActionCondition - Whether or not the action is applicable
 *
 * @see https://hl7.org/fhir/R4/requestgroupactioncondition.html
 *
 * @example
 * const requestGroupActionCondition = new RequestGroupActionCondition({
 *   // ... properties
 * });
 */
export class RequestGroupActionCondition extends BackboneElement implements IRequestGroupActionCondition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** applicability | start | stop */
  kind: ActionConditionKindType;

  /** Extension for kind */
  _kind?: IElement;

  /** Boolean-valued expression */
  expression?: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestGroupActionCondition>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_GROUP_ACTION_CONDITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestGroupActionCondition from a JSON object
   */
  static fromJSON(json: IRequestGroupActionCondition): RequestGroupActionCondition {
    return new RequestGroupActionCondition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestGroupActionCondition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestGroupActionCondition>): RequestGroupActionCondition {
    return new RequestGroupActionCondition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestGroupActionCondition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestGroupActionCondition) => Partial<IRequestGroupActionCondition>): RequestGroupActionCondition {
    const currentData = this.toJSON();
    return new RequestGroupActionCondition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestGroupActionCondition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestGroupActionCondition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_GROUP_ACTION_CONDITION_PROPERTIES);
    return result as IRequestGroupActionCondition;
  }

  /**
   * Create a deep clone of this RequestGroupActionCondition
   */
  clone(): RequestGroupActionCondition {
    return new RequestGroupActionCondition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestGroupActionCondition
   */
  toString(): string {
    const parts: string[] = ['RequestGroupActionCondition'];
    return parts.join(', ');
  }
}
