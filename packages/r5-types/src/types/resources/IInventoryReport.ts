import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IInventoryReportInventoryListing } from '../backbones/IInventoryReportInventoryListing.js';
import type { InventoryCountTypeType, InventoryReportStatusType } from '../../valuesets/index.js';

/**
 * InventoryReport Interface
 * 
 * A report of inventory or stock items.
 * 
 *
 * @see https://hl7.org/fhir/R5/inventoryreport.html
 */
export interface IInventoryReport extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'InventoryReport';

  /**
   * Business identifier for the report
   */
  identifier?: IIdentifier[];

  /**
   * draft | requested | active | entered-in-error
   */
  status: InventoryReportStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * snapshot | difference
   */
  countType: InventoryCountTypeType;
  /**
   * Extension for countType
   */
  _countType?: IElement;

  /**
   * addition | subtraction
   */
  operationType?: ICodeableConcept;

  /**
   * The reason for this count - regular count, ad-hoc count, new arrivals, etc
   */
  operationTypeReason?: ICodeableConcept;

  /**
   * When the report has been submitted
   */
  reportedDateTime: string;
  /**
   * Extension for reportedDateTime
   */
  _reportedDateTime?: IElement;

  /**
   * Who submits the report
   */
  reporter?: IReference<'Practitioner' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * The period the report refers to
   */
  reportingPeriod?: IPeriod;

  /**
   * An inventory listing section (grouped by any of the attributes)
   */
  inventoryListing?: IInventoryReportInventoryListing[];

  /**
   * A note associated with the InventoryReport
   */
  note?: IAnnotation[];

}
