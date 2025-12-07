/**
 * Concept Map Group Unmapped Mode
 * 
 * Defines which action to take if there is no match in the group.
 *
 * @see http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode
 */

export type ConceptMapGroupUnmappedModeType = 'use-source-code' | 'fixed' | 'other-map';

export enum ConceptMapGroupUnmappedModeEnum {
  /** Use Provided Source Code */
  UseSourceCode = 'use-source-code',
  /** Fixed Code */
  Fixed = 'fixed',
  /** Other Map */
  OtherMap = 'other-map',
}

export const ConceptMapGroupUnmappedModeValues = ['use-source-code', 'fixed', 'other-map'] as const;
