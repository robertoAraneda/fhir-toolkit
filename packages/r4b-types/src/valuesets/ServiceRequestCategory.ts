/**
 * Service Request Category Codes
 * 
 * An example value set of SNOMED CT concepts that can classify a requested service
 *
 * @see http://hl7.org/fhir/ValueSet/servicerequest-category
 */

export type ServiceRequestCategoryType = '108252007' | '363679005' | '409063005' | '409073007' | '387713003';

export enum ServiceRequestCategoryEnum {
  /** Laboratory procedure */
  _108252007 = '108252007',
  /** Imaging */
  _363679005 = '363679005',
  /** Counselling */
  _409063005 = '409063005',
  /** Education */
  _409073007 = '409073007',
  /** Surgical procedure */
  _387713003 = '387713003',
}

export const ServiceRequestCategoryValues = ['108252007', '363679005', '409063005', '409073007', '387713003'] as const;
