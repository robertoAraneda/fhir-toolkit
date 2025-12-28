import { Element } from '../base/Element.js';
import type {
  ICoding,
  IElement,
  IMeta,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Meta */
const META_PROPERTIES = [
  'versionId',
  '_versionId',
  'lastUpdated',
  '_lastUpdated',
  'source',
  '_source',
  'profile',
  '_profile',
  'security',
  'tag',
] as const;

/**
 * Meta - The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 *
 * @see https://hl7.org/fhir/R4B/meta.html
 *
 * @example
 * const meta = new Meta({
 *   // ... properties
 * });
 */
export class Meta extends Element implements IMeta {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Version specific identifier */
  versionId?: string;

  /** Extension for versionId */
  _versionId?: IElement;

  /** When the resource version last changed */
  lastUpdated?: string;

  /** Extension for lastUpdated */
  _lastUpdated?: IElement;

  /** Identifies where the resource comes from */
  source?: string;

  /** Extension for source */
  _source?: IElement;

  /** Profiles this resource claims to conform to */
  profile?: string[];

  /** Extension for profile */
  _profile?: IElement;

  /** Security Labels applied to this resource */
  security?: ICoding[];

  /** Tags applied to this resource */
  tag?: ICoding[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeta>) {
    super(data);
    if (data) {
      this.assignProps(data, META_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Meta from a JSON object
   */
  static fromJSON(json: IMeta): Meta {
    return new Meta(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Meta with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeta>): Meta {
    return new Meta({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Meta by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeta) => Partial<IMeta>): Meta {
    const currentData = this.toJSON();
    return new Meta({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeta)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeta {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, META_PROPERTIES);
    return result as IMeta;
  }

  /**
   * Create a deep clone of this Meta
   */
  clone(): Meta {
    return new Meta(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Meta
   */
  toString(): string {
    const parts: string[] = ['Meta'];
    return parts.join(', ');
  }
}
