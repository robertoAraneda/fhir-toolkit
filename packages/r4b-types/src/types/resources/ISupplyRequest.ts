import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ISupplyRequestParameter } from '../backbones/ISupplyRequestParameter.js';
import type { RequestPriorityType, SupplyRequestStatusType } from '../../valuesets/index.js';

/**
 * SupplyRequest Interface
 * 
 * A record of a request for a medication, substance or device used in the healthcare setting.
 * 
 *
 * @see https://hl7.org/fhir/R4B/supplyrequest.html
 */
export interface ISupplyRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SupplyRequest';

  /**
   * Business Identifier for SupplyRequest
   */
  identifier?: IIdentifier[];

  /**
   * draft | active | suspended +
   */
  status?: SupplyRequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The kind of supply (central, non-stock, etc.)
   */
  category?: ICodeableConcept;

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * Medication, Substance, or Device requested to be supplied
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * Medication, Substance, or Device requested to be supplied
   */
  itemReference?: IReference;

  /**
   * The requested amount of the item indicated
   */
  quantity: IQuantity;

  /**
   * Ordered item details
   */
  parameter?: ISupplyRequestParameter[];

  /**
   * When the request should be fulfilled
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When the request should be fulfilled
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the request should be fulfilled
   */
  occurrenceTiming?: ITiming;

  /**
   * When the request was made
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Individual making the request
   */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * Who is intended to fulfill the request
   */
  supplier?: IReference<'Organization' | 'HealthcareService'>[];

  /**
   * The reason why the supply item was requested
   */
  reasonCode?: ICodeableConcept[];

  /**
   * The reason why the supply item was requested
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /**
   * The origin of the supply
   */
  deliverFrom?: IReference<'Organization' | 'Location'>;

  /**
   * The destination of the supply
   */
  deliverTo?: IReference<'Organization' | 'Location' | 'Patient'>;

}
