/**
 * ExpansionProcessingRule
 * 
 * Defines how concepts are processed into the expansion when it's for UI presentation.
 *
 * @see http://hl7.org/fhir/ValueSet/expansion-processing-rule
 */

export type ExpansionProcessingRuleType = 'all-codes' | 'ungrouped' | 'groups-only';

export enum ExpansionProcessingRuleEnum {
  /** All Codes */
  AllCodes = 'all-codes',
  /** Groups + Ungrouped codes */
  Ungrouped = 'ungrouped',
  /** Groups Only */
  GroupsOnly = 'groups-only',
}

export const ExpansionProcessingRuleValues = ['all-codes', 'ungrouped', 'groups-only'] as const;
