/**
 * CodeSystemHierarchyMeaning
 * 
 * The meaning of the hierarchy of concepts in a code system.
 *
 * @see http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning
 */

export type CodeSystemHierarchyMeaningType = 'grouped-by' | 'is-a' | 'part-of' | 'classified-with';

export enum CodeSystemHierarchyMeaningEnum {
  /** Grouped By */
  GroupedBy = 'grouped-by',
  /** Is-A */
  IsA = 'is-a',
  /** Part Of */
  PartOf = 'part-of',
  /** Classified With */
  ClassifiedWith = 'classified-with',
}

export const CodeSystemHierarchyMeaningValues = ['grouped-by', 'is-a', 'part-of', 'classified-with'] as const;
