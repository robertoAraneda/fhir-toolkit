import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  ILinkage,
  ILinkageItem,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Linkage */
const LINKAGE_PROPERTIES = [
  'active',
  '_active',
  'author',
  'item',
] as const;

/**
 * Linkage - Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 *
 * @see https://hl7.org/fhir/R4/linkage.html
 *
 * @example
 * const linkage = new Linkage({
 *   resourceType: 'Linkage',
 *   // ... properties
 * });
 */
export class Linkage extends DomainResource implements ILinkage {
  readonly resourceType = 'Linkage' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether this linkage assertion is active or not */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** Who is responsible for linkages */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Item to be linked */
  item: ILinkageItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ILinkage>) {
    super(data);
    if (data) {
      this.assignProps(data, LINKAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Linkage from a JSON object
   */
  static fromJSON(json: ILinkage): Linkage {
    return new Linkage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Linkage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ILinkage>): Linkage {
    return new Linkage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Linkage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ILinkage) => Partial<ILinkage>): Linkage {
    const currentData = this.toJSON();
    return new Linkage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ILinkage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ILinkage {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, LINKAGE_PROPERTIES);
    return result as ILinkage;
  }

  /**
   * Create a deep clone of this Linkage
   */
  clone(): Linkage {
    return new Linkage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Linkage
   */
  toString(): string {
    const parts: string[] = ['Linkage'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
