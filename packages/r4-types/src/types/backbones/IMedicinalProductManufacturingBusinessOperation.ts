import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * MedicinalProductManufacturingBusinessOperation Interface
 * 
 * An operation applied to the product, for manufacturing or adminsitrative purpose
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductmanufacturingbusinessoperation.html
 */
export interface IMedicinalProductManufacturingBusinessOperation extends IBackboneElement {
  /**
   * The type of manufacturing operation
   */
  operationType?: ICodeableConcept;

  /**
   * Regulatory authorization reference number
   */
  authorisationReferenceNumber?: IIdentifier;

  /**
   * Regulatory authorization date
   */
  effectiveDate?: string;
  /**
   * Extension for effectiveDate
   */
  _effectiveDate?: IElement;

  /**
   * To indicate if this proces is commercially confidential
   */
  confidentialityIndicator?: ICodeableConcept;

  /**
   * The manufacturer or establishment associated with the process
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * A regulator which oversees the operation
   */
  regulator?: IReference<'Organization'>;

}
