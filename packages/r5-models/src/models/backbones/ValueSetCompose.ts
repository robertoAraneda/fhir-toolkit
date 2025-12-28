import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetCompose,
  IValueSetComposeInclude,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetCompose */
const VALUE_SET_COMPOSE_PROPERTIES = [
  'lockedDate',
  '_lockedDate',
  'inactive',
  '_inactive',
  'include',
  'exclude',
  'property',
  '_property',
] as const;

/**
 * ValueSetCompose - Content logical definition of the value set (CLD)
 *
 * @see https://hl7.org/fhir/R5/valuesetcompose.html
 *
 * @example
 * const valueSetCompose = new ValueSetCompose({
 *   // ... properties
 * });
 */
export class ValueSetCompose extends BackboneElement implements IValueSetCompose {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Fixed date for references with no specified version (transitive) */
  lockedDate?: string;

  /** Extension for lockedDate */
  _lockedDate?: IElement;

  /** Whether inactive codes are in the value set */
  inactive?: boolean;

  /** Extension for inactive */
  _inactive?: IElement;

  /** Include one or more codes from a code system or other value set(s) */
  include: IValueSetComposeInclude[];

  /** Explicitly exclude codes from a code system or other value sets */
  exclude?: IValueSetComposeInclude[];

  /** Property to return if client doesn't override */
  property?: string[];

  /** Extension for property */
  _property?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetCompose>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_COMPOSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetCompose from a JSON object
   */
  static fromJSON(json: IValueSetCompose): ValueSetCompose {
    return new ValueSetCompose(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetCompose with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetCompose>): ValueSetCompose {
    return new ValueSetCompose({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetCompose by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetCompose) => Partial<IValueSetCompose>): ValueSetCompose {
    const currentData = this.toJSON();
    return new ValueSetCompose({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetCompose)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetCompose {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_COMPOSE_PROPERTIES);
    return result as IValueSetCompose;
  }

  /**
   * Create a deep clone of this ValueSetCompose
   */
  clone(): ValueSetCompose {
    return new ValueSetCompose(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetCompose
   */
  toString(): string {
    const parts: string[] = ['ValueSetCompose'];
    return parts.join(', ');
  }
}
