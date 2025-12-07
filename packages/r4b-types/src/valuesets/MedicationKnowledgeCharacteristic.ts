/**
 * MedicationKnowledgeCharacteristic
 * 
 * MedicationKnowledge Characteristic Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationknowledge-characteristic
 */

export type MedicationKnowledgeCharacteristicType = 'imprintcd' | 'size' | 'shape' | 'color' | 'coating' | 'scoring' | 'logo';

export enum MedicationKnowledgeCharacteristicEnum {
  /** Imprint Code */
  Imprintcd = 'imprintcd',
  /** Size */
  Size = 'size',
  /** Shape */
  Shape = 'shape',
  /** Color */
  Color = 'color',
  /** Coating */
  Coating = 'coating',
  /** Scoring */
  Scoring = 'scoring',
  /** Logo */
  Logo = 'logo',
}

export const MedicationKnowledgeCharacteristicValues = ['imprintcd', 'size', 'shape', 'color', 'coating', 'scoring', 'logo'] as const;
