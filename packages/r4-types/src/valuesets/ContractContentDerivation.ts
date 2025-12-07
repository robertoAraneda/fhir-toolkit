/**
 * Contract Content Derivation Codes
 * 
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-content-derivative
 */

export type ContractContentDerivationType = 'registration' | 'retrieval' | 'statement' | 'shareable';

export enum ContractContentDerivationEnum {
  /** Content Registration */
  Registration = 'registration',
  /** Content Retrieval */
  Retrieval = 'retrieval',
  /** Content Statement */
  Statement = 'statement',
  /** Shareable Content */
  Shareable = 'shareable',
}

export const ContractContentDerivationValues = ['registration', 'retrieval', 'statement', 'shareable'] as const;
