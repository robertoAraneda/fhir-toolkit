import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IElement,
  IMeasureReportGroupStratifierStratum,
  IMeasureReportGroupStratifierStratumComponent,
  IMeasureReportGroupStratifierStratumPopulation,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MeasureReportGroupStratifierStratum */
const MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_PROPERTIES = [
  'valueCodeableConcept',
  'valueBoolean',
  '_valueBoolean',
  'valueQuantity',
  'valueRange',
  'valueReference',
  'component',
  'population',
  'measureScoreQuantity',
  'measureScoreDateTime',
  '_measureScoreDateTime',
  'measureScoreCodeableConcept',
  'measureScorePeriod',
  'measureScoreRange',
  'measureScoreDuration',
] as const;

/**
 * MeasureReportGroupStratifierStratum - Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 *
 * @see https://hl7.org/fhir/R5/measurereportgroupstratifierstratum.html
 *
 * @example
 * const measureReportGroupStratifierStratum = new MeasureReportGroupStratifierStratum({
 *   // ... properties
 * });
 */
export class MeasureReportGroupStratifierStratum extends BackboneElement implements IMeasureReportGroupStratifierStratum {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The stratum value, e.g. male */
  valueCodeableConcept?: ICodeableConcept;

  /** The stratum value, e.g. male */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** The stratum value, e.g. male */
  valueQuantity?: IQuantity;

  /** The stratum value, e.g. male */
  valueRange?: IRange;

  /** The stratum value, e.g. male */
  valueReference?: IReference;

  /** Stratifier component values */
  component?: IMeasureReportGroupStratifierStratumComponent[];

  /** Population results in this stratum */
  population?: IMeasureReportGroupStratifierStratumPopulation[];

  /** What score this stratum achieved */
  measureScoreQuantity?: IQuantity;

  /** What score this stratum achieved */
  measureScoreDateTime?: string;

  /** Extension for measureScoreDateTime */
  _measureScoreDateTime?: IElement;

  /** What score this stratum achieved */
  measureScoreCodeableConcept?: ICodeableConcept;

  /** What score this stratum achieved */
  measureScorePeriod?: IPeriod;

  /** What score this stratum achieved */
  measureScoreRange?: IRange;

  /** What score this stratum achieved */
  measureScoreDuration?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReportGroupStratifierStratum>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReportGroupStratifierStratum from a JSON object
   */
  static fromJSON(json: IMeasureReportGroupStratifierStratum): MeasureReportGroupStratifierStratum {
    return new MeasureReportGroupStratifierStratum(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReportGroupStratifierStratum with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReportGroupStratifierStratum>): MeasureReportGroupStratifierStratum {
    return new MeasureReportGroupStratifierStratum({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReportGroupStratifierStratum by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReportGroupStratifierStratum) => Partial<IMeasureReportGroupStratifierStratum>): MeasureReportGroupStratifierStratum {
    const currentData = this.toJSON();
    return new MeasureReportGroupStratifierStratum({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReportGroupStratifierStratum)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReportGroupStratifierStratum {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_PROPERTIES);
    return result as IMeasureReportGroupStratifierStratum;
  }

  /**
   * Create a deep clone of this MeasureReportGroupStratifierStratum
   */
  clone(): MeasureReportGroupStratifierStratum {
    return new MeasureReportGroupStratifierStratum(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReportGroupStratifierStratum
   */
  toString(): string {
    const parts: string[] = ['MeasureReportGroupStratifierStratum'];
    return parts.join(', ');
  }
}
