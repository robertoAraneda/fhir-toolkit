import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetComposeInclude,
  IValueSetComposeIncludeConcept,
  IValueSetComposeIncludeFilter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetComposeInclude */
const VALUE_SET_COMPOSE_INCLUDE_PROPERTIES = [
  'system',
  '_system',
  'version',
  '_version',
  'concept',
  'filter',
  'valueSet',
  '_valueSet',
  'copyright',
  '_copyright',
] as const;

/**
 * ValueSetComposeInclude - Include one or more codes from a code system or other value set(s)
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeinclude.html
 *
 * @example
 * const valueSetComposeInclude = new ValueSetComposeInclude({
 *   // ... properties
 * });
 */
export class ValueSetComposeInclude extends BackboneElement implements IValueSetComposeInclude {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The system the codes come from */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** Specific version of the code system referred to */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** A concept defined in the system */
  concept?: IValueSetComposeIncludeConcept[];

  /** Select codes/concepts by their properties (including relationships) */
  filter?: IValueSetComposeIncludeFilter[];

  /** Select the contents included in this value set */
  valueSet?: string[];

  /** Extension for valueSet */
  _valueSet?: IElement;

  /** A copyright statement for the specific code system included in the value set */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetComposeInclude>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_COMPOSE_INCLUDE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetComposeInclude from a JSON object
   */
  static fromJSON(json: IValueSetComposeInclude): ValueSetComposeInclude {
    return new ValueSetComposeInclude(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetComposeInclude with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetComposeInclude>): ValueSetComposeInclude {
    return new ValueSetComposeInclude({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetComposeInclude by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetComposeInclude) => Partial<IValueSetComposeInclude>): ValueSetComposeInclude {
    const currentData = this.toJSON();
    return new ValueSetComposeInclude({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetComposeInclude)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetComposeInclude {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_COMPOSE_INCLUDE_PROPERTIES);
    return result as IValueSetComposeInclude;
  }

  /**
   * Create a deep clone of this ValueSetComposeInclude
   */
  clone(): ValueSetComposeInclude {
    return new ValueSetComposeInclude(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetComposeInclude
   */
  toString(): string {
    const parts: string[] = ['ValueSetComposeInclude'];
    return parts.join(', ');
  }
}
