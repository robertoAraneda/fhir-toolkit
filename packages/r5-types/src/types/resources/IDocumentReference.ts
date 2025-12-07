import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IDocumentReferenceAttester } from '../backbones/IDocumentReferenceAttester.js';
import type { IDocumentReferenceContent } from '../backbones/IDocumentReferenceContent.js';
import type { IDocumentReferenceRelatesTo } from '../backbones/IDocumentReferenceRelatesTo.js';
import type { CompositionStatusType, DocumentReferenceStatusType } from '../../valuesets/index.js';

/**
 * DocumentReference Interface
 * 
 * A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.
 * 
 *
 * @see https://hl7.org/fhir/R4/documentreference.html
 */
export interface IDocumentReference extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DocumentReference';

  /**
   * Business identifiers for the document
   */
  identifier?: IIdentifier[];

  /**
   * An explicitly assigned identifer of a variation of the content in the DocumentReference
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Procedure that caused this media to be created
   */
  basedOn?: IReference<'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'CoverageEligibilityRequest' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'RequestOrchestration' | 'ServiceRequest' | 'SupplyRequest' | 'VisionPrescription'>[];

  /**
   * current | superseded | entered-in-error
   */
  status: DocumentReferenceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
   */
  docStatus?: CompositionStatusType;
  /**
   * Extension for docStatus
   */
  _docStatus?: IElement;

  /**
   * Imaging modality used
   */
  modality?: ICodeableConcept[];

  /**
   * Kind of document (LOINC if possible)
   */
  type?: ICodeableConcept;

  /**
   * Categorization of document
   */
  category?: ICodeableConcept[];

  /**
   * Who/what is the subject of the document
   */
  subject?: IReference<'Resource'>;

  /**
   * Context of the document content
   */
  context?: IReference<'Appointment' | 'Encounter' | 'EpisodeOfCare'>[];

  /**
   * Main clinical acts documented
   */
  event?: ICodeableReference[];

  /**
   * Body part included
   */
  bodySite?: ICodeableReference[];

  /**
   * Kind of facility where patient was seen
   */
  facilityType?: ICodeableConcept;

  /**
   * Additional details about where the content was created (e.g. clinical specialty)
   */
  practiceSetting?: ICodeableConcept;

  /**
   * Time of service that is being documented
   */
  period?: IPeriod;

  /**
   * When this document reference was created
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who and/or what authored the document
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson' | 'CareTeam'>[];

  /**
   * Attests to accuracy of the document
   */
  attester?: IDocumentReferenceAttester[];

  /**
   * Organization which maintains the document
   */
  custodian?: IReference<'Organization'>;

  /**
   * Relationships to other documents
   */
  relatesTo?: IDocumentReferenceRelatesTo[];

  /**
   * Human-readable description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Document security-tags
   */
  securityLabel?: ICodeableConcept[];

  /**
   * Document referenced
   */
  content: IDocumentReferenceContent[];

}
