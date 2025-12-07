import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseProcessNote,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponseProcessNote */
const CLAIM_RESPONSE_PROCESS_NOTE_PROPERTIES = [
  'number',
  '_number',
  'type',
  'text',
  '_text',
  'language',
] as const;

/**
 * ClaimResponseProcessNote - Note concerning adjudication
 *
 * @see https://hl7.org/fhir/R4/claimresponseprocessnote.html
 *
 * @example
 * const claimResponseProcessNote = new ClaimResponseProcessNote({
 *   // ... properties
 * });
 */
export class ClaimResponseProcessNote extends BackboneElement implements IClaimResponseProcessNote {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Note instance identifier */
  number?: number;

  /** Extension for number */
  _number?: IElement;

  /** Note purpose */
  type?: ICodeableConcept;

  /** Note explanatory text */
  text: string;

  /** Extension for text */
  _text?: IElement;

  /** Language of the text */
  language?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseProcessNote>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_PROCESS_NOTE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseProcessNote from a JSON object
   */
  static fromJSON(json: IClaimResponseProcessNote): ClaimResponseProcessNote {
    return new ClaimResponseProcessNote(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseProcessNote with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseProcessNote>): ClaimResponseProcessNote {
    return new ClaimResponseProcessNote({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseProcessNote by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseProcessNote) => Partial<IClaimResponseProcessNote>): ClaimResponseProcessNote {
    const currentData = this.toJSON();
    return new ClaimResponseProcessNote({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseProcessNote)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseProcessNote {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_PROCESS_NOTE_PROPERTIES);
    return result as IClaimResponseProcessNote;
  }

  /**
   * Create a deep clone of this ClaimResponseProcessNote
   */
  clone(): ClaimResponseProcessNote {
    return new ClaimResponseProcessNote(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseProcessNote
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseProcessNote'];
    return parts.join(', ');
  }
}
