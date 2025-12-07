/**
 * AnimalSpecies
 * 
 * This example value set defines a set of codes that can be used to indicate species of animal patients.
 *
 * @see http://hl7.org/fhir/ValueSet/animal-species
 */

export type AnimalSpeciesType = '125097000' | '125099002' | '34618005' | '425134008' | '47290002' | '15778005' | '396620009' | '388445009' | '85626006' | '132950000';

export enum AnimalSpeciesEnum {
  /** goat */
  _125097000 = '125097000',
  /** sheep */
  _125099002 = '125099002',
  /** cow */
  _34618005 = '34618005',
  /** turkey */
  _425134008 = '425134008',
  /** chicken */
  _47290002 = '47290002',
  /** goose */
  _15778005 = '15778005',
  /** duck */
  _396620009 = '396620009',
  /** horse */
  _388445009 = '388445009',
  /** donkey */
  _85626006 = '85626006',
  /** mule */
  _132950000 = '132950000',
}

export const AnimalSpeciesValues = ['125097000', '125099002', '34618005', '425134008', '47290002', '15778005', '396620009', '388445009', '85626006', '132950000'] as const;
