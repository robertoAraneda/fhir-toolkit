import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBundleLink,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BundleLink */
const BUNDLE_LINK_PROPERTIES = [
  'relation',
  '_relation',
  'url',
  '_url',
] as const;

/**
 * BundleLink - Links related to this Bundle
 *
 * @see https://hl7.org/fhir/R4/bundlelink.html
 *
 * @example
 * const bundleLink = new BundleLink({
 *   // ... properties
 * });
 */
export class BundleLink extends BackboneElement implements IBundleLink {

  // ============================================================================
  // Properties
  // ============================================================================

  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 */
  relation: string;

  /** Extension for relation */
  _relation?: IElement;

  /** Reference details for the link */
  url: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBundleLink>) {
    super(data);
    if (data) {
      this.assignProps(data, BUNDLE_LINK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BundleLink from a JSON object
   */
  static fromJSON(json: IBundleLink): BundleLink {
    return new BundleLink(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BundleLink with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBundleLink>): BundleLink {
    return new BundleLink({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BundleLink by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBundleLink) => Partial<IBundleLink>): BundleLink {
    const currentData = this.toJSON();
    return new BundleLink({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBundleLink)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBundleLink {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BUNDLE_LINK_PROPERTIES);
    return result as IBundleLink;
  }

  /**
   * Create a deep clone of this BundleLink
   */
  clone(): BundleLink {
    return new BundleLink(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BundleLink
   */
  toString(): string {
    const parts: string[] = ['BundleLink'];
    return parts.join(', ');
  }
}
