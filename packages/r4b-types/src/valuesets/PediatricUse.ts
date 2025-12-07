/**
 * PediatricUse
 * 
 * Extra measures defined for a Medicinal Product, such as heightened reporting requirements.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-pediatric-use
 */

export type PediatricUseType = 'InUtero' | 'PretermNewborn' | 'TermNewborn' | 'Infants' | 'Children' | 'Adolescents' | 'Adults' | 'Elderly' | 'Neonate' | 'PediatricPopulation' | 'All' | 'Prepubertal' | 'AdultsAndElderly' | 'PubertalAndPostpubertal';

export enum PediatricUseEnum {
  /** In utero */
  Inutero = 'InUtero',
  /** Preterm newborn infants (0 – 27 days) */
  Pretermnewborn = 'PretermNewborn',
  /** Term newborn infants (0 – 27 days) */
  Termnewborn = 'TermNewborn',
  /** Infants and toddlers (28 days – 23 months) */
  Infants = 'Infants',
  /** Children (2 to < 12 years) */
  Children = 'Children',
  /** Adolescents (12 to < 18 years) */
  Adolescents = 'Adolescents',
  /** Adults (18 to < 65 years) */
  Adults = 'Adults',
  /** Elderly (≥ 65 years) */
  Elderly = 'Elderly',
  /** Neonate */
  Neonate = 'Neonate',
  /** Pediatric Population (< 18 years) */
  Pediatricpopulation = 'PediatricPopulation',
  /** All */
  All = 'All',
  /** Prepubertal children (2 years to onset of puberty) */
  Prepubertal = 'Prepubertal',
  /** Adult and elderly population (> 18 years) */
  Adultsandelderly = 'AdultsAndElderly',
  /** Pubertal and postpubertal adolescents (onset of puberty to < 18 years) */
  Pubertalandpostpubertal = 'PubertalAndPostpubertal',
}

export const PediatricUseValues = ['InUtero', 'PretermNewborn', 'TermNewborn', 'Infants', 'Children', 'Adolescents', 'Adults', 'Elderly', 'Neonate', 'PediatricPopulation', 'All', 'Prepubertal', 'AdultsAndElderly', 'PubertalAndPostpubertal'] as const;
