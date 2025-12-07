/**
 * triggered Bytype
 * 
 * Codes providing the type of triggeredBy observation.
 *
 * @see http://hl7.org/fhir/ValueSet/observation-triggeredbytype
 */

export type TriggeredBytypeType = 'reflex' | 'repeat' | 're-run';

export enum TriggeredBytypeEnum {
  /** Reflex */
  Reflex = 'reflex',
  /** Repeat (per policy) */
  Repeat = 'repeat',
  /** Re-run (per policy) */
  ReRun = 're-run',
}

export const TriggeredBytypeValues = ['reflex', 'repeat', 're-run'] as const;
