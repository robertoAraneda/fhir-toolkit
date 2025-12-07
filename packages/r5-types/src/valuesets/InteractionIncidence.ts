/**
 * Interaction Incidence
 * 
 * A categorisation for incidence of occurence of an interaction.
 *
 * @see http://hl7.org/fhir/ValueSet/interaction-incidence
 */

export type InteractionIncidenceType = 'Theoretical' | 'Observed';

export enum InteractionIncidenceEnum {
  /** Theoretical */
  Theoretical = 'Theoretical',
  /** Observed */
  Observed = 'Observed',
}

export const InteractionIncidenceValues = ['Theoretical', 'Observed'] as const;
