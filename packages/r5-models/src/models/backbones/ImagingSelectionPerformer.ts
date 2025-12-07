import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IImagingSelectionPerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImagingSelectionPerformer */
const IMAGING_SELECTION_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * ImagingSelectionPerformer - Selector of the instances (human or machine)
 *
 * @see https://hl7.org/fhir/R4/imagingselectionperformer.html
 *
 * @example
 * const imagingSelectionPerformer = new ImagingSelectionPerformer({
 *   // ... properties
 * });
 */
export class ImagingSelectionPerformer extends BackboneElement implements IImagingSelectionPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of performer */
  function?: ICodeableConcept;

  /** Author (human or machine) */
  actor?: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson' | 'HealthcareService'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingSelectionPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_SELECTION_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingSelectionPerformer from a JSON object
   */
  static fromJSON(json: IImagingSelectionPerformer): ImagingSelectionPerformer {
    return new ImagingSelectionPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingSelectionPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingSelectionPerformer>): ImagingSelectionPerformer {
    return new ImagingSelectionPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingSelectionPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingSelectionPerformer) => Partial<IImagingSelectionPerformer>): ImagingSelectionPerformer {
    const currentData = this.toJSON();
    return new ImagingSelectionPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingSelectionPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingSelectionPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_SELECTION_PERFORMER_PROPERTIES);
    return result as IImagingSelectionPerformer;
  }

  /**
   * Create a deep clone of this ImagingSelectionPerformer
   */
  clone(): ImagingSelectionPerformer {
    return new ImagingSelectionPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingSelectionPerformer
   */
  toString(): string {
    const parts: string[] = ['ImagingSelectionPerformer'];
    return parts.join(', ');
  }
}
