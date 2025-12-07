import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IEvidenceReportSubjectCharacteristic,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceReportSubjectCharacteristic */
const EVIDENCE_REPORT_SUBJECT_CHARACTERISTIC_PROPERTIES = [
  'code',
  'valueReference',
  'valueCodeableConcept',
  'valueBoolean',
  '_valueBoolean',
  'valueQuantity',
  'valueRange',
  'exclude',
  '_exclude',
  'period',
] as const;

/**
 * EvidenceReportSubjectCharacteristic - Characteristic
 *
 * @see https://hl7.org/fhir/R4/evidencereportsubjectcharacteristic.html
 *
 * @example
 * const evidenceReportSubjectCharacteristic = new EvidenceReportSubjectCharacteristic({
 *   // ... properties
 * });
 */
export class EvidenceReportSubjectCharacteristic extends BackboneElement implements IEvidenceReportSubjectCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Characteristic code */
  code: ICodeableConcept;

  /** Characteristic value */
  valueReference?: IReference;

  /** Characteristic value */
  valueCodeableConcept?: ICodeableConcept;

  /** Characteristic value */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Characteristic value */
  valueQuantity?: IQuantity;

  /** Characteristic value */
  valueRange?: IRange;

  /** Is used to express not the characteristic */
  exclude?: boolean;

  /** Extension for exclude */
  _exclude?: IElement;

  /** Timeframe for the characteristic */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceReportSubjectCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_REPORT_SUBJECT_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceReportSubjectCharacteristic from a JSON object
   */
  static fromJSON(json: IEvidenceReportSubjectCharacteristic): EvidenceReportSubjectCharacteristic {
    return new EvidenceReportSubjectCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceReportSubjectCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceReportSubjectCharacteristic>): EvidenceReportSubjectCharacteristic {
    return new EvidenceReportSubjectCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceReportSubjectCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceReportSubjectCharacteristic) => Partial<IEvidenceReportSubjectCharacteristic>): EvidenceReportSubjectCharacteristic {
    const currentData = this.toJSON();
    return new EvidenceReportSubjectCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceReportSubjectCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceReportSubjectCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_REPORT_SUBJECT_CHARACTERISTIC_PROPERTIES);
    return result as IEvidenceReportSubjectCharacteristic;
  }

  /**
   * Create a deep clone of this EvidenceReportSubjectCharacteristic
   */
  clone(): EvidenceReportSubjectCharacteristic {
    return new EvidenceReportSubjectCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceReportSubjectCharacteristic
   */
  toString(): string {
    const parts: string[] = ['EvidenceReportSubjectCharacteristic'];
    return parts.join(', ');
  }
}
