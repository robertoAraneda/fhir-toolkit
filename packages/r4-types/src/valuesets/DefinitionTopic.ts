/**
 * DefinitionTopic
 * 
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 *
 * @see http://hl7.org/fhir/ValueSet/definition-topic
 */

export type DefinitionTopicType = 'treatment' | 'education' | 'assessment';

export enum DefinitionTopicEnum {
  /** Treatment */
  Treatment = 'treatment',
  /** Education */
  Education = 'education',
  /** Assessment */
  Assessment = 'assessment',
}

export const DefinitionTopicValues = ['treatment', 'education', 'assessment'] as const;
