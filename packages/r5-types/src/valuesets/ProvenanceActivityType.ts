/**
 * ValueSet of sample of representative activity type codes.
 * 
 * Some potential code systems are:
 * - [v3-DocumentCompletion](http://terminology.hl7.org/3.0.0/CodeSystem-v3-DocumentCompletion.html)
 * - [v3-DataOperation](http://terminology.hl7.org/3.0.0/CodeSystem-v3-DataOperation.html)
 * - [v3-ActCode](http://hl7.org/fhir/v3/ActCode/cs.html)
 * - [ISO Lifecycle](http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle)
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-activity-type
 */

export type ProvenanceActivityTypeType = 'amend' | 'originate' | 'merge' | 'deidentify' | 'receive' | 'transform' | 'verify';

export enum ProvenanceActivityTypeEnum {
  Amend = 'amend',
  Originate = 'originate',
  Merge = 'merge',
  Deidentify = 'deidentify',
  Receive = 'receive',
  Transform = 'transform',
  Verify = 'verify',
}

export const ProvenanceActivityTypeValues = ['amend', 'originate', 'merge', 'deidentify', 'receive', 'transform', 'verify'] as const;
