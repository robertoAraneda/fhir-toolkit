import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetComposeIncludeConceptDesignation,
  IValueSetExpansionContains,
  IValueSetExpansionContainsProperty,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetExpansionContains */
const VALUE_SET_EXPANSION_CONTAINS_PROPERTIES = [
  'system',
  '_system',
  'abstract',
  '_abstract',
  'inactive',
  '_inactive',
  'version',
  '_version',
  'code',
  '_code',
  'display',
  '_display',
  'designation',
  'property',
  'contains',
] as const;

/**
 * ValueSetExpansionContains - Codes in the value set
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansioncontains.html
 *
 * @example
 * const valueSetExpansionContains = new ValueSetExpansionContains({
 *   // ... properties
 * });
 */
export class ValueSetExpansionContains extends BackboneElement implements IValueSetExpansionContains {

  // ============================================================================
  // Properties
  // ============================================================================

  /** System value for the code */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** If user cannot select this entry */
  abstract?: boolean;

  /** Extension for abstract */
  _abstract?: IElement;

  /** If concept is inactive in the code system */
  inactive?: boolean;

  /** Extension for inactive */
  _inactive?: IElement;

  /** Version in which this code/display is defined */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Code - if blank, this is not a selectable code */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  /** User display for the concept */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Additional representations for this item */
  designation?: IValueSetComposeIncludeConceptDesignation[];

  /** Property value for the concept */
  property?: IValueSetExpansionContainsProperty[];

  /** Codes contained under this entry */
  contains?: IValueSetExpansionContains[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetExpansionContains>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_EXPANSION_CONTAINS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetExpansionContains from a JSON object
   */
  static fromJSON(json: IValueSetExpansionContains): ValueSetExpansionContains {
    return new ValueSetExpansionContains(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetExpansionContains with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetExpansionContains>): ValueSetExpansionContains {
    return new ValueSetExpansionContains({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetExpansionContains by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetExpansionContains) => Partial<IValueSetExpansionContains>): ValueSetExpansionContains {
    const currentData = this.toJSON();
    return new ValueSetExpansionContains({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetExpansionContains)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetExpansionContains {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_EXPANSION_CONTAINS_PROPERTIES);
    return result as IValueSetExpansionContains;
  }

  /**
   * Create a deep clone of this ValueSetExpansionContains
   */
  clone(): ValueSetExpansionContains {
    return new ValueSetExpansionContains(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetExpansionContains
   */
  toString(): string {
    const parts: string[] = ['ValueSetExpansionContains'];
    return parts.join(', ');
  }
}
