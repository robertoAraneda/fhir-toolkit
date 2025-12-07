import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IChargeItemPerformer } from '../backbones/IChargeItemPerformer.js';
import type { ChargeItemStatusType } from '../../valuesets/index.js';

/**
 * ChargeItem Interface
 * 
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 * 
 *
 * @see https://hl7.org/fhir/R4/chargeitem.html
 */
export interface IChargeItem extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ChargeItem';

  /**
   * Business Identifier for item
   */
  identifier?: IIdentifier[];

  /**
   * Defining information about the code of this charge item
   */
  definitionUri?: string[];
  /**
   * Extension for definitionUri
   */
  _definitionUri?: IElement;

  /**
   * Resource defining the code of this ChargeItem
   */
  definitionCanonical?: string[];
  /**
   * Extension for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * planned | billable | not-billable | aborted | billed | entered-in-error | unknown
   */
  status: ChargeItemStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Part of referenced ChargeItem
   */
  partOf?: IReference<'ChargeItem'>[];

  /**
   * A code that identifies the charge, like a billing code
   */
  code: ICodeableConcept;

  /**
   * Individual service was done for/to
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter / Episode associated with event
   */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /**
   * When the charged service was applied
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When the charged service was applied
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the charged service was applied
   */
  occurrenceTiming?: ITiming;

  /**
   * Who performed charged service
   */
  performer?: IChargeItemPerformer[];

  /**
   * Organization providing the charged service
   */
  performingOrganization?: IReference<'Organization'>;

  /**
   * Organization requesting the charged service
   */
  requestingOrganization?: IReference<'Organization'>;

  /**
   * Organization that has ownership of the (potential, future) revenue
   */
  costCenter?: IReference<'Organization'>;

  /**
   * Quantity of which the charge item has been serviced
   */
  quantity?: IQuantity;

  /**
   * Anatomical location, if relevant
   */
  bodysite?: ICodeableConcept[];

  /**
   * Factor overriding the associated rules
   */
  factorOverride?: number;
  /**
   * Extension for factorOverride
   */
  _factorOverride?: IElement;

  /**
   * Price overriding the associated rules
   */
  priceOverride?: IMoney;

  /**
   * Reason for overriding the list price/factor
   */
  overrideReason?: string;
  /**
   * Extension for overrideReason
   */
  _overrideReason?: IElement;

  /**
   * Individual who was entering
   */
  enterer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * Date the charge item was entered
   */
  enteredDate?: string;
  /**
   * Extension for enteredDate
   */
  _enteredDate?: IElement;

  /**
   * Why was the charged  service rendered?
   */
  reason?: ICodeableConcept[];

  /**
   * Which rendered service is being charged?
   */
  service?: IReference<'DiagnosticReport' | 'ImagingStudy' | 'Immunization' | 'MedicationAdministration' | 'MedicationDispense' | 'Observation' | 'Procedure' | 'SupplyDelivery'>[];

  /**
   * Product charged
   */
  productReference?: IReference;

  /**
   * Product charged
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * Account to place this charge
   */
  account?: IReference<'Account'>[];

  /**
   * Comments made about the ChargeItem
   */
  note?: IAnnotation[];

  /**
   * Further information supporting this charge
   */
  supportingInformation?: IReference<'Resource'>[];

}
