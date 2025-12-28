import { DomainResource } from '../base/DomainResource.js';
import type {
  BundleTypeType,
  IBundle,
  IBundleEntry,
  IBundleLink,
  IElement,
  IIdentifier,
  IResource,
  ISignature,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Bundle */
const BUNDLE_PROPERTIES = [
  'identifier',
  'type',
  '_type',
  'timestamp',
  '_timestamp',
  'total',
  '_total',
  'link',
  'entry',
  'signature',
  'issues',
] as const;

/**
 * Bundle - A container for a collection of resources.
 *
 * @see https://hl7.org/fhir/R5/bundle.html
 *
 * @example
 * const bundle = new Bundle({
 *   // ... properties
 * });
 */
export class Bundle extends DomainResource implements IBundle {
  readonly resourceType = 'Bundle' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Persistent identifier for the bundle */
  identifier?: IIdentifier;

  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification */
  type: BundleTypeType;

  /** Extension for type */
  _type?: IElement;

  /** When the bundle was assembled */
  timestamp?: string;

  /** Extension for timestamp */
  _timestamp?: IElement;

  /** If search, the total number of matches */
  total?: number;

  /** Extension for total */
  _total?: IElement;

  /** Links related to this Bundle */
  link?: IBundleLink[];

  /** Entry in the bundle - will have a resource or information */
  entry?: IBundleEntry[];

  /** Digital Signature */
  signature?: ISignature;

  /** Issues with the Bundle */
  issues?: IResource;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IBundle>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, BUNDLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Bundle from a JSON object
   */
  static fromJSON(json: IBundle): Bundle {
    return new Bundle(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Bundle with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBundle>): Bundle {
    return new Bundle({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Bundle by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBundle) => Partial<IBundle>): Bundle {
    const currentData = this.toJSON();
    return new Bundle({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBundle)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBundle {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, BUNDLE_PROPERTIES);
    return result as IBundle;
  }

  /**
   * Create a deep clone of this Bundle
   */
  clone(): Bundle {
    return new Bundle(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Bundle
   */
  toString(): string {
    const parts: string[] = ['Bundle'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
