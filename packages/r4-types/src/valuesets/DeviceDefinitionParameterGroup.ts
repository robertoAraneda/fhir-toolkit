/**
 * DeviceDefinitionParameterGroup
 * 
 * Codes identifying groupings of parameters; e.g. Cardiovascular.
 *
 * @see http://hl7.org/fhir/ValueSet/parameter-group
 */

export type DeviceDefinitionParameterGroupType = 'haemodynamic' | 'ecg' | 'respiratory' | 'ventilation' | 'neurological' | 'drug-delivery' | 'fluid-chemistry' | 'blood-chemistry' | 'miscellaneous';

export enum DeviceDefinitionParameterGroupEnum {
  /** Haemodynamic Parameter Group */
  Haemodynamic = 'haemodynamic',
  /** ECG Parameter Group */
  Ecg = 'ecg',
  /** Respiratory Parameter Group */
  Respiratory = 'respiratory',
  /** Ventilation Parameter Group */
  Ventilation = 'ventilation',
  /** Neurological Parameter Group */
  Neurological = 'neurological',
  /** Drug Delivery Parameter Group */
  DrugDelivery = 'drug-delivery',
  /** Fluid Chemistry Parameter Group */
  FluidChemistry = 'fluid-chemistry',
  /** Blood Chemistry Parameter Group */
  BloodChemistry = 'blood-chemistry',
  /** Miscellaneous Parameter Group */
  Miscellaneous = 'miscellaneous',
}

export const DeviceDefinitionParameterGroupValues = ['haemodynamic', 'ecg', 'respiratory', 'ventilation', 'neurological', 'drug-delivery', 'fluid-chemistry', 'blood-chemistry', 'miscellaneous'] as const;
