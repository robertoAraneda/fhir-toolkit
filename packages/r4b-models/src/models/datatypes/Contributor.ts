import { Element } from '../base/Element.js';
import type {
  ContributorTypeType,
  IContactDetail,
  IContributor,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Contributor */
const CONTRIBUTOR_PROPERTIES = [
  'type',
  '_type',
  'name',
  '_name',
  'contact',
] as const;

/**
 * Contributor - A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 *
 * @see https://hl7.org/fhir/R4/contributor.html
 *
 * @example
 * const contributor = new Contributor({
 *   // ... properties
 * });
 */
export class Contributor extends Element implements IContributor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** author | editor | reviewer | endorser */
  type: ContributorTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Who contributed the content */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Contact details of the contributor */
  contact?: IContactDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContributor>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRIBUTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Contributor from a JSON object
   */
  static fromJSON(json: IContributor): Contributor {
    return new Contributor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Contributor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContributor>): Contributor {
    return new Contributor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Contributor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContributor) => Partial<IContributor>): Contributor {
    const currentData = this.toJSON();
    return new Contributor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContributor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContributor {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, CONTRIBUTOR_PROPERTIES);
    return result as IContributor;
  }

  /**
   * Create a deep clone of this Contributor
   */
  clone(): Contributor {
    return new Contributor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Contributor
   */
  toString(): string {
    const parts: string[] = ['Contributor'];
    return parts.join(', ');
  }
}
