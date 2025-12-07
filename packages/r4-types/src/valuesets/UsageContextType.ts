/**
 * UsageContextType
 * 
 * A code that specifies a type of context being specified by a usage context.
 *
 * @see http://hl7.org/fhir/ValueSet/usage-context-type
 */

export type UsageContextTypeType = 'gender' | 'age' | 'focus' | 'user' | 'workflow' | 'task' | 'venue' | 'species' | 'program';

export enum UsageContextTypeEnum {
  /** Gender */
  Gender = 'gender',
  /** Age Range */
  Age = 'age',
  /** Clinical Focus */
  Focus = 'focus',
  /** User Type */
  User = 'user',
  /** Workflow Setting */
  Workflow = 'workflow',
  /** Workflow Task */
  Task = 'task',
  /** Clinical Venue */
  Venue = 'venue',
  /** Species */
  Species = 'species',
  /** Program */
  Program = 'program',
}

export const UsageContextTypeValues = ['gender', 'age', 'focus', 'user', 'workflow', 'task', 'venue', 'species', 'program'] as const;
