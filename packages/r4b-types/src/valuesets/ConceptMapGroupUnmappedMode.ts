/**
 * ConceptMapGroupUnmappedMode
 * 
 * Defines which action to take if there is no match in the group.
 *
 * @see http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode
 */

export type ConceptMapGroupUnmappedModeType = 'provided' | 'fixed' | 'other-map';

export enum ConceptMapGroupUnmappedModeEnum {
  /** Provided Code */
  Provided = 'provided',
  /** Fixed Code */
  Fixed = 'fixed',
  /** Other Map */
  OtherMap = 'other-map',
}

export const ConceptMapGroupUnmappedModeValues = ['provided', 'fixed', 'other-map'] as const;
