/**
 * EvidenceVariableRole
 * 
 * The role that the assertion variable plays.
 *
 * @see http://hl7.org/fhir/ValueSet/variable-role
 */

export type EvidenceVariableRoleType = 'population' | 'subpopulation' | 'exposure' | 'referenceExposure' | 'measuredVariable' | 'confounder';

export enum EvidenceVariableRoleEnum {
  /** population */
  Population = 'population',
  /** subpopulation */
  Subpopulation = 'subpopulation',
  /** exposure */
  Exposure = 'exposure',
  /** reference exposure */
  Referenceexposure = 'referenceExposure',
  /** measured variable */
  Measuredvariable = 'measuredVariable',
  /** confounder */
  Confounder = 'confounder',
}

export const EvidenceVariableRoleValues = ['population', 'subpopulation', 'exposure', 'referenceExposure', 'measuredVariable', 'confounder'] as const;
