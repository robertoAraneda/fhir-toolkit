import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifier,
  IMeasureReportGroupStratifierStratum,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MeasureReportGroupStratifier */
const MEASURE_REPORT_GROUP_STRATIFIER_PROPERTIES = [
  'code',
  'stratum',
] as const;

/**
 * MeasureReportGroupStratifier - Stratification results
 *
 * @see https://hl7.org/fhir/R4B/measurereportgroupstratifier.html
 *
 * @example
 * const measureReportGroupStratifier = new MeasureReportGroupStratifier({
 *   // ... properties
 * });
 */
export class MeasureReportGroupStratifier extends BackboneElement implements IMeasureReportGroupStratifier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What stratifier of the group */
  code?: ICodeableConcept[];

  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components */
  stratum?: IMeasureReportGroupStratifierStratum[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReportGroupStratifier>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_GROUP_STRATIFIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReportGroupStratifier from a JSON object
   */
  static fromJSON(json: IMeasureReportGroupStratifier): MeasureReportGroupStratifier {
    return new MeasureReportGroupStratifier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReportGroupStratifier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReportGroupStratifier>): MeasureReportGroupStratifier {
    return new MeasureReportGroupStratifier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReportGroupStratifier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReportGroupStratifier) => Partial<IMeasureReportGroupStratifier>): MeasureReportGroupStratifier {
    const currentData = this.toJSON();
    return new MeasureReportGroupStratifier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReportGroupStratifier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReportGroupStratifier {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_GROUP_STRATIFIER_PROPERTIES);
    return result as IMeasureReportGroupStratifier;
  }

  /**
   * Create a deep clone of this MeasureReportGroupStratifier
   */
  clone(): MeasureReportGroupStratifier {
    return new MeasureReportGroupStratifier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReportGroupStratifier
   */
  toString(): string {
    const parts: string[] = ['MeasureReportGroupStratifier'];
    return parts.join(', ');
  }
}
