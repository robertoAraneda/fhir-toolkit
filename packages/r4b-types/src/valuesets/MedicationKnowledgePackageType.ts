/**
 * MedicationKnowledgePackageType
 * 
 * MedicationKnowledge Package Type Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationknowledge-package-type
 */

export type MedicationKnowledgePackageTypeType = 'amp' | 'bag' | 'blstrpk' | 'bot' | 'box' | 'can' | 'cart' | 'disk' | 'doset' | 'jar' | 'jug' | 'minim' | 'nebamp' | 'ovul' | 'pch' | 'pkt' | 'sash' | 'strip' | 'tin' | 'tub' | 'tube' | 'vial';

export enum MedicationKnowledgePackageTypeEnum {
  /** Ampule */
  Amp = 'amp',
  /** Bag */
  Bag = 'bag',
  /** Blister Pack */
  Blstrpk = 'blstrpk',
  /** Bottle */
  Bot = 'bot',
  /** Box */
  Box = 'box',
  /** Can */
  Can = 'can',
  /** Cartridge */
  Cart = 'cart',
  /** Disk */
  Disk = 'disk',
  /** Dosette */
  Doset = 'doset',
  /** Jar */
  Jar = 'jar',
  /** Jug */
  Jug = 'jug',
  /** Minim */
  Minim = 'minim',
  /** Nebule Amp */
  Nebamp = 'nebamp',
  /** Ovule */
  Ovul = 'ovul',
  /** Pouch */
  Pch = 'pch',
  /** Packet */
  Pkt = 'pkt',
  /** Sashet */
  Sash = 'sash',
  /** Strip */
  Strip = 'strip',
  /** Tin */
  Tin = 'tin',
  /** Tub */
  Tub = 'tub',
  /** Tube */
  Tube = 'tube',
  /** Vial */
  Vial = 'vial',
}

export const MedicationKnowledgePackageTypeValues = ['amp', 'bag', 'blstrpk', 'bot', 'box', 'can', 'cart', 'disk', 'doset', 'jar', 'jug', 'minim', 'nebamp', 'ovul', 'pch', 'pkt', 'sash', 'strip', 'tin', 'tub', 'tube', 'vial'] as const;
