import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IdentifierUseType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Identifier */
const IDENTIFIER_PROPERTIES = [
  'use',
  '_use',
  'type',
  'system',
  '_system',
  'value',
  '_value',
  'period',
  'assigner',
] as const;

/**
 * Identifier - An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 *
 * @see https://hl7.org/fhir/R5/identifier.html
 *
 * @example
 * const identifier = new Identifier({
 *   // ... properties
 * });
 */
export class Identifier extends Element implements IIdentifier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** usual | official | temp | secondary | old (If known) */
  use?: IdentifierUseType;

  /** Extension for use */
  _use?: IElement;

  /** Description of identifier */
  type?: ICodeableConcept;

  /** The namespace for the identifier value */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** The value that is unique */
  value?: string;

  /** Extension for value */
  _value?: IElement;

  /** Time period when id is/was valid for use */
  period?: IPeriod;

  /** Organization that issued id (may be just text) */
  assigner?: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IIdentifier>) {
    super(data);
    if (data) {
      this.assignProps(data, IDENTIFIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Identifier from a JSON object
   */
  static fromJSON(json: IIdentifier): Identifier {
    return new Identifier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Identifier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IIdentifier>): Identifier {
    return new Identifier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Identifier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IIdentifier) => Partial<IIdentifier>): Identifier {
    const currentData = this.toJSON();
    return new Identifier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IIdentifier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IIdentifier {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, IDENTIFIER_PROPERTIES);
    return result as IIdentifier;
  }

  /**
   * Create a deep clone of this Identifier
   */
  clone(): Identifier {
    return new Identifier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Identifier
   */
  toString(): string {
    const parts: string[] = ['Identifier'];
    return parts.join(', ');
  }
}
