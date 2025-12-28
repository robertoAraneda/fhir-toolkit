import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { CarePlanActivityKindType, CarePlanActivityStatusType } from '../../valuesets/index.js';

/**
 * CarePlanActivityDetail Interface
 * 
 * In-line definition of activity
 * 
 *
 * @see https://hl7.org/fhir/R4B/careplanactivitydetail.html
 */
export interface ICarePlanActivityDetail extends IBackboneElement {
  /**
   * Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
   */
  kind?: CarePlanActivityKindType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

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
   * Detail type of activity
   */
  code?: ICodeableConcept;

  /**
   * Why activity should be done or why activity was prohibited
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why activity is needed
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /**
   * Goals this activity relates to
   */
  goal?: IReference<'Goal'>[];

  /**
   * not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
   */
  status: CarePlanActivityStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * If true, activity is prohibiting action
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * When activity is to occur
   */
  scheduledTiming?: ITiming;

  /**
   * When activity is to occur
   */
  scheduledPeriod?: IPeriod;

  /**
   * When activity is to occur
   */
  scheduledString?: string;
  /**
   * Extension for scheduledString
   */
  _scheduledString?: IElement;

  /**
   * Where it should happen
   */
  location?: IReference<'Location'>;

  /**
   * Who will be responsible?
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'RelatedPerson' | 'Patient' | 'CareTeam' | 'HealthcareService' | 'Device'>[];

  /**
   * What is to be administered/supplied
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * What is to be administered/supplied
   */
  productReference?: IReference;

  /**
   * How to consume/day?
   */
  dailyAmount?: IQuantity;

  /**
   * How much to administer/supply/consume
   */
  quantity?: IQuantity;

  /**
   * Extra info describing activity to perform
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
