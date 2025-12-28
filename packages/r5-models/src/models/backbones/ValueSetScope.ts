import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetScope,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetScope */
const VALUE_SET_SCOPE_PROPERTIES = [
  'inclusionCriteria',
  '_inclusionCriteria',
  'exclusionCriteria',
  '_exclusionCriteria',
] as const;

/**
 * ValueSetScope - Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description
 *
 * @see https://hl7.org/fhir/R5/valuesetscope.html
 *
 * @example
 * const valueSetScope = new ValueSetScope({
 *   // ... properties
 * });
 */
export class ValueSetScope extends BackboneElement implements IValueSetScope {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Criteria describing which concepts or codes should be included and why */
  inclusionCriteria?: string;

  /** Extension for inclusionCriteria */
  _inclusionCriteria?: IElement;

  /** Criteria describing which concepts or codes should be excluded and why */
  exclusionCriteria?: string;

  /** Extension for exclusionCriteria */
  _exclusionCriteria?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetScope>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_SCOPE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetScope from a JSON object
   */
  static fromJSON(json: IValueSetScope): ValueSetScope {
    return new ValueSetScope(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetScope with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetScope>): ValueSetScope {
    return new ValueSetScope({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetScope by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetScope) => Partial<IValueSetScope>): ValueSetScope {
    const currentData = this.toJSON();
    return new ValueSetScope({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetScope)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetScope {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_SCOPE_PROPERTIES);
    return result as IValueSetScope;
  }

  /**
   * Create a deep clone of this ValueSetScope
   */
  clone(): ValueSetScope {
    return new ValueSetScope(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetScope
   */
  toString(): string {
    const parts: string[] = ['ValueSetScope'];
    return parts.join(', ');
  }
}
