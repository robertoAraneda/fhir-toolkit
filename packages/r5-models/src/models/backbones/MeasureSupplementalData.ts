import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExpression,
  IMeasureSupplementalData,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MeasureSupplementalData */
const MEASURE_SUPPLEMENTAL_DATA_PROPERTIES = [
  'linkId',
  '_linkId',
  'code',
  'usage',
  'description',
  '_description',
  'criteria',
] as const;

/**
 * MeasureSupplementalData - What other data should be reported with the measure
 *
 * @see https://hl7.org/fhir/R5/measuresupplementaldata.html
 *
 * @example
 * const measureSupplementalData = new MeasureSupplementalData({
 *   // ... properties
 * });
 */
export class MeasureSupplementalData extends BackboneElement implements IMeasureSupplementalData {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique id for supplementalData in measure */
  linkId?: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** Meaning of the supplemental data */
  code?: ICodeableConcept;

  /** supplemental-data | risk-adjustment-factor */
  usage?: ICodeableConcept[];

  /** The human readable description of this supplemental data */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Expression describing additional data to be reported */
  criteria: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureSupplementalData>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_SUPPLEMENTAL_DATA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureSupplementalData from a JSON object
   */
  static fromJSON(json: IMeasureSupplementalData): MeasureSupplementalData {
    return new MeasureSupplementalData(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureSupplementalData with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureSupplementalData>): MeasureSupplementalData {
    return new MeasureSupplementalData({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureSupplementalData by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureSupplementalData) => Partial<IMeasureSupplementalData>): MeasureSupplementalData {
    const currentData = this.toJSON();
    return new MeasureSupplementalData({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureSupplementalData)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureSupplementalData {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_SUPPLEMENTAL_DATA_PROPERTIES);
    return result as IMeasureSupplementalData;
  }

  /**
   * Create a deep clone of this MeasureSupplementalData
   */
  clone(): MeasureSupplementalData {
    return new MeasureSupplementalData(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureSupplementalData
   */
  toString(): string {
    const parts: string[] = ['MeasureSupplementalData'];
    return parts.join(', ');
  }
}
