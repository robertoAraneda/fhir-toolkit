/**
 * StandardsStatus
 * 
 * HL7 Ballot/Standards status of artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/standards-status
 */

export type StandardsStatusType = 'draft' | 'normative' | 'trial-use' | 'informative' | 'deprecated' | 'external';

export enum StandardsStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Normative */
  Normative = 'normative',
  /** Trial-Use */
  TrialUse = 'trial-use',
  /** Informative */
  Informative = 'informative',
  /** Deprecated */
  Deprecated = 'deprecated',
  /** External */
  External = 'external',
}

export const StandardsStatusValues = ['draft', 'normative', 'trial-use', 'informative', 'deprecated', 'external'] as const;
