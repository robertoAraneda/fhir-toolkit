import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IMedicationRequestDispenseRequest } from '../backbones/IMedicationRequestDispenseRequest.js';
import type { IMedicationRequestSubstitution } from '../backbones/IMedicationRequestSubstitution.js';
import type { MedicationRequestIntentType, MedicationrequestStatusType, RequestPriorityType } from '../../valuesets/index.js';

/**
 * MedicationRequest Interface
 * 
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationrequest.html
 */
export interface IMedicationRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationRequest';

  /**
   * External ids for this request
   */
  identifier?: IIdentifier[];

  /**
   * A plan or request that is fulfilled in whole or in part by this medication request
   */
  basedOn?: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>[];

  /**
   * Reference to an order/prescription that is being replaced by this MedicationRequest
   */
  priorPrescription?: IReference<'MedicationRequest'>;

  /**
   * Composite request this is part of
   */
  groupIdentifier?: IIdentifier;

  /**
   * active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown
   */
  status: MedicationrequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * When the status was changed
   */
  statusChanged?: string;
  /**
   * Extension for statusChanged
   */
  _statusChanged?: IElement;

  /**
   * proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: MedicationRequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * Grouping or category of medication request
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
   * True if patient is to stop taking or not to start taking the medication
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * Medication to be taken
   */
  medication: ICodeableReference;

  /**
   * Individual or group for whom the medication has been requested
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * The person or organization who provided the information about this request, if the source is someone other than the requestor
   */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>[];

  /**
   * Encounter created as part of encounter/admission/stay
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Information to support fulfilling of the medication
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * When request was initially authored
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Who/What requested the Request
   */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * Reported rather than primary record
   */
  reported?: boolean;
  /**
   * Extension for reported
   */
  _reported?: IElement;

  /**
   * Desired kind of performer of the medication administration
   */
  performerType?: ICodeableConcept;

  /**
   * Intended performer of administration
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'DeviceDefinition' | 'RelatedPerson' | 'CareTeam' | 'HealthcareService'>[];

  /**
   * Intended type of device for the administration
   */
  device?: ICodeableReference[];

  /**
   * Person who entered the request
   */
  recorder?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Reason or indication for ordering or not ordering the medication
   */
  reason?: ICodeableReference[];

  /**
   * Overall pattern of medication administration
   */
  courseOfTherapyType?: ICodeableConcept;

  /**
   * Associated insurance coverage
   */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /**
   * Information about the prescription
   */
  note?: IAnnotation[];

  /**
   * Full representation of the dosage instructions
   */
  renderedDosageInstruction?: string;
  /**
   * Extension for renderedDosageInstruction
   */
  _renderedDosageInstruction?: IElement;

  /**
   * Period over which the medication is to be taken
   */
  effectiveDosePeriod?: IPeriod;

  /**
   * Specific instructions for how the medication should be taken
   */
  dosageInstruction?: IDosage[];

  /**
   * Medication supply authorization
   */
  dispenseRequest?: IMedicationRequestDispenseRequest;

  /**
   * Any restrictions on medication substitution
   */
  substitution?: IMedicationRequestSubstitution;

  /**
   * A list of events of interest in the lifecycle
   */
  eventHistory?: IReference<'Provenance'>[];

}
