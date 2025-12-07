/**
 * Procedure Progress Status Codes
 * 
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the procedure performance process.
 *
 * @see http://hl7.org/fhir/ValueSet/procedure-progress-status-codes
 */

export type ProcedureProgressStatusType = 'in-operating-room' | 'prepared' | 'anesthesia-induced' | 'open-incision' | 'closed-incision' | 'in-recovery-room';

export enum ProcedureProgressStatusEnum {
  /** In Operating Room */
  InOperatingRoom = 'in-operating-room',
  /** Prepared */
  Prepared = 'prepared',
  /** Anesthesia Induced */
  AnesthesiaInduced = 'anesthesia-induced',
  /** Open Incision */
  OpenIncision = 'open-incision',
  /** Closed Incision */
  ClosedIncision = 'closed-incision',
  /** In Recovery Room */
  InRecoveryRoom = 'in-recovery-room',
}

export const ProcedureProgressStatusValues = ['in-operating-room', 'prepared', 'anesthesia-induced', 'open-incision', 'closed-incision', 'in-recovery-room'] as const;
