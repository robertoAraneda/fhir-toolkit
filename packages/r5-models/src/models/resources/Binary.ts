import { DomainResource } from '../base/DomainResource.js';
import type {
  IBinary,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Binary */
const BINARY_PROPERTIES = [
  'contentType',
  '_contentType',
  'securityContext',
  'data',
  '_data',
] as const;

/**
 * Binary - A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 *
 * @see https://hl7.org/fhir/R4/binary.html
 *
 * @example
 * const binary = new Binary({
 *   resourceType: 'Binary',
 *   // ... properties
 * });
 */
export class Binary extends DomainResource implements IBinary {
  readonly resourceType = 'Binary' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** MimeType of the binary content */
  contentType: string;

  /** Extension for contentType */
  _contentType?: IElement;

  /** Identifies another resource to use as proxy when enforcing access control */
  securityContext?: IReference<'Resource'>;

  /** The actual content */
  data?: string;

  /** Extension for data */
  _data?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBinary>) {
    super(data);
    if (data) {
      this.assignProps(data, BINARY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Binary from a JSON object
   */
  static fromJSON(json: IBinary): Binary {
    return new Binary(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Binary with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBinary>): Binary {
    return new Binary({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Binary by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBinary) => Partial<IBinary>): Binary {
    const currentData = this.toJSON();
    return new Binary({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBinary)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBinary {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, BINARY_PROPERTIES);
    return result as IBinary;
  }

  /**
   * Create a deep clone of this Binary
   */
  clone(): Binary {
    return new Binary(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Binary
   */
  toString(): string {
    const parts: string[] = ['Binary'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
