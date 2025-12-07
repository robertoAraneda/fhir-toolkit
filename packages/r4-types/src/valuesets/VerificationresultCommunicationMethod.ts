/**
 * VerificationResult Communication Method
 * 
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-communication-method
 */

export type VerificationresultCommunicationMethodType = 'manual' | 'portal' | 'pull' | 'push';

export enum VerificationresultCommunicationMethodEnum {
  /** Manual */
  Manual = 'manual',
  /** Portal */
  Portal = 'portal',
  /** Pull */
  Pull = 'pull',
  /** Push */
  Push = 'push',
}

export const VerificationresultCommunicationMethodValues = ['manual', 'portal', 'pull', 'push'] as const;
