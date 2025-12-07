/**
 * InteractionType
 * 
 * A categorisation for an interaction between two substances.
 *
 * @see http://hl7.org/fhir/ValueSet/interaction-type
 */

export type InteractionTypeType = 'drug-drug' | 'drug-food' | 'drug-test' | 'other';

export enum InteractionTypeEnum {
  /** drug to drug interaction */
  DrugDrug = 'drug-drug',
  /** drug to food interaction */
  DrugFood = 'drug-food',
  /** drug to laboratory test interaction */
  DrugTest = 'drug-test',
  /** other interaction */
  Other = 'other',
}

export const InteractionTypeValues = ['drug-drug', 'drug-food', 'drug-test', 'other'] as const;
