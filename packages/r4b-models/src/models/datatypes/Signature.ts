import { Element } from '../base/Element.js';
import type {
  ICoding,
  IElement,
  IReference,
  ISignature,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Signature */
const SIGNATURE_PROPERTIES = [
  'type',
  'when',
  '_when',
  'who',
  'onBehalfOf',
  'targetFormat',
  '_targetFormat',
  'sigFormat',
  '_sigFormat',
  'data',
  '_data',
] as const;

/**
 * Signature - A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 *
 * @see https://hl7.org/fhir/R4B/signature.html
 *
 * @example
 * const signature = new Signature({
 *   // ... properties
 * });
 */
export class Signature extends Element implements ISignature {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Indication of the reason the entity signed the object(s) */
  type: ICoding[];

  /** When the signature was created */
  when: string;

  /** Extension for when */
  _when?: IElement;

  /** Who signed */
  who: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  /** The party represented */
  onBehalfOf?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  /** The technical format of the signed resources */
  targetFormat?: string;

  /** Extension for targetFormat */
  _targetFormat?: IElement;

  /** The technical format of the signature */
  sigFormat?: string;

  /** Extension for sigFormat */
  _sigFormat?: IElement;

  /** The actual signature content (XML DigSig. JWS, picture, etc.) */
  data?: string;

  /** Extension for data */
  _data?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISignature>) {
    super(data);
    if (data) {
      this.assignProps(data, SIGNATURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Signature from a JSON object
   */
  static fromJSON(json: ISignature): Signature {
    return new Signature(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Signature with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISignature>): Signature {
    return new Signature({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Signature by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISignature) => Partial<ISignature>): Signature {
    const currentData = this.toJSON();
    return new Signature({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISignature)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISignature {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, SIGNATURE_PROPERTIES);
    return result as ISignature;
  }

  /**
   * Create a deep clone of this Signature
   */
  clone(): Signature {
    return new Signature(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Signature
   */
  toString(): string {
    const parts: string[] = ['Signature'];
    return parts.join(', ');
  }
}
