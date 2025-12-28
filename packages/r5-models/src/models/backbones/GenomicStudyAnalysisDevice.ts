import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisDevice,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GenomicStudyAnalysisDevice */
const GENOMIC_STUDY_ANALYSIS_DEVICE_PROPERTIES = [
  'device',
  'function',
] as const;

/**
 * GenomicStudyAnalysisDevice - Devices used for the analysis (e.g., instruments, software), with settings and parameters
 *
 * @see https://hl7.org/fhir/R5/genomicstudyanalysisdevice.html
 *
 * @example
 * const genomicStudyAnalysisDevice = new GenomicStudyAnalysisDevice({
 *   // ... properties
 * });
 */
export class GenomicStudyAnalysisDevice extends BackboneElement implements IGenomicStudyAnalysisDevice {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Device used for the analysis */
  device?: IReference<'Device'>;

  /** Specific function for the device used for the analysis */
  function?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGenomicStudyAnalysisDevice>) {
    super(data);
    if (data) {
      this.assignProps(data, GENOMIC_STUDY_ANALYSIS_DEVICE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GenomicStudyAnalysisDevice from a JSON object
   */
  static fromJSON(json: IGenomicStudyAnalysisDevice): GenomicStudyAnalysisDevice {
    return new GenomicStudyAnalysisDevice(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GenomicStudyAnalysisDevice with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGenomicStudyAnalysisDevice>): GenomicStudyAnalysisDevice {
    return new GenomicStudyAnalysisDevice({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GenomicStudyAnalysisDevice by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGenomicStudyAnalysisDevice) => Partial<IGenomicStudyAnalysisDevice>): GenomicStudyAnalysisDevice {
    const currentData = this.toJSON();
    return new GenomicStudyAnalysisDevice({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGenomicStudyAnalysisDevice)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGenomicStudyAnalysisDevice {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GENOMIC_STUDY_ANALYSIS_DEVICE_PROPERTIES);
    return result as IGenomicStudyAnalysisDevice;
  }

  /**
   * Create a deep clone of this GenomicStudyAnalysisDevice
   */
  clone(): GenomicStudyAnalysisDevice {
    return new GenomicStudyAnalysisDevice(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GenomicStudyAnalysisDevice
   */
  toString(): string {
    const parts: string[] = ['GenomicStudyAnalysisDevice'];
    return parts.join(', ');
  }
}
