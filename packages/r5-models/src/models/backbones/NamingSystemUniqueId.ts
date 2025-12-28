import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  INamingSystemUniqueId,
  IPeriod,
  NamingSystemIdentifierTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NamingSystemUniqueId */
const NAMING_SYSTEM_UNIQUE_ID_PROPERTIES = [
  'type',
  '_type',
  'value',
  '_value',
  'preferred',
  '_preferred',
  'comment',
  '_comment',
  'period',
  'authoritative',
  '_authoritative',
] as const;

/**
 * NamingSystemUniqueId - Unique identifiers used for system
 *
 * @see https://hl7.org/fhir/R5/namingsystemuniqueid.html
 *
 * @example
 * const namingSystemUniqueId = new NamingSystemUniqueId({
 *   // ... properties
 * });
 */
export class NamingSystemUniqueId extends BackboneElement implements INamingSystemUniqueId {

  // ============================================================================
  // Properties
  // ============================================================================

  /** oid | uuid | uri | iri-stem | v2csmnemonic | other */
  type: NamingSystemIdentifierTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The unique identifier */
  value: string;

  /** Extension for value */
  _value?: IElement;

  /** Is this the id that should be used for this type */
  preferred?: boolean;

  /** Extension for preferred */
  _preferred?: IElement;

  /** Notes about identifier usage */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** When is identifier valid? */
  period?: IPeriod;

  /** Whether the identifier is authoritative */
  authoritative?: boolean;

  /** Extension for authoritative */
  _authoritative?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INamingSystemUniqueId>) {
    super(data);
    if (data) {
      this.assignProps(data, NAMING_SYSTEM_UNIQUE_ID_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NamingSystemUniqueId from a JSON object
   */
  static fromJSON(json: INamingSystemUniqueId): NamingSystemUniqueId {
    return new NamingSystemUniqueId(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NamingSystemUniqueId with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INamingSystemUniqueId>): NamingSystemUniqueId {
    return new NamingSystemUniqueId({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NamingSystemUniqueId by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INamingSystemUniqueId) => Partial<INamingSystemUniqueId>): NamingSystemUniqueId {
    const currentData = this.toJSON();
    return new NamingSystemUniqueId({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INamingSystemUniqueId)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INamingSystemUniqueId {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NAMING_SYSTEM_UNIQUE_ID_PROPERTIES);
    return result as INamingSystemUniqueId;
  }

  /**
   * Create a deep clone of this NamingSystemUniqueId
   */
  clone(): NamingSystemUniqueId {
    return new NamingSystemUniqueId(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NamingSystemUniqueId
   */
  toString(): string {
    const parts: string[] = ['NamingSystemUniqueId'];
    return parts.join(', ');
  }
}
