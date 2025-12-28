import { DomainResource } from '../base/DomainResource.js';
import type {
  DetectedIssueSeverityType,
  DetectedIssueStatusType,
  ICodeableConcept,
  IDetectedIssue,
  IDetectedIssueEvidence,
  IDetectedIssueMitigation,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DetectedIssue */
const DETECTED_ISSUE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'category',
  'code',
  'severity',
  '_severity',
  'subject',
  'encounter',
  'identifiedDateTime',
  '_identifiedDateTime',
  'identifiedPeriod',
  'author',
  'implicated',
  'evidence',
  'detail',
  '_detail',
  'reference',
  '_reference',
  'mitigation',
] as const;

/**
 * DetectedIssue - Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.
 *
 * @see https://hl7.org/fhir/R5/detectedissue.html
 *
 * @example
 * const detectedIssue = new DetectedIssue({
 *   // ... properties
 * });
 */
export class DetectedIssue extends DomainResource implements IDetectedIssue {
  readonly resourceType = 'DetectedIssue' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique id for the detected issue */
  identifier?: IIdentifier[];

  /** preliminary | final | entered-in-error | mitigated */
  status: DetectedIssueStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Type of detected issue, e.g. drug-drug, duplicate therapy, etc */
  category?: ICodeableConcept[];

  /** Specific type of detected issue, e.g. drug-drug, duplicate therapy, etc */
  code?: ICodeableConcept;

  /** high | moderate | low */
  severity?: DetectedIssueSeverityType;

  /** Extension for severity */
  _severity?: IElement;

  /** Associated subject */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /** Encounter detected issue is part of */
  encounter?: IReference<'Encounter'>;

  /** When identified */
  identifiedDateTime?: string;

  /** Extension for identifiedDateTime */
  _identifiedDateTime?: IElement;

  /** When identified */
  identifiedPeriod?: IPeriod;

  /** The provider or device that identified the issue */
  author?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device'>;

  /** Problem resource */
  implicated?: IReference<'Resource'>[];

  /** Supporting evidence */
  evidence?: IDetectedIssueEvidence[];

  /** Description and context */
  detail?: string;

  /** Extension for detail */
  _detail?: IElement;

  /** Authority for issue */
  reference?: string;

  /** Extension for reference */
  _reference?: IElement;

  /** Step taken to address */
  mitigation?: IDetectedIssueMitigation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDetectedIssue>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DETECTED_ISSUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DetectedIssue from a JSON object
   */
  static fromJSON(json: IDetectedIssue): DetectedIssue {
    return new DetectedIssue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DetectedIssue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDetectedIssue>): DetectedIssue {
    return new DetectedIssue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DetectedIssue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDetectedIssue) => Partial<IDetectedIssue>): DetectedIssue {
    const currentData = this.toJSON();
    return new DetectedIssue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDetectedIssue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDetectedIssue {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DETECTED_ISSUE_PROPERTIES);
    return result as IDetectedIssue;
  }

  /**
   * Create a deep clone of this DetectedIssue
   */
  clone(): DetectedIssue {
    return new DetectedIssue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DetectedIssue
   */
  toString(): string {
    const parts: string[] = ['DetectedIssue'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
