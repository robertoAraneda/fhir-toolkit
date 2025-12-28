import { Element } from '../base/Element.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IReference,
  IRelatedArtifact,
  PublicationStatusType,
  RelatedArtifactTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RelatedArtifact */
const RELATED_ARTIFACT_PROPERTIES = [
  'type',
  '_type',
  'classifier',
  'label',
  '_label',
  'display',
  '_display',
  'citation',
  '_citation',
  'document',
  'resource',
  '_resource',
  'resourceReference',
  'publicationStatus',
  '_publicationStatus',
  'publicationDate',
  '_publicationDate',
] as const;

/**
 * RelatedArtifact - Related artifacts such as additional documentation, justification, or bibliographic references.
 *
 * @see https://hl7.org/fhir/R5/relatedartifact.html
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

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as */
  type: RelatedArtifactTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Additional classifiers */
  classifier?: ICodeableConcept[];

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

  /** What document is being referenced */
  document?: IAttachment;

  /** What artifact is being referenced */
  resource?: string;

  /** Extension for resource */
  _resource?: IElement;

  /** What artifact, if not a conformance resource */
  resourceReference?: IReference<'Resource'>;

  /** draft | active | retired | unknown */
  publicationStatus?: PublicationStatusType;

  /** Extension for publicationStatus */
  _publicationStatus?: IElement;

  /** Date of publication of the artifact being referred to */
  publicationDate?: string;

  /** Extension for publicationDate */
  _publicationDate?: IElement;

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
