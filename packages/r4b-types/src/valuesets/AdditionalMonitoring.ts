/**
 * AdditionalMonitoring
 * 
 * Extra monitoring defined for a Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-additional-monitoring
 */

export type AdditionalMonitoringType = 'BlackTriangleMonitoring';

export enum AdditionalMonitoringEnum {
  /** Requirement for Black Triangle Monitoring */
  Blacktrianglemonitoring = 'BlackTriangleMonitoring',
}

export const AdditionalMonitoringValues = ['BlackTriangleMonitoring'] as const;
