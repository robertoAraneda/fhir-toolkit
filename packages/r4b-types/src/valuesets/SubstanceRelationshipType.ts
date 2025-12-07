/**
 * SubstanceRelationshipType
 * 
 * The relationship between two substance types.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-relationship-type
 */

export type SubstanceRelationshipTypeType = 'Salt' | 'ActiveMoiety' | 'StartingMaterial' | 'Polymorph' | 'Impurity';

export enum SubstanceRelationshipTypeEnum {
  /** Salt to parent */
  Salt = 'Salt',
  /** Active moiety */
  Activemoiety = 'ActiveMoiety',
  /** Starting material for */
  Startingmaterial = 'StartingMaterial',
  /** Polymorph of */
  Polymorph = 'Polymorph',
  /** Impurity of */
  Impurity = 'Impurity',
}

export const SubstanceRelationshipTypeValues = ['Salt', 'ActiveMoiety', 'StartingMaterial', 'Polymorph', 'Impurity'] as const;
