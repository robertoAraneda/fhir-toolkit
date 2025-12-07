/**
 * ReferenceVersionRules
 * 
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 *
 * @see http://hl7.org/fhir/ValueSet/reference-version-rules
 */

export type ReferenceVersionRulesType = 'either' | 'independent' | 'specific';

export enum ReferenceVersionRulesEnum {
  /** Either Specific or independent */
  Either = 'either',
  /** Version independent */
  Independent = 'independent',
  /** Version Specific */
  Specific = 'specific',
}

export const ReferenceVersionRulesValues = ['either', 'independent', 'specific'] as const;
