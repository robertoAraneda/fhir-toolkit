/**
 * Product Name Part Type
 * 
 * Type of part of a name for a Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-name-part-type
 */

export type ProductNamePartTypeType = 'FullName' | 'InventedNamePart' | 'ScientificNamePart' | 'StrengthPart' | 'DoseFormPart' | 'FormulationPart' | 'IntendedUsePart' | 'PopulationPart' | 'ContainerPart' | 'DevicePart' | 'TrademarkOrCompanyPart' | 'TimeOrPeriodPart' | 'FlavorPart' | 'DelimiterPart' | 'LegacyNamePart' | 'SpeciesNamePart';

export enum ProductNamePartTypeEnum {
  /** Full name */
  Fullname = 'FullName',
  /** Invented name part */
  Inventednamepart = 'InventedNamePart',
  /** Scientific name part */
  Scientificnamepart = 'ScientificNamePart',
  /** Strength part */
  Strengthpart = 'StrengthPart',
  /** Pharmaceutical dose form part */
  Doseformpart = 'DoseFormPart',
  /** Formulation part */
  Formulationpart = 'FormulationPart',
  /** Intended use part */
  Intendedusepart = 'IntendedUsePart',
  /** Target population part */
  Populationpart = 'PopulationPart',
  /** Container or pack part */
  Containerpart = 'ContainerPart',
  /** Device part */
  Devicepart = 'DevicePart',
  /** Trademark or company name part */
  Trademarkorcompanypart = 'TrademarkOrCompanyPart',
  /** Time/Period part */
  Timeorperiodpart = 'TimeOrPeriodPart',
  /** Flavor part */
  Flavorpart = 'FlavorPart',
  /** Delimiter part */
  Delimiterpart = 'DelimiterPart',
  /** Legacy name */
  Legacynamepart = 'LegacyNamePart',
  /** Target species name part */
  Speciesnamepart = 'SpeciesNamePart',
}

export const ProductNamePartTypeValues = ['FullName', 'InventedNamePart', 'ScientificNamePart', 'StrengthPart', 'DoseFormPart', 'FormulationPart', 'IntendedUsePart', 'PopulationPart', 'ContainerPart', 'DevicePart', 'TrademarkOrCompanyPart', 'TimeOrPeriodPart', 'FlavorPart', 'DelimiterPart', 'LegacyNamePart', 'SpeciesNamePart'] as const;
