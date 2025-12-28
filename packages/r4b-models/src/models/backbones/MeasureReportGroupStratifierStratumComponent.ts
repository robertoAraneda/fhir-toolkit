import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifierStratumComponent,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MeasureReportGroupStratifierStratumComponent */
const MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_COMPONENT_PROPERTIES = [
  'code',
  'value',
] as const;

/**
 * MeasureReportGroupStratifierStratumComponent - Stratifier component values
 *
 * @see https://hl7.org/fhir/R4B/measurereportgroupstratifierstratumcomponent.html
 *
 * @example
 * const measureReportGroupStratifierStratumComponent = new MeasureReportGroupStratifierStratumComponent({
 *   // ... properties
 * });
 */
export class MeasureReportGroupStratifierStratumComponent extends BackboneElement implements IMeasureReportGroupStratifierStratumComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What stratifier component of the group */
  code: ICodeableConcept;

  /** The stratum component value, e.g. male */
  value: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReportGroupStratifierStratumComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReportGroupStratifierStratumComponent from a JSON object
   */
  static fromJSON(json: IMeasureReportGroupStratifierStratumComponent): MeasureReportGroupStratifierStratumComponent {
    return new MeasureReportGroupStratifierStratumComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReportGroupStratifierStratumComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReportGroupStratifierStratumComponent>): MeasureReportGroupStratifierStratumComponent {
    return new MeasureReportGroupStratifierStratumComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReportGroupStratifierStratumComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReportGroupStratifierStratumComponent) => Partial<IMeasureReportGroupStratifierStratumComponent>): MeasureReportGroupStratifierStratumComponent {
    const currentData = this.toJSON();
    return new MeasureReportGroupStratifierStratumComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReportGroupStratifierStratumComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReportGroupStratifierStratumComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_COMPONENT_PROPERTIES);
    return result as IMeasureReportGroupStratifierStratumComponent;
  }

  /**
   * Create a deep clone of this MeasureReportGroupStratifierStratumComponent
   */
  clone(): MeasureReportGroupStratifierStratumComponent {
    return new MeasureReportGroupStratifierStratumComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReportGroupStratifierStratumComponent
   */
  toString(): string {
    const parts: string[] = ['MeasureReportGroupStratifierStratumComponent'];
    return parts.join(', ');
  }
}
