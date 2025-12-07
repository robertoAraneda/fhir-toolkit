import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  IElement,
  IEvidenceVariableCharacteristicTimeFromStart,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceVariableCharacteristicTimeFromStart */
const EVIDENCE_VARIABLE_CHARACTERISTIC_TIME_FROM_START_PROPERTIES = [
  'description',
  '_description',
  'quantity',
  'range',
  'note',
] as const;

/**
 * EvidenceVariableCharacteristicTimeFromStart - Observation time from study start
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristictimefromstart.html
 *
 * @example
 * const evidenceVariableCharacteristicTimeFromStart = new EvidenceVariableCharacteristicTimeFromStart({
 *   // ... properties
 * });
 */
export class EvidenceVariableCharacteristicTimeFromStart extends BackboneElement implements IEvidenceVariableCharacteristicTimeFromStart {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Human readable description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used to express the observation at a defined amount of time after the study start */
  quantity?: IQuantity;

  /** Used to express the observation within a period after the study start */
  range?: IRange;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableCharacteristicTimeFromStart>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_CHARACTERISTIC_TIME_FROM_START_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableCharacteristicTimeFromStart from a JSON object
   */
  static fromJSON(json: IEvidenceVariableCharacteristicTimeFromStart): EvidenceVariableCharacteristicTimeFromStart {
    return new EvidenceVariableCharacteristicTimeFromStart(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableCharacteristicTimeFromStart with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableCharacteristicTimeFromStart>): EvidenceVariableCharacteristicTimeFromStart {
    return new EvidenceVariableCharacteristicTimeFromStart({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableCharacteristicTimeFromStart by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableCharacteristicTimeFromStart) => Partial<IEvidenceVariableCharacteristicTimeFromStart>): EvidenceVariableCharacteristicTimeFromStart {
    const currentData = this.toJSON();
    return new EvidenceVariableCharacteristicTimeFromStart({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableCharacteristicTimeFromStart)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableCharacteristicTimeFromStart {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_CHARACTERISTIC_TIME_FROM_START_PROPERTIES);
    return result as IEvidenceVariableCharacteristicTimeFromStart;
  }

  /**
   * Create a deep clone of this EvidenceVariableCharacteristicTimeFromStart
   */
  clone(): EvidenceVariableCharacteristicTimeFromStart {
    return new EvidenceVariableCharacteristicTimeFromStart(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableCharacteristicTimeFromStart
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableCharacteristicTimeFromStart'];
    return parts.join(', ');
  }
}
