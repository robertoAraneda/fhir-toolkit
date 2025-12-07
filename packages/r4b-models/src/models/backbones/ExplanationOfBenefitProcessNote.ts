import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitProcessNote,
  NoteTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitProcessNote */
const EXPLANATION_OF_BENEFIT_PROCESS_NOTE_PROPERTIES = [
  'number',
  '_number',
  'type',
  '_type',
  'text',
  '_text',
  'language',
] as const;

/**
 * ExplanationOfBenefitProcessNote - Note concerning adjudication
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitprocessnote.html
 *
 * @example
 * const explanationOfBenefitProcessNote = new ExplanationOfBenefitProcessNote({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitProcessNote extends BackboneElement implements IExplanationOfBenefitProcessNote {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Note instance identifier */
  number?: number;

  /** Extension for number */
  _number?: IElement;

  /** display | print | printoper */
  type?: NoteTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Note explanatory text */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Language of the text */
  language?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitProcessNote>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_PROCESS_NOTE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitProcessNote from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitProcessNote): ExplanationOfBenefitProcessNote {
    return new ExplanationOfBenefitProcessNote(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitProcessNote with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitProcessNote>): ExplanationOfBenefitProcessNote {
    return new ExplanationOfBenefitProcessNote({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitProcessNote by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitProcessNote) => Partial<IExplanationOfBenefitProcessNote>): ExplanationOfBenefitProcessNote {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitProcessNote({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitProcessNote)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitProcessNote {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_PROCESS_NOTE_PROPERTIES);
    return result as IExplanationOfBenefitProcessNote;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitProcessNote
   */
  clone(): ExplanationOfBenefitProcessNote {
    return new ExplanationOfBenefitProcessNote(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitProcessNote
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitProcessNote'];
    return parts.join(', ');
  }
}
