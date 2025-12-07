import { DomainResource } from '../base/DomainResource.js';
import type {
  CompositionStatusType,
  DocumentReferenceStatusType,
  ICodeableConcept,
  ICodeableReference,
  IDocumentReference,
  IDocumentReferenceAttester,
  IDocumentReferenceContent,
  IDocumentReferenceRelatesTo,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DocumentReference */
const DOCUMENT_REFERENCE_PROPERTIES = [
  'identifier',
  'version',
  '_version',
  'basedOn',
  'status',
  '_status',
  'docStatus',
  '_docStatus',
  'modality',
  'type',
  'category',
  'subject',
  'context',
  'event',
  'bodySite',
  'facilityType',
  'practiceSetting',
  'period',
  'date',
  '_date',
  'author',
  'attester',
  'custodian',
  'relatesTo',
  'description',
  '_description',
  'securityLabel',
  'content',
] as const;

/**
 * DocumentReference - A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.
 *
 * @see https://hl7.org/fhir/R4/documentreference.html
 *
 * @example
 * const documentReference = new DocumentReference({
 *   // ... properties
 * });
 */
export class DocumentReference extends DomainResource implements IDocumentReference {
  readonly resourceType = 'DocumentReference' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifiers for the document */
  identifier?: IIdentifier[];

  /** An explicitly assigned identifer of a variation of the content in the DocumentReference */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Procedure that caused this media to be created */
  basedOn?: IReference<'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'CoverageEligibilityRequest' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'RequestOrchestration' | 'ServiceRequest' | 'SupplyRequest' | 'VisionPrescription'>[];

  /** current | superseded | entered-in-error */
  status: DocumentReferenceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown */
  docStatus?: CompositionStatusType;

  /** Extension for docStatus */
  _docStatus?: IElement;

  /** Imaging modality used */
  modality?: ICodeableConcept[];

  /** Kind of document (LOINC if possible) */
  type?: ICodeableConcept;

  /** Categorization of document */
  category?: ICodeableConcept[];

  /** Who/what is the subject of the document */
  subject?: IReference<'Resource'>;

  /** Context of the document content */
  context?: IReference<'Appointment' | 'Encounter' | 'EpisodeOfCare'>[];

  /** Main clinical acts documented */
  event?: ICodeableReference[];

  /** Body part included */
  bodySite?: ICodeableReference[];

  /** Kind of facility where patient was seen */
  facilityType?: ICodeableConcept;

  /** Additional details about where the content was created (e.g. clinical specialty) */
  practiceSetting?: ICodeableConcept;

  /** Time of service that is being documented */
  period?: IPeriod;

  /** When this document reference was created */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who and/or what authored the document */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson' | 'CareTeam'>[];

  /** Attests to accuracy of the document */
  attester?: IDocumentReferenceAttester[];

  /** Organization which maintains the document */
  custodian?: IReference<'Organization'>;

  /** Relationships to other documents */
  relatesTo?: IDocumentReferenceRelatesTo[];

  /** Human-readable description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Document security-tags */
  securityLabel?: ICodeableConcept[];

  /** Document referenced */
  content: IDocumentReferenceContent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDocumentReference>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReference from a JSON object
   */
  static fromJSON(json: IDocumentReference): DocumentReference {
    return new DocumentReference(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReference with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReference>): DocumentReference {
    return new DocumentReference({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReference by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReference) => Partial<IDocumentReference>): DocumentReference {
    const currentData = this.toJSON();
    return new DocumentReference({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReference)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReference {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_PROPERTIES);
    return result as IDocumentReference;
  }

  /**
   * Create a deep clone of this DocumentReference
   */
  clone(): DocumentReference {
    return new DocumentReference(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReference
   */
  toString(): string {
    const parts: string[] = ['DocumentReference'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
