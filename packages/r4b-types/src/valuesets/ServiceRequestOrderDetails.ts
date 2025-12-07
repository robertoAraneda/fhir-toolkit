/**
 * Service Request Order Details Codes
 * 
 * An example value set of Codified order entry details concepts.  These concepts only make sense in the context of what is being ordered.  This example is for a patient ventilation order
 *
 * @see http://hl7.org/fhir/ValueSet/servicerequest-orderdetail
 */

export type ServiceRequestOrderDetailsType = '47545007' | '286812008' | '243144002' | '243150007' | '59427005';

export enum ServiceRequestOrderDetailsEnum {
  /** Continuous positive airway pressure ventilation treatment (regime/therapy) */
  _47545007 = '47545007',
  /** Pressure controlled ventilation (procedure) */
  _286812008 = '286812008',
  /** Patient triggered inspiratory assistance (procedure) */
  _243144002 = '243144002',
  /** Assisted controlled mandatory ventilation (procedure) */
  _243150007 = '243150007',
  /** Synchronized intermittent mandatory ventilation (procedure) */
  _59427005 = '59427005',
}

export const ServiceRequestOrderDetailsValues = ['47545007', '286812008', '243144002', '243150007', '59427005'] as const;
