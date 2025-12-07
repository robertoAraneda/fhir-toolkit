import { Element } from '../base/Element.js';
import type {
  IAttachment,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Attachment */
const ATTACHMENT_PROPERTIES = [
  'contentType',
  '_contentType',
  'language',
  '_language',
  'data',
  '_data',
  'url',
  '_url',
  'size',
  '_size',
  'hash',
  '_hash',
  'title',
  '_title',
  'creation',
  '_creation',
  'height',
  '_height',
  'width',
  '_width',
  'frames',
  '_frames',
  'duration',
  '_duration',
  'pages',
  '_pages',
] as const;

/**
 * Attachment - For referring to data content defined in other formats.
 *
 * @see https://hl7.org/fhir/R4/attachment.html
 *
 * @example
 * const attachment = new Attachment({
 *   // ... properties
 * });
 */
export class Attachment extends Element implements IAttachment {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Mime type of the content, with charset etc. */
  contentType?: string;

  /** Extension for contentType */
  _contentType?: IElement;

  /** Human language of the content (BCP-47) */
  language?: string;

  /** Extension for language */
  _language?: IElement;

  /** Data inline, base64ed */
  data?: string;

  /** Extension for data */
  _data?: IElement;

  /** Uri where the data can be found */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Number of bytes of content (if url provided) */
  size?: string;

  /** Extension for size */
  _size?: IElement;

  /** Hash of the data (sha-1, base64ed) */
  hash?: string;

  /** Extension for hash */
  _hash?: IElement;

  /** Label to display in place of the data */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Date attachment was first created */
  creation?: string;

  /** Extension for creation */
  _creation?: IElement;

  /** Height of the image in pixels (photo/video) */
  height?: number;

  /** Extension for height */
  _height?: IElement;

  /** Width of the image in pixels (photo/video) */
  width?: number;

  /** Extension for width */
  _width?: IElement;

  /** Number of frames if > 1 (photo) */
  frames?: number;

  /** Extension for frames */
  _frames?: IElement;

  /** Length in seconds (audio / video) */
  duration?: number;

  /** Extension for duration */
  _duration?: IElement;

  /** Number of printed pages */
  pages?: number;

  /** Extension for pages */
  _pages?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAttachment>) {
    super(data);
    if (data) {
      this.assignProps(data, ATTACHMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Attachment from a JSON object
   */
  static fromJSON(json: IAttachment): Attachment {
    return new Attachment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Attachment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAttachment>): Attachment {
    return new Attachment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Attachment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAttachment) => Partial<IAttachment>): Attachment {
    const currentData = this.toJSON();
    return new Attachment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAttachment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAttachment {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, ATTACHMENT_PROPERTIES);
    return result as IAttachment;
  }

  /**
   * Create a deep clone of this Attachment
   */
  clone(): Attachment {
    return new Attachment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Attachment
   */
  toString(): string {
    const parts: string[] = ['Attachment'];
    return parts.join(', ');
  }
}
