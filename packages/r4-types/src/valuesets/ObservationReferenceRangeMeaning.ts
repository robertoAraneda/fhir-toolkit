/**
 * Observation Reference Range Meaning Codes
 * 
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 *
 * @see http://hl7.org/fhir/ValueSet/referencerange-meaning
 */

export type ObservationReferenceRangeMeaningType = 'type' | 'normal' | 'recommended' | 'treatment' | 'therapeutic' | 'pre' | 'post' | 'endocrine' | 'pre-puberty' | 'follicular' | 'midcycle' | 'luteal' | 'postmenopausal';

export enum ObservationReferenceRangeMeaningEnum {
  /** Type */
  Type = 'type',
  /** Normal Range */
  Normal = 'normal',
  /** Recommended Range */
  Recommended = 'recommended',
  /** Treatment Range */
  Treatment = 'treatment',
  /** Therapeutic Desired Level */
  Therapeutic = 'therapeutic',
  /** Pre Therapeutic Desired Level */
  Pre = 'pre',
  /** Post Therapeutic Desired Level */
  Post = 'post',
  /** Endocrine */
  Endocrine = 'endocrine',
  /** Pre-Puberty */
  PrePuberty = 'pre-puberty',
  /** Follicular Stage */
  Follicular = 'follicular',
  /** MidCycle */
  Midcycle = 'midcycle',
  /** Luteal */
  Luteal = 'luteal',
  /** Post-Menopause */
  Postmenopausal = 'postmenopausal',
}

export const ObservationReferenceRangeMeaningValues = ['type', 'normal', 'recommended', 'treatment', 'therapeutic', 'pre', 'post', 'endocrine', 'pre-puberty', 'follicular', 'midcycle', 'luteal', 'postmenopausal'] as const;
