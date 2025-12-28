import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetExpansion,
  IValueSetExpansionContains,
  IValueSetExpansionParameter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ValueSetExpansion */
const VALUE_SET_EXPANSION_PROPERTIES = [
  'identifier',
  '_identifier',
  'timestamp',
  '_timestamp',
  'total',
  '_total',
  'offset',
  '_offset',
  'parameter',
  'contains',
] as const;

/**
 * ValueSetExpansion - Used when the value set is "expanded"
 *
 * @see https://hl7.org/fhir/R4B/valuesetexpansion.html
 *
 * @example
 * const valueSetExpansion = new ValueSetExpansion({
 *   // ... properties
 * });
 */
export class ValueSetExpansion extends BackboneElement implements IValueSetExpansion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies the value set expansion (business identifier) */
  identifier?: string;

  /** Extension for identifier */
  _identifier?: IElement;

  /** Time ValueSet expansion happened */
  timestamp: string;

  /** Extension for timestamp */
  _timestamp?: IElement;

  /** Total number of codes in the expansion */
  total?: number;

  /** Extension for total */
  _total?: IElement;

  /** Offset at which this resource starts */
  offset?: number;

  /** Extension for offset */
  _offset?: IElement;

  /** Parameter that controlled the expansion process */
  parameter?: IValueSetExpansionParameter[];

  /** Codes in the value set */
  contains?: IValueSetExpansionContains[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetExpansion>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_EXPANSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetExpansion from a JSON object
   */
  static fromJSON(json: IValueSetExpansion): ValueSetExpansion {
    return new ValueSetExpansion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetExpansion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetExpansion>): ValueSetExpansion {
    return new ValueSetExpansion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetExpansion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetExpansion) => Partial<IValueSetExpansion>): ValueSetExpansion {
    const currentData = this.toJSON();
    return new ValueSetExpansion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetExpansion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetExpansion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_EXPANSION_PROPERTIES);
    return result as IValueSetExpansion;
  }

  /**
   * Create a deep clone of this ValueSetExpansion
   */
  clone(): ValueSetExpansion {
    return new ValueSetExpansion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetExpansion
   */
  toString(): string {
    const parts: string[] = ['ValueSetExpansion'];
    return parts.join(', ');
  }
}
