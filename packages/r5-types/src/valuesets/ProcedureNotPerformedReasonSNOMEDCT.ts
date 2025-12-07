/**
 * Procedure Not Performed Reason (SNOMED-CT)
 * 
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001) as well as 410536001 Contraindicated (qualifier value).
 *
 * @see http://hl7.org/fhir/ValueSet/procedure-not-performed-reason
 */

export type ProcedureNotPerformedReasonSNOMEDCTType = '410536001';

export enum ProcedureNotPerformedReasonSNOMEDCTEnum {
  _410536001 = '410536001',
}

export const ProcedureNotPerformedReasonSNOMEDCTValues = ['410536001'] as const;
