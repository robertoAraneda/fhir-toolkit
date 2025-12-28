import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDetectedIssueMitigation,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DetectedIssueMitigation */
const DETECTED_ISSUE_MITIGATION_PROPERTIES = [
  'action',
  'date',
  '_date',
  'author',
  'note',
] as const;

/**
 * DetectedIssueMitigation - Step taken to address
 *
 * @see https://hl7.org/fhir/R5/detectedissuemitigation.html
 *
 * @example
 * const detectedIssueMitigation = new DetectedIssueMitigation({
 *   // ... properties
 * });
 */
export class DetectedIssueMitigation extends BackboneElement implements IDetectedIssueMitigation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What mitigation? */
  action: ICodeableConcept;

  /** Date committed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who is committing? */
  author?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Additional notes about the mitigation */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDetectedIssueMitigation>) {
    super(data);
    if (data) {
      this.assignProps(data, DETECTED_ISSUE_MITIGATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DetectedIssueMitigation from a JSON object
   */
  static fromJSON(json: IDetectedIssueMitigation): DetectedIssueMitigation {
    return new DetectedIssueMitigation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DetectedIssueMitigation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDetectedIssueMitigation>): DetectedIssueMitigation {
    return new DetectedIssueMitigation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DetectedIssueMitigation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDetectedIssueMitigation) => Partial<IDetectedIssueMitigation>): DetectedIssueMitigation {
    const currentData = this.toJSON();
    return new DetectedIssueMitigation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDetectedIssueMitigation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDetectedIssueMitigation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DETECTED_ISSUE_MITIGATION_PROPERTIES);
    return result as IDetectedIssueMitigation;
  }

  /**
   * Create a deep clone of this DetectedIssueMitigation
   */
  clone(): DetectedIssueMitigation {
    return new DetectedIssueMitigation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DetectedIssueMitigation
   */
  toString(): string {
    const parts: string[] = ['DetectedIssueMitigation'];
    return parts.join(', ');
  }
}
