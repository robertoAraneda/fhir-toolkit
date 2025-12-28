import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IOperationDefinitionParameterReferencedFrom,
} from '@fhir-toolkit/r5-types';

/** Properties specific to OperationDefinitionParameterReferencedFrom */
const OPERATION_DEFINITION_PARAMETER_REFERENCED_FROM_PROPERTIES = [
  'source',
  '_source',
  'sourceId',
  '_sourceId',
] as const;

/**
 * OperationDefinitionParameterReferencedFrom - References to this parameter
 *
 * @see https://hl7.org/fhir/R5/operationdefinitionparameterreferencedfrom.html
 *
 * @example
 * const operationDefinitionParameterReferencedFrom = new OperationDefinitionParameterReferencedFrom({
 *   // ... properties
 * });
 */
export class OperationDefinitionParameterReferencedFrom extends BackboneElement implements IOperationDefinitionParameterReferencedFrom {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Referencing parameter */
  source: string;

  /** Extension for source */
  _source?: IElement;

  /** Element id of reference */
  sourceId?: string;

  /** Extension for sourceId */
  _sourceId?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationDefinitionParameterReferencedFrom>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_DEFINITION_PARAMETER_REFERENCED_FROM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationDefinitionParameterReferencedFrom from a JSON object
   */
  static fromJSON(json: IOperationDefinitionParameterReferencedFrom): OperationDefinitionParameterReferencedFrom {
    return new OperationDefinitionParameterReferencedFrom(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationDefinitionParameterReferencedFrom with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationDefinitionParameterReferencedFrom>): OperationDefinitionParameterReferencedFrom {
    return new OperationDefinitionParameterReferencedFrom({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationDefinitionParameterReferencedFrom by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationDefinitionParameterReferencedFrom) => Partial<IOperationDefinitionParameterReferencedFrom>): OperationDefinitionParameterReferencedFrom {
    const currentData = this.toJSON();
    return new OperationDefinitionParameterReferencedFrom({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationDefinitionParameterReferencedFrom)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationDefinitionParameterReferencedFrom {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OPERATION_DEFINITION_PARAMETER_REFERENCED_FROM_PROPERTIES);
    return result as IOperationDefinitionParameterReferencedFrom;
  }

  /**
   * Create a deep clone of this OperationDefinitionParameterReferencedFrom
   */
  clone(): OperationDefinitionParameterReferencedFrom {
    return new OperationDefinitionParameterReferencedFrom(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationDefinitionParameterReferencedFrom
   */
  toString(): string {
    const parts: string[] = ['OperationDefinitionParameterReferencedFrom'];
    return parts.join(', ');
  }
}
