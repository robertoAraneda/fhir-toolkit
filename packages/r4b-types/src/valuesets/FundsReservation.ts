/**
 * FundsReserve
 * 
 * This value set includes sample funds reservation type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/fundsreserve
 */

export type FundsReservationType = 'patient' | 'provider' | 'none';

export enum FundsReservationEnum {
  /** Patient */
  Patient = 'patient',
  /** Provider */
  Provider = 'provider',
  /** None */
  None = 'none',
}

export const FundsReservationValues = ['patient', 'provider', 'none'] as const;
