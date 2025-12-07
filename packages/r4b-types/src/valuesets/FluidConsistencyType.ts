/**
 * Fluid Consistency Type Codes
 * 
 * FluidConsistencyType :  Codes used to represent the consistency of fluids and liquids provided to the patient. This value set includes concepts from [SNOMED CT](http://snomed.info/sct)(US Extension) where concept is a 435681000124103  (Dietary liquid consistency diet (regime/therapy)). It is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/consistency-type
 */

export type FluidConsistencyTypeType = '439031000124108' | '439021000124105' | '439041000124103' | '439081000124109';

export enum FluidConsistencyTypeEnum {
  /** honey thick liquid */
  _439031000124108 = '439031000124108',
  /** nectar thick liquid */
  _439021000124105 = '439021000124105',
  /** spoon thick liquid */
  _439041000124103 = '439041000124103',
  /** thin liquid */
  _439081000124109 = '439081000124109',
}

export const FluidConsistencyTypeValues = ['439031000124108', '439021000124105', '439041000124103', '439081000124109'] as const;
