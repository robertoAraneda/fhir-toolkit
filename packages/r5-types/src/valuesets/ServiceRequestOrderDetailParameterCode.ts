/**
 * Servicerequest OrderDetail Parameter Code
 * 
 * The order detail parameter codes.
 *
 * @see http://hl7.org/fhir/ValueSet/servicerequest-orderdetail-parameter-code
 */

export type ServiceRequestOrderDetailParameterCodeType = 'catheter-insertion' | 'body-elevation' | 'device-configuration' | 'device-settings';

export enum ServiceRequestOrderDetailParameterCodeEnum {
  /** Catheter Insertion */
  CatheterInsertion = 'catheter-insertion',
  /** Body Elevation */
  BodyElevation = 'body-elevation',
  /** Device Configuration */
  DeviceConfiguration = 'device-configuration',
  /** Device Settings */
  DeviceSettings = 'device-settings',
}

export const ServiceRequestOrderDetailParameterCodeValues = ['catheter-insertion', 'body-elevation', 'device-configuration', 'device-settings'] as const;
