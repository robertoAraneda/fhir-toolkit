import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICitationRelatesTo,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationRelatesTo */
const CITATION_RELATES_TO_PROPERTIES = [
  'relationshipType',
  'targetClassifier',
  'targetUri',
  '_targetUri',
  'targetIdentifier',
  'targetReference',
  'targetAttachment',
] as const;

/**
 * CitationRelatesTo - Artifact related to the Citation Resource
 *
 * @see https://hl7.org/fhir/R4/citationrelatesto.html
 *
 * @example
 * const citationRelatesTo = new CitationRelatesTo({
 *   // ... properties
 * });
 */
export class CitationRelatesTo extends BackboneElement implements ICitationRelatesTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How the Citation resource relates to the target artifact */
  relationshipType: ICodeableConcept;

  /** The clasification of the related artifact */
  targetClassifier?: ICodeableConcept[];

  /** The article or artifact that the Citation Resource is related to */
  targetUri?: string;

  /** Extension for targetUri */
  _targetUri?: IElement;

  /** The article or artifact that the Citation Resource is related to */
  targetIdentifier?: IIdentifier;

  /** The article or artifact that the Citation Resource is related to */
  targetReference?: IReference;

  /** The article or artifact that the Citation Resource is related to */
  targetAttachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationRelatesTo>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_RELATES_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationRelatesTo from a JSON object
   */
  static fromJSON(json: ICitationRelatesTo): CitationRelatesTo {
    return new CitationRelatesTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationRelatesTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationRelatesTo>): CitationRelatesTo {
    return new CitationRelatesTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationRelatesTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationRelatesTo) => Partial<ICitationRelatesTo>): CitationRelatesTo {
    const currentData = this.toJSON();
    return new CitationRelatesTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationRelatesTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationRelatesTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_RELATES_TO_PROPERTIES);
    return result as ICitationRelatesTo;
  }

  /**
   * Create a deep clone of this CitationRelatesTo
   */
  clone(): CitationRelatesTo {
    return new CitationRelatesTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationRelatesTo
   */
  toString(): string {
    const parts: string[] = ['CitationRelatesTo'];
    return parts.join(', ');
  }
}
