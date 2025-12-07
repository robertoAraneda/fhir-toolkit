/**
 * NoteType
 * 
 * The presentation types of notes.
 *
 * @see http://hl7.org/fhir/ValueSet/note-type
 */

export type NoteTypeType = 'display' | 'print' | 'printoper';

export enum NoteTypeEnum {
  /** Display */
  Display = 'display',
  /** Print (Form) */
  Print = 'print',
  /** Print (Operator) */
  Printoper = 'printoper',
}

export const NoteTypeValues = ['display', 'print', 'printoper'] as const;
