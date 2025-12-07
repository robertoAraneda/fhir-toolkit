/**
 * CatalogEntryRelationType
 * 
 * The type of relations between entries.
 *
 * @see http://hl7.org/fhir/ValueSet/relation-type
 */

export type CatalogEntryRelationTypeType = 'triggers' | 'is-replaced-by';

export enum CatalogEntryRelationTypeEnum {
  /** Triggers */
  Triggers = 'triggers',
  /** Replaced By */
  IsReplacedBy = 'is-replaced-by',
}

export const CatalogEntryRelationTypeValues = ['triggers', 'is-replaced-by'] as const;
