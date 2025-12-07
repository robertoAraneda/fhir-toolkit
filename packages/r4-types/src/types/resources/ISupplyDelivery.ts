import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ISupplyDeliverySuppliedItem } from '../backbones/ISupplyDeliverySuppliedItem.js';
import type { SupplyDeliveryStatusType, SupplyItemTypeType } from '../../valuesets/index.js';

/**
 * SupplyDelivery Interface
 * 
 * Record of delivery of what is supplied.
 * 
 *
 * @see https://hl7.org/fhir/R4/supplydelivery.html
 */
export interface ISupplyDelivery extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SupplyDelivery';

  /**
   * External identifier
   */
  identifier?: IIdentifier[];

  /**
   * Fulfills plan, proposal or order
   */
  basedOn?: IReference<'SupplyRequest'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'SupplyDelivery' | 'Contract'>[];

  /**
   * in-progress | completed | abandoned | entered-in-error
   */
  status?: SupplyDeliveryStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Patient for whom the item is supplied
   */
  patient?: IReference<'Patient'>;

  /**
   * Category of dispense event
   */
  type?: ICodeableConcept<SupplyItemTypeType>;

  /**
   * The item that is delivered or supplied
   */
  suppliedItem?: ISupplyDeliverySuppliedItem;

  /**
   * When event occurred
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When event occurred
   */
  occurrencePeriod?: IPeriod;

  /**
   * When event occurred
   */
  occurrenceTiming?: ITiming;

  /**
   * Dispenser
   */
  supplier?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Where the Supply was sent
   */
  destination?: IReference<'Location'>;

  /**
   * Who collected the Supply
   */
  receiver?: IReference<'Practitioner' | 'PractitionerRole'>[];

}
