import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IElement,
  IRange,
  IRequestGroupActionRelatedAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RequestGroupActionRelatedAction */
const REQUEST_GROUP_ACTION_RELATED_ACTION_PROPERTIES = [
  'actionId',
  '_actionId',
  'relationship',
  '_relationship',
  'offsetDuration',
  'offsetRange',
] as const;

/**
 * RequestGroupActionRelatedAction - Relationship to another action
 *
 * @see https://hl7.org/fhir/R4B/requestgroupactionrelatedaction.html
 *
 * @example
 * const requestGroupActionRelatedAction = new RequestGroupActionRelatedAction({
 *   // ... properties
 * });
 */
export class RequestGroupActionRelatedAction extends BackboneElement implements IRequestGroupActionRelatedAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What action this is related to */
  actionId: string;

  /** Extension for actionId */
  _actionId?: IElement;

  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: ActionRelationshipTypeType;

  /** Extension for relationship */
  _relationship?: IElement;

  /** Time offset for the relationship */
  offsetDuration?: IDuration;

  /** Time offset for the relationship */
  offsetRange?: IRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestGroupActionRelatedAction>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_GROUP_ACTION_RELATED_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestGroupActionRelatedAction from a JSON object
   */
  static fromJSON(json: IRequestGroupActionRelatedAction): RequestGroupActionRelatedAction {
    return new RequestGroupActionRelatedAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestGroupActionRelatedAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestGroupActionRelatedAction>): RequestGroupActionRelatedAction {
    return new RequestGroupActionRelatedAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestGroupActionRelatedAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestGroupActionRelatedAction) => Partial<IRequestGroupActionRelatedAction>): RequestGroupActionRelatedAction {
    const currentData = this.toJSON();
    return new RequestGroupActionRelatedAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestGroupActionRelatedAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestGroupActionRelatedAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_GROUP_ACTION_RELATED_ACTION_PROPERTIES);
    return result as IRequestGroupActionRelatedAction;
  }

  /**
   * Create a deep clone of this RequestGroupActionRelatedAction
   */
  clone(): RequestGroupActionRelatedAction {
    return new RequestGroupActionRelatedAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestGroupActionRelatedAction
   */
  toString(): string {
    const parts: string[] = ['RequestGroupActionRelatedAction'];
    return parts.join(', ');
  }
}
