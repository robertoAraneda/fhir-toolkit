import { Element } from '../base/Element.js';
import type {
  IAttachment,
  IElement,
  IRelatedArtifact,
  RelatedArtifactTypeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RelatedArtifact */
const RELATED_ARTIFACT_PROPERTIES = [
  'type',
  '_type',
  'label',
  '_label',
  'display',
  '_display',
  'citation',
  '_citation',
  'url',
  '_url',
  'document',
  'resource',
  '_resource',
] as const;

/**
 * RelatedArtifact - Related artifacts such as additional documentation, justification, or bibliographic references.
 *
 * @see https://hl7.org/fhir/R4/relatedartifact.html
 *
 * @example
 * const relatedArtifact = new RelatedArtifact({
 *   // ... properties
 * });
 */
export class RelatedArtifact extends Element implements IRelatedArtifact {

  // ============================================================================
  // Properties
  // ============================================================================

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of */
  type: RelatedArtifactTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Short label */
  label?: string;

  /** Extension for label */
  _label?: IElement;

  /** Brief description of the related artifact */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Bibliographic citation for the artifact */
  citation?: string;

  /** Extension for citation */
  _citation?: IElement;

  /** Where the artifact can be accessed */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** What document is being referenced */
  document?: IAttachment;

  /** What resource is being referenced */
  resource?: string;

  /** Extension for resource */
  _resource?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRelatedArtifact>) {
    super(data);
    if (data) {
      this.assignProps(data, RELATED_ARTIFACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RelatedArtifact from a JSON object
   */
  static fromJSON(json: IRelatedArtifact): RelatedArtifact {
    return new RelatedArtifact(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RelatedArtifact with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRelatedArtifact>): RelatedArtifact {
    return new RelatedArtifact({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RelatedArtifact by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRelatedArtifact) => Partial<IRelatedArtifact>): RelatedArtifact {
    const currentData = this.toJSON();
    return new RelatedArtifact({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRelatedArtifact)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRelatedArtifact {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, RELATED_ARTIFACT_PROPERTIES);
    return result as IRelatedArtifact;
  }

  /**
   * Create a deep clone of this RelatedArtifact
   */
  clone(): RelatedArtifact {
    return new RelatedArtifact(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RelatedArtifact
   */
  toString(): string {
    const parts: string[] = ['RelatedArtifact'];
    return parts.join(', ');
  }
}
