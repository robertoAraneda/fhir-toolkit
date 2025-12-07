import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IServiceRequestOrderDetail } from '../backbones/IServiceRequestOrderDetail.js';
import type { IServiceRequestPatientInstruction } from '../backbones/IServiceRequestPatientInstruction.js';
import type { RequestIntentType, RequestPriorityType, RequestStatusType } from '../../valuesets/index.js';

/**
 * ServiceRequest Interface
 * 
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 * 
 *
 * @see https://hl7.org/fhir/R4/servicerequest.html
 */
export interface IServiceRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ServiceRequest';

  /**
   * Identifiers assigned to this order
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * What request fulfills
   */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'MedicationRequest'>[];

  /**
   * What request replaces
   */
  replaces?: IReference<'ServiceRequest'>[];

  /**
   * Composite Request ID
   */
  requisition?: IIdentifier;

  /**
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  status: RequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * proposal | plan | directive | order +
   */
  intent: RequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * Classification of service
   */
  category?: ICodeableConcept[];

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * True if service/procedure should not be performed
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * What is being requested/ordered
   */
  code?: ICodeableReference;

  /**
   * Additional order information
   */
  orderDetail?: IServiceRequestOrderDetail[];

  /**
   * Service amount
   */
  quantityQuantity?: IQuantity;

  /**
   * Service amount
   */
  quantityRatio?: IRatio;

  /**
   * Service amount
   */
  quantityRange?: IRange;

  /**
   * Individual or Entity the service is ordered for
   */
  subject: IReference<'Patient' | 'Group' | 'Location' | 'Device'>;

  /**
   * What the service request is about, when it is not about the subject of record
   */
  focus?: IReference<'Resource'>[];

  /**
   * Encounter in which the request was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When service should occur
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When service should occur
   */
  occurrencePeriod?: IPeriod;

  /**
   * When service should occur
   */
  occurrenceTiming?: ITiming;

  /**
   * Preconditions for service
   */
  asNeededBoolean?: boolean;
  /**
   * Extension for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * Preconditions for service
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * Date request signed
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Who/what is requesting service
   */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * Performer role
   */
  performerType?: ICodeableConcept;

  /**
   * Requested performer
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>[];

  /**
   * Requested location
   */
  location?: ICodeableReference[];

  /**
   * Explanation/Justification for procedure or service
   */
  reason?: ICodeableReference[];

  /**
   * Associated insurance coverage
   */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /**
   * Additional clinical information
   */
  supportingInfo?: ICodeableReference[];

  /**
   * Procedure Samples
   */
  specimen?: IReference<'Specimen'>[];

  /**
   * Coded location on Body
   */
  bodySite?: ICodeableConcept[];

  /**
   * BodyStructure-based location on the body
   */
  bodyStructure?: IReference<'BodyStructure'>;

  /**
   * Comments
   */
  note?: IAnnotation[];

  /**
   * Patient or consumer-oriented instructions
   */
  patientInstruction?: IServiceRequestPatientInstruction[];

  /**
   * Request provenance
   */
  relevantHistory?: IReference<'Provenance'>[];

}
