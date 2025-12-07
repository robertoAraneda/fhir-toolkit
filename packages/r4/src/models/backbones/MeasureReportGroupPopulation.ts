import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMeasureReportGroupPopulation,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MeasureReportGroupPopulation */
const MEASURE_REPORT_GROUP_POPULATION_PROPERTIES = [
  'code',
  'count',
  '_count',
  'subjectResults',
] as const;

/**
 * MeasureReportGroupPopulation - The populations in the group
 *
 * @see https://hl7.org/fhir/R4/measurereportgrouppopulation.html
 *
 * @example
 * const measureReportGroupPopulation = new MeasureReportGroupPopulation({
 *   // ... properties
 * });
 */
export class MeasureReportGroupPopulation extends BackboneElement implements IMeasureReportGroupPopulation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: ICodeableConcept;

  /** Size of the population */
  count?: number;

  /** Extension for count */
  _count?: IElement;

  /** For subject-list reports, the subject results in this population */
  subjectResults?: IReference<'List'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReportGroupPopulation>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_GROUP_POPULATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReportGroupPopulation from a JSON object
   */
  static fromJSON(json: IMeasureReportGroupPopulation): MeasureReportGroupPopulation {
    return new MeasureReportGroupPopulation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReportGroupPopulation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReportGroupPopulation>): MeasureReportGroupPopulation {
    return new MeasureReportGroupPopulation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReportGroupPopulation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReportGroupPopulation) => Partial<IMeasureReportGroupPopulation>): MeasureReportGroupPopulation {
    const currentData = this.toJSON();
    return new MeasureReportGroupPopulation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReportGroupPopulation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReportGroupPopulation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_GROUP_POPULATION_PROPERTIES);
    return result as IMeasureReportGroupPopulation;
  }

  /**
   * Create a deep clone of this MeasureReportGroupPopulation
   */
  clone(): MeasureReportGroupPopulation {
    return new MeasureReportGroupPopulation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReportGroupPopulation
   */
  toString(): string {
    const parts: string[] = ['MeasureReportGroupPopulation'];
    return parts.join(', ');
  }
}
