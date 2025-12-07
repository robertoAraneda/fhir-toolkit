import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMolecularSequenceRelativeEdit,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MolecularSequenceRelativeEdit */
const MOLECULAR_SEQUENCE_RELATIVE_EDIT_PROPERTIES = [
  'start',
  '_start',
  'end',
  '_end',
  'replacementSequence',
  '_replacementSequence',
  'replacedSequence',
  '_replacedSequence',
] as const;

/**
 * MolecularSequenceRelativeEdit - Changes in sequence from the starting sequence
 *
 * @see https://hl7.org/fhir/R4/molecularsequencerelativeedit.html
 *
 * @example
 * const molecularSequenceRelativeEdit = new MolecularSequenceRelativeEdit({
 *   // ... properties
 * });
 */
export class MolecularSequenceRelativeEdit extends BackboneElement implements IMolecularSequenceRelativeEdit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Start position of the edit on the starting sequence */
  start?: number;

  /** Extension for start */
  _start?: IElement;

  /** End position of the edit on the starting sequence */
  end?: number;

  /** Extension for end */
  _end?: IElement;

  /** Allele that was observed */
  replacementSequence?: string;

  /** Extension for replacementSequence */
  _replacementSequence?: IElement;

  /** Allele in the starting sequence */
  replacedSequence?: string;

  /** Extension for replacedSequence */
  _replacedSequence?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceRelativeEdit>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_RELATIVE_EDIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceRelativeEdit from a JSON object
   */
  static fromJSON(json: IMolecularSequenceRelativeEdit): MolecularSequenceRelativeEdit {
    return new MolecularSequenceRelativeEdit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceRelativeEdit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceRelativeEdit>): MolecularSequenceRelativeEdit {
    return new MolecularSequenceRelativeEdit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceRelativeEdit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceRelativeEdit) => Partial<IMolecularSequenceRelativeEdit>): MolecularSequenceRelativeEdit {
    const currentData = this.toJSON();
    return new MolecularSequenceRelativeEdit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceRelativeEdit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceRelativeEdit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_RELATIVE_EDIT_PROPERTIES);
    return result as IMolecularSequenceRelativeEdit;
  }

  /**
   * Create a deep clone of this MolecularSequenceRelativeEdit
   */
  clone(): MolecularSequenceRelativeEdit {
    return new MolecularSequenceRelativeEdit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceRelativeEdit
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceRelativeEdit'];
    return parts.join(', ');
  }
}
