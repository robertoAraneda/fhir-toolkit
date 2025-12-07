import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DocumentReference } from '../../models/resources/DocumentReference.js';
import type {
  CompositionStatusType,
  DocumentReferenceStatusType,
  ICodeableConcept,
  ICodeableReference,
  IDocumentReference,
  IDocumentReferenceAttester,
  IDocumentReferenceContent,
  IDocumentReferenceRelatesTo,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DocumentReferenceBuilder - Fluent builder for DocumentReference resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReference = new DocumentReferenceBuilder()
 *   .setId('123')
 *   .setVersion(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DocumentReferenceBuilder extends DomainResourceBuilder<DocumentReference, IDocumentReference> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set version
   * An explicitly assigned identifer of a variation of the content in the DocumentReference
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set status
   * current | superseded | entered-in-error
   */
  setStatus(status: DocumentReferenceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set docStatus
   * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
   */
  setDocStatus(docStatus: CompositionStatusType): this {
    this.data.docStatus = docStatus;
    return this;
  }

  /**
   * Set type
   * Kind of document (LOINC if possible)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * Who/what is the subject of the document
   */
  setSubject(subject: IReference<'Resource'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set facilityType
   * Kind of facility where patient was seen
   */
  setFacilityType(facilityType: ICodeableConcept): this {
    this.data.facilityType = facilityType;
    return this;
  }

  /**
   * Set practiceSetting
   * Additional details about where the content was created (e.g. clinical specialty)
   */
  setPracticeSetting(practiceSetting: ICodeableConcept): this {
    this.data.practiceSetting = practiceSetting;
    return this;
  }

  /**
   * Set period
   * Time of service that is being documented
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set date
   * When this document reference was created
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set custodian
   * Organization which maintains the document
   */
  setCustodian(custodian: IReference<'Organization'>): this {
    this.data.custodian = custodian;
    return this;
  }

  /**
   * Set description
   * Human-readable description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifiers for the document
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Procedure that caused this media to be created
   */
  addBasedOn(basedOn: IReference<'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'CoverageEligibilityRequest' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'RequestOrchestration' | 'ServiceRequest' | 'SupplyRequest' | 'VisionPrescription'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add modality
   * Imaging modality used
   */
  addModality(modality: ICodeableConcept): this {
    return this.addToArray('modality', modality);
  }

  /**
   * Add category
   * Categorization of document
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add context
   * Context of the document content
   */
  addContext(context: IReference<'Appointment' | 'Encounter' | 'EpisodeOfCare'>): this {
    return this.addToArray('context', context);
  }

  /**
   * Add event
   * Main clinical acts documented
   */
  addEvent(event: ICodeableReference): this {
    return this.addToArray('event', event);
  }

  /**
   * Add bodySite
   * Body part included
   */
  addBodySite(bodySite: ICodeableReference): this {
    return this.addToArray('bodySite', bodySite);
  }

  /**
   * Add author
   * Who and/or what authored the document
   */
  addAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson' | 'CareTeam'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add attester
   * Attests to accuracy of the document
   */
  addAttester(attester: IDocumentReferenceAttester): this {
    return this.addToArray('attester', attester);
  }

  /**
   * Add relatesTo
   * Relationships to other documents
   */
  addRelatesTo(relatesTo: IDocumentReferenceRelatesTo): this {
    return this.addToArray('relatesTo', relatesTo);
  }

  /**
   * Add securityLabel
   * Document security-tags
   */
  addSecurityLabel(securityLabel: ICodeableConcept): this {
    return this.addToArray('securityLabel', securityLabel);
  }

  /**
   * Add content
   * Document referenced
   */
  addContent(content: IDocumentReferenceContent): this {
    return this.addToArray('content', content);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReference instance
   */
  build(): DocumentReference {
    return new DocumentReference(this.data);
  }

  /**
   * Build and validate the DocumentReference instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReference> {
    const documentReference = this.build();
    await documentReference.validateOrThrow();
    return documentReference;
  }
}
